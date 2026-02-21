CREATE TYPE "public"."contactCategory" AS ENUM('general_inquiry', 'donation', 'volunteer', 'partnership', 'media', 'other');--> statement-breakpoint
CREATE TYPE "public"."contactStatus" AS ENUM('new', 'in_progress', 'resolved', 'closed');--> statement-breakpoint
CREATE TYPE "public"."donationStatus" AS ENUM('pending', 'completed', 'failed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."donationType" AS ENUM('specific_program', 'general', 'child_sponsorship', 'in_kind');--> statement-breakpoint
CREATE TYPE "public"."volunteerStatus" AS ENUM('pending', 'approved', 'active', 'inactive', 'rejected');--> statement-breakpoint
CREATE TABLE "contactSubmissions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "contactSubmissions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(320) NOT NULL,
	"phone" varchar(20),
	"subject" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"category" "contactCategory" DEFAULT 'general_inquiry' NOT NULL,
	"status" "contactStatus" DEFAULT 'new' NOT NULL,
	"response" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "donations" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "donations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer,
	"stripePaymentIntentId" varchar(255),
	"stripeInvoiceId" varchar(255),
	"donorName" varchar(255) NOT NULL,
	"donorEmail" varchar(320) NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"currency" varchar(3) DEFAULT 'USD' NOT NULL,
	"donationType" "donationType" NOT NULL,
	"programType" varchar(100),
	"isRecurring" boolean DEFAULT false,
	"stripeSubscriptionId" varchar(255),
	"status" "donationStatus" DEFAULT 'pending' NOT NULL,
	"message" text,
	"metadata" jsonb,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "donations_stripePaymentIntentId_unique" UNIQUE("stripePaymentIntentId")
);
--> statement-breakpoint
CREATE TABLE "programs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "programs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"icon" varchar(50),
	"color" varchar(50),
	"stripePriceId" varchar(255),
	"isActive" boolean DEFAULT true,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "programs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" text DEFAULT 'user' NOT NULL,
	"stripeCustomerId" varchar(255),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);
--> statement-breakpoint
CREATE TABLE "volunteers" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "volunteers_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer,
	"firstName" varchar(100) NOT NULL,
	"lastName" varchar(100) NOT NULL,
	"email" varchar(320) NOT NULL,
	"phone" varchar(20),
	"address" text,
	"city" varchar(100),
	"country" varchar(100),
	"dateOfBirth" timestamp,
	"skills" jsonb,
	"interests" jsonb,
	"availability" varchar(100),
	"status" "volunteerStatus" DEFAULT 'pending' NOT NULL,
	"programAssignment" varchar(100),
	"hoursContributed" integer DEFAULT 0,
	"emergencyContact" varchar(255),
	"emergencyPhone" varchar(20),
	"backgroundCheckCompleted" boolean DEFAULT false,
	"backgroundCheckDate" timestamp,
	"notes" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
