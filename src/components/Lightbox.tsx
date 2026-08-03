"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";

export type LightboxImage = { src: StaticImageData; alt: string };

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const current = open ? images[index] : null;

  // Portal to document.body: several call sites render this inside a <Reveal>,
  // whose "shown" state always carries a translate-y-0 transform. Any non-none
  // transform on an ancestor turns `fixed` into `absolute`-relative-to-that-
  // ancestor, so without the portal this overlay stops covering the viewport
  // and its full-screen backdrop/centering breaks on those pages.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open || index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open || !current || index === null || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overscroll-contain bg-[#17171bdd] px-4 pt-[72px] pb-[72px] md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || "Image preview"}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-ink bg-pikachu-yellow font-pixel text-[16px] text-ink shadow-[4px_4px_0_#17171b] transition-transform hover:scale-105"
      >
        ✕
      </button>

      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-8 md:inset-y-0 md:bottom-auto md:items-center md:justify-between md:px-4 lg:px-8">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-ink bg-white font-pixel text-[16px] text-ink shadow-[4px_4px_0_#17171b] transition-transform hover:scale-105"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next image"
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-ink bg-white font-pixel text-[16px] text-ink shadow-[4px_4px_0_#17171b] transition-transform hover:scale-105"
          >
            ›
          </button>
        </div>
      )}

      <div
        className="relative max-h-[calc(100dvh-160px)] max-w-[calc(100vw-32px)] overflow-hidden rounded-[20px] border-4 border-ink shadow-[8px_8px_0_#17171b] md:max-h-[85dvh] md:max-w-[min(90vw,1200px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          className="h-auto max-h-[calc(100dvh-160px)] w-auto max-w-full object-contain md:max-h-[85dvh]"
          sizes="90vw"
          priority
        />
      </div>
    </div>,
    document.body
  );
}
