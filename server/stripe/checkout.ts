import Stripe from "stripe";
import { Request } from "express";
import { getDb } from "../db";
import { donations } from "../../drizzle/schema";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : (null as any);

export interface CreateCheckoutSessionParams {
  userId?: number;
  donorName: string;
  donorEmail: string;
  amount: number;
  currency?: string;
  donationType: "specific_program" | "general" | "child_sponsorship" | "in_kind";
  programType?: string;
  isRecurring?: boolean;
  interval?: "month" | "year";
  message?: string;
  origin: string;
}

/**
 * Create a Stripe checkout session for donations
 */
export async function createCheckoutSession(
  params: CreateCheckoutSessionParams
): Promise<{ sessionId: string; url: string }> {
  const {
    userId,
    donorName,
    donorEmail,
    amount,
    currency = "USD",
    donationType,
    programType,
    isRecurring = false,
    interval = "month",
    message,
    origin,
  } = params;

  try {
    if (!stripe) {
      throw new Error("Stripe is not configured. Please provide STRIPE_SECRET_KEY environment variable.");
    }

    // Create a line item for the donation
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    if (isRecurring) {
      // Create a recurring price for the donation
      const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
        currency: currency.toLowerCase(),
        product_data: {
          name: `${donationType === "specific_program" ? programType : donationType} - Monthly Donation`,
          description: `Support Thembi Community Initiative - ${donationType}`,
          metadata: {
            donationType,
            programType: programType || "general",
          },
        },
        recurring: {
          interval: interval as "month" | "year",
        },
        unit_amount: Math.round(amount * 100), // Convert to cents
      };

      lineItems.push({
        price_data: priceData,
        quantity: 1,
      });
    } else {
      // Create a one-time price for the donation
      const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
        currency: currency.toLowerCase(),
        product_data: {
          name: `${donationType === "specific_program" ? programType : donationType} - One-time Donation`,
          description: `Support Thembi Community Initiative`,
          metadata: {
            donationType,
            programType: programType || "general",
          },
        },
        unit_amount: Math.round(amount * 100), // Convert to cents
      };

      lineItems.push({
        price_data: priceData,
        quantity: 1,
      });
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: isRecurring ? "subscription" : "payment",
      customer_email: donorEmail,
      client_reference_id: userId ? userId.toString() : undefined,
      line_items: lineItems,
      success_url: `${origin}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate`,
      allow_promotion_codes: true,
      metadata: {
        user_id: userId?.toString() || "guest",
        customer_email: donorEmail,
        customer_name: donorName,
        donationType,
        programType: programType || "general",
        isRecurring: isRecurring.toString(),
        message: message || "",
      },
    });

    const db = await getDb();
    if (db && session.payment_intent) {
      const donationData: any = {
        stripePaymentIntentId: session.payment_intent.toString(),
        donorName,
        donorEmail,
        amount: amount.toString(),
        currency,
        donationType,
        status: "pending",
        metadata: {
          sessionId: session.id,
          interval: isRecurring ? interval : null,
        },
      };
      if (userId) donationData.userId = userId;
      if (programType) donationData.programType = programType;
      if (isRecurring) donationData.isRecurring = true;
      if (message) donationData.message = message;
      await db.insert(donations).values(donationData);
    }

    return {
      sessionId: session.id,
      url: session.url || "",
    };
  } catch (error: any) {
    console.error("[Stripe] Error creating checkout session:", error);
    throw new Error(`Failed to create checkout session: ${error.message}`);
  }
}

/**
 * Retrieve a checkout session
 */
export async function getCheckoutSession(sessionId: string) {
  try {
    if (!stripe) {
      throw new Error("Stripe is not configured.");
    }
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error: any) {
    console.error("[Stripe] Error retrieving checkout session:", error);
    throw new Error(`Failed to retrieve checkout session: ${error.message}`);
  }
}

/**
 * Get payment intent details
 */
export async function getPaymentIntent(paymentIntentId: string) {
  try {
    if (!stripe) {
      throw new Error("Stripe is not configured.");
    }
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent;
  } catch (error: any) {
    console.error("[Stripe] Error retrieving payment intent:", error);
    throw new Error(`Failed to retrieve payment intent: ${error.message}`);
  }
}
