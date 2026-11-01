"use server";

import { and, count, eq, gt, sql } from "drizzle-orm";
import { headers } from "next/headers";
import { after } from "next/server";
import { getDb } from "@/lib/db/client";
import { earlyAccess } from "@/lib/db/schema";
import { sendEarlyAccessEmails } from "@/lib/earlyAccess/email";
import { earlyAccessSchema, type EarlyAccessState } from "@/lib/earlyAccess/schema";
import { clientIp, hashIp, userAgent } from "@/lib/request";
import { CONTACT_EMAIL } from "@/lib/site";

const RATE_LIMIT = 10;
const RATE_WINDOW = "1 hour";

export async function requestEarlyAccess(_prev: EarlyAccessState, formData: FormData): Promise<EarlyAccessState> {
  const raw = {
    email: String(formData.get("email") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot filled: pretend it worked, store nothing.
  if (raw.website.trim() !== "") {
    console.info("[early-access] honeypot triggered, dropping submission");
    return { status: "success" };
  }

  const parsed = earlyAccessSchema.safeParse(raw);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Please check your email and try again.";
    return { status: "error", message, fieldError: message, email: raw.email };
  }

  const db = getDb();
  if (!db) {
    console.error("[early-access] DATABASE_URL is not set");
    return { status: "error", message: `We couldn't save your email just now. Please try again, or write to ${CONTACT_EMAIL}.`, email: raw.email };
  }

  const h = await headers();
  const ipHash = hashIp(clientIp(h));
  const { email } = parsed.data;

  try {
    const [{ recent }] = await db
      .select({ recent: count() })
      .from(earlyAccess)
      .where(and(eq(earlyAccess.ipHash, ipHash), gt(earlyAccess.createdAt, sql`now() - ${RATE_WINDOW}::interval`)));

    if (recent >= RATE_LIMIT) {
      return { status: "error", message: "Too many signups from your network in the last hour. Please try again later.", email: raw.email };
    }

    const [row] = await db
      .insert(earlyAccess)
      .values({ email, ipHash, userAgent: userAgent(h) })
      .onConflictDoNothing({ target: earlyAccess.email })
      .returning({ id: earlyAccess.id });

    // Already on the list: treat as success, no error shown and no second email.
    if (!row) return { status: "success" };

    // Emails go out after the response is sent; failures are logged, never surfaced.
    after(() => sendEarlyAccessEmails({ id: row.id, email }));

    return { status: "success" };
  } catch (err) {
    console.error("[early-access] failed to store signup", err);
    return { status: "error", message: "Something went wrong on our side, so your email wasn't saved. Please try again.", email: raw.email };
  }
}
