import CornerSprite from "./CornerSprite";
import ContactForm from "./ContactForm";
import PixelButton from "./PixelButton";
import Reveal from "./Reveal";

const SOCIALS: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tonyagolden/",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8h-4V9z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/goldentonya",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: "Contra",
    href: "https://contra.com/tonya_golden_dejqwygh",
    icon: <span className="font-heading text-[13px]">C</span>,
  },
  {
    label: "Email",
    href: "mailto:goldentonya33@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)] pb-20">
      <CornerSprite src="/sprites/charizard-pixel-2-f44b5722.png" corner="top" side="right" size={100} />
      <CornerSprite src="/sprites/eevee-pixel.png" corner="bottom" side="left" size={104} durationMs={2800} flip />

      <Reveal
        className="relative z-2 overflow-hidden rounded-[24px] border-[5px] border-ink shadow-[8px_8px_0_#17171b]"
        style={{ background: "linear-gradient(150deg, #e3350d, #f0a30a)" }}
      >
        <div
          className="pointer-events-none absolute -top-[30px] -right-[30px] h-[clamp(90px,22vw,140px)] w-[clamp(90px,22vw,140px)] animate-spinslow rounded-full border-[5px] border-ink opacity-35"
          style={{ background: "linear-gradient(#e3350d 0 50%, #fff 50% 100%)" }}
        />

        <div className="relative grid grid-cols-1 gap-10 px-[clamp(20px,6vw,44px)] py-[clamp(36px,8vw,56px)] md:grid-cols-2 md:items-start">
          <div className="rounded-[18px] border-4 border-ink bg-cream p-6 text-left shadow-[6px_6px_0_#17171b]">
            <div className="font-heading text-[12px] text-fire-red">▸ SEND A MESSAGE</div>
            <h3 className="mt-3 font-heading text-[16px] leading-[1.5] text-ink">GET IN TOUCH</h3>
            <ContactForm />
          </div>

          <div className="text-center md:text-left">
            <div className="font-heading text-[14px] text-pikachu-yellow" style={{ textShadow: "2px 2px 0 #17171b" }}>
              ▸ READY PLAYER TWO?
            </div>
            <h2
              className="mt-[18px] font-heading text-[clamp(22px,5vw,30px)] leading-[1.5] text-white"
              style={{ textShadow: "3px 3px 0 #17171b" }}
            >
              LET&rsquo;S BATTLE
              <br />
              TEST YOUR CONVERSION
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[clamp(16px,4.2vw,19px)] leading-[1.65] text-cream md:mx-0">
              Bring me your funnels, your hunches, and your hardest growth questions. We&rsquo;ll turn them into
              experiments and results.
            </p>
            <div className="mt-[34px] flex flex-wrap justify-center gap-4 md:justify-start">
              <PixelButton
                href="https://calendly.com/goldentonya33"
                newTab
                className="bg-white text-ink shadow-[5px_5px_0_#2a75bb] hover:shadow-[7px_7px_0_#2a75bb]"
              >
                ▶ BOOK A CALL
              </PixelButton>
              <PixelButton
                href="/Tonya_Golden_Master_Resume_v1.docx"
                className="bg-pikachu-yellow text-ink shadow-[5px_5px_0_#17171b] hover:shadow-[7px_7px_0_#17171b]"
              >
                ⬇ RESUME
              </PixelButton>
            </div>

            <div className="mt-9">
              <div
                className="font-pixel text-[11px] tracking-wide text-white/80"
                style={{ textShadow: "1px 1px 0 #17171b" }}
              >
                ▸ FIND ME ELSEWHERE
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-3 md:justify-start">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-ink bg-white text-ink shadow-[3px_3px_0_#17171b] transition-transform duration-150 ease-out hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_#17171b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div
                className="mt-4 flex items-center justify-center gap-2 font-pixel text-[11px] tracking-wide text-white/80 md:justify-start"
                style={{ textShadow: "1px 1px 0 #17171b" }}
              >
                📍 TAMPA, FLORIDA
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
