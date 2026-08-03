import type { MoveType } from "@/lib/projects";

/** Complete literal class strings — never interpolated, so Tailwind's scanner keeps them. */
const TYPE_CLASS: Record<MoveType, string> = {
  NORMAL: "bg-accent-orange text-white",
  ANALYTICS: "bg-poke-blue text-white",
  FIRE: "bg-fire-red text-white",
  PSYCHIC: "bg-psychic-purple text-white",
  GRASS: "bg-grass-green text-white",
  ELECTRIC: "bg-pikachu-yellow text-ink",
};

const BASE = "rounded-xl border-2 border-ink px-[10px] py-[5px] font-pixel text-[10px]";

export default function TypeBadge({ type, className = "" }: { type: MoveType; className?: string }) {
  return <span className={`${BASE} ${TYPE_CLASS[type]} ${className}`.trim()}>{type}</span>;
}
