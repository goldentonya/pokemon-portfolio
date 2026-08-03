import type { ReactNode } from "react";

type Accent = "blue" | "fire" | "grass" | "yellow";

const ACCENT_SHADOW: Record<Accent, string> = {
  blue: "shadow-[7px_7px_0_#2a75bb]",
  fire: "shadow-[7px_7px_0_#e3350d]",
  grass: "shadow-[7px_7px_0_#3b9c4a]",
  yellow: "shadow-[7px_7px_0_#ffcb05]",
};

const ACCENT_TEXT: Record<Accent, string> = {
  blue: "text-poke-blue",
  fire: "text-fire-red",
  grass: "text-grass-green",
  yellow: "text-[#c99700]",
};

type BattleTextBoxProps = {
  headline?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  accent?: Accent;
  showCursor?: boolean;
  className?: string;
};

/**
 * The classic Game Boy dialogue box: a thick outer frame with a thin inner frame
 * inset from it, plus a blinking continue cursor. The headline is a <p>, not a
 * heading — the surrounding section already owns the heading level.
 */
export default function BattleTextBox({
  headline,
  children,
  tone = "light",
  accent = "blue",
  showCursor = true,
  className = "",
}: BattleTextBoxProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`rounded-[16px] border-[5px] border-ink p-[7px] ${dark ? "bg-ink" : "bg-white"} ${ACCENT_SHADOW[accent]} ${className}`.trim()}
    >
      <div
        className={`relative rounded-[9px] border-[3px] px-[clamp(18px,3.5vw,30px)] py-[clamp(20px,3.5vw,28px)] ${
          dark ? "border-[#4a5468] bg-dark-card" : "border-ink bg-cream"
        }`}
      >
        {headline && (
          <p
            className={`font-heading text-[clamp(13px,2.6vw,16px)] leading-[1.65] ${
              dark ? "text-pikachu-yellow" : ACCENT_TEXT[accent]
            }`}
          >
            {headline}
          </p>
        )}
        <div
          className={`${headline ? "mt-5" : ""} text-[clamp(16px,4vw,18px)] leading-[1.75] ${
            dark ? "text-dark-text" : "text-body"
          }`}
        >
          {children}
        </div>
        {showCursor && (
          <span
            aria-hidden
            className={`absolute right-4 bottom-3 animate-blink font-pixel text-[14px] ${
              dark ? "text-pikachu-yellow" : "text-fire-red"
            }`}
          >
            ▼
          </span>
        )}
      </div>
    </div>
  );
}
