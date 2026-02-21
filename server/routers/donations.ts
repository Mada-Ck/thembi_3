import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { donations } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { createPaychanguPayment } from "../paychangu/checkout";
import { TRPCError } from "@trpc/server";

export const donationRouter = router({
  /**
   * Create a donation checkout session
   */
  createCheckoutSession: publicProcedure
    .input(
      z.object({
        donorName: z.string().min(1, "Donor name is required"),
        donorEmail: z.string().email("Valid email is required"),
        amount: z.number().positive("Amount must be positive"),
        currency: z.string().default("USD"),
        donationType: z.enum([
          "specific_program",
          "general",
          "child_sponsorship",
          "in_kind",
        ]),
        programType: z.string().optional(),
        isRecurring: z.boolean().default(false),
        interval: z.enum(["month", "year"]).default("month"),
        message: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const origin = ctx.req.headers.origin || "http://localhost:3000";

        const result = await createPaychanguPayment({
          userId: ctx.user?.id,
          donorName: input.donorName,
          donorEmail: input.donorEmail,
          amount: input.amount,
          currency: input.currency === "USD" ? "USD" : "MWK",
          donationType: input.donationType,
          programType: input.programType,
          isRecurring: input.isRecurring,
          message: input.message,
          origin,
        });

        return {
          checkoutUrl: result.checkoutUrl,
          reference: result.reference,
        };
      } catch (error: any) {
        console.error("[Donation] Error creating Paychangu payment:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message || "Failed to initiate payment",
        });
      }
    }),

  /**
   * Get checkout session details
   */
  getCheckoutSession: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input }) => {
      try {
        const session = await getCheckoutSession(input.sessionId);
        return {
          id: session.id,
          status: session.status,
          paymentStatus: session.payment_status,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
          currency: session.currency,
        };
      } catch (error: any) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Checkout session not found",
        });
      }
    }),

  /**
   * Get user's donation history (protected)
   */
  getDonationHistory: protectedProcedure.query(async ({ ctx }) => {
    try {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database not available",
        });
      }

      const userDonations = await db
        .select()
        .from(donations)
        .where(eq(donations.userId, ctx.user.id));

      return userDonations.map((donation) => ({
        id: donation.id,
        amount: donation.amount,
        currency: donation.currency,
        donationType: donation.donationType,
        programType: donation.programType,
        status: donation.status,
        isRecurring: donation.isRecurring,
        createdAt: donation.createdAt,
      }));
    } catch (error: any) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to retrieve donation history",
      });
    }
  }),

  /**
   * Get donation details by ID
   */
  getDonation: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      try {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database not available",
          });
        }

        const donation = await db
          .select()
          .from(donations)
          .where(eq(donations.id, input.id))
          .limit(1);

        if (!donation.length) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Donation not found",
          });
        }

        return donation[0];
      } catch (error: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to retrieve donation",
        });
      }
    }),

  /**
   * Get donation statistics (admin only)
   */
  getStatistics: protectedProcedure.query(async ({ ctx }) => {
    try {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can view donation statistics",
        });
      }

      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database not available",
        });
      }

      const allDonations = await db.select().from(donations);

      const stats = {
        totalDonations: allDonations.length,
        totalAmount: allDonations.reduce((sum, d) => sum + parseFloat(d.amount.toString()), 0),
        completedDonations: allDonations.filter((d) => d.status === "completed").length,
        recurringDonations: allDonations.filter((d) => d.isRecurring).length,
        byType: {
          specific_program: allDonations.filter((d) => d.donationType === "specific_program").length,
          general: allDonations.filter((d) => d.donationType === "general").length,
          child_sponsorship: allDonations.filter((d) => d.donationType === "child_sponsorship").length,
          in_kind: allDonations.filter((d) => d.donationType === "in_kind").length,
        },
      };

      return stats;
    } catch (error: any) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to retrieve donation statistics",
      });
    }
  }),
});
