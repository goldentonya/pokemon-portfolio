import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";

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
    label: "UX RESEARCH",
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

const TOOLS = ["FIGMA", "HTML / CSS / JS", "OPTIMIZELY", "VWO", "GA4", "HOTJAR", "SQL"];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y-[5px] border-ink bg-white">
      <CornerSprite src="/sprites/pikachu-pixel-3-c83674dd.png" corner="top" side="right" size={100} durationMs={2800} />
      <CornerSprite src="/sprites/alakazam-pixel.png" corner="bottom" side="left" size={110} />

      <div className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-grass-green">▸ STAT SHEET</div>
          <h2 className="mt-4 font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-ink">SKILLS &amp; MOVES</h2>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-[22px_40px] sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <Reveal
              key={skill.label}
              delay={i * 60}
              className={`rounded-2xl border-4 border-ink bg-white px-6 py-[22px] ${skill.shadowClass}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-[13px] text-ink">{skill.label}</span>
                <span className={`font-pixel text-[11px] ${skill.levelTextClass}`}>{skill.level}</span>
              </div>
              <div className="mt-[14px] h-[18px] overflow-hidden rounded-[6px] border-[3px] border-ink bg-cream">
                <div className="h-full" style={{ width: skill.width, backgroundImage: skill.barGradient }} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[34px] flex flex-wrap justify-center gap-[10px]">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-[14px] border-2 border-ink bg-white px-3 py-[6px] font-pixel text-[11px] text-ink"
            >
              {tool}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
