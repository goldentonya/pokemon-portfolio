import type { StaticImageData } from "next/image";

import overboardArtHero from "@/assets/overboard-art/homepage-comparison.jpg";
import overboardArtPortfolio from "@/assets/overboard-art/portfolio-collections-new.jpg";
import overboardArtSingleWork from "@/assets/overboard-art/single-portfolio-comparison.jpg";
import overboardArtAbout from "@/assets/overboard-art/about-new.jpg";
import overboardArtContact from "@/assets/overboard-art/contact-new.jpg";

import wrensHollowHero from "@/assets/wrens-hollow/homepage-comparison.jpg";
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
  whatIDid: string[];
  outcome: string;
  tools: string[];
  ctaLabel: string;
  heroImage: StaticImageData;
  galleryImages: GalleryImage[];
};

export const projects: Project[] = [
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
      "A full redesign and rebuild for Overboard Art, Kelly Davis's custom marine art and yacht-finishing studio — turning a single cluttered WordPress page into a portfolio site that actually shows the craftsmanship.",
    role: "DESIGN + FRONT-END",
    year: "2026",
    type: "SITE REBUILD",
    overview:
      "Kelly Davis needed a site that matched the quality of her work — hand-painted yacht lettering, gold leaf, faux teak, and marine murals — but the old site was a single WordPress page with no real portfolio structure, just a blog feed of past posts.",
    challenge:
      "Give years of custom marine artwork a home that actually showcases it — a real portfolio broken into collections — without losing the personal, one-craftsperson feel of the business.",
    whatIDid: [
      "Rebuilt the site in React with TanStack Start and Tailwind CSS.",
      "Designed a dark, editorial visual system built around real project photography.",
      "Organized the work into browsable collections — Faux Teak, Gold Leaf, Yacht Lettering & Transoms, Marlins & Sailfish, Pyrography, Signage, and Airbrush & Detail.",
      "Built out an individual gallery page for each collection so every commission gets its own showcase.",
      "Added About and Contact pages — a real studio story and a working inquiry form, neither of which existed before.",
    ],
    outcome:
      "The site went from a single unstructured blog page to a real portfolio that reflects the craftsmanship behind the work, giving Kelly a place to send prospective clients that actually sells the work for her.",
    tools: ["REACT", "TANSTACK START", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
    ctaLabel: "VISIT LIVE SITE",
    heroImage: overboardArtHero,
    galleryImages: [
      { src: overboardArtPortfolio, label: "Portfolio Collections" },
      { src: overboardArtSingleWork, label: "Single Work Page" },
      { src: overboardArtAbout, label: "About Page" },
      { src: overboardArtContact, label: "Contact Page" },
    ],
  },
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
      "A full redesign and WordPress rebuild for author Ali Wren — a book-series-driven site with a working shop, cart, and checkout for signed paperbacks.",
    role: "DESIGN + WORDPRESS DEV",
    year: "2026",
    type: "SITE REBUILD + E-COMMERCE",
    overview:
      "Ali needed a site that could carry two book series, sell signed copies directly to readers, and give fans a real hub for events and updates — built on WordPress since that's the platform she can maintain herself long after launch.",
    challenge:
      "Design a romance/dark-fantasy-appropriate visual system on top of a structure-only wireframe handoff, then wire up a real WooCommerce store the client could run without a developer.",
    whatIDid: [
      "Designed a plum-and-parchment visual system fit for a romance/dark-fantasy author brand.",
      "Built a custom WordPress theme reproducing the design across every page.",
      "Wired up WooCommerce for signed-copy sales, including cart and checkout.",
      "Built dedicated pages for each book series, individual titles, events, and upcoming releases.",
    ],
    outcome:
      "Ali now has a site she can run herself — real book sales, an events hub, and a homepage that sells the fantasy/romance vibe instead of a bare WordPress default.",
    tools: ["WORDPRESS", "WOOCOMMERCE", "PHP", "HTML / CSS", "JAVASCRIPT"],
    ctaLabel: "VISIT LIVE SITE",
    heroImage: wrensHollowHero,
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
