"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export type PersonalPhoto = {
  src: StaticImageData;
  shadow: string;
};

type PersonalGalleryProps = {
  photos: PersonalPhoto[];
};

export default function PersonalGallery({ photos }: PersonalGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  const lightboxImages = photos.map((photo, i) => ({
    src: photo.src,
    alt: `Personal photo ${i + 1}`,
  }));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <Reveal
            key={i}
            delay={i * 40}
            as="button"
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View larger personal photo ${i + 1}`}
            className={`group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl border-4 border-ink bg-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue ${photo.shadow}`}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 33vw, 50vw"
            />
          </Reveal>
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
