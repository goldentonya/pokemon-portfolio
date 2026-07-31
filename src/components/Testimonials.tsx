import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "Tonya turned our gut-feel debates into clear, tested decisions. Conversion climbed and the arguments stopped.",
    attribution: "— VP PRODUCT, SAAS CO.",
  },
  {
    quote: "She built our whole experimentation practice from scratch. Now testing is just how we work.",
    attribution: "— DIRECTOR OF GROWTH",
  },
  {
    quote: "Sharp, rigorous, and refreshingly clear. Tonya makes the data actually usable.",
    attribution: "— HEAD OF DESIGN",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y-[5px] border-ink bg-pikachu-yellow">
      <CornerSprite src="/sprites/mew-pixel-6a2c4d63.png" corner="top" side="left" size={104} durationMs={3200} />
      <CornerSprite src="/sprites/pikachu-pixel-b4bcc4ea.png" corner="bottom" side="right" size={100} durationMs={2800} />

      <div className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,76px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-fire-red">▸ TRAINER REVIEWS</div>
          <h2 className="mt-4 font-heading text-[clamp(19px,4vw,26px)] leading-[1.5] text-ink">
            WHAT THE TEAM SAYS
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal
              key={t.attribution}
              delay={i * 60}
              className="rounded-2xl border-4 border-ink bg-cream p-6 shadow-[5px_5px_0_#17171b]"
            >
              <div className="font-pixel text-[12px] text-fire-red">★★★★★</div>
              <p className="mt-[14px] text-[17px] leading-[1.6] text-ink">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 font-pixel text-[11px] text-body">{t.attribution}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
