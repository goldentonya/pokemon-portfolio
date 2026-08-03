export type HPTone = "green" | "yellow" | "red" | "blue";

/** Striped fills matching the stat bars in Skills.tsx. Commas force inline style, not a class. */
const HP_GRADIENT: Record<HPTone, string> = {
  green: "repeating-linear-gradient(90deg,#3b9c4a 0 10px,#6cc47a 10px 12px)",
  yellow: "repeating-linear-gradient(90deg,#f0a30a 0 10px,#ffcb05 10px 12px)",
  red: "repeating-linear-gradient(90deg,#e3350d 0 10px,#ff6a52 10px 12px)",
  blue: "repeating-linear-gradient(90deg,#2a75bb 0 10px,#5b9de0 10px 12px)",
};

/**
 * Decorative HP meter. Deliberately aria-hidden: the value is flavor, not data,
 * so it must not be announced as if it were a real measurement.
 */
export default function HPBar({
  percent,
  tone,
  className = "",
}: {
  percent: number;
  tone: HPTone;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`h-[18px] overflow-hidden rounded-[6px] border-[3px] border-ink bg-cream ${className}`.trim()}
    >
      <div className="h-full" style={{ width: `${percent}%`, backgroundImage: HP_GRADIENT[tone] }} />
    </div>
  );
}
