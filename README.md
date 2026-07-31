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

## Quality Checks

```bash
npm run lint
npm run build
```

## Editing Content

Portfolio copy, links, skills, and projects live in `lib/data.ts`. Update that file to change the content without touching the page components.

The resume button is controlled by `profile.resumeAvailable`. The sample resume file is already available at `public/resume.pdf`, and `profile.resumeAvailable` is set to `true` in `lib/data.ts`.

Trend-focused positioning, proof points, and capability cards are also data-driven from `lib/data.ts`.
