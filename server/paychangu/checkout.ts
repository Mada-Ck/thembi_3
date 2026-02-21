import axios from "axios";
import { getDb } from "../db";
import { donations } from "../../drizzle/schema";
import { nanoid } from "nanoid";

const PAYCHANGU_API_URL = "https://api.paychangu.com";

export interface CreatePaychanguPaymentParams {
    userId?: number;
    donorName: string;
    donorEmail: string;
    amount: number;
    currency?: string;
    donationType: "specific_program" | "general" | "child_sponsorship" | "in_kind";
    programType?: string;
    isRecurring?: boolean;
    message?: string;
    origin: string;
}

/**
 * Initiate a Paychangu payment for donations
 */
export async function createPaychanguPayment(
    params: CreatePaychanguPaymentParams
): Promise<{ checkoutUrl: string; reference: string }> {
    const {
        userId,
        donorName,
        donorEmail,
        amount,
        currency = "MWK", // Default to MWK for Paychangu
        donationType,
        programType,
        message,
        origin,
    } = params;

    const secretKey = process.env.PAYCHANGU_SECRET_KEY;

    try {
        if (!secretKey) {
            console.error("[Paychangu] PAYCHANGU_SECRET_KEY is missing from process.env");
            throw new Error("Paychangu is not configured. Please provide PAYCHANGU_SECRET_KEY environment variable.");
        }

        const txRef = `TCI-${nanoid(10)}`;
        const callbackUrl = `${origin}/donation-success?reference=${txRef}`;
        const returnUrl = `${origin}/donate`;

        const response = await axios.post(
            `${PAYCHANGU_API_URL}/payment`,
            {
                amount,
                currency,
                email: donorEmail,
                first_name: donorName.split(" ")[0] || "Donor",
                last_name: donorName.split(" ").slice(1).join(" ") || "Friend",
                tx_ref: txRef,
                callback_url: callbackUrl,
                return_url: returnUrl,
                customization: {
                    title: "Thembi Community Initiative",
                    description: `Donation: ${donationType === "specific_program" ? programType : donationType}`,
                },
                meta: {
                    userId: userId?.toString() || "guest",
                    donationType,
                    programType: programType || "general",
                    message: message || "",
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${secretKey}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );

        if (response.data.status !== "success") {
            throw new Error(response.data.message || "Failed to initiate Paychangu payment");
        }

        const db = await getDb();
        if (db) {
            const donationData: any = {
                paychanguReference: txRef,
                donorName,
                donorEmail,
                amount: amount.toString(),
                currency,
                donationType,
                status: "pending",
                metadata: {
                    txRef,
                    paychanguUrl: response.data.data.checkout_url,
                },
            };
            if (userId) donationData.userId = userId;
            if (programType) donationData.programType = programType;
            if (message) donationData.message = message;

            await db.insert(donations).values(donationData);
        }

        return {
            checkoutUrl: response.data.data.checkout_url,
            reference: txRef,
        };
    } catch (error: any) {
        console.error("[Paychangu] Error creating payment:", error.response?.data || error.message);
        throw new Error(`Failed to create Paychangu payment: ${error.message}`);
    }
}
