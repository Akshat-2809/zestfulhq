import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import s from "@/components/LegalDoc.module.css";
import { LEGAL_LOCATION } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use — Zestful",
  description: "The rules for using the Zestful website and asking for early access.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "This website", answer: "It shows what we’re building. Zestful isn’t available to use yet, and plans may change." },
  { subject: "Not care", answer: "Zestful isn’t therapy, medical advice or a crisis service." },
  { subject: "Early access", answer: "It puts you on our list. It isn’t a contract or a promise of a launch date." },
  { subject: "The examples", answer: "The mood pad and journal entries are illustrations, not a working product or real people’s writing." },
  { subject: "If we disagree", answer: "Indian law applies, and the courts at Gurugram decide." },
];

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover your use of this website (the &ldquo;Website&rdquo;), run by Zestful, based in {LEGAL_LOCATION}{" "}
          (&ldquo;we&rdquo; or &ldquo;us&rdquo;). By using it, you agree to them. If you don&apos;t agree, please don&apos;t use it.
        </p>
        <p>
          These terms are an electronic record under the Information Technology Act, 2000 and need no signature. How we handle your
          data is explained in our <Link href="/privacy">privacy policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "not-care",
    title: "Zestful is not care",
    body: (
      <>
        <p>
          Nothing on the Website is medical, psychological or other professional advice, and Zestful isn&apos;t therapy, a diagnosis
          or a treatment. The room&apos;s &ldquo;mood&rdquo; is a small word list for illustration. It doesn&apos;t assess you or how
          you feel.
        </p>
        <div className={s.stuck}>
          <p><b>If you&apos;re struggling or feel unsafe, please reach out to someone now.</b></p>
          <p>In India, Tele-MANAS is free and open 24 hours: call 14416 or 1800-891-4416. In an emergency, call 112.</p>
        </div>
      </>
    ),
  },
  {
    id: "who-may-use",
    title: "Who may use the Website",
    body: (
      <p>
        Anyone may read it. To ask for early access or send us a message, you must be at least 18 and able to contract under the
        Indian Contract Act, 1872.
      </p>
    ),
  },
  {
    id: "what-it-is",
    title: "What the Website is, and isn't",
    body: (
      <ul>
        <li><b>Early stage.</b> We are building now. The Website describes what we are working on, and that may change without notice. It isn&apos;t an offer to provide any service.</li>
        <li><b>Illustrations.</b> The writing pad, mood changes and sample entries are examples of the idea. They don&apos;t promise particular features or results.</li>
        <li><b>The poll.</b> The figures we show come from a small, informal LinkedIn poll, as stated beside them. They aren&apos;t research.</li>
      </ul>
    ),
  },
  {
    id: "early-access",
    title: "Early access",
    body: (
      <>
        <p>When you use our forms:</p>
        <ul>
          <li>what you tell us must be true, and the email address must be your own;</li>
          <li>you join a list. That doesn&apos;t create a contract or guarantee access, a launch date or a reply by any particular time;</li>
          <li>we decide who we write to first, and when; and</li>
          <li>you can leave at any time by writing to {mail}.</li>
        </ul>
      </>
    ),
  },
  {
    id: "co-founder",
    title: "Writing to us about building Zestful",
    body: (
      <p>
        Writing to us about the co-founder role isn&apos;t an application for employment, and our reply isn&apos;t an offer. Any
        arrangement would be agreed separately in writing.
      </p>
    ),
  },
  {
    id: "rules",
    title: "A few rules",
    body: (
      <>
        <p>Please don&apos;t:</p>
        <ul>
          <li>use the Website for anything unlawful, fraudulent or harmful;</li>
          <li>pretend to be someone else, or sign anyone up without their permission;</li>
          <li>send spam, or false, automated or bulk entries through our forms;</li>
          <li>scrape or copy the Website by automated means, except search engines that follow our robots.txt;</li>
          <li>probe it for weaknesses, break its security, or introduce harmful code; or</li>
          <li>copy, modify or reverse engineer it, except as the law allows.</li>
        </ul>
        <p>Found a security problem? Tell us at {mail} and give us reasonable time to fix it before sharing it.</p>
      </>
    ),
  },
  {
    id: "our-work",
    title: "Our work",
    body: (
      <>
        <p>
          The Website and everything on it, including the text, illustrations, the Zestful name and the code, belong to us or our
          licensors and are protected by law. You may view it for your own personal use. You may not use our name without our
          written permission.
        </p>
        <p>If you send us feedback or ideas, we may use them with no obligation to you.</p>
      </>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: (
      <p>
        Some links lead to sites we don&apos;t run, including LinkedIn. We aren&apos;t responsible for their content, terms or privacy
        practices.
      </p>
    ),
  },
  {
    id: "no-promises",
    title: "What we can't promise, and our limits",
    body: (
      <>
        <p>
          As far as the law allows, the Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of
          any kind, including accuracy, availability or fitness for a particular purpose. We work to keep it right and running, but
          we can&apos;t guarantee it will be error-free or uninterrupted.
        </p>
        <p>
          As far as the law allows, we aren&apos;t liable for indirect or consequential loss, or for lost profits, data or goodwill,
          and our total liability arising from the Website or these terms won&apos;t exceed ₹5,000. Nothing here limits liability
          that the law doesn&apos;t allow us to limit, including for fraud.
        </p>
        <p>
          You agree to cover claims, losses and reasonable costs, including legal fees, that arise from your breach of these terms or
          misuse of the Website.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    title: "Suspending access",
    body: (
      <p>
        We may suspend or restrict access to the Website, or remove entries from our list, at any time, including to protect its
        security or if we reasonably believe you have broken these terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "Law and disputes",
    body: (
      <p>
        These terms are governed by the laws of India, and the courts at Gurugram, Haryana have exclusive jurisdiction. Before that,
        you may raise any complaint with our Grievance Officer at {mail} (subject: &ldquo;Grievance&rdquo;). We resolve grievances
        within 30 days. More is in our <Link href="/privacy#grievance-officer">privacy policy</Link>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes, and the rest",
    body: (
      <>
        <p>
          We may update these terms. The new version takes effect when we post it here with a new date, and using the Website after
          that means you accept it.
        </p>
        <ul>
          <li><b>Whole agreement:</b> these terms and our privacy policy are the whole agreement between us about the Website.</li>
          <li><b>If part fails:</b> if a provision is held invalid, the rest still stands.</li>
          <li><b>No waiver:</b> if we don&apos;t enforce a provision now, we can still enforce it later.</li>
          <li><b>Transfer:</b> you can&apos;t transfer your rights under these terms. We may transfer ours in a merger or sale.</li>
          <li><b>Beyond our control:</b> we aren&apos;t responsible for delays or failures caused by events outside our reasonable control.</li>
        </ul>
        <p>Any questions? Write to {mail} or use our <Link href="/contact">contact page</Link>.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title={<>Terms of <em>use</em></>}
      note="The rules, in plain words."
      intro="We're at an early stage, so these rules are short. They cover this website and asking for early access on it."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
