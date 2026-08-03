import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";

const STEPS: { number: string; borderClass: string; shadowClass: string; badgeBgClass: string; badgeTextClass: string; title: string; titleClass: string; body: string }[] = [
  {
    number: "01",
    borderClass: "border-pikachu-yellow",
    shadowClass: "shadow-[6px_6px_0_#e3350d]",
    badgeBgClass: "bg-pikachu-yellow",
    badgeTextClass: "text-ink",
    titleClass: "text-pikachu-yellow",
    title: "WHERE IT STARTED: DESIGN",
    body: "My path began in design, learning how to think about layout, color, and user experience long before I ever wrote a line of code.",
  },
  {
    number: "02",
    borderClass: "border-poke-blue",
    shadowClass: "shadow-[6px_6px_0_#2a75bb]",
    badgeBgClass: "bg-poke-blue",
    badgeTextClass: "text-white",
    titleClass: "text-[#7fbaff]",
    title: "SELF-TAUGHT IN FRONT-END DEV",
    body: "I taught myself front-end development so I could build the things I was designing, and it grew into a genuine love for writing code.",
  },
  {
    number: "03",
    borderClass: "border-fire-red",
    shadowClass: "shadow-[6px_6px_0_#ffcb05]",
    badgeBgClass: "bg-fire-red",
    badgeTextClass: "text-white",
    titleClass: "text-[#ff8a7a]",
    title: "INTO CRO & DATA ANALYSIS",
    body: "That path led me into conversion rate optimization and A/B testing, where I became fluent in data analysis and using real user behavior to guide decisions.",
  },
];

const STATS: { value: string; label: string; borderClass: string; shadowClass: string; valueClass: string }[] = [
  { value: "2018", label: "ESTABLISHED IN", borderClass: "border-pikachu-yellow", shadowClass: "shadow-[5px_5px_0_#ffcb05]", valueClass: "text-pikachu-yellow" },
  { value: "113+", label: "EXPERIMENTS RAN", borderClass: "border-poke-blue", shadowClass: "shadow-[5px_5px_0_#2a75bb]", valueClass: "text-[#7fbaff]" },
  { value: "12+", label: "INTERFACES BUILT", borderClass: "border-fire-red", shadowClass: "shadow-[5px_5px_0_#e3350d]", valueClass: "text-[#ff8a7a]" },
];

export default function Origin() {
  return (
    <section id="origin" className="relative overflow-hidden border-y-[5px] border-ink bg-ink">
      <CornerSprite src="/sprites/gyarados-pixel-e9dd4a8b.png" corner="top" side="left" size={120} durationMs={3400} flip />
      <CornerSprite src="/sprites/pikachu-pixel-2.png" corner="bottom" side="right" size={104} />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,84px)]">
        <Reveal>
          <div className="font-heading text-[14px] text-pikachu-yellow">◦ THE BACKSTORY ◦</div>
          <h2
            className="mt-[18px] font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-white"
            style={{ textShadow: "3px 3px 0 #e3350d" }}
          >
            A PATH FROM DESIGN,
            <br />
            TO CODE, TO DATA
          </h2>
        </Reveal>

        <div className="mt-[46px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 80}
              className={`relative rounded-[18px] border-4 bg-dark-card px-[22px] py-[26px] ${step.borderClass} ${step.shadowClass}`}
            >
              <div
                className={`absolute -top-4 left-[22px] rounded-[10px] border-[3px] border-ink px-3 py-2 font-heading text-[14px] ${step.badgeBgClass} ${step.badgeTextClass}`}
              >
                {step.number}
              </div>
              <div className={`mt-3 font-pixel text-[12px] ${step.titleClass}`}>{step.title}</div>
              <p className="mt-3 text-[clamp(15px,3.8vw,17px)] leading-[1.7] text-dark-text">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-11 text-[clamp(16px,4.2vw,19px)] leading-[1.8] text-dark-text-muted text-pretty">
          I started out in design, learning how to craft interfaces that felt intuitive and looked
          great. From there I taught myself front-end development so I could build the things I
          was designing, and it quickly grew into a genuine love for writing code. That love led
          me to start college and graduate with an Associate&rsquo;s Degree in Computer Science.
          From there I began my career doing front-end development work. Eventually I was moved
          into a CRO specialist role at my current company, where I became familiar with data
          analysis, experiment design, and using real user behavior to inform every decision.
          Today I bring all three together, design, development, and data, to build interfaces
          that are as intuitive as they are effective.
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={`rounded-2xl border-4 bg-dark-card px-[18px] py-[18px] text-center ${stat.borderClass} ${stat.shadowClass}`}
            >
              <div className={`font-heading text-[22px] ${stat.valueClass}`}>{stat.value}</div>
              <div className="mt-2 font-pixel text-[11px] text-dark-text">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
