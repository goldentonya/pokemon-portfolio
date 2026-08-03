import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "Tonya completely transformed my author website into a beautiful, polished, professional site that truly reflects my brand. She listened to my ideas and made the entire process stress-free. I'd absolutely recommend her for high-quality web design.",
    attribution: "— ALI WREN, AUTHOR",
  },
  {
    quote:
      "I've partnered with Tonya for four years as our tech and marketing teams collaborated closely. She's incredibly organized, reliable, and brings clarity and structure to even the most complex projects. I'd highly recommend her to any team.",
    attribution: "— ALYSSA SCITES, PROJECT MANAGER",
  },
  {
    quote:
      "Tonya led a wide range of CRO experiments for our team, using tools like VWO and PostHog to map funnel behavior and surface actionable insights. She doesn't just run tests, she synthesizes the data into clear reports that drive real product decisions.",
    attribution: "— JACOB CABRERA, FULL STACK ENGINEER",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y-[5px] border-ink bg-pikachu-yellow">
      <CornerSprite src="/sprites/mew-pixel-6a2c4d63.png" corner="top" side="left" size={104} durationMs={3200} flip />
      <CornerSprite src="/sprites/pikachu-pixel-b4bcc4ea.png" corner="bottom" side="right" size={100} durationMs={2800} />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,76px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-fire-red">▸ TRAINER REVIEWS</div>
          <h2 className="mt-4 font-heading text-[clamp(19px,4vw,26px)] leading-[1.5] text-ink">
            WHAT THE TEAM SAYS
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal
              key={t.attribution}
              delay={i * 60}
              className="rounded-2xl border-4 border-ink bg-cream p-6 shadow-[5px_5px_0_#17171b]"
            >
              <div className="font-pixel text-[12px] text-fire-red">★★★★★</div>
              <p className="mt-[14px] text-[clamp(15px,3.8vw,17px)] leading-[1.6] text-ink">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 font-pixel text-[11px] text-body">{t.attribution}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
