import Image, { type StaticImageData } from "next/image";
import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";
import designIcon from "@/assets/skills-icons/design.png";
import webDevelopmentIcon from "@/assets/skills-icons/web-development.png";
import analyticsIcon from "@/assets/skills-icons/analytics.png";
import toolsIcon from "@/assets/skills-icons/tools.png";
import productGrowthIcon from "@/assets/skills-icons/product-growth.png";
import aiAutomationIcon from "@/assets/skills-icons/ai-automation.png";

type Skill = {
  label: string;
  level: string;
  shadowClass: string;
  levelTextClass: string;
  barGradient: string;
  width: string;
};

const SKILLS: Skill[] = [
  {
    label: "WEB DESIGN",
    level: "LV.95",
    shadowClass: "shadow-[5px_5px_0_#e3350d]",
    levelTextClass: "text-fire-red",
    barGradient: "repeating-linear-gradient(90deg,#e3350d 0 10px,#ff6a52 10px 12px)",
    width: "95%",
  },
  {
    label: "FRONT-END DEV",
    level: "LV.88",
    shadowClass: "shadow-[5px_5px_0_#2a75bb]",
    levelTextClass: "text-poke-blue",
    barGradient: "repeating-linear-gradient(90deg,#2a75bb 0 10px,#5b9de0 10px 12px)",
    width: "88%",
  },
  {
    label: "A/B EXPERIMENTS",
    level: "LV.99",
    shadowClass: "shadow-[5px_5px_0_#ffcb05]",
    levelTextClass: "text-[#c99700]",
    barGradient: "repeating-linear-gradient(90deg,#f0a30a 0 10px,#ffcb05 10px 12px)",
    width: "99%",
  },
  {
    label: "ANALYTICS",
    level: "LV.92",
    shadowClass: "shadow-[5px_5px_0_#3b9c4a]",
    levelTextClass: "text-grass-green",
    barGradient: "repeating-linear-gradient(90deg,#3b9c4a 0 10px,#6cc47a 10px 12px)",
    width: "92%",
  },
  {
    label: "UI DESIGN",
    level: "LV.90",
    shadowClass: "shadow-[5px_5px_0_#7b62c9]",
    levelTextClass: "text-psychic-purple",
    barGradient: "repeating-linear-gradient(90deg,#7b62c9 0 10px,#a58ee0 10px 12px)",
    width: "90%",
  },
  {
    label: "CRO STRATEGY",
    level: "LV.97",
    shadowClass: "shadow-[5px_5px_0_#17171b]",
    levelTextClass: "text-ink",
    barGradient: "repeating-linear-gradient(90deg,#17171b 0 10px,#3b4557 10px 12px)",
    width: "97%",
  },
];

type SkillCategory = {
  title: string;
  /** Custom Poké Ball badge icon, cropped from src/assets/pokemon-icons.png. */
  iconSprite: StaticImageData;
  borderClass: string;
  shadowClass: string;
  iconBgClass: string;
  chipClass: string;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "UI/UX DESIGN",
    iconSprite: designIcon,
    borderClass: "border-psychic-purple",
    shadowClass: "shadow-[5px_5px_0_#7b62c9]",
    iconBgClass: "border-psychic-purple bg-[#f1edfb] text-psychic-purple",
    chipClass: "border-psychic-purple bg-[#f1edfb] text-psychic-purple",
    skills: [
      "UI DESIGN",
      "VISUAL DESIGN",
      "DESIGN SYSTEMS",
      "WIREFRAMING",
      "USER FLOWS",
      "PROTOTYPING",
      "USABILITY TESTING",
    ],
  },
  {
    title: "FRONT-END DEVELOPMENT",
    iconSprite: webDevelopmentIcon,
    borderClass: "border-poke-blue",
    shadowClass: "shadow-[5px_5px_0_#2a75bb]",
    iconBgClass: "border-poke-blue bg-chip-blue text-poke-blue",
    chipClass: "border-poke-blue bg-chip-blue text-poke-blue",
    skills: ["REACT", "TYPESCRIPT", "JAVASCRIPT (ES6+)", "HTML & CSS", "TAILWIND CSS", "RESPONSIVE DESIGN"],
  },
  {
    title: "PRODUCT & GROWTH",
    iconSprite: productGrowthIcon,
    borderClass: "border-fire-red",
    shadowClass: "shadow-[5px_5px_0_#e3350d]",
    iconBgClass: "border-fire-red bg-[#fdece9] text-fire-red",
    chipClass: "border-fire-red bg-[#fdece9] text-fire-red",
    skills: ["A/B TESTING", "EXPERIMENT DESIGN", "CONVERSION RATE OPTIMIZATION", "FUNNEL ANALYSIS"],
  },
  {
    title: "ANALYTICS",
    iconSprite: analyticsIcon,
    borderClass: "border-grass-green",
    shadowClass: "shadow-[5px_5px_0_#3b9c4a]",
    iconBgClass: "border-grass-green bg-[#eaf7ec] text-grass-green",
    chipClass: "border-grass-green bg-[#eaf7ec] text-grass-green",
    skills: [
      "DATA ANALYSIS",
      "KPI TRACKING",
      "DASHBOARDING",
      "COHORT ANALYSIS",
      "ATTRIBUTION MODELING",
      "SEGMENTATION",
      "STATISTICAL SIGNIFICANCE TESTING",
    ],
  },
  {
    title: "TOOLS",
    iconSprite: toolsIcon,
    borderClass: "border-accent-orange",
    shadowClass: "shadow-[5px_5px_0_#f0a30a]",
    iconBgClass: "border-accent-orange bg-[#fdf1e3] text-accent-orange",
    chipClass: "border-accent-orange bg-[#fdf1e3] text-accent-orange",
    skills: [
      "FIGMA",
      "GIT",
      "VITE",
      "WORDPRESS",
      "GOOGLE ANALYTICS",
      "SALESFORCE",
      "DATORAMA",
      "VWO",
      "HOTJAR",
      "VS CODE",
      "POSTHOG",
    ],
  },
  {
    title: "AI & AUTOMATION",
    iconSprite: aiAutomationIcon,
    borderClass: "border-pikachu-yellow",
    shadowClass: "shadow-[5px_5px_0_#ffcb05]",
    iconBgClass: "border-pikachu-yellow bg-[#fff6d6] text-[#c99700]",
    chipClass: "border-pikachu-yellow bg-[#fff6d6] text-[#c99700]",
    skills: ["CHATGPT", "CLAUDE CODE", "CLAUDE DESIGN", "LOVABLE", "MANUS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y-[5px] border-ink bg-light-blue-band">
      <CornerSprite src="/sprites/pikachu-pixel-3-c83674dd.png" corner="top" side="right" size={100} durationMs={2800} />
      <CornerSprite src="/sprites/alakazam-pixel.png" corner="bottom" side="left" size={110} flip />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-grass-green">▸ STAT SHEET</div>
          <h2 className="mt-4 font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-ink">SKILLS &amp; MOVES</h2>
        </Reveal>

        <Reveal className="mt-11 flex items-center gap-[14px]">
          <span className="rounded-[14px] border-[3px] border-ink bg-poke-blue px-[14px] py-[7px] font-pixel text-[12px] text-white">
            TOP SKILLS
          </span>
          <div
            className="h-1 flex-1"
            style={{ backgroundImage: "repeating-linear-gradient(90deg,#17171b 0 8px,transparent 8px 14px)" }}
          />
        </Reveal>

        <div className="mt-[22px] grid grid-cols-1 gap-[22px_40px] sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <Reveal
              key={skill.label}
              delay={i * 60}
              className={`rounded-2xl border-4 border-ink bg-white px-6 py-[22px] ${skill.shadowClass}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <span className="font-heading text-[13px] text-ink">{skill.label}</span>
                <span className={`font-pixel text-[11px] ${skill.levelTextClass}`}>{skill.level}</span>
              </div>
              <div className="mt-[14px] h-[18px] overflow-hidden rounded-[6px] border-[3px] border-ink bg-cream">
                <div className="h-full" style={{ width: skill.width, backgroundImage: skill.barGradient }} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[52px] flex items-center gap-[14px]">
          <span className="rounded-[14px] border-[3px] border-ink bg-pikachu-yellow px-[14px] py-[7px] font-pixel text-[12px] text-ink">
            FULL SKILL SET
          </span>
          <div
            className="h-1 flex-1"
            style={{ backgroundImage: "repeating-linear-gradient(90deg,#17171b 0 8px,transparent 8px 14px)" }}
          />
        </Reveal>

        <div className="mt-[22px] grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 60}
              className={`rounded-2xl border-4 bg-white px-6 py-[22px] ${category.borderClass} ${category.shadowClass}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-2 ${category.iconBgClass}`}
                >
                  <Image src={category.iconSprite} alt="" className="h-8 w-8 object-contain" />
                </span>
                <h3 className="font-heading text-[13px] leading-[1.4] text-ink">{category.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-[8px]">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-xl border-2 px-[10px] py-[5px] font-pixel text-[10px] ${category.chipClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
