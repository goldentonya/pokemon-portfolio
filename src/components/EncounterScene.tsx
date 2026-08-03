import BattleNameplate from "./BattleNameplate";
import type { Encounter } from "@/lib/projects";

/**
 * The battle scene: opponent nameplate top-left with its sprite top-right, ally
 * sprite bottom-left with its nameplate bottom-right — the classic Game Boy layout.
 * CornerSprite isn't used here because it hard-codes top-5/bottom-5/left-5/right-5
 * and can't reach these positions.
 */
export default function EncounterScene({ encounter }: { encounter: Encounter }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border-[5px] border-ink bg-[#dfe9f7] shadow-[8px_8px_0_#ffcb05] sm:aspect-[16/11]">
      <div
        aria-hidden
        className="absolute top-[36%] right-[6%] h-[26px] w-[40%] rounded-[50%] border-[3px] border-ink bg-[#c7dcf4]"
      />
      <div
        aria-hidden
        className="absolute bottom-[14%] left-[5%] h-[30px] w-[46%] rounded-[50%] border-[3px] border-ink bg-[#c7dcf4]"
      />

      <div className="absolute top-3 left-3 w-[min(280px,56%)] sm:top-4 sm:left-4 sm:w-[min(280px,72%)]">
        <BattleNameplate
          name={encounter.opponentName}
          level={encounter.level}
          hpPercent={encounter.hpPercent}
        />
      </div>
      <div
        aria-hidden
        className="absolute top-[16%] right-[4%] animate-bobslow sm:right-[12%]"
        style={{
          animationDuration: "3200ms",
          ...(encounter.opponentLiftPx
            ? { top: `calc(16% - ${encounter.opponentLiftPx}px)` }
            : {}),
        }}
      >
        <img
          src={encounter.opponentSprite}
          alt=""
          className="pixelated w-[72px] sm:w-[104px]"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      <div
        aria-hidden
        className="absolute bottom-[16%] left-[4%] animate-bobslow sm:left-[12%]"
        style={{ animationDuration: "2800ms", animationDelay: "400ms" }}
      >
        <img src={encounter.allySprite} alt="" className="pixelated w-[84px] sm:w-[124px]" />
      </div>
      <div className="absolute right-3 bottom-3 w-[min(280px,56%)] sm:right-4 sm:bottom-4 sm:w-[min(280px,72%)]">
        <BattleNameplate
          name={encounter.allyName}
          level={encounter.allyLevel}
          hpPercent={100}
          align="right"
        />
      </div>
    </div>
  );
}
