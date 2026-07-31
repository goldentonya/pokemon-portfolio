import CornerSprite from "./CornerSprite";
import PixelButton from "./PixelButton";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)] pb-20">
      <Reveal
        className="relative overflow-hidden rounded-[24px] border-[5px] border-ink px-[clamp(20px,6vw,44px)] py-[clamp(36px,8vw,56px)] text-center shadow-[8px_8px_0_#17171b]"
        style={{ background: "linear-gradient(150deg, #e3350d, #f0a30a)" }}
      >
        <div
          className="pointer-events-none absolute -top-[30px] -right-[30px] h-[140px] w-[140px] animate-spinslow rounded-full border-[5px] border-ink opacity-35"
          style={{ background: "linear-gradient(#e3350d 0 50%, #fff 50% 100%)" }}
        />
        <CornerSprite src="/sprites/charizard-pixel-2-f44b5722.png" corner="top" side="right" size={100} />
        <CornerSprite src="/sprites/eevee-pixel.png" corner="bottom" side="left" size={104} durationMs={2800} />

        <div className="font-heading text-[14px] text-pikachu-yellow" style={{ textShadow: "2px 2px 0 #17171b" }}>
          ▸ READY PLAYER TWO?
        </div>
        <h2
          className="mt-[18px] font-heading text-[clamp(22px,5vw,30px)] leading-[1.5] text-white"
          style={{ textShadow: "3px 3px 0 #17171b" }}
        >
          LET&rsquo;S BATTLE-TEST
          <br />
          YOUR CONVERSION
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[19px] leading-[1.65] text-cream">
          Bring me your funnels, your hunches, and your hardest growth questions. We&rsquo;ll turn them into
          experiments — and results.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-4">
          <PixelButton
            href="mailto:hello@tonyagolden.dev"
            className="bg-ink text-white shadow-[5px_5px_0_#ffcb05] hover:shadow-[7px_7px_0_#ffcb05]"
          >
            ✉ EMAIL ME
          </PixelButton>
          <PixelButton
            href="#top"
            className="bg-white text-ink shadow-[5px_5px_0_#2a75bb] hover:shadow-[7px_7px_0_#2a75bb]"
          >
            ▶ BOOK A CALL
          </PixelButton>
          <PixelButton
            href="/resume.pdf"
            className="bg-pikachu-yellow text-ink shadow-[5px_5px_0_#17171b] hover:shadow-[7px_7px_0_#17171b]"
          >
            ⬇ RESUME
          </PixelButton>
        </div>
      </Reveal>
    </section>
  );
}
