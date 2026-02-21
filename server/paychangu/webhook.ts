import { Request, Response } from "express";
import { getDb } from "../db";
import { donations } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import axios from "axios";

const PAYCHANGU_API_URL = "https://api.paychangu.com";

/**
 * Handle Paychangu webhook events
 */
export async function handlePaychanguWebhook(req: Request, res: Response) {
    // Paychangu webhooks usually send the transaction reference
    // We should verify the transaction status with Paychangu API for security

    const payload = req.body;
    const txRef = payload.tx_ref || payload.data?.tx_ref;

    if (!txRef) {
        console.warn("[Paychangu Webhook] Missing transaction reference");
        return res.status(400).json({ error: "Missing transaction reference" });
    }

    console.log("[Paychangu Webhook] Processing reference:", txRef);

    try {
        const secretKey = process.env.PAYCHANGU_SECRET_KEY;
        // Verify the transaction status with Paychangu
        const response = await axios.get(`${PAYCHANGU_API_URL}/payment-verification/${txRef}`, {
            headers: {
                Authorization: `Bearer ${secretKey}`,
                Accept: "application/json",
            },
        });

        if (response.data.status === "success" && response.data.data.status === "success") {
            const db = await getDb();
            if (!db) {
                throw new Error("Database not available");
            }

            // Update donation status
            await db
                .update(donations)
                .set({
                    status: "completed",
                    paychanguTransactionId: response.data.data.id.toString(),
                    updatedAt: new Date(),
                })
                .where(eq(donations.paychanguReference as any, txRef as any));

            console.log("[Paychangu Webhook] Donation marked as completed for ref:", txRef);
        } else {
            console.log("[Paychangu Webhook] Transaction not successful:", response.data.data.status);
        }

        return res.json({ received: true });
    } catch (error: any) {
        console.error("[Paychangu Webhook] Error processing webhook:", error.response?.data || error.message);
        return res.status(500).json({ error: "Webhook processing failed" });
    }
}
