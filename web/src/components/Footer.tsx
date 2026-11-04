import Link from "next/link";
import { COMPANY_LINKEDIN, CONTACT_EMAIL } from "@/lib/site";
import { ScrollTrigger } from "./ScrollTrigger";
import s from "./Footer.module.css";

/** The journal closes. */
export function Footer() {
  return (
    <ScrollTrigger as="footer" className={s.foot} activeClassName={s.go}>
      <div className={`wrap ${s.fgrid}`}>
        <div className={s.copy}>
          <span className="lab">The end of the page</span>
          <p className={s.fh}>Close the book. <em>Come back</em> when you&apos;re ready.</p>
          <ul className={s.flinks}>
            <li><Link href="/#write">Write</Link></li>
            <li><Link href="/#isnt">What it isn&apos;t</Link></li>
            <li><Link href="/#return">Return</Link></li>
            <li><Link href="/#story">The story</Link></li>
            <li><Link href="/#join">Build with us</Link></li>
            <li><a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
          <span className={s.addr}><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · Gurugram, India</span>
        </div>
        <div className={s.book} aria-hidden="true">
          <div className={`${s.pg} ${s.l}`} />
          <div className={`${s.pg} ${s.r}`}><i /><i /><i /><i /></div>
          <div className={s.cover}><span>Zestful</span></div>
          <div className={s.ribbon} />
        </div>
      </div>
      <div className={`wrap ${s.legal}`}>
        <span>© 2026 Zestful. All rights reserved. · Founded 2024 · Gurugram, India</span>
        <span>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/contact">Contact</Link> · <Link href="/#write">Back to the page ↑</Link>
        </span>
      </div>
    </ScrollTrigger>
  );
}
