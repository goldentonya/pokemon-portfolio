import PokeBallIcon from "./PokeBallIcon";

const LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#origin", label: "ORIGIN" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#work", label: "CASE STUDIES" },
  { href: "#services", label: "SERVICES" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b-[5px] border-ink bg-poke-blue px-[clamp(16px,4vw,40px)] py-[14px]">
      <a href="#top" className="flex items-center gap-3">
        <PokeBallIcon size={30} withCenterDot />
        <span
          className="font-heading text-[12px] text-pikachu-yellow"
          style={{ textShadow: "2px 2px 0 #17171b" }}
        >
          T.GOLDEN
        </span>
      </a>
      <div className="flex max-w-full items-center gap-[18px] overflow-x-auto font-pixel text-[13px] tracking-wide whitespace-nowrap md:gap-[26px]">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-white transition-colors hover:text-pikachu-yellow">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="text-pikachu-yellow transition-colors hover:text-white">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
