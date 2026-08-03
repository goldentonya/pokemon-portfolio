import Image from "next/image";
import mainLogo from "@/assets/main-logo-trimmed.png";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-ink px-[clamp(16px,4vw,40px)] py-[34px] text-center">
      <Image src={mainLogo} alt="Tonya Golden" className="h-[48px] w-auto" />
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-pixel text-[11px] tracking-wide">
        <span className="text-pikachu-yellow">(C) 2026 TONYA GOLDEN</span>
        <span className="text-[#4a5468]" aria-hidden>
          &bull;
        </span>
        <span className="text-[#8a93a8]">GOTTA OPTIMIZE &rsquo;EM ALL</span>
      </div>
    </footer>
  );
}
