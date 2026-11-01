import "server-only";
import { Resend } from "resend";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

type Signup = { id: number; email: string };

/**
 * Sends the thank-you email and the internal notification.
 * Never throws: email problems are logged and must not fail the signup.
 */
export async function sendEarlyAccessEmails(signup: Signup) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const notify = process.env.NOTIFY_EMAIL;
  if (!apiKey || !from) {
    console.warn(`[early-access] #${signup.id}: RESEND_API_KEY or EMAIL_FROM not set, skipping emails`);
    return;
  }
  const resend = new Resend(apiKey);

  const jobs: Promise<unknown>[] = [
    resend.emails.send(
      {
        from,
        to: signup.email,
        replyTo: CONTACT_EMAIL,
        subject: "Your page is waiting",
        text: ["Thank you. Your page is waiting.", "We'll be in touch, quietly.", "", "— Zestful", SITE_URL].join("\n"),
        html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#1E4A47">
<p style="margin:0 0 12px"><strong>Thank you. Your page is waiting.</strong> We'll be in touch, quietly.</p>
<p style="margin:0;color:#3F6763">Zestful · <a href="${SITE_URL}" style="color:#1E4A47">${SITE_URL.replace(/^https?:\/\//, "")}</a></p>
</div>`,
      },
      { idempotencyKey: `early-access-thanks/${signup.id}` },
    ),
  ];

  if (notify) {
    jobs.push(
      resend.emails.send(
        {
          from,
          to: notify,
          replyTo: signup.email,
          subject: `New early access signup: ${signup.email}`,
          text: `Email: ${signup.email}`,
        },
        { idempotencyKey: `early-access-notify/${signup.id}` },
      ),
    );
  } else {
    console.warn(`[early-access] #${signup.id}: NOTIFY_EMAIL not set, skipping internal notification`);
  }

  const results = await Promise.allSettled(jobs);
  for (const r of results) {
    if (r.status === "rejected") {
      console.error(`[early-access] #${signup.id}: email failed`, r.reason);
    } else {
      const { error } = r.value as { error: unknown };
      if (error) console.error(`[early-access] #${signup.id}: email rejected by Resend`, error);
    }
  }
}
