import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";

type Role = {
  title: string;
  dates: string;
  /** Single-paragraph summary — used by the simpler, single-role cards. */
  body?: string;
  /** Bullet list of responsibilities — used by roles with itemized detail. */
  highlights?: string[];
  dotClass: string;
  current?: boolean;
};

type Company = {
  name: string;
  tenure: string;
  badge: string;
  headerBgClass: string;
  badgeBgClass: string;
  roles: Role[];
  /** Renders as a full-width featured card with roles in a 2-col grid instead of a stack. */
  featured?: boolean;
};

const COMPANIES: Company[] = [
  {
    name: "ELITE INSURANCE PARTNERS",
    tenure: "FEB 2021 – PRESENT · INSURANCE",
    badge: "3 PROMOTIONS",
    headerBgClass: "bg-pikachu-yellow",
    badgeBgClass: "bg-fire-red",
    featured: true,
    roles: [
      {
        title: "TECHNICAL PERFORMANCE STRATEGIST",
        dates: "JUL 2025 – PRESENT",
        highlights: [
          "Designed, launched, and analyzed more than 100 A/B tests across seven web properties serving over 1 million monthly visitors.",
          "Drove optimization for digital funnels generating approximately 30,000 leads per month.",
          "Increased lead-to-policy conversion from 5.8% to 6.9% through implementation and testing of a post-conversion video experience.",
          "Improved form conversion rate by 3.48% by optimizing lead capture field placement and user flow.",
        ],
        dotClass: "bg-fire-red",
        current: true,
      },
      {
        title: "MARKETING SUPERVISOR",
        dates: "JUL 2024 – JUL 2025",
        highlights: [
          "Managed and mentored a team of 10–15 marketing professionals, providing coaching, performance feedback, and guidance on project execution and priorities.",
          "Led weekly project status meetings to track progress, identify roadblocks, and develop solutions to keep initiatives on schedule.",
          "Owned project prioritization, roadmap planning, and resource allocation for the marketing department, setting timelines and monitoring deliverables to keep initiatives on goal and on schedule.",
          "Presented project updates and strategic recommendations to the Director of Marketing weekly and executive leadership biweekly.",
        ],
        dotClass: "bg-accent-orange",
      },
      {
        title: "CRO SPECIALIST",
        dates: "JAN 2022 – JUL 2024",
        highlights: [
          "Designed, implemented, and analyzed A/B tests focused on improving lead generation, conversion rates, and user engagement across company websites.",
          "Leveraged VWO, Google Analytics, and behavioral data to identify optimization opportunities and develop test hypotheses.",
          "Conducted funnel analysis and user journey reviews to uncover friction points and prioritize testing opportunities by potential business impact.",
          "Created experiment plans, success metrics, and post-test analyses to communicate findings and recommendations to leadership.",
        ],
        dotClass: "bg-poke-blue",
      },
      {
        title: "WORDPRESS DEVELOPER",
        dates: "FEB 2021 – JAN 2022",
        highlights: [
          "Managed and maintained two WordPress websites, including a large-scale content and informational site serving consumers researching Medicare and insurance-related topics.",
          "Developed and implemented website enhancements using HTML, CSS, JavaScript, and WordPress, including UI/UX design work such as wireframes and mockups to improve functionality, usability, and overall user experience.",
          "Monitored website performance, identified technical issues, and performed routine maintenance, plugin updates, and QA testing to ensure site reliability, stability, and security.",
          "Supported SEO initiatives through content updates, on-page optimization, site structure improvements, and technical enhancements.",
        ],
        dotClass: "bg-grass-green",
      },
    ],
  },
  {
    name: "BAKER WHITE INC.",
    tenure: "MAY 2018 – MAY 2020 · E-LIQUID MANUFACTURING",
    badge: "DUAL ROLE",
    headerBgClass: "bg-[#bfe3ff]",
    badgeBgClass: "bg-poke-blue",
    roles: [
      {
        title: "FRONT-END WEB DEVELOPER & GRAPHIC DESIGNER",
        dates: "MAY 2018 – MAY 2020",
        highlights: [
          "Developed and maintained multiple company websites using modern front-end technologies (HTML, CSS, JavaScript).",
          "Implemented SEO strategies to improve search visibility and organic traffic.",
          "Designed product labels and marketing graphics aligned with brand guidelines.",
          "Managed website updates, performance improvements, and content implementation.",
        ],
        dotClass: "bg-poke-blue",
      },
    ],
  },
  {
    name: "FREELANCE & CONTRACT WORK",
    tenure: "2018 – PRESENT · INDEPENDENT",
    badge: "MULTIPLE CLIENTS",
    headerBgClass: "bg-[#bdead0]",
    badgeBgClass: "bg-psychic-purple",
    roles: [
      {
        title: "THE WREN'S HOLLOW: AUDIT, REDESIGN & DEVELOPMENT",
        dates: "JUL 17 – JUL 24, 2026",
        highlights: [
          "Audited a 7-page WordPress/WooCommerce author site for indie romance/fantasy writer Ali Wren, identifying visual hierarchy and branding gaps undercutting the identity of her two series, Whiskey Tango Foxtrot and The Veiled Prophecy.",
          "Designed a plum-and-parchment visual system fit for a romance/dark-fantasy author brand, then built a custom WordPress theme reproducing it across every page.",
          "Wired up WooCommerce for signed-copy sales, including cart and checkout, alongside dedicated pages for each book series, individual titles, events, and upcoming releases.",
          "Delivered a site Ali can run herself, with a stronger visual identity, a working shop, and an events hub in place of the generic theme she started with.",
        ],
        dotClass: "bg-accent-orange",
      },
    ],
  },
];

function RoleHeader({ role }: { role: Role }) {
  return (
    <>
      <div className="flex items-start justify-between gap-[10px]">
        <span className="min-w-0 flex-1 font-heading text-[14px] leading-[1.5] text-ink">{role.title}</span>
        {role.current && (
          <span className="shrink-0 rounded-xl border-2 border-ink bg-grass-green px-[10px] py-1 font-pixel text-[11px] text-white">
            CURRENT
          </span>
        )}
      </div>
      <div className="mt-2 font-pixel text-[12px] text-fire-red">{role.dates}</div>
    </>
  );
}

function RoleBody({ role }: { role: Role }) {
  if (role.highlights) {
    return (
      <ul className="mt-[10px] list-disc space-y-1 pl-[18px] text-[15px] leading-[1.6] text-body">
        {role.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (role.body) {
    return <p className="mt-[10px] text-[16px] leading-[1.6] text-body">{role.body}</p>;
  }
  return null;
}

function CompanyHeader({ company }: { company: Company }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 border-b-4 border-ink px-6 py-5 ${company.headerBgClass}`}>
      <div className="min-w-0 flex-1">
        <div className="font-heading text-[16px] leading-[1.4] break-words text-ink">{company.name}</div>
        <div className="mt-[6px] font-pixel text-[12px] break-words text-body">{company.tenure}</div>
      </div>
      <span
        className={`shrink-0 whitespace-nowrap rounded-[14px] border-2 border-ink px-3 py-[6px] font-pixel text-[11px] text-white ${company.badgeBgClass}`}
      >
        {company.badge}
      </span>
    </div>
  );
}

export default function Experience() {
  const [featuredCompany, ...otherCompanies] = COMPANIES;

  return (
    <section id="experience" className="relative overflow-hidden border-y-[5px] border-ink bg-poke-blue">
      <CornerSprite src="/sprites/charizard-pixel-2-f44b5722.png" corner="top" side="left" size={104} durationMs={3200} flip />
      <CornerSprite src="/sprites/snorlax-pixel.png" corner="bottom" side="right" size={120} durationMs={3400} />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,80px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-pikachu-yellow">▸ GYM BADGES EARNED</div>
          <h2
            className="mt-4 font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-white"
            style={{ textShadow: "3px 3px 0 #17171b" }}
          >
            THE JOURNEY SO FAR
          </h2>
        </Reveal>

        <Reveal
          className="mt-11 overflow-hidden rounded-[20px] border-4 border-ink bg-cream shadow-[7px_7px_0_#17171b]"
        >
          <CompanyHeader company={featuredCompany} />
          <div className="grid grid-cols-1 gap-[18px] px-6 py-[22px] sm:grid-cols-2">
            {featuredCompany.roles.map((role) => (
              <div
                key={role.title}
                className="rounded-[14px] border-2 border-dashed border-divider px-5 py-[18px]"
              >
                <div className="flex gap-4">
                  <div className={`mt-[6px] h-[14px] w-[14px] shrink-0 rounded-full border-[3px] border-ink ${role.dotClass}`} />
                  <div className="flex-1">
                    <RoleHeader role={role} />
                    <RoleBody role={role} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2">
          {otherCompanies.map((company) => (
            <Reveal
              key={company.name}
              className="flex h-full flex-col overflow-hidden rounded-[20px] border-4 border-ink bg-cream shadow-[7px_7px_0_#17171b]"
            >
              <CompanyHeader company={company} />

              <div className="flex-1 px-6 pt-2 pb-[22px]">
                {company.roles.map((role, i) => (
                  <div
                    key={role.title}
                    className={`flex gap-4 py-[18px] ${
                      i < company.roles.length - 1 ? "border-b-2 border-dashed border-divider" : "pb-1"
                    }`}
                  >
                    <div className={`mt-[6px] h-[14px] w-[14px] shrink-0 rounded-full border-[3px] border-ink ${role.dotClass}`} />
                    <div className="flex-1">
                      <RoleHeader role={role} />
                      <RoleBody role={role} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
