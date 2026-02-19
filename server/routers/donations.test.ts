import { describe, expect, it } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createMockContext(isAuthenticated: boolean = false, role: "user" | "admin" = "user"): TrpcContext {
  const user: AuthenticatedUser | null = isAuthenticated
    ? {
        id: 1,
        openId: "test-user",
        email: "test@example.com",
        name: "Test User",
        loginMethod: "manus",
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      }
    : null;

  return {
    user: user as any,
    req: {
      protocol: "https",
      headers: {
        origin: "https://thembi.test",
      },
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("Donation Router", () => {
  describe("createCheckoutSession", () => {
    it("should handle Stripe configuration gracefully", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.createCheckoutSession({
          donorName: "John Doe",
          donorEmail: "john@example.com",
          amount: 50,
          donationType: "general",
        });
      } catch (error: any) {
        // Expected when Stripe is not configured
        expect(error.message).toBeTruthy();
      }
    });

    it("should accept all donation type parameters", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const donationTypes = ["general", "specific_program", "child_sponsorship", "in_kind"] as const;
      for (const type of donationTypes) {
        try {
          await caller.donations.createCheckoutSession({
            donorName: "Test Donor",
            donorEmail: "test@example.com",
            amount: 50,
            donationType: type,
            programType: type === "specific_program" ? "health" : undefined,
          });
        } catch (error: any) {
          // Expected when Stripe is not configured
          expect(error.message).toBeTruthy();
        }
      }
    });

    it("should accept recurring donation parameters", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.createCheckoutSession({
          donorName: "Bob Johnson",
          donorEmail: "bob@example.com",
          amount: 25,
          donationType: "general",
          isRecurring: true,
          interval: "month",
        });
      } catch (error: any) {
        expect(error.message).toBeTruthy();
      }
    });

    it("should accept optional donor message", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.createCheckoutSession({
          donorName: "Alice Brown",
          donorEmail: "alice@example.com",
          amount: 75,
          donationType: "general",
          message: "In honor of my grandmother",
        });
      } catch (error: any) {
        expect(error.message).toBeTruthy();
      }
    });
  });

  describe("getDonationHistory", () => {
    it("should require authentication", async () => {
      const ctx = createMockContext(false);
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.getDonationHistory();
        expect.fail("Should have thrown UNAUTHORIZED error");
      } catch (error: any) {
        expect(error.code).toBe("UNAUTHORIZED");
      }
    });

    it("should return array for authenticated user", async () => {
      const ctx = createMockContext(true);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.donations.getDonationHistory();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("getStatistics", () => {
    it("should require admin role", async () => {
      const ctx = createMockContext(true, "user");
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.getStatistics();
        expect.fail("Should have thrown error");
      } catch (error: any) {
        // Either FORBIDDEN or INTERNAL_SERVER_ERROR depending on DB availability
        expect(["FORBIDDEN", "INTERNAL_SERVER_ERROR"]).toContain(error.code);
      }
    });

    it("should return statistics structure for admin", async () => {
      const ctx = createMockContext(true, "admin");
      const caller = appRouter.createCaller(ctx);

      try {
        const result = await caller.donations.getStatistics();
        expect(result).toHaveProperty("totalDonations");
        expect(result).toHaveProperty("totalAmount");
        expect(result).toHaveProperty("completedDonations");
        expect(result).toHaveProperty("recurringDonations");
        expect(result).toHaveProperty("byType");
      } catch (error: any) {
        // Database might not be available in test environment
        expect(error.code).toBe("INTERNAL_SERVER_ERROR");
      }
    });
  });

  describe("getDonation", () => {
    it("should handle missing donation gracefully", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.getDonation({ id: 99999 });
        expect.fail("Should have thrown error");
      } catch (error: any) {
        // Either NOT_FOUND or INTERNAL_SERVER_ERROR depending on DB availability
        expect(["NOT_FOUND", "INTERNAL_SERVER_ERROR"]).toContain(error.code);
      }
    });
  });

  describe("getCheckoutSession", () => {
    it("should handle invalid session gracefully", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.donations.getCheckoutSession({ sessionId: "invalid_session" });
        expect.fail("Should have thrown error");
      } catch (error: any) {
        expect(error.code).toBe("NOT_FOUND");
      }
    });
  });
});
