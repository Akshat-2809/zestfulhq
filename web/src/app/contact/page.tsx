import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import s from "@/components/Contact.module.css";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Zestful",
  description: "Questions, ideas or feedback about Zestful? Write to us and we'll reply by email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <div className={`wrap ${s.grid}`}>
          <div className={s.copy}>
            <span className="lab">Contact</span>
            <h1 className={s.h1}>Say <em>hello.</em></h1>
            <p className="lede">Questions, ideas or feedback about Zestful? Write to us and we&apos;ll reply by email.</p>

            <dl className={s.rows}>
              <div className={s.row}>
                <dt className="lab">Email</dt>
                <dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
              </div>
              <div className={s.row}>
                <dt className="lab">Based in</dt>
                <dd>Gurugram, India</dd>
              </div>
              <div className={s.row}>
                <dt className="lab">Early access</dt>
                <dd><Link href="/#join">Keep me a page <span className="arr">→</span></Link></dd>
              </div>
            </dl>
          </div>

          <div className={s.formCard}>
            <h2 className={s.formTitle}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
