# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdPal Home — a marketing/landing page for AdPal, a Web3 platform that turns e-ink displays (phone cases, power banks, digital frames) into ad-displaying digital billboards that earn users cryptocurrency.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build (outputs to `dist/`)
- No test framework is configured.

## Architecture

- **Stack:** React 18, Vite 6, Tailwind CSS v4, TypeScript
- **Entry:** `index.html` → `src/main.tsx` → `src/app/App.tsx`
- **Page sections** (rendered in order in App.tsx): Header, Hero, Earnings, HowItWorks, Features, Footer
- **Section components:** `src/app/components/` — each section is a standalone component (Header.tsx, Hero.tsx, etc.)
- **UI primitives:** `src/app/components/ui/` — Radix UI + shadcn/ui components styled with Tailwind. Use `cn()` from `ui/utils.ts` for conditional class merging.
- **Styling:** Tailwind v4 with `@tailwindcss/vite` plugin. CSS lives in `src/styles/` — `tailwind.css` (base imports), `theme.css` (CSS variables and design tokens), `fonts.css`, `index.css` (global styles).
- **Path alias:** `@` maps to `src/` (configured in vite.config.ts)
- **SEO:** react-helmet-async for meta tags, configured in App.tsx
- **Animation:** `motion` (Framer Motion) library

## Brand Guidelines

Detailed brand rules are in `AdPal-Brand-Guidelines.md`. Key points:

- **Colors:** White (#FFFFFF) backgrounds, Matte Obsidian (#1A1A1A–#2C2C2C) for dark elements, Cyber Mint (#00FFC2) and Electric Violet (#BC13FE) as accent/CTA colors with a "Prism Gradient" between them. CSS variables defined in `src/styles/theme.css`.
- **Typography:** Space Grotesk for headings, Inter for body text.
- **UI style:** Premium fintech aesthetic. Sharp/slightly-rounded borders, glassmorphism for high-value areas, no cartoonish elements. Dark cards with subtle grain texture.
- **Motion:** Crisp, snappy animations — elements "unfold" rather than fade. No floaty/slow transitions.
