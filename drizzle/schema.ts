import { integer, pgEnum, pgTable, text, timestamp, varchar, decimal, boolean, jsonb } from "drizzle-orm/pg-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = pgTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: text("role").$type<"user" | "admin">().default("user").notNull(),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Donations table - tracks all donation transactions
 */
export const donationTypeEnum = pgEnum("donationType", [
  "specific_program",
  "general",
  "child_sponsorship",
  "in_kind",
]);

export const donationStatusEnum = pgEnum("donationStatus", [
  "pending",
  "completed",
  "failed",
  "cancelled",
]);

export const donations = pgTable("donations", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("userId"),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }).unique(),
  stripeInvoiceId: varchar("stripeInvoiceId", { length: 255 }),
  paychanguTransactionId: varchar("paychanguTransactionId", { length: 255 }).unique(),
  paychanguReference: varchar("paychanguReference", { length: 255 }).unique(),
  donorName: varchar("donorName", { length: 255 }).notNull(),
  donorEmail: varchar("donorEmail", { length: 320 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 3 }).default("USD").notNull(),
  donationType: donationTypeEnum("donationType").notNull(),
  programType: varchar("programType", { length: 100 }),
  isRecurring: boolean("isRecurring").default(false),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  status: donationStatusEnum("status").default("pending").notNull(),
  message: text("message"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Donation = typeof donations.$inferSelect;
export type InsertDonation = typeof donations.$inferInsert;

/**
 * Volunteers table - tracks volunteer registrations and profiles
 */
export const volunteerStatusEnum = pgEnum("volunteerStatus", [
  "pending",
  "approved",
  "active",
  "inactive",
  "rejected",
]);

export const volunteers = pgTable("volunteers", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("userId"),
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  country: varchar("country", { length: 100 }),
  dateOfBirth: timestamp("dateOfBirth"),
  skills: jsonb("skills"),
  interests: jsonb("interests"),
  availability: varchar("availability", { length: 100 }),
  status: volunteerStatusEnum("status").default("pending").notNull(),
  programAssignment: varchar("programAssignment", { length: 100 }),
  hoursContributed: integer("hoursContributed").default(0),
  emergencyContact: varchar("emergencyContact", { length: 255 }),
  emergencyPhone: varchar("emergencyPhone", { length: 20 }),
  backgroundCheckCompleted: boolean("backgroundCheckCompleted").default(false),
  backgroundCheckDate: timestamp("backgroundCheckDate"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Volunteer = typeof volunteers.$inferSelect;
export type InsertVolunteer = typeof volunteers.$inferInsert;

/**
 * Contact submissions table - tracks contact form submissions
 */
export const contactCategoryEnum = pgEnum("contactCategory", [
  "general_inquiry",
  "donation",
  "volunteer",
  "partnership",
  "media",
  "other",
]);

export const contactStatusEnum = pgEnum("contactStatus", [
  "new",
  "in_progress",
  "resolved",
  "closed",
]);

export const contactSubmissions = pgTable("contactSubmissions", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  category: contactCategoryEnum("category").default("general_inquiry").notNull(),
  status: contactStatusEnum("status").default("new").notNull(),
  response: text("response"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Programs table - defines the various programs offered
 */
export const programs = pgTable("programs", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  icon: varchar("icon", { length: 50 }),
  color: varchar("color", { length: 50 }),
  stripePriceId: varchar("stripePriceId", { length: 255 }),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Program = typeof programs.$inferSelect;
export type InsertProgram = typeof programs.$inferInsert;
