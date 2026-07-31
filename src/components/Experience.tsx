import CornerSprite from "./CornerSprite";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";

type Role = {
  title: string;
  dates: string;
  body: string;
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
};

const COMPANIES: Company[] = [
  {
    name: "CURRENT COMPANY",
    tenure: "2017 – PRESENT · SAAS / E-COMMERCE",
    badge: "2 PROMOTIONS",
    headerBgClass: "bg-pikachu-yellow",
    badgeBgClass: "bg-fire-red",
    roles: [
      {
        title: "HEAD OF EXPERIMENTATION",
        dates: "2021 – PRESENT",
        body: "Built and led a company-wide testing program, scaling from ad-hoc tests to 100+ experiments a year and a culture of evidence.",
        dotClass: "bg-fire-red",
        current: true,
      },
      {
        title: "SR. CRO STRATEGIST",
        dates: "2017 – 2021",
        body: "Owned conversion strategy across web and mobile funnels, lifting revenue per visitor through disciplined experimentation.",
        dotClass: "bg-accent-orange",
      },
    ],
  },
  {
    name: "PREVIOUS COMPANY",
    tenure: "2012 – 2017 · PRODUCT / RESEARCH",
    badge: "2 PROMOTIONS",
    headerBgClass: "bg-[#bfe3ff]",
    badgeBgClass: "bg-poke-blue",
    roles: [
      {
        title: "PRODUCT ANALYST",
        dates: "2014 – 2017",
        body: "Turned analytics into roadmaps — funnel analysis, cohort insight, and the first A/B tests that started it all.",
        dotClass: "bg-psychic-purple",
      },
      {
        title: "UX RESEARCHER",
        dates: "2012 – 2014",
        body: "Ran usability studies and interviews, learning that the best optimizations start with listening to real users.",
        dotClass: "bg-grass-green",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden border-y-[5px] border-ink bg-poke-blue">
      <CornerSprite src="/sprites/charizard-pixel-2-f44b5722.png" corner="top" side="left" size={104} durationMs={3200} />
      <CornerSprite src="/sprites/snorlax-pixel.png" corner="bottom" side="right" size={120} durationMs={3400} />

      <div className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,80px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-pikachu-yellow">▸ GYM BADGES EARNED</div>
          <h2
            className="mt-4 font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-white"
            style={{ textShadow: "3px 3px 0 #17171b" }}
          >
            THE JOURNEY SO FAR
          </h2>
        </Reveal>

        <div className="mx-auto mt-11 flex max-w-[920px] flex-col gap-7">
          {COMPANIES.map((company) => (
            <Reveal
              key={company.name}
              className="overflow-hidden rounded-[20px] border-4 border-ink bg-cream shadow-[7px_7px_0_#17171b]"
            >
              <div className={`flex items-center gap-4 border-b-4 border-ink px-6 py-5 ${company.headerBgClass}`}>
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border-[3px] border-ink bg-white">
                  <ImageSlot label="logo" className="h-full text-[8px]" />
                </div>
                <div className="flex-1">
                  <div className="font-heading text-[16px] text-ink">{company.name}</div>
                  <div className="mt-[6px] font-pixel text-[12px] text-body">{company.tenure}</div>
                </div>
                <span
                  className={`shrink-0 whitespace-nowrap rounded-[14px] border-2 border-ink px-3 py-[6px] font-pixel text-[11px] text-white ${company.badgeBgClass}`}
                >
                  {company.badge}
                </span>
              </div>

              <div className="px-6 pt-2 pb-[22px]">
                {company.roles.map((role, i) => (
                  <div
                    key={role.title}
                    className={`flex gap-4 py-[18px] ${
                      i < company.roles.length - 1 ? "border-b-2 border-dashed border-divider" : "pb-1"
                    }`}
                  >
                    <div className={`mt-[6px] h-[14px] w-[14px] shrink-0 rounded-full border-[3px] border-ink ${role.dotClass}`} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-[10px]">
                        <span className="font-heading text-[14px] text-ink">{role.title}</span>
                        {role.current && (
                          <span className="rounded-xl border-2 border-ink bg-grass-green px-[10px] py-1 font-pixel text-[11px] text-white">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="mt-2 font-pixel text-[12px] text-fire-red">{role.dates}</div>
                      <p className="mt-[10px] text-[16px] leading-[1.6] text-body">{role.body}</p>
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
