"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import type { GalleryImage } from "@/lib/projects";

type ProjectGalleryProps = {
  images: GalleryImage[];
  projectTitle: string;
};

/**
 * Pokédex-styled gallery. This is the page's only client component — the lightbox
 * needs state, and keeping it isolated here lets work/[slug]/page.tsx stay a server
 * component (it still needs generateStaticParams, generateMetadata, and await params).
 */
export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  // Built here rather than passed in — functions and derived arrays shouldn't cross the boundary.
  const lightboxImages = images.map((image) => ({
    src: image.src,
    alt: `${projectTitle}: ${image.label}`,
  }));

  return (
    <div className="overflow-hidden rounded-[20px] border-[5px] border-ink bg-white shadow-[8px_8px_0_#e3350d]">
      <div className="flex items-center gap-3 border-b-[5px] border-ink bg-fire-red px-5 py-[14px]">
        <span className="h-[18px] w-[18px] rounded-full border-[3px] border-ink bg-[#7fe0ff]" aria-hidden />
        <span className="h-[9px] w-[9px] rounded-full border-2 border-ink bg-[#e3350d]" aria-hidden />
        <span className="h-[9px] w-[9px] rounded-full border-2 border-ink bg-[#ffcb05]" aria-hidden />
        <span className="h-[9px] w-[9px] rounded-full border-2 border-ink bg-[#3b9c4a]" aria-hidden />
        <span className="ml-auto font-pixel text-[12px] text-white">{images.length} ENTRIES</span>
      </div>

      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
        {images.map((image, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-[14px] border-4 border-ink bg-cream shadow-[5px_5px_0_#17171b] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#17171b]"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View larger: ${image.label}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden border-b-[3px] border-ink focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
            >
              <Image
                src={image.src}
                alt={`${projectTitle}: ${image.label}`}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1160px) 520px, (min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute top-3 left-3 rounded-[8px] border-2 border-ink bg-pikachu-yellow px-2 py-1 font-pixel text-[10px] text-ink shadow-[2px_2px_0_#17171b]">
                No. {String(i + 1).padStart(3, "0")}
              </span>
            </button>
            <figcaption className="px-4 py-3 font-pixel text-[11px] tracking-wide text-body">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </div>
  );
}
