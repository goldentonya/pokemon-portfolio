# Pokémon Portfolio — Tonya Golden

A single-page personal portfolio for **Tonya Golden**, a Conversion Optimization / CRO expert,
styled as a retro Game Boy / pixel-art Pokémon theme ("Kanto Bright"). Built with Next.js (App
Router, TypeScript, Tailwind CSS v4).

Recreated from the design handoff in `Portfolio Wireframe.html`, `Tonya Golden Portfolio.html`,
and the three `project-*.html` case-study references — see that handoff's `README.md` for the
full design spec (tokens, copy, sprite rules, animations).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens (colors, fonts, sprite keyframes)
  live in `src/app/globals.css`
- Fonts: Press Start 2P, Silkscreen, DM Sans (via `next/font/google`)

## Project structure

```
src/
  app/
    page.tsx            # homepage — composes all sections
    work/[slug]/page.tsx # shared project case-study template
    globals.css          # design tokens, keyframes
  components/            # Nav, Hero, About, Origin, Experience, Skills,
                          # CaseStudies, Services, Testimonials, Contact, Footer,
                          # plus shared primitives: Reveal, CornerSprite, PixelButton,
                          # PokeBallIcon, ImageSlot
  lib/
    projects.ts           # case-study content (shared by the cards + detail pages)
  assets/                  # real photos/screenshots, imported via next/image
    about/                 # trainer photo + life-grid photos
    case-studies/           # A/B experiment screenshots
    overboard-art/          # Overboard Art before/after + gallery images
    wrens-hollow/           # The Wren's Hollow before/after + gallery images
public/
  sprites/                 # Pokémon mascot sprites
```

## Running locally

### Option A — Node

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Option B — Docker (local dev environment)

```bash
docker compose up
```

This builds the `dev` stage of the `Dockerfile`, bind-mounts the source for hot reload, and
serves the site at [http://localhost:3000](http://localhost:3000). Source edits on the host are
picked up automatically (file-watch polling is enabled for reliability on Windows/WSL bind
mounts).

`docker compose down` stops it; add `-v` to also drop the cached `node_modules`/`.next` volumes
if you need a totally clean reinstall.

### Production build

```bash
npm run build && npm start
```

or, via Docker (uses the `runner` stage — a small `output: "standalone"` image):

```bash
docker build --target runner -t pokemon-portfolio .
docker run -p 3000:3000 pokemon-portfolio
```

## Content still to drop in

Real photos and case studies are wired in. What's still outstanding:

- **Case Studies → Email Capture Test**: the third A/B experiment card
  (`src/components/CaseStudies.tsx`) uses real screenshots but the result copy and stat box are
  placeholders ("Add your real result here" / "TBD") — needs the real conversion numbers.
- **Case Studies → project links**: both real case-study pages' "VISIT LIVE SITE" buttons
  (`src/app/work/[slug]/page.tsx`) still point to `#` — needs the real live URLs for Overboard
  Art and The Wren's Hollow.
- **Experience**: company logos are still placeholders (the company names are intentionally kept
  generic, so no real logos were provided for these).
- **Contact**: `/resume.pdf` (drop the file into `public/`) and the real booking-call link.
  Email is already wired to `hello@tonyagolden.dev` — update in `src/components/Contact.tsx` if
  that should change.
- **Unused assets**: `src/assets/case-studies/case-tyv-*.png` (extra Medicare Thank You Video
  creative variants) and a few `overboard-art`/`wrens-hollow` comparison images weren't used in
  the current layout — available if you want to expand either section later.
- **Brand logo**: `src/assets/main_logo.png` (full wordmark) is available but unused; the icon
  version is already wired up as the favicon/apple-touch-icon.

## Known follow-ups

- Decorative sprites use plain `<img>` for simplicity (small, fixed-size, purely
  decorative assets); swapping to `next/image` is a straightforward follow-up if
  automatic optimization is wanted.
