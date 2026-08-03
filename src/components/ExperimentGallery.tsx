"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import type { ExperimentImage } from "@/lib/experiments";

/**
 * Displays an experiment's variant screenshots large and uncropped, each
 * clickable into the shared Lightbox. This is the experiment detail page's
 * only client component, keeping the page itself server-rendered.
 */
export default function ExperimentGallery({ images }: { images: ExperimentImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const lightboxImages = images.map((image) => ({ src: image.src, alt: image.alt }));

  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length >= 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2";

  const imageSizes =
    images.length >= 4 ? "(min-width: 1024px) 22vw, 45vw" : "(min-width: 640px) 45vw, 90vw";

  return (
    <>
      <div className={`grid gap-5 ${gridClass}`}>
        {images.map((image, i) => (
          <div key={image.label} className="flex flex-col">
            <span
              className={`self-start rounded-xl border-2 px-[10px] py-1 font-pixel text-[10px] ${image.chipClass}`}
            >
              ● {image.label}
            </span>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View larger — ${image.alt}`}
              className="group relative mt-[10px] block cursor-zoom-in overflow-hidden rounded-[14px] border-4 border-ink bg-cream shadow-[5px_5px_0_#17171b] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#17171b] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                sizes={imageSizes}
              />
            </button>
          </div>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
