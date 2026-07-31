import Link from "next/link";
import type { ReactNode } from "react";

type PixelButtonProps = {
  href: string;
  children: ReactNode;
  /** Literal color/shadow utility classes, e.g. "bg-fire-red text-white shadow-[5px_5px_0_#17171b] hover:shadow-[7px_7px_0_#17171b]" */
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl border-4 border-ink px-[24px] py-[15px] font-pixel text-sm tracking-wide transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px]";

export default function PixelButton({ href, children, className = "" }: PixelButtonProps) {
  const classes = `${BASE} ${className}`.trim();

  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
