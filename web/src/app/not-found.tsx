import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — Zestful",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <span className="lab">Error 404</span>
        <h1 className={styles.big}>A <em>blank</em> page.</h1>
        <p className={styles.note}>Nothing written here yet.</p>
        <Link className="btn btn-ink" href="/">Back to the page</Link>
      </div>
    </main>
  );
}
