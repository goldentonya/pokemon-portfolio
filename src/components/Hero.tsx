import PixelButton from "./PixelButton";

const CHIPS: { label: string; className: string }[] = [
  { label: "CONVERSION RATE OPTIMIZATION", className: "bg-accent-orange" },
  { label: "GOOGLE ANALYTICS 4", className: "bg-poke-blue" },
  { label: "TAG MANAGER", className: "bg-grass-green" },
  { label: "A/B TESTING", className: "bg-psychic-purple" },
  { label: "WEB DEVELOPER", className: "bg-fire-red" },
  { label: "UI/UX", className: "bg-poke-blue" },
  { label: "AI-ASSISTED WORKFLOWS", className: "bg-grass-green" },
];

const MARQUEE_TEXT =
  "FRONT-END DEVELOPER • UI/UX DESIGNER • CREATIVE TECHNOLOGIST • CONVERSION-FOCUSED DESIGNER • ";

/**
 * animate-drift shifts by exactly -50%, so the track must be built from two
 * identical halves for the loop to be seamless. Repeat the (now much shorter)
 * text enough times per half that it still fills very wide viewports without
 * a gap — a single copy is no longer wide enough to do that on its own.
 */
const MARQUEE_REPEATS_PER_HALF = 8;

export default function Hero() {
  return (
    <header id="top" className="relative flex min-h-[calc(100dvh-var(--nav-h))] flex-col overflow-hidden">
      <div className="relative flex flex-1 flex-col justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#2a75bb22 2px, transparent 2px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-6 px-[clamp(16px,4vw,40px)] py-[clamp(32px,6vw,56px)] md:grid-cols-[1.15fr_.85fr]">
        <div className="relative z-2">
          <div className="inline-block rounded-[20px] border-[3px] border-ink bg-pikachu-yellow px-[14px] py-[7px] font-pixel text-[12px] tracking-wide text-ink">
            ▸ DESIGN &amp; FRONT-END DEVELOPER · LV.99
          </div>
          <h1 className="mt-5 font-heading text-[clamp(28px,5vw,42px)] leading-[1.5] text-ink">
            <span className="text-fire-red">LEVEL UP</span>
            <br />
            YOUR <span className="text-poke-blue">CONVERSION</span>
          </h1>
          <p className="mt-4 max-w-[480px] text-[clamp(17px,4.4vw,20px)] leading-[1.65] text-body">
            I design and build responsive, high-converting web interfaces, pairing clean front-end
            code with user-centered UX. Backed by years in experimentation and Conversion Rate
            Optimization (CRO), every design decision is as data-informed as it is beautiful. The
            Force of data guides every pixel.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <PixelButton
              href="#contact"
              className="bg-fire-red text-white shadow-[5px_5px_0_#17171b] hover:shadow-[7px_7px_0_#17171b]"
            >
              ▶ CONTACT
            </PixelButton>
            <PixelButton
              href="#work"
              className="bg-white text-ink shadow-[5px_5px_0_#2a75bb] hover:shadow-[7px_7px_0_#2a75bb]"
            >
              CASE STUDIES
            </PixelButton>
          </div>
          <div className="mt-5 flex flex-wrap gap-[8px]">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`rounded-[14px] border-2 border-ink px-[10px] py-[5px] font-pixel text-[10px] text-white ${chip.className}`}
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
          <div className="flex items-end justify-center gap-[clamp(12px,5vw,28px)]">
            <div className="animate-bobslow" style={{ animationDuration: "2.2s" }}>
              <img
                src="/sprites/mewtwo-pixel-2-7491df59.png"
                alt="Mewtwo"
                className="pixelated w-[84px] sm:w-[96px]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div className="animate-bobslow" style={{ animationDuration: "2.2s", animationDelay: "0.4s" }}>
              <img
                src="/sprites/charizard-pixel-464af05b.png"
                alt="Charizard"
                className="pixelated w-[80px] sm:w-[92px]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div className="animate-bobslow" style={{ animationDuration: "2.2s", animationDelay: "0.8s" }}>
              <img
                src="/sprites/alakazam-pixel.png"
                alt="Alakazam"
                className="pixelated w-[90px] sm:w-[104px]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="overflow-hidden border-y-[5px] border-ink bg-poke-blue">
        <div className="flex w-max animate-drift py-3 font-pixel text-[14px] tracking-[2px] text-pikachu-yellow">
          {Array.from({ length: MARQUEE_REPEATS_PER_HALF * 2 }).map((_, i) => (
            <span key={i} className="px-[22px]">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
