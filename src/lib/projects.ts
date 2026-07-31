export type Project = {
  slug: string;
  /** Card header eyebrow, e.g. "REDESIGN · SAAS" */
  cardTag: string;
  cardStatus: string;
  title: string;
  cardDescription: string;
  cardChips: string[];
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
};

export const projects: Project[] = [
  {
    slug: "marketing-site-rebuild",
    cardTag: "REDESIGN · SAAS",
    cardStatus: "SHIPPED",
    title: "MARKETING SITE REBUILD",
    cardDescription:
      "Designed and coded a responsive marketing site from scratch — faster loads, cleaner IA, a modern component system.",
    cardChips: ["FIGMA", "HTML/CSS", "JAVASCRIPT"],
    pageEyebrow: "WEB DESIGN / DEVELOPMENT",
    headingLine1: "MARKETING SITE",
    headingLine2: "REBUILD",
    summary:
      "A ground-up redesign and rebuild of a SaaS marketing site — faster loads, cleaner information architecture, and a modern component system the whole team could build on.",
    role: "DESIGN + FRONT-END",
    year: "2023",
    type: "FULL SITE REBUILD",
    overview:
      "The existing site had grown organically over years — inconsistent styling, slow pages, and a structure that made it hard for visitors to find what they needed. The goal was a rebuild that looked modern, loaded fast, and gave the marketing team a system they could extend without a developer for every change.",
    challenge:
      "Balance a bold visual refresh with real performance gains, migrate years of content without losing SEO, and ship a component library the team could actually maintain.",
    whatIDid: [
      "Audited the old site and mapped a cleaner information architecture.",
      "Designed a fresh visual system in Figma, from type scale to components.",
      "Built the front-end from scratch with semantic, accessible HTML/CSS.",
      "Created reusable sections so marketing could assemble pages on their own.",
    ],
    outcome:
      "Page load times dropped noticeably, the bounce rate improved, and the team shipped new landing pages in hours instead of weeks — all on a consistent, on-brand foundation.",
    tools: ["FIGMA", "HTML / CSS", "JAVASCRIPT", "RESPONSIVE UI", "SEO", "A11Y"],
    ctaLabel: "VISIT LIVE SITE",
  },
  {
    slug: "high-convert-landing",
    cardTag: "LANDING · E-COMMERCE",
    cardStatus: "SHIPPED",
    title: "HIGH-CONVERT LANDING",
    cardDescription:
      "Built a conversion-first landing page with a clear hierarchy and pixel-tight front-end for a product launch.",
    cardChips: ["HTML/CSS", "TAILWIND", "A/B TESTING"],
    pageEyebrow: "WEB DESIGN / DEVELOPMENT",
    headingLine1: "HIGH-CONVERT",
    headingLine2: "LANDING PAGE",
    summary:
      "A conversion-first landing page for a product launch — a clear message hierarchy, pixel-tight front-end, and a layout designed from the ground up to be tested and improved.",
    role: "DESIGN + FRONT-END",
    year: "2024",
    type: "LANDING PAGE",
    overview:
      "The launch needed a page that could carry paid traffic and convert cold visitors fast. I designed and built it around a single, focused message with every section earning its place — and instrumented it so we could keep testing after launch.",
    challenge:
      "Communicate a new product's value in seconds, keep the page fast on mobile, and structure it so we could run A/B tests on the highest-impact elements without rebuilding.",
    whatIDid: [
      "Designed a tight message hierarchy from hero to final CTA.",
      "Built a fast, mobile-first front-end with clean, testable markup.",
      "Set up analytics and event tracking for every key interaction.",
      "Wired the layout for easy A/B testing of headlines and CTAs.",
    ],
    outcome:
      "The page launched on time, converted well from day one, and became a testing ground for a series of experiments that pushed conversion higher over the following months.",
    tools: ["HTML / CSS", "TAILWIND", "JAVASCRIPT", "A/B TESTING", "GA4", "CRO"],
    ctaLabel: "VISIT LIVE SITE",
  },
  {
    slug: "component-library",
    cardTag: "DESIGN SYSTEM · FINTECH",
    cardStatus: "SHIPPED",
    title: "COMPONENT LIBRARY",
    cardDescription:
      "Created a reusable component library so the team could design and build consistent, on-brand pages fast.",
    cardChips: ["FIGMA", "REACT", "STORYBOOK"],
    pageEyebrow: "WEB DESIGN / DEVELOPMENT",
    headingLine1: "COMPONENT",
    headingLine2: "LIBRARY",
    summary:
      "A reusable component library and design system for a fintech product — so designers and engineers could build consistent, on-brand pages quickly and confidently.",
    role: "DESIGN SYSTEMS",
    year: "2022",
    type: "DESIGN SYSTEM",
    overview:
      "As the product grew, every new page reinvented buttons, forms, and layouts, and things drifted out of sync. I built a shared component library that gave the team a single source of truth for design and code.",
    challenge:
      "Bring design and engineering onto the same system, keep it flexible enough for real product needs, and document it so people would actually use it.",
    whatIDid: [
      "Defined design tokens for color, type, and spacing in Figma.",
      "Built accessible React components mirrored to the Figma library.",
      "Documented usage and states in Storybook for the whole team.",
      "Rolled it out with guidelines so adoption stuck.",
    ],
    outcome:
      "Pages became consistent and on-brand by default, design-to-dev handoff got dramatically faster, and the team shipped new features without rebuilding the basics every time.",
    tools: ["FIGMA", "REACT", "STORYBOOK", "DESIGN TOKENS", "CSS", "A11Y"],
    ctaLabel: "VIEW THE SYSTEM",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
