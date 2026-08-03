type CornerSpriteProps = {
  src: string;
  alt?: string;
  corner: "top" | "bottom";
  side: "left" | "right";
  /** Desktop size in px. Scales down fluidly on narrower screens — see width calc below. */
  size: number;
  /** Mirror the sprite horizontally so it faces inward, toward the section's center. */
  flip?: boolean;
  durationMs?: number;
  delayMs?: number;
  /** Hide the sprite entirely below this breakpoint, for cases where even the scaled-down size is too much. */
  hideBelow?: "sm" | "md" | "lg";
};

const HIDE_BELOW_CLASS: Record<NonNullable<CornerSpriteProps["hideBelow"]>, string> = {
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
};

/**
 * Decorative mascot sprite pinned to a section corner. The bob animation lives on
 * the wrapping div and the flip is a static transform on the img — combining both
 * on one element would let the animation's own transform overwrite the flip every frame.
 *
 * `size` is the desktop width; the rendered width scales down fluidly via clamp()
 * so a size={120} sprite isn't 32% of a 375px phone screen. The corner offsets
 * scale down too, so the sprite stays proportionally inset rather than crowding
 * the edge on small screens.
 */
export default function CornerSprite({
  src,
  alt = "",
  corner,
  side,
  size,
  flip = false,
  durationMs = 3000,
  delayMs = 0,
  hideBelow,
}: CornerSpriteProps) {
  const vertical = corner === "top" ? "top-[clamp(8px,2vw,20px)]" : "bottom-[clamp(8px,2vw,20px)]";
  const horizontal = side === "left" ? "left-[clamp(4px,1.5vw,20px)]" : "right-[clamp(4px,1.5vw,20px)]";
  const minWidth = Math.round(size * 0.33);
  const vwFactor = (size / 11).toFixed(2);

  return (
    <div
      className={`pointer-events-none absolute ${vertical} ${horizontal} z-1 animate-bobslow ${hideBelow ? HIDE_BELOW_CLASS[hideBelow] : ""}`}
      style={{ animationDuration: `${durationMs}ms`, animationDelay: `${delayMs}ms` }}
    >
      <img
        src={src}
        alt={alt}
        className="pixelated block"
        style={{
          width: `clamp(${minWidth}px, ${vwFactor}vw, ${size}px)`,
          height: "auto",
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      />
    </div>
  );
}
