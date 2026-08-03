import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";

const SERVICES: { badge: string; badgeClass: string; title: string; body: string }[] = [
  {
    badge: "NORMAL",
    badgeClass: "bg-accent-orange text-white",
    title: "A/B & MULTIVARIATE TESTING",
    body: "Rigorous, statistically-sound tests from hypothesis to readout.",
  },
  {
    badge: "ANALYTICS",
    badgeClass: "bg-poke-blue text-white",
    title: "MEASUREMENT & TRACKING",
    body: "Clean analytics you can trust, wired to the metrics that matter.",
  },
  {
    badge: "FIRE",
    badgeClass: "bg-fire-red text-white",
    title: "CRO AUDITS",
    body: "A full teardown of your funnel with a prioritized win list.",
  },
  {
    badge: "PSYCHIC",
    badgeClass: "bg-psychic-purple text-white",
    title: "UI DESIGN",
    body: "Clean, on brand interfaces built to convert, not just to look good.",
  },
  {
    badge: "GRASS",
    badgeClass: "bg-grass-green text-white",
    title: "LANDING PAGE OPTIMIZATION",
    body: "High-converting pages built on evidence, not opinions.",
  },
  {
    badge: "ELECTRIC",
    badgeClass: "bg-pikachu-yellow text-ink",
    title: "FRONT END DEVELOPMENT",
    body: "Fast, responsive sites built with clean, maintainable code.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-y-[5px] border-ink bg-light-blue-band">
      <CornerSprite src="/sprites/mewtwo-pixel-2-7491df59.png" corner="top" side="right" size={100} durationMs={3200} flip />
      <CornerSprite src="/sprites/bulbasaur-pixel-92942b42.png" corner="bottom" side="left" size={110} flip />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,80px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-psychic-purple">▸ CHOOSE YOUR MOVES</div>
          <h2 className="mt-4 font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-ink">SERVICES</h2>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 50}
              className="rounded-2xl border-4 border-ink bg-cream p-6 shadow-[5px_5px_0_#17171b]"
            >
              <span className={`rounded-xl border-2 border-ink px-[10px] py-[5px] font-pixel text-[10px] ${service.badgeClass}`}>
                {service.badge}
              </span>
              <h3 className="mt-4 font-heading text-[14px] leading-[1.5] text-ink">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-body">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
