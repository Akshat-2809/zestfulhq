CREATE TABLE "contact_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"ip_hash" text NOT NULL,
	"user_agent" text
);
--> statement-breakpoint
CREATE TABLE "early_access" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"ip_hash" text NOT NULL,
	"user_agent" text,
	CONSTRAINT "early_access_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "contact_messages_ip_created_idx" ON "contact_messages" USING btree ("ip_hash","created_at");--> statement-breakpoint
CREATE INDEX "early_access_ip_created_idx" ON "early_access" USING btree ("ip_hash","created_at");