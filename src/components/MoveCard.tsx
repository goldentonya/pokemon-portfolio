import TypeBadge from "./TypeBadge";
import type { Move } from "@/lib/projects";

export default function MoveCard({ move, index }: { move: Move; index: number }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[14px] border-4 border-ink bg-cream px-5 pt-7 pb-6 shadow-[5px_5px_0_#17171b] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#17171b]">
      <div className="absolute -top-4 left-5 rounded-[10px] border-[3px] border-ink bg-poke-blue px-3 py-2 font-heading text-[12px] text-white">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex justify-end">
        <TypeBadge type={move.type} />
      </div>
      <h3 className="mt-3 font-heading text-[14px] leading-[1.5] text-ink">
        <span
          aria-hidden
          className="mr-2 inline-block text-fire-red transition-transform duration-150 group-hover:translate-x-[3px]"
        >
          ▶
        </span>
        {move.name}
      </h3>
      <p className="mt-3 text-[16px] leading-[1.65] text-body">{move.description}</p>
    </article>
  );
}
