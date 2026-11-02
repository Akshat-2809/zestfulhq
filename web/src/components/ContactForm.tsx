"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_FIELDS, contactSchema, type ContactField } from "@/lib/contact/schema";
import s from "./Contact.module.css";

type FieldErrors = Partial<Record<ContactField, string>>;

/** Front end only: the message is checked in the browser and goes nowhere. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors | null>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse(Object.fromEntries(CONTACT_FIELDS.map((f) => [f, String(data.get(f) ?? "")])));
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as ContactField;
        if (CONTACT_FIELDS.includes(key) && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className={s.done} ref={doneRef} tabIndex={-1} role="status">
        <strong className={s.doneTitle}>Message sent.</strong>
        <span>Thanks for writing. We&apos;ll reply by email.</span>
      </div>
    );
  }

  const fieldError = (f: ContactField) => errors?.[f];
  const describe = (f: ContactField) => (fieldError(f) ? `c-${f}-err` : undefined);

  return (
    <form onSubmit={onSubmit} className={s.form} noValidate>
      <p className="sr-only" aria-live="polite" role="status">
        {errors ? "Please check the highlighted fields and try again." : ""}
      </p>

      <div className={s.two}>
        <div className={s.field}>
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120}
            aria-invalid={!!fieldError("name")} aria-describedby={describe("name")} />
          {fieldError("name") && <span id="c-name-err" className={s.ferr}>{fieldError("name")}</span>}
        </div>
        <div className={s.field}>
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required maxLength={254}
            aria-invalid={!!fieldError("email")} aria-describedby={describe("email")} />
          {fieldError("email") && <span id="c-email-err" className={s.ferr}>{fieldError("email")}</span>}
        </div>
      </div>

      <div className={s.field}>
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" rows={6} placeholder="What would you like to say?" required maxLength={5000}
          aria-invalid={!!fieldError("message")} aria-describedby={describe("message")} />
        {fieldError("message") && <span id="c-message-err" className={s.ferr}>{fieldError("message")}</span>}
      </div>

      <div className={s.actions}>
        <button type="submit" className="btn btn-ink">Send message</button>
        <span className={s.fine}>We&apos;ll only use your details to reply.</span>
      </div>
    </form>
  );
}
