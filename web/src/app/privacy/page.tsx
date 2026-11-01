import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import s from "@/components/LegalDoc.module.css";
import { LEGAL_LOCATION } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy — Zestful",
  description: "What Zestful asks you for, why, who sees it, and the rights you have under Indian law. What you type on the page stays in your browser.",
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "What you write", answer: "What you type into the writing pad on our homepage stays in your browser. It is never sent to us or saved, and it’s gone when you leave the page." },
  { subject: "What we ask", answer: "Your email if you want early access. Your name, email and message if you write to us." },
  { subject: "Why we ask", answer: "So we can write to you about Zestful and reply to you. That’s it." },
  { subject: "What we never do", answer: "Sell your data, use it for advertising, or follow you around the web." },
  { subject: "Changing your mind", answer: <>Write to {mail} and we’ll take you off the list.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Zestful is based in {LEGAL_LOCATION}. We are building a private space for people to write out and process their
          thoughts, and we are at an early stage.
        </p>
        <p>
          This policy covers this website: visiting it, asking for early access, and writing to us. When it comes to the data
          described here, we decide why and how it is used, so under Indian law we are the <b>Data Fiduciary</b> and you are the{" "}
          <b>Data Principal</b>. We follow the Information Technology Act, 2000 and the SPDI Rules, 2011, and we are aligning with
          the Digital Personal Data Protection Act, 2023 and its Rules of 2025 (the &ldquo;DPDP law&rdquo;) as they come into force.
        </p>
      </>
    ),
  },
  {
    id: "writing-pad",
    title: "The writing pad",
    body: (
      <>
        <p>
          The pad on our homepage is an illustration of the idea. The room&apos;s mood is worked out by a small word list that runs
          in your own browser. <b>What you type isn&apos;t sent to us or to anyone else, and it isn&apos;t saved.</b> It disappears
          when you leave or refresh the page.
        </p>
        <p>
          The Zestful product itself isn&apos;t covered here, because you can&apos;t yet use it. Before anyone can keep entries with
          us, we will publish a separate policy explaining how that writing is handled.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>When you ask for early access</h3>
        <p>Your email address.</p>
        <h3>When you write to us</h3>
        <p>Your name, your email and your message, plus anything else you choose to include.</p>
        <h3>When you submit a form</h3>
        <ul>
          <li><b>Your IP address,</b> stored only as a salted one-way hash, to stop spam and abuse.</li>
          <li><b>Your browser&apos;s user-agent,</b> the short description of the browser it sends with the form.</li>
        </ul>
        <h3>When you visit</h3>
        <p>
          Our hosting provider keeps standard request logs (IP address, time, page, browser) for security and reliability. We use
          no advertising or analytics cookies, and our fonts are served from our own domain.
        </p>
        <h3>Please leave out</h3>
        <p>
          Passwords, bank or card details, and health information, including anything about your mental health. We don&apos;t need
          them on this website, and a contact form isn&apos;t the right place for them.
        </p>
      </>
    ),
  },
  {
    id: "under-18",
    title: "If you're under 18",
    body: (
      <p>
        Our forms are meant for people aged 18 or over, and we don&apos;t knowingly collect personal data from children. If you
        think someone under 18 has sent us personal data, tell us and we&apos;ll delete it.
      </p>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <>
        <ul>
          <li><b>To write to you</b> about early access to Zestful. Basis: your consent, given when you leave your email.</li>
          <li><b>To confirm you&apos;re on the list</b> with one short email. Basis: your consent.</li>
          <li><b>To read and reply to your messages.</b> Basis: your consent, and data you gave us for that purpose.</li>
          <li><b>To keep the website safe</b> from spam and abuse. Basis: the reasonable security practices the law requires.</li>
          <li><b>To meet legal duties</b> and answer lawful requests.</li>
        </ul>
        <p>We make no automated decisions about you that have legal or similarly significant effects.</p>
      </>
    ),
  },
  {
    id: "who-can-see-it",
    title: "Who can see it",
    body: (
      <>
        <p>Our team, and only where needed:</p>
        <ul>
          <li><b>Vercel Inc.,</b> which hosts the website and carries form submissions.</li>
          <li><b>Neon (Databricks, Inc.),</b> which hosts the database holding what you submit, your hashed IP and your browser information.</li>
          <li><b>Resend (Plus Five Five, Inc.),</b> which sends our emails, so it handles your email, your name and message if you wrote to us, and our internal notifications.</li>
          <li><b>Professional advisers,</b> such as lawyers and auditors, under a duty of confidentiality.</li>
          <li><b>Authorities and courts,</b> where the law requires it or to protect our legal rights.</li>
          <li><b>A buyer or successor,</b> if we are part of a merger or sale, with this policy still protecting your data.</li>
        </ul>
        <p>
          The first three may store or process data outside India. The DPDP law allows that except to countries the Central
          Government restricts, and we won&apos;t transfer data to a restricted country.
        </p>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: (
      <>
        <ul>
          <li><b>Early access list:</b> until you ask us to remove you or we close the list, whichever comes first. We review the list at least every 24 months and delete what we no longer need.</li>
          <li><b>Messages and emails:</b> up to 24 months after our last exchange.</li>
          <li><b>Hashed IPs and browser information:</b> deleted along with the entry they belong to.</li>
          <li><b>Hosting logs:</b> a short period, typically no more than 30 days.</li>
        </ul>
        <p>If you withdraw consent or ask us to erase your data, we will, unless the law requires us to keep it.</p>
      </>
    ),
  },
  {
    id: "how-we-protect-it",
    title: "How we look after it",
    body: (
      <>
        <p>We keep reasonable security practices, as section 43A of the IT Act and the SPDI Rules require:</p>
        <ul>
          <li>data is encrypted in transit, and at rest with our database provider;</li>
          <li>only the people who need access have it;</li>
          <li>IP addresses are stored only as salted one-way hashes; and</li>
          <li>our forms limit how much can be sent from one network.</li>
        </ul>
        <p>
          Nothing online is perfectly secure. If a personal data breach happens, we will tell the people affected and the Data
          Protection Board of India as the DPDP law requires, and report cyber security incidents to CERT-In within the time its
          directions set.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Subject to the law, you can:</p>
        <ul>
          <li>ask what data we hold about you, how we use it and who we&apos;ve shared it with;</li>
          <li>ask us to correct or update it;</li>
          <li>ask us to erase it;</li>
          <li>withdraw your consent at any time, as easily as you gave it, which doesn&apos;t affect what already happened;</li>
          <li>nominate someone to use these rights for you if you die or can&apos;t act yourself; and</li>
          <li>complain to us, and then to the Data Protection Board of India if you aren&apos;t satisfied.</li>
        </ul>
        <p>
          Email {mail} with the subject &ldquo;Privacy request&rdquo;, or use our <Link href="/contact">contact page</Link>. We may
          ask you to confirm who you are, and we&apos;ll respond within 30 days. The DPDP law also expects you not to impersonate
          anyone or file false complaints.
        </p>
      </>
    ),
  },
  {
    id: "grievance-officer",
    title: "Something wrong? Our Grievance Officer",
    body: (
      <>
        <p>Under Rule 5(9) of the SPDI Rules and the DPDP law, complaints about your data go to our Grievance Officer:</p>
        <div className={s.stuck}>
          <p><b>Grievance Officer, Zestful</b></p>
          <p>Email: {mail} (subject: &ldquo;Grievance&rdquo;)</p>
          <p>Address: {LEGAL_LOCATION}</p>
        </div>
        <p style={{ marginTop: 18 }}>
          We&apos;ll acknowledge your complaint promptly and resolve it within 30 days. If you aren&apos;t satisfied, you may go to
          the Data Protection Board of India once the relevant provisions are in force.
        </p>
      </>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead elsewhere, including LinkedIn. Their own privacy policies apply there, not this one.</p>,
  },
  {
    id: "changes",
    title: "When this policy changes",
    body: (
      <p>
        We&apos;ll post the new version here with a new date. If a change is material, we&apos;ll email everyone on the list before
        it takes effect.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title={<>Privacy <em>policy</em></>}
      note="What we ask, and why. No small print."
      intro="A private space has to start with being straight about privacy. Here is exactly what this website collects and what we do with it."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
