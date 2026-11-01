import { index, pgTable, serial, text, timestamp, unique } from "drizzle-orm/pg-core";

export const earlyAccess = pgTable(
  "early_access",
  {
    id: serial("id").primaryKey(),
    // Stored trimmed and lowercased, so the unique constraint catches duplicates.
    email: text("email").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    // Salted SHA-256 of the client IP, used only for rate limiting. Never the raw IP.
    ipHash: text("ip_hash").notNull(),
    userAgent: text("user_agent"),
  },
  (t) => [
    unique("early_access_email_unique").on(t.email),
    index("early_access_ip_created_idx").on(t.ipHash, t.createdAt),
  ],
);

export type EarlyAccessRow = typeof earlyAccess.$inferSelect;

export const contactMessages = pgTable(
  "contact_messages",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    // Salted SHA-256 of the client IP, used only for rate limiting. Never the raw IP.
    ipHash: text("ip_hash").notNull(),
    userAgent: text("user_agent"),
  },
  (t) => [index("contact_messages_ip_created_idx").on(t.ipHash, t.createdAt)],
);

export type ContactMessageRow = typeof contactMessages.$inferSelect;
