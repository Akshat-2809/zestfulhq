"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { requestEarlyAccess } from "@/app/actions/earlyAccess";
import type { EarlyAccessState } from "@/lib/earlyAccess/schema";
import { MOODS } from "@/lib/mood";
import { useRoom } from "@/lib/moodStore";
import s from "./Join.module.css";

const initialState: EarlyAccessState = { status: "idle" };

/** The early-access card. Its colour follows the room's mood, as in the hero. */
export function EarlyAccess() {
  const { mood } = useRoom();
  const [state, formAction, pending] = useActionState(requestEarlyAccess, initialState);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") doneRef.current?.focus();
  }, [state]);

  const err = state.status === "error" ? state : null;

  return (
    <div className={`${s.card} ${s.mood}`} style={{ backgroundColor: MOODS[mood].c[0], transition: "background-color 2.4s" }}>
      <span className="lab">Early access</span>
      {state.status === "success" ? (
        <div className={s.done} ref={doneRef} tabIndex={-1} role="status">
          <h3 className={s.title}>Thank you. Your page is waiting.</h3>
          <p className={s.thanks}>We&apos;ll be in touch, quietly.</p>
        </div>
      ) : (
        <>
          <h3 className={s.title}>Leave your email. We&apos;ll write when there&apos;s a page for you.</h3>
          <form action={formAction} className={s.form} aria-busy={pending} noValidate>
            <p className="sr-only" aria-live="polite" role="status">
              {pending ? "Saving your email…" : err ? err.message : ""}
            </p>
            <div className={s.field}>
              <label htmlFor="ea-email">Email</label>
              <input id="ea-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required maxLength={254}
                defaultValue={err?.email} aria-invalid={!!err?.fieldError} aria-describedby={err?.fieldError ? "ea-email-err" : undefined} />
              {err?.fieldError && <span id="ea-email-err" className={s.ferr}>{err.fieldError}</span>}
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="ea-website">Website</label>
              <input id="ea-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            {err && !err.fieldError && <p className={s.ferr}>{err.message}</p>}
            <button type="submit" className="btn btn-ink" style={{ alignSelf: "flex-start" }} disabled={pending}>
              {pending && <span className="spin" aria-hidden="true" />}
              Keep me a page
            </button>
            <span className={s.fine}>We&apos;ll only use it to write to you about Zestful. <Link href="/privacy">Privacy</Link></span>
          </form>
        </>
      )}
    </div>
  );
}
