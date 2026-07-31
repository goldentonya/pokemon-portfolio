import CornerSprite from "./CornerSprite";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";

const BIO = [
  "I'm Tonya Golden, a conversion optimization expert who's spent 12+ years turning messy data into confident product decisions. I design experimentation programs, run rigorous A/B tests, and untangle user journeys so teams stop guessing and start winning.",
  "Think of me as your battle strategist: every hypothesis is a matchup, every metric a move, and the data always calls the shot.",
  "Travel is a big passion of mine, and I'm always looking forward to the next trip. At the top of my bucket list is visiting Japan, a place I've wanted to experience for a long time.",
  "I'm also a big music fan and love going to concerts whenever I can. And I'm definitely a nerd at heart — I've always loved Pokémon, Star Wars, and anime like Bleach, Demon Slayer, Black Clover, and many more.",
];

const LIFE_GRID_SHADOWS = [
  "shadow-[5px_5px_0_#ffcb05]",
  "shadow-[5px_5px_0_#2a75bb]",
  "shadow-[5px_5px_0_#e3350d]",
  "shadow-[5px_5px_0_#3b9c4a]",
  "shadow-[5px_5px_0_#7b62c9]",
  "shadow-[5px_5px_0_#f0a30a]",
  "shadow-[5px_5px_0_#2a75bb]",
  "shadow-[5px_5px_0_#e3350d]",
  "shadow-[5px_5px_0_#ffcb05]",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1160px] overflow-hidden px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)] pb-[60px]"
    >
      <CornerSprite src="/sprites/pikachu-pixel-b4bcc4ea.png" corner="top" side="left" size={96} />
      <CornerSprite src="/sprites/gengar-0f29c816.png" corner="bottom" side="right" size={96} durationMs={3200} />

      <Reveal className="grid grid-cols-1 items-start gap-11 md:grid-cols-[.85fr_1.15fr]">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-[20px] border-4 border-ink shadow-[6px_6px_0_#17171b]"
          style={{ background: "linear-gradient(160deg, #bfe3ff, #2a75bb)" }}
        >
          <ImageSlot label="Drop your photo or a trainer sprite" className="h-full" variant="transparent" />
          <div className="absolute inset-x-0 bottom-0 truncate bg-[#17171bcc] px-[14px] py-3 font-pixel text-[12px] text-pikachu-yellow">
            TRAINER · TONYA GOLDEN
          </div>
        </div>

        <div>
          <div className="font-heading text-[14px] text-poke-blue">▸ THE TRAINER</div>
          <h2 className="mt-[18px] font-heading text-[clamp(22px,4vw,30px)] leading-[1.5] break-words text-ink">
            DATA IS <span className="text-fire-red">SUPER EFFECTIVE</span>
          </h2>
          {BIO.map((paragraph, i) => (
            <p key={i} className="mt-4 text-[19px] leading-[1.7] text-body first:mt-[22px]">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {LIFE_GRID_SHADOWS.map((shadow, i) => (
          <Reveal
            key={i}
            delay={i * 40}
            className={`aspect-square overflow-hidden rounded-2xl border-4 border-ink bg-white ${shadow}`}
          >
            <ImageSlot label="Drop a life photo" className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
