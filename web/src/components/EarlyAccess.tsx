"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { earlyAccessSchema } from "@/lib/earlyAccess/schema";
import { MOODS } from "@/lib/mood";
import { useRoom } from "@/lib/moodStore";
import s from "./Join.module.css";

/**
 * The early-access card. Its colour follows the room's mood, as in the hero.
 * Front end only: the email is checked in the browser and goes nowhere.
 */
export function EarlyAccess() {
  const { mood } = useRoom();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = earlyAccessSchema.safeParse({ email: String(new FormData(e.currentTarget).get("email") ?? "") });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your email and try again.");
      return;
    }
    setSent(true);
  }

  return (
    <div className={`${s.card} ${s.mood}`} style={{ backgroundColor: MOODS[mood].c[0], transition: "background-color 2.4s" }}>
      <span className="lab">Early access</span>
      {sent ? (
        <div className={s.done} ref={doneRef} tabIndex={-1} role="status">
          <h3 className={s.title}>Thank you. Your page is waiting.</h3>
          <p className={s.thanks}>We&apos;ll be in touch, quietly.</p>
        </div>
      ) : (
        <>
          <h3 className={s.title}>Leave your email. We&apos;ll write when there&apos;s a page for you.</h3>
          <form onSubmit={onSubmit} className={s.form} noValidate>
            <p className="sr-only" aria-live="polite" role="status">{error ?? ""}</p>
            <div className={s.field}>
              <label htmlFor="ea-email">Email</label>
              <input id="ea-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required maxLength={254}
                aria-invalid={!!error} aria-describedby={error ? "ea-email-err" : undefined} />
              {error && <span id="ea-email-err" className={s.ferr}>{error}</span>}
            </div>
            <button type="submit" className="btn btn-ink" style={{ alignSelf: "flex-start" }}>Keep me a page</button>
            <span className={s.fine}>We&apos;ll only use it to write to you about Zestful. <Link href="/privacy">Privacy</Link></span>
          </form>
        </>
      )}
    </div>
  );
}
