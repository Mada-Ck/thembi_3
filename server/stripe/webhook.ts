import Stripe from "stripe";
import { Request, Response } from "express";
import { getDb } from "../db";
import { donations, volunteers } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { ENV } from "../_core/env";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : (null as any);

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

/**
 * Handle Stripe webhook events
 * This endpoint receives events from Stripe about payment status, subscriptions, etc.
 */
export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"] as string;

  if (!sig || !WEBHOOK_SECRET) {
    console.warn("[Webhook] Missing signature or webhook secret");
    return res.status(400).json({ error: "Missing signature" });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("[Webhook] Signature verification failed:", err.message);
    return res.status(400).json({ error: "Webhook signature verification failed" });
  }

  // Handle test events for development
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected:", event.type);
    return res.json({ verified: true });
  }

  console.log("[Webhook] Processing event:", event.type, event.id);

  try {
    const db = await getDb();
    if (!db) {
      console.warn("[Webhook] Database not available");
      return res.json({ received: true });
    }

    switch (event.type) {
      case "checkout.session.completed": {
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session, db);
        break;
      }

      case "payment_intent.succeeded": {
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent, db);
        break;
      }

      case "payment_intent.payment_failed": {
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent, db);
        break;
      }

      case "customer.subscription.updated": {
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription, db);
        break;
      }

      case "customer.subscription.deleted": {
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription, db);
        break;
      }

      case "invoice.paid": {
        await handleInvoicePaid(event.data.object as Stripe.Invoice, db);
        break;
      }

      case "invoice.payment_failed": {
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice, db);
        break;
      }

      default:
        console.log("[Webhook] Unhandled event type:", event.type);
    }

    return res.json({ received: true });
  } catch (error: any) {
    console.error("[Webhook] Error processing event:", error);
    return res.status(500).json({ error: "Webhook processing failed" });
  }
}

/**
 * Handle checkout.session.completed event
 */
async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session,
  db: any
) {
  try {
    console.log("[Webhook] Checkout session completed:", session.id);

    const clientReferenceId = session.client_reference_id;
    const metadata = session.metadata || {};
    const userId = metadata.user_id ? parseInt(metadata.user_id) : null;

    // Update or create donation record
    const existingDonation = await db
      .select()
      .from(donations)
      .where(eq(donations.stripePaymentIntentId, session.payment_intent as string))
      .limit(1);

    if (existingDonation.length > 0) {
      await db
        .update(donations)
        .set({
          status: "completed",
          stripeInvoiceId: session.invoice as string,
          updatedAt: new Date(),
        })
        .where(eq(donations.stripePaymentIntentId, session.payment_intent as string));
    }

    console.log("[Webhook] Donation marked as completed for user:", userId);
  } catch (error: any) {
    console.error("[Webhook] Error handling checkout.session.completed:", error);
  }
}

/**
 * Handle payment_intent.succeeded event
 */
async function handlePaymentIntentSucceeded(
  paymentIntent: Stripe.PaymentIntent,
  db: any
) {
  try {
    console.log("[Webhook] Payment intent succeeded:", paymentIntent.id);

    const metadata = paymentIntent.metadata || {};
    const userId = metadata.user_id ? parseInt(metadata.user_id) : null;

    // Update donation status
    const existingDonation = await db
      .select()
      .from(donations)
      .where(eq(donations.stripePaymentIntentId, paymentIntent.id))
      .limit(1);

    if (existingDonation.length > 0) {
      await db
        .update(donations)
        .set({
          status: "completed",
          updatedAt: new Date(),
        })
        .where(eq(donations.stripePaymentIntentId, paymentIntent.id));
    }

    console.log("[Webhook] Payment succeeded for user:", userId);
  } catch (error: any) {
    console.error("[Webhook] Error handling payment_intent.succeeded:", error);
  }
}

/**
 * Handle payment_intent.payment_failed event
 */
async function handlePaymentIntentFailed(
  paymentIntent: Stripe.PaymentIntent,
  db: any
) {
  try {
    console.log("[Webhook] Payment intent failed:", paymentIntent.id);

    // Update donation status to failed
    const existingDonation = await db
      .select()
      .from(donations)
      .where(eq(donations.stripePaymentIntentId, paymentIntent.id))
      .limit(1);

    if (existingDonation.length > 0) {
      await db
        .update(donations)
        .set({
          status: "failed",
          updatedAt: new Date(),
        })
        .where(eq(donations.stripePaymentIntentId, paymentIntent.id));
    }

    console.log("[Webhook] Payment failed:", paymentIntent.id);
  } catch (error: any) {
    console.error("[Webhook] Error handling payment_intent.payment_failed:", error);
  }
}

/**
 * Handle customer.subscription.updated event
 */
async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription,
  db: any
) {
  try {
    console.log("[Webhook] Subscription updated:", subscription.id);
    // Handle subscription updates (e.g., pause, resume, update)
  } catch (error: any) {
    console.error("[Webhook] Error handling subscription.updated:", error);
  }
}

/**
 * Handle customer.subscription.deleted event
 */
async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
  db: any
) {
  try {
    console.log("[Webhook] Subscription deleted:", subscription.id);
    // Mark recurring donations as cancelled
  } catch (error: any) {
    console.error("[Webhook] Error handling subscription.deleted:", error);
  }
}

/**
 * Handle invoice.paid event
 */
async function handleInvoicePaid(invoice: Stripe.Invoice, db: any) {
  try {
    console.log("[Webhook] Invoice paid:", invoice.id);
    // Record recurring donation payment
  } catch (error: any) {
    console.error("[Webhook] Error handling invoice.paid:", error);
  }
}

/**
 * Handle invoice.payment_failed event
 */
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice, db: any) {
  try {
    console.log("[Webhook] Invoice payment failed:", invoice.id);
    // Handle failed recurring donation
  } catch (error: any) {
    console.error("[Webhook] Error handling invoice.payment_failed:", error);
  }
}
