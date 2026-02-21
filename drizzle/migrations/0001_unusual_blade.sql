ALTER TABLE "donations" ADD COLUMN "paychanguTransactionId" varchar(255);--> statement-breakpoint
ALTER TABLE "donations" ADD COLUMN "paychanguReference" varchar(255);--> statement-breakpoint
ALTER TABLE "donations" ADD CONSTRAINT "donations_paychanguTransactionId_unique" UNIQUE("paychanguTransactionId");--> statement-breakpoint
ALTER TABLE "donations" ADD CONSTRAINT "donations_paychanguReference_unique" UNIQUE("paychanguReference");