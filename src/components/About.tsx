"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CornerSprite from "./CornerSprite";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import trainerPhoto from "@/assets/about/trainer-photo.jpg";

const BIO = [
  "I'm Tonya Golden, a front end developer and UI/UX designer who's spent 12+ years building interfaces people actually enjoy using. I design clean, accessible layouts and pair them with conversion rate optimization, running A/B tests to prove which experience truly performs best.",
  "Think of me as your battle strategist: every layout is a matchup, every interaction a move, and the user experience always calls the shot.",
];

const LIGHTBOX_IMAGES = [{ src: trainerPhoto, alt: "Tonya Golden" }];

export default function About() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="about" className="relative overflow-hidden border-y-[5px] border-ink bg-blush-band">
      <CornerSprite src="/sprites/pikachu-pixel-b4bcc4ea.png" corner="top" side="left" size={96} flip />
      <CornerSprite src="/sprites/gengar-0f29c816.png" corner="bottom" side="right" size={96} durationMs={3200} />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)] pb-[60px]">
      <Reveal className="grid grid-cols-1 items-start gap-11 md:grid-cols-[.85fr_1.15fr]">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label="View larger photo of Tonya Golden"
          className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-[20px] border-4 border-ink shadow-[6px_6px_0_#17171b] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
          style={{ background: "linear-gradient(160deg, #bfe3ff, #2a75bb)" }}
        >
          <Image
            src={trainerPhoto}
            alt="Tonya Golden"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 truncate bg-[#17171bcc] px-[14px] py-3 font-pixel text-[12px] text-pikachu-yellow">
            TRAINER · TONYA GOLDEN
          </div>
        </button>

        <div>
          <div className="font-heading text-[14px] text-poke-blue">▸ THE TRAINER</div>
          <h2 className="mt-[18px] font-heading text-[clamp(22px,4vw,30px)] leading-[1.5] break-words text-ink">
            DATA IS <span className="text-fire-red">SUPER EFFECTIVE</span>
          </h2>
          {BIO.map((paragraph, i) => (
            <p key={i} className="mt-4 text-[clamp(16px,4.2vw,19px)] leading-[1.7] text-body first:mt-[22px]">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-[clamp(16px,4.2vw,19px)] leading-[1.7] text-body">
            Want to know what I&rsquo;m like outside of work? Learn more about me{" "}
            <Link href="/about" className="font-heading text-poke-blue underline underline-offset-4">
              here
            </Link>
            .
          </p>
        </div>
      </Reveal>

      <Lightbox
        images={LIGHTBOX_IMAGES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
      </div>
    </section>
  );
}
