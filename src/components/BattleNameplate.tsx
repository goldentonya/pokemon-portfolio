import HPBar from "./HPBar";
import { hpTone } from "@/lib/projects";

type BattleNameplateProps = {
  name: string;
  level: number;
  hpPercent: number;
  align?: "left" | "right";
};

export default function BattleNameplate({
  name,
  level,
  hpPercent,
  align = "left",
}: BattleNameplateProps) {
  return (
    <div
      className={`rounded-[12px] border-4 border-ink bg-cream px-3 py-[10px] shadow-[4px_4px_0_#17171b] sm:px-4 sm:py-3 ${
        align === "right" ? "text-right" : ""
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="min-w-0 font-heading text-[10px] leading-[1.5] break-words text-ink sm:text-[11px]">
          {name}
        </span>
        <span className="shrink-0 font-pixel text-[11px] text-body">LV.{level}</span>
      </div>
      <div className="mt-[10px] flex items-center gap-2">
        <span className="font-pixel text-[10px] text-fire-red">HP</span>
        <HPBar percent={hpPercent} tone={hpTone(hpPercent)} className="flex-1" />
      </div>
    </div>
  );
}
