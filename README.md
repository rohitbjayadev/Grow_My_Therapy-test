# Dr. Maya Reynolds, PsyD — Therapy Website

A single-page marketing site for a solo therapy practice, built with Next.js and Tailwind CSS. Dr. Maya Reynolds is a fictional Licensed Clinical Psychologist based in Santa Monica, CA, used here as a design/content exercise.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files.

## Project Structure

```
app/
├── components/
│   ├── Header.tsx            # Sticky nav with anchor links
│   ├── HeroSection.tsx        # Landing hero with portrait + intro
│   ├── Footer.tsx
│   └── sections/               # One component per homepage section
│       ├── HoldingHopeSection.tsx
│       ├── WhoWeHelpSection.tsx
│       ├── WorthyPlaceSection.tsx
│       ├── ExpertiseAreasSection.tsx
│       ├── MakingDifferenceSection.tsx
│       ├── HonoringSection.tsx
│       ├── SpecialtiesSection.tsx
│       ├── OurOfficeSection.tsx
│       └── TeamSection.tsx
├── lib/
│   └── constants.ts            # All page copy/content, single source of truth
├── globals.css                 # Design tokens, fonts, base styles
└── page.tsx                    # Composes sections into the homepage
```

The entire site is a single scrollable page (`app/page.tsx`); navigation links scroll to in-page anchors rather than routing to separate pages.

## Content

All copy lives in [`app/lib/constants.ts`](app/lib/constants.ts) — update text there rather than inline in components.

## Design System

Defined as CSS custom properties in [`app/globals.css`](app/globals.css):

| Token | Role |
|---|---|
| `--color-white` | Ivory background |
| `--color-black` | Primary text (warm charcoal) |
| `--color-accent` | Sand |
| `--color-light-accent` | Pale sage section background |
| `--color-dark-accent` | Clay (links, underlines, CTAs) |
| `--color-sage` / `--color-stone` | Secondary accents |

Fonts: Cormorant Infant (headings), Muli (body), PrintedMoments (script accent word).

## Scripts

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deployed via [Vercel](https://vercel.com). Connect the repository and Vercel will auto-detect the Next.js configuration — no custom build settings required.
