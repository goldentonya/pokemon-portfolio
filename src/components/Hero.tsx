import PixelButton from "./PixelButton";

const CHIPS: { label: string; className: string }[] = [
  { label: "A/B TESTING", className: "bg-accent-orange" },
  { label: "ANALYTICS", className: "bg-poke-blue" },
  { label: "CRO", className: "bg-grass-green" },
  { label: "UX RESEARCH", className: "bg-psychic-purple" },
];

const MARQUEE_TEXT =
  "GOTTA OPTIMIZE 'EM ALL • A/B TESTING • CONVERSION RATE OPTIMIZATION • EXPERIMENTATION • DATA-DRIVEN GROWTH • USER JOURNEYS • ";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,72px)] md:grid-cols-[1.15fr_.85fr]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#2a75bb22 2px, transparent 2px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative z-2">
          <div className="inline-block rounded-[20px] border-[3px] border-ink bg-pikachu-yellow px-[14px] py-[7px] font-pixel text-[12px] tracking-wide text-ink">
            ▸ CONVERSION TRAINER · LV.99
          </div>
          <h1 className="mt-6 font-heading text-[clamp(28px,5vw,42px)] leading-[1.5] text-ink">
            <span className="text-fire-red">LEVEL UP</span>
            <br />
            YOUR <span className="text-poke-blue">CONVERSION</span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[20px] leading-[1.65] text-body">
            I help companies evolve their conversion, optimize user journeys, and make smarter
            product decisions through experimentation. Data is my starter — and it powers every
            move.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-4">
            <PixelButton
              href="#contact"
              className="bg-fire-red text-white shadow-[5px_5px_0_#17171b] hover:shadow-[7px_7px_0_#17171b]"
            >
              ▶ BOOK A CALL
            </PixelButton>
            <PixelButton
              href="#work"
              className="bg-white text-ink shadow-[5px_5px_0_#2a75bb] hover:shadow-[7px_7px_0_#2a75bb]"
            >
              CASE STUDIES
            </PixelButton>
          </div>
          <div className="mt-9 flex flex-wrap gap-[10px]">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`rounded-[14px] border-2 border-ink px-[12px] py-[6px] font-pixel text-[11px] text-white ${chip.className}`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-2 flex flex-col items-center justify-center gap-[26px]">
          <div className="animate-bob">
            <img
              src="/sprites/pikachu-pixel-b4bcc4ea.png"
              alt="Pikachu"
              className="pixelated w-[200px] md:w-[250px]"
              style={{
                transform: "scaleX(-1)",
                filter: "drop-shadow(5px 7px 0 rgba(23,23,27,.16))",
              }}
            />
          </div>
          <div className="flex items-end gap-7">
            <div className="animate-bobslow" style={{ animationDuration: "2.2s" }}>
              <img
                src="/sprites/mewtwo-pixel-2-7491df59.png"
                alt="Mewtwo"
                className="pixelated w-[96px]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div className="animate-bobslow" style={{ animationDuration: "2.2s", animationDelay: "0.4s" }}>
              <img
                src="/sprites/charizard-pixel-464af05b.png"
                alt="Charizard"
                className="pixelated w-[92px]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div className="animate-bobslow" style={{ animationDuration: "2.2s", animationDelay: "0.8s" }}>
              <img
                src="/sprites/alakazam-pixel.png"
                alt="Alakazam"
                className="pixelated w-[104px]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y-[5px] border-ink bg-ink">
        <div className="flex w-max animate-drift py-3 font-pixel text-[14px] tracking-[2px] text-pikachu-yellow">
          <span className="px-[22px]">{MARQUEE_TEXT}</span>
          <span className="px-[22px]">{MARQUEE_TEXT}</span>
        </div>
      </div>
    </header>
  );
}
