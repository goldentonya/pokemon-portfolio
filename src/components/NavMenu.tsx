"use client";

import { useEffect, useState } from "react";

export type NavLink = { href: string; label: string; accent?: boolean };

type NavMenuProps = {
  links: readonly NavLink[];
};

/**
 * Mobile/tablet nav disclosure. The link row in Nav.tsx is `hidden lg:flex` —
 * below `lg` there isn't room for all 7 links (measured: needs ~605px, only
 * ~538px is free at 768px), so this covers < lg with a toggle + dropdown panel.
 *
 * The panel is `absolute top-full`, not `fixed` — the parent <nav> is
 * `sticky`, which establishes a containing block for absolutely positioned
 * descendants, so the panel anchors to the nav's bottom edge at any nav
 * height with no hard-coded offset. The scrim below it IS `fixed` — `sticky`
 * does not create a containing block for fixed elements, so `inset-x-0
 * bottom-0` correctly resolves against the viewport. Both live inside the
 * nav's existing z-50 stacking context.
 */
export default function NavMenu({ links }: NavMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => {
      if (mq.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onBreakpoint);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border-[3px] border-ink bg-pikachu-yellow shadow-[3px_3px_0_#17171b] transition-transform duration-150 ease-out active:translate-x-[1px] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
      >
        <span
          aria-hidden
          className={`block h-[3px] w-[22px] bg-ink transition-transform duration-150 ${open ? "translate-y-[8px] rotate-45" : ""}`}
        />
        <span
          aria-hidden
          className={`block h-[3px] w-[22px] bg-ink transition-opacity duration-150 ${open ? "opacity-0" : ""}`}
        />
        <span
          aria-hidden
          className={`block h-[3px] w-[22px] bg-ink transition-transform duration-150 ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 bg-[#17171b99] lg:hidden"
          />
          <div
            id="mobile-nav-panel"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto overscroll-contain border-b-[5px] border-ink bg-poke-blue px-[clamp(16px,4vw,40px)] pb-4 lg:hidden"
          >
            <ul className="mx-auto flex max-w-[1160px] flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[52px] items-center border-b-2 border-dashed border-white/25 font-pixel text-[15px] tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pikachu-yellow ${
                      link.accent ? "text-pikachu-yellow hover:text-white" : "text-white hover:text-pikachu-yellow"
                    }`}
                  >
                    <span aria-hidden className="mr-3 text-pikachu-yellow">
                      ▸
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
