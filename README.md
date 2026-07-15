# Naimat — Portfolio

A single-page portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion, recreating the attached sticky-note reference design.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` — root layout, loads DM Sans (headings/body) and Caveat (handwritten labels) via `next/font/google`
- `app/page.tsx` — assembles all sections
- `components/Header.tsx` — logo + nav (Portfolio / Hire Me), collapses to hamburger on mobile
- `components/Hero.tsx` — astronaut doodle, arrow, "Naimat" sticky note, headline with pink marker highlight on "design", intro paragraph + CTA
- `components/Services.tsx` — "What i do?" sticky note + three pastel sticky-note service cards (Pen/Paper, Figma, Framer)
- `components/Projects.tsx` — "Featured Projects" 2x2 card grid with colored pill tags
- `components/Experience.tsx` — "Work Experience" numbered timeline with colored squares
- `components/Contact.tsx` — "Contact here" note + minimal underline form
- `components/Footer.tsx` — logo, tagline, social icons
- `components/Doodles.tsx` — hand-drawn SVG arrow doodles
- `components/StickyNote.tsx` — reusable sticky-note label and pill/tag components

## Notes

- Colors and type scale are defined as Tailwind theme tokens in `tailwind.config.ts` (`ink`, `paper`, `pink`, `blue`, `yellow`).
- Project thumbnails are CSS-gradient placeholders standing in for real screenshots — swap in real images by replacing the `thumb` JSX in `components/Projects.tsx` with `<Image src="..." />`.
- Scroll-reveal and stagger animations use Framer Motion's `whileInView`; sticky notes have a subtle continuous float via Tailwind `animate-float` / `animate-float-slow`.
- Reduced-motion is respected globally via a CSS media query in `app/globals.css`.
