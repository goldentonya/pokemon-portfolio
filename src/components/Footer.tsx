import PokeBallIcon from "./PokeBallIcon";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 bg-ink px-[clamp(16px,4vw,40px)] py-[30px]">
      <div className="flex items-center gap-3">
        <PokeBallIcon size={26} borderWidth={3} borderColor="#fff8e6" />
        <span className="font-pixel text-[12px] text-pikachu-yellow">TONYA GOLDEN © 2026</span>
      </div>
      <div className="font-pixel text-[12px] text-[#8a93a8]">GOTTA OPTIMIZE &rsquo;EM ALL</div>
    </footer>
  );
}
