# Githaiga Portfolio

A modern personal portfolio for Githaiga, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

The site is positioned around current portfolio expectations: fast scanning, accessible navigation, concrete project outcomes, AI-aware product delivery, security-minded implementation, and responsive performance.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Build

```bash
npm run build
```

The project is designed for Vercel and does not require environment variables for the base version.

## M-Pesa Support

The portfolio includes a server-side Safaricom Daraja M-Pesa Express (STK Push) integration. Copy `.env.example` to `.env.local` and set the Daraja credentials from your app. Keep these values server-only; do not use `NEXT_PUBLIC_` prefixes.

Use `MPESA_ENVIRONMENT=sandbox` with a sandbox application while testing. For live payments, use `MPESA_ENVIRONMENT=production`, the approved live shortcode or Till Number, the matching passkey, and an internet-reachable HTTPS `MPESA_CALLBACK_URL` such as `https://githaiga.vercel.app/api/mpesa/callback`.

The callback endpoint accepts Daraja completion notifications and logs their outcome. Connect it to a database before offering receipts, supporter history, or fulfillment. The support form will explicitly say it is unconfigured until the required environment variables are present.

## Quality Checks

```bash
npm run lint
npm run build
npm test
```

## Editing Content

Portfolio copy, links, skills, and projects live in `lib/data.ts`. Update that file to change the content without touching the page components.

The resume button is controlled by `profile.resumeAvailable`. The sample resume file is already available at `public/resume.pdf`, and `profile.resumeAvailable` is set to `true` in `lib/data.ts`.

Trend-focused positioning, proof points, and capability cards are also data-driven from `lib/data.ts`.
