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

The design handoff's photos/screenshots are placeholders (per the original spec). Real assets
still need to be added in these spots:

- About: trainer photo + 3×3 life-photo grid
- Experience: company logos (2)
- Case Studies: 3 project card screenshots, 2 project hero images + 4 gallery screenshots
  (`src/app/work/[slug]/page.tsx`), 2 A/B test experiment screenshots
- Contact: `/resume.pdf` (drop the file into `public/`) and the real booking-call link
- Real email is already wired to `hello@tonyagolden.dev` — update in `src/components/Contact.tsx`
  if that should change

## Known follow-ups

- Decorative sprites use plain `<img>` for simplicity (small, fixed-size, purely
  decorative assets); swapping to `next/image` is a straightforward follow-up if
  automatic optimization is wanted.
