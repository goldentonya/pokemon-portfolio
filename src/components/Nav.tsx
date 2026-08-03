import Image from "next/image";
import mainLogo from "@/assets/main-logo-trimmed.png";
import NavMenu, { type NavLink } from "./NavMenu";

const LINKS: readonly NavLink[] = [
  { href: "#origin", label: "ORIGIN" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#work", label: "CASE STUDIES" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#contact", label: "CONTACT", accent: true },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-[5px] border-ink bg-poke-blue px-[clamp(16px,4vw,40px)] py-[14px]">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4">
        <a href="#top" className="flex min-h-[44px] items-center">
          <Image src={mainLogo} alt="Tonya Golden" className="h-[40px] w-auto lg:h-[56px]" priority />
        </a>
        <div className="hidden items-center gap-[18px] font-pixel text-[13px] tracking-wide whitespace-nowrap lg:flex xl:gap-[26px]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-[44px] items-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pikachu-yellow ${
                link.accent ? "text-pikachu-yellow hover:text-white" : "text-white hover:text-pikachu-yellow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <NavMenu links={LINKS} />
      </div>
    </nav>
  );
}
