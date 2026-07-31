"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

const HIDDEN = "opacity-0 translate-y-[26px]";
const SHOWN = "opacity-100 translate-y-0";
const TRANSITION =
  "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.3,1)]";

export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setShown(true));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);

    const fallback = setTimeout(() => setShown(true), 2500);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${TRANSITION} ${shown ? SHOWN : HIDDEN} ${className}`.trim()}
      style={{ ...(style as object), ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
