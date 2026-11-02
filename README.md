# Zestful — zestfulhq.com

> **The forms deliver nothing.** The early-access form and the contact form are front end only: they validate in the browser and show their success message, but nothing is sent, stored or emailed. Visitors who fill them in reach no one. The only real way to contact Zestful is the email address shown on the site, so that must be a working mailbox.

Production site for Zestful: a private space to process your thoughts. It's a port of the approved homepage design.

Everything lives in one Next.js 16 app in [`web/`](web/). There is no database, no email sending and no API beyond a health check.

```
zestfulhq/
├── design/project/              Approved design (Main.dc.html is the source of truth)
└── web/                         Next.js 16 (App Router, React 19, TypeScript), deployed to Vercel
    ├── assets/                  Poppins SemiBold, used only to render the OG image
    └── src/
        ├── app/
        │   ├── page.tsx         homepage: assembles the sections, Organization JSON-LD
        │   ├── layout.tsx       fonts (next/font), metadata
        │   ├── globals.css      design tokens + shared classes
        │   ├── api/health/      GET { status: "ok" }
        │   ├── contact/         contact page
        │   ├── privacy/ terms/  legal pages (shared layout: components/LegalDoc.tsx)
        │   ├── not-found.tsx    styled 404
        │   └── opengraph-image.tsx, twitter-image.tsx, icon.svg, apple-icon.tsx, sitemap.ts, robots.ts
        ├── assets/founder/      founder photo
        ├── components/          one component + CSS Module per section
        └── lib/
            ├── mood.ts          the moods, the word list and the "try a line" samples
            ├── moodStore.ts     shared client state for the room's mood
            ├── earlyAccess/ contact/  zod schemas the forms validate with
            └── site.ts          site URL, contact email, founder name and LinkedIn
```

## Sections and what runs in the browser

Sections are Server Components and ship no JavaScript, except the interactive pieces marked "client" below.

| Section | Component | Client JS |
|---|---|---|
| Nav | `Nav` (server), with `NavShell`, `NavLinks` | client: hush while writing, underline follows the section |
| The room | `Room` (server), with `Blobs`, `Pad` | client: those two |
| Poll | `Poll` (server), with `ScrollTrigger` | client: trigger only |
| What it isn't | `Isnt` (server), with `ScrollTrigger` | client: trigger only |
| Return | `Return` (server), with `Shelf` | client: shelf and reader |
| Principles | `Principles` | none |
| Story | `Story` (server), with `ScrollTrigger` | client: trigger only |
| Join | `Join` (server), with `EarlyAccess` | client: form (front end only), mood colour |
| Footer | `Footer` (server), with `ScrollTrigger` | client: trigger only |

## The writing pad is private

What's typed into the hero pad lives in the `Pad` component's state. `readMood` runs in the browser, and nothing is stored or sent. `/privacy` promises this, so keep it true: if the pad ever saves or sends anything, the policy has to change first.

## Placeholders still to replace

- **Founder photo.** In place, cropped from a screenshot (`web/src/assets/founder/muskaan-sharma.jpg`, 720px). Swap in the original if you have it.
- **Domain.** `zestfulhq.com` is inferred from the `hello@zestfulhq.com` address in the design. Change the default in `web/src/lib/site.ts` (or set `NEXT_PUBLIC_SITE_URL`) if the site will live elsewhere.
- **Legal review.** `/privacy` and `/terms` are adapted from the Class of One drafts for Indian law (IT Act 2000, SPDI Rules 2011, DPDP Act 2023 with the DPDP Rules 2025). Have them reviewed by a lawyer before launch. They also make statements you need to keep true: the forms send nothing, a real Grievance Officer and mailbox behind that address, limited access to that mailbox, and a separate policy before anyone can keep entries with Zestful. If the forms ever start sending data, both pages must change first. Shared values are in `web/src/lib/legal.ts`.
- **Crisis line in `/terms`.** Tele-MANAS (14416 / 1800-891-4416) and 112. Check these periodically.
- **Facts in the design copy** were kept word for word and not checked: the poll figures and date, the founding year, and the founder's story.

## Local setup

Requirements: Node 20.9 or later. No database or other services.

```bash
cd web
npm install
npm run dev                     # http://localhost:3000
```

### Scripts (in `web/`)

| Script | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `next typegen` + `tsc --noEmit` |

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | no | Defaults to `https://zestfulhq.com`. Used for canonical URLs, sitemap and OG tags. |

## How the forms work

Both forms (`EarlyAccess` on the homepage, `ContactForm` on `/contact`) handle `onSubmit` in the browser: they call `preventDefault`, validate with the zod schemas in `src/lib/earlyAccess/schema.ts` and `src/lib/contact/schema.ts`, and either show the error next to each field (keeping what was typed) or show the success message. No network request is made.

## Deploy to Vercel

1. Push the repo to GitHub, GitLab or Bitbucket, then in Vercel choose **Add New → Project** and import it.
2. Set **Root Directory** to `web`. The framework preset (Next.js) and the build command are detected automatically.
3. Deploy. Preview deployments serve a `Disallow: /` robots.txt, so they stay out of search results.

## Connect the domain

1. In Vercel: Project → **Settings → Domains** → add `zestfulhq.com`, then `www.zestfulhq.com`, and choose to **redirect `www` to the apex**.
2. Vercel shows the exact DNS records to create (typically an **A** record for `@` and a **CNAME** for `www`). Add them at your domain registrar, removing any default "Parked" records first.
3. Wait for both domains to show **Valid Configuration**. HTTPS certificates are issued automatically.

To *receive* mail at hello@zestfulhq.com, set up a mailbox provider (Google Workspace, Zoho, etc.) and add its MX records. This is required: that address is the only way visitors can reach you.

## Fidelity notes (vs. the approved design, `Main.dc.html`)

Compared side by side in Chrome at 1440px and 390px, with reduced motion so animations don't skew the numbers.

Intentional differences:
- **Early access validates the email** before flipping to the thank-you, as the design's form did, and still stores nothing. It has a one-line note linking to the privacy policy, which makes that card's text slightly longer.
- **Founder photo and LinkedIn** replace the `[Founder photo]` placeholder, which makes the story section 32px taller.
- **Pages added:** Privacy, Terms and Contact are real pages, linked from the footer. The design pointed Privacy and Terms at `#write`. Their look is new, built from the design's tokens.
- **A real navbar replaces the design's corner links.** Wordmark left, section links centred with an underline that follows the section being read, "Build with us" as a button on the right, on a blurred paper bar. It still hushes while writing. On phones (960px and below) it shows the wordmark and the button only, as the design's corners did.
- **Crossed-out words fit on one line on phones.** In the design, the two longest wrap at 390px and the strike falls between the lines.
- **Contrast fixes:** the pad's placeholder (2.67:1 → 4.51:1), the crossed-out words (3.10:1 → 3.78:1), and the small text on the tinted cards, which on the early-access card has to survive every mood colour.
- **Fade-ins** start at opacity .01 instead of 0, so Chrome can count the hero text as the LCP element. It looks identical.
- **Without JavaScript,** the poll bars and the hidden story and "isn't" elements show in their final state.
- **Reader swap** restarts its animation with a React `key` instead of alternating two identical classes.
