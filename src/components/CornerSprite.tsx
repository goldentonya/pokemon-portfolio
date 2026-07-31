type CornerSpriteProps = {
  src: string;
  alt?: string;
  corner: "top" | "bottom";
  side: "left" | "right";
  size: number;
  durationMs?: number;
  delayMs?: number;
};

/**
 * Decorative mascot sprite pinned to a section corner. Right-side sprites use
 * the mirrored bob keyframe so every sprite visually faces inward.
 */
export default function CornerSprite({
  src,
  alt = "",
  corner,
  side,
  size,
  durationMs = 3000,
  delayMs = 0,
}: CornerSpriteProps) {
  const vertical = corner === "top" ? "top-5" : "bottom-5";
  const horizontal = side === "left" ? "left-5" : "right-5";
  const animation = side === "right" ? "animate-bobmslow" : "animate-bobslow";

  return (
    <img
      src={src}
      alt={alt}
      className={`pixelated pointer-events-none absolute ${vertical} ${horizontal} z-1 ${animation}`}
      style={{ width: size, height: "auto", animationDuration: `${durationMs}ms`, animationDelay: `${delayMs}ms` }}
    />
  );
}
