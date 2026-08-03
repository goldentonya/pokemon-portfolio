import type { StaticImageData } from "next/image";

import overboardArtHero from "@/assets/overboard-art/homepage-comparison.jpg";
import overboardArtBattleRecord from "@/assets/overboard-art/homepage-before.png";
import overboardArtPortfolio from "@/assets/overboard-art/portfolio-collections-new.jpg";
import overboardArtSingleWork from "@/assets/overboard-art/single-portfolio-comparison.jpg";
import overboardArtAbout from "@/assets/overboard-art/about-new.jpg";
import overboardArtContact from "@/assets/overboard-art/contact-new.jpg";

import wrensHollowHero from "@/assets/wrens-hollow/homepage-comparison.jpg";
import wrensHollowBattleRecord from "@/assets/wrens-hollow/wrens-hollow-homepage-before.png";
import wrensHollowShop from "@/assets/wrens-hollow/shop-comparison.jpg";
import wrensHollowAbout from "@/assets/wrens-hollow/about-comparison.jpg";
import wrensHollowBookSeries from "@/assets/wrens-hollow/book-series-comparison.jpg";
import wrensHollowBookPage from "@/assets/wrens-hollow/book-page-comparison.jpg";
import wrensHollowEvents from "@/assets/wrens-hollow/events-comparison.jpg";
import wrensHollowProduct from "@/assets/wrens-hollow/product-comparison.jpg";
import wrensHollowOnTheHorizon from "@/assets/wrens-hollow/writing-comparison.jpg";

export type GalleryImage = {
  src: StaticImageData;
  label: string;
};

/** Constrained to the six type→color pairs already established in Services.tsx. */
export type MoveType = "NORMAL" | "ANALYTICS" | "FIRE" | "PSYCHIC" | "GRASS" | "ELECTRIC";

export type Move = {
  /** Short battle-menu name, ALL CAPS. Keep to ~16 chars — Press Start 2P is wide. */
  name: string;
  type: MoveType;
  /** The full sentence describing the work. */
  description: string;
};

export type Result = {
  /** Short "super effective" label, e.g. "REAL PORTFOLIO". Keep to ~16 chars. */
  label: string;
  /** One supporting clause drawn from the overview/challenge/outcome copy. */
  detail: string;
};

export type Encounter = {
  /** Nameplate name for the opponent — the PROBLEM being solved, not the client. */
  opponentName: string;
  /** The "A WILD ... APPEARED!" line. */
  wildLine: string;
  level: number;
  /**
   * Opponent HP remaining, 0-100. Pure flavor: it represents how much of the old
   * site's problem survived, so LOW means the redesign won. Tone is derived via hpTone().
   */
  hpPercent: number;
  /** Decorative sprite paths under /sprites — rendered with alt="" and aria-hidden. */
  opponentSprite: string;
  /**
   * Pixels to raise the opponent sprite so its feet meet the ground ellipse.
   * Sprite art varies in how much transparent padding surrounds the character,
   * so this corrects per-sprite instead of moving the shared ellipse for everyone.
   */
  opponentLiftPx?: number;
  allyName: string;
  allyLevel: number;
  allySprite: string;
};

export type Project = {
  slug: string;
  /** Card header eyebrow, e.g. "REDESIGN · SAAS" */
  cardTag: string;
  cardStatus: string;
  title: string;
  cardDescription: string;
  cardChips: string[];
  cardImage: StaticImageData;
  /** Detail page hero pill */
  pageEyebrow: string;
  headingLine1: string;
  headingLine2: string;
  summary: string;
  role: string;
  year: string;
  type: string;
  overview: string;
  challenge: string;
  moves: Move[];
  /** Supporting prose shown beneath the results grid. */
  outcome: string;
  results: Result[];
  encounter: Encounter;
  tools: string[];
  ctaLabel: string;
  /**
   * Real production URL. Leave undefined until the client site is live — the CTA
   * renders a non-interactive "COMING SOON" chip when absent. Never fabricate this.
   */
  liveUrl?: string;
  heroImage: StaticImageData;
  galleryImages: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "wrens-hollow",
    cardTag: "AUTHOR SITE · E-COMMERCE",
    cardStatus: "SHIPPED",
    title: "THE WREN'S HOLLOW",
    cardDescription:
      "Rebuilt indie author Ali Wren's site on WordPress + WooCommerce, with a real shop, cart, and checkout.",
    cardChips: ["WORDPRESS", "WOOCOMMERCE", "PHP"],
    cardImage: wrensHollowHero,
    pageEyebrow: "WEB DESIGN / DEVELOPMENT",
    headingLine1: "THE WREN'S",
    headingLine2: "HOLLOW",
    summary:
      "A full redesign and WordPress rebuild for author Ali Wren, a site built around her book series with a working shop, cart, and checkout for signed paperbacks.",
    role: "DESIGN + WORDPRESS DEV",
    year: "2026",
    type: "SITE REBUILD + ECOMMERCE",
    overview:
      "Ali needed a site that could carry two book series, sell signed copies directly to readers, and give fans a real hub for events and updates, built on WordPress since that's the platform she can maintain herself long after launch.",
    challenge:
      "Design a visual system appropriate for a romance and dark fantasy author, on top of a structure only wireframe handoff, then wire up a real WooCommerce store the client could run without a developer.",
    moves: [
      {
        name: "PLUM PALETTE",
        type: "PSYCHIC",
        description:
          "Designed a plum and parchment visual system fit for a romance and dark fantasy author brand.",
      },
      {
        name: "THEME FORGE",
        type: "FIRE",
        description: "Built a custom WordPress theme reproducing the design across every page.",
      },
      {
        name: "COMMERCE LINK",
        type: "ANALYTICS",
        description: "Wired up WooCommerce for signed copy sales, including cart and checkout.",
      },
      {
        name: "WORLD BUILD",
        type: "GRASS",
        description:
          "Built dedicated pages for each book series, individual titles, events, and upcoming releases.",
      },
    ],
    outcome:
      "Ali now has a site she can run herself: real book sales, an events hub, and a homepage that sells the fantasy and romance vibe instead of a bare WordPress default.",
    results: [
      {
        label: "LIVE STOREFRONT",
        detail: "A working WooCommerce cart and checkout selling signed paperbacks direct to readers.",
      },
      {
        label: "CLIENT EDITABLE",
        detail: "Built on WordPress so Ali can run and update the whole site herself after launch.",
      },
      {
        label: "ON BRAND WORLD",
        detail: "A plum and parchment system that sells the fantasy and romance vibe from the first scroll.",
      },
      {
        label: "EVENTS HUB",
        detail: "Both book series, individual titles, events, and upcoming releases each have a home.",
      },
    ],
    encounter: {
      opponentName: "WILD DEFAULT THEME",
      wildLine: "A WILD BARE WORDPRESS DEFAULT APPEARED!",
      level: 47,
      hpPercent: 15,
      opponentSprite: "/sprites/snorlax-pixel.png",
      allyName: "THE WREN'S HOLLOW",
      allyLevel: 61,
      allySprite: "/sprites/mew-pixel-6a2c4d63.png",
    },
    tools: ["WORDPRESS", "WOOCOMMERCE", "PHP", "HTML / CSS", "JAVASCRIPT"],
    ctaLabel: "VISIT LIVE SITE",
    liveUrl: "https://aliwrenauthor.com/",
    heroImage: wrensHollowBattleRecord,
    galleryImages: [
      { src: wrensHollowShop, label: "Shop Page" },
      { src: wrensHollowProduct, label: "Product Page" },
      { src: wrensHollowBookSeries, label: "Book Series Page" },
      { src: wrensHollowBookPage, label: "Individual Book Page" },
      { src: wrensHollowAbout, label: "About Page" },
      { src: wrensHollowEvents, label: "Events Page" },
      { src: wrensHollowOnTheHorizon, label: "On the Horizon Page" },
    ],
  },
  {
    slug: "overboard-art",
    cardTag: "REDESIGN · MARINE ART",
    cardStatus: "SHIPPED",
    title: "OVERBOARD ART",
    cardDescription:
      "Rebuilt a marine artist's single-page site into a real portfolio that actually shows off the craftsmanship.",
    cardChips: ["REACT", "TANSTACK", "TAILWIND"],
    cardImage: overboardArtHero,
    pageEyebrow: "WEB DESIGN / DEVELOPMENT",
    headingLine1: "OVERBOARD",
    headingLine2: "ART",
    summary:
      "A full redesign and rebuild for Overboard Art, Kelly Davis's custom marine art and yacht finishing studio, turning a single cluttered WordPress page into a portfolio site that actually shows the craftsmanship.",
    role: "DESIGN + FRONT END",
    year: "2026",
    type: "SITE REBUILD",
    overview:
      "Kelly Davis needed a site that matched the quality of her work: hand painted yacht lettering, gold leaf, faux teak, and marine murals, but the old site was a single WordPress page with no real portfolio structure, just a blog feed of past posts.",
    challenge:
      "Give years of custom marine artwork a home that actually showcases it, a real portfolio broken into collections, without losing the personal, solo craftsperson feel of the business.",
    moves: [
      {
        name: "REBUILD BEAM",
        type: "FIRE",
        description: "Rebuilt the site in React with TanStack Start and Tailwind CSS.",
      },
      {
        name: "DARK CANVAS",
        type: "PSYCHIC",
        description: "Designed a dark, editorial visual system built around real project photography.",
      },
      {
        name: "COLLECTION SORT",
        type: "GRASS",
        description:
          "Organized the work into browsable collections: Faux Teak, Gold Leaf, Yacht Lettering & Transoms, Marlins & Sailfish, Pyrography, Signage, and Airbrush & Detail.",
      },
      {
        name: "GALLERY STORM",
        type: "ELECTRIC",
        description:
          "Built out an individual gallery page for each collection so every commission gets its own showcase.",
      },
      {
        name: "OPEN CHANNEL",
        type: "NORMAL",
        description:
          "Added About and Contact pages, a real studio story and a working inquiry form, neither of which existed before.",
      },
    ],
    outcome:
      "The site went from a single unstructured blog page to a real portfolio that reflects the craftsmanship behind the work, giving Kelly a place to send prospective clients that actually sells the work for her.",
    results: [
      {
        label: "REAL PORTFOLIO",
        detail: "Years of commissions finally have a structured home instead of a blog feed.",
      },
      {
        label: "7 COLLECTIONS",
        detail: "Every category of work is browsable, each with its own gallery page.",
      },
      {
        label: "CRAFT FIRST UI",
        detail: "A dark, editorial system that lets the project photography carry the work.",
      },
      {
        label: "CLIENT READY",
        detail: "A link Kelly can send prospects that sells the work for her.",
      },
    ],
    encounter: {
      opponentName: "WILD ONE PAGE WORDPRESS",
      wildLine: "A WILD ONE PAGE WORDPRESS SITE APPEARED!",
      level: 42,
      hpPercent: 12,
      opponentSprite: "/sprites/gengar-0f29c816.png",
      opponentLiftPx: 14,
      allyName: "OVERBOARD ART",
      allyLevel: 58,
      allySprite: "/sprites/gyarados-pixel-e9dd4a8b.png",
    },
    tools: ["REACT", "TANSTACK START", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
    ctaLabel: "VISIT LIVE SITE",
    heroImage: overboardArtBattleRecord,
    galleryImages: [
      { src: overboardArtPortfolio, label: "Portfolio Collections" },
      { src: overboardArtSingleWork, label: "Single Work Page" },
      { src: overboardArtAbout, label: "About Page" },
      { src: overboardArtContact, label: "Contact Page" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Maps an HP percentage to the Game Boy bar colors: green → yellow → red. */
export function hpTone(percent: number): "green" | "yellow" | "red" {
  return percent > 50 ? "green" : percent > 20 ? "yellow" : "red";
}
