"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CornerSprite from "./CornerSprite";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { projects } from "@/lib/projects";
import { experiments } from "@/lib/experiments";

const [buttonTest, funnelTest, emailTest, creativeTest] = experiments;

const AB_LIGHTBOX_IMAGES = experiments.flatMap((experiment) =>
  experiment.images.map((image) => ({ src: image.src, alt: image.alt }))
);

/** Starting lightbox index for each experiment, derived from image counts above it. */
const EXPERIMENT_IMAGE_OFFSETS = experiments.reduce<number[]>((offsets, _experiment, i) => {
  offsets.push(i === 0 ? 0 : offsets[i - 1] + experiments[i - 1].images.length);
  return offsets;
}, []);
const [buttonOffset, funnelOffset, emailOffset, creativeOffset] = EXPERIMENT_IMAGE_OFFSETS;

export default function CaseStudies() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="work" className="relative overflow-hidden bg-cream">
      <CornerSprite src="/sprites/blastoise-pixel-1bb26919.png" corner="top" side="right" size={110} durationMs={3400} flip />
      <CornerSprite src="/sprites/charizard-pixel-464af05b.png" corner="bottom" side="left" size={104} flip />

      <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)]">
        <Reveal className="text-center">
          <div className="font-heading text-[14px] text-poke-blue">▸ IT&rsquo;S SUPER EFFECTIVE!</div>
          <h2 className="mt-4 font-heading text-[clamp(20px,4vw,28px)] leading-[1.5] text-ink">CASE STUDIES</h2>
        </Reveal>

        {/* type 1 · web design / development */}
        <Reveal className="mt-11 flex items-center gap-[14px]">
          <span className="rounded-[14px] border-[3px] border-ink bg-poke-blue px-[14px] py-[7px] font-pixel text-[12px] text-white">
            TYPE 1 · WEB DESIGN / DEVELOPMENT
          </span>
          <div
            className="h-1 flex-1"
            style={{ backgroundImage: "repeating-linear-gradient(90deg,#17171b 0 8px,transparent 8px 14px)" }}
          />
        </Reveal>

        <div className="mt-[22px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link
                href={`/work/${project.slug}`}
                className="flex h-full flex-col overflow-hidden rounded-[18px] border-4 border-ink bg-white text-inherit no-underline shadow-[6px_6px_0_#2a75bb] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[9px_9px_0_#2a75bb]"
              >
                <div className="flex items-center justify-between bg-poke-blue px-[18px] py-4">
                  <span className="font-pixel text-[11px] text-white">{project.cardTag}</span>
                  <span className="font-pixel text-[11px] text-pikachu-yellow">{project.cardStatus}</span>
                </div>
                <div className="relative h-[150px] overflow-hidden border-b-[3px] border-ink">
                  <Image
                    src={project.cardImage}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="font-heading text-[15px] leading-[1.5] text-ink">{project.title}</div>
                  <p className="mt-3 text-[16px] leading-[1.6] text-body">{project.cardDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-[7px]">
                    {project.cardChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-xl border-2 border-poke-blue bg-chip-blue px-[9px] py-1 font-pixel text-[10px] text-ink"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-[18px] font-pixel text-[12px] text-fire-red">VIEW PROJECT ▸</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* type 2 · a/b experiments */}
        <Reveal className="mt-[52px] flex items-center gap-[14px]">
          <span className="rounded-[14px] border-[3px] border-ink bg-pikachu-yellow px-[14px] py-[7px] font-pixel text-[12px] text-ink">
            TYPE 2 · A/B EXPERIMENTS
          </span>
          <div
            className="h-1 flex-1"
            style={{ backgroundImage: "repeating-linear-gradient(90deg,#17171b 0 8px,transparent 8px 14px)" }}
          />
        </Reveal>

        <div className="mt-[22px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {/* experiment 1 */}
          <Reveal className={`flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] ${buttonTest.shadowClass}`}>
            <div className="font-heading text-[12px] text-poke-blue">▸ {buttonTest.eyebrow}</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">{buttonTest.title}</div>
            <div className="mt-5 grid grid-cols-2 gap-[14px]">
              {buttonTest.images.map((image, i) => (
                <div key={image.label}>
                  <span className={`rounded-xl border-2 px-[10px] py-1 font-pixel text-[10px] ${image.chipClass}`}>
                    ● {image.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(buttonOffset + i)}
                    aria-label={`View larger ${image.alt}`}
                    className="group relative mt-[10px] block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 45vw" />
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> {buttonTest.problem}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> {buttonTest.action}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b>{" "}
              {buttonTest.resultPending ? (
                <span className="text-body/70">{buttonTest.result}</span>
              ) : (
                buttonTest.result
              )}
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                {buttonTest.legend.map((row, i) => (
                  <div key={row.label} className={i === 0 ? "text-body" : "text-ink"}>
                    <span className={row.dotClass}>●</span> {row.label}
                  </div>
                ))}
              </div>
              <div className={`shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center ${buttonTest.statTileShadowClass}`}>
                <div className={`font-heading text-[20px] ${buttonTest.statValueClass}`}>{buttonTest.statValue}</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">{buttonTest.statLabel}</div>
              </div>
            </div>
            <Link
              href={`/work/experiments/${buttonTest.slug}`}
              className="mt-5 inline-flex min-h-[44px] items-center self-start font-pixel text-[13px] text-fire-red transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poke-blue"
            >
              VIEW EXPERIMENT ▸
            </Link>
          </Reveal>

          {/* experiment 2 */}
          <Reveal className={`flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] ${funnelTest.shadowClass}`}>
            <div className="font-heading text-[12px] text-poke-blue">▸ {funnelTest.eyebrow}</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">{funnelTest.title}</div>
            <div className="mt-5">
              {funnelTest.images.map((image, i) => (
                <div key={image.label}>
                  <span className={`rounded-xl border-2 px-[10px] py-1 font-pixel text-[10px] ${image.chipClass}`}>
                    ● {image.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(funnelOffset + i)}
                    aria-label={`View larger ${image.alt}`}
                    className="group relative mt-[10px] block aspect-video w-full cursor-zoom-in overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 45vw, 90vw" />
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> {funnelTest.problem}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> {funnelTest.action}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b>{" "}
              {funnelTest.resultPending ? (
                <span className="text-body/70">{funnelTest.result}</span>
              ) : (
                funnelTest.result
              )}
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                {funnelTest.legend.map((row, i) => (
                  <div key={row.label} className={i === 0 ? "text-body" : "text-ink"}>
                    <span className={row.dotClass}>●</span> {row.label}
                  </div>
                ))}
              </div>
              <div className={`shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center ${funnelTest.statTileShadowClass}`}>
                <div className={`font-heading text-[20px] ${funnelTest.statValueClass}`}>{funnelTest.statValue}</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">{funnelTest.statLabel}</div>
              </div>
            </div>
            <Link
              href={`/work/experiments/${funnelTest.slug}`}
              className="mt-5 inline-flex min-h-[44px] items-center self-start font-pixel text-[13px] text-fire-red transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poke-blue"
            >
              VIEW EXPERIMENT ▸
            </Link>
          </Reveal>

          {/* experiment 3 */}
          <Reveal className={`flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] ${emailTest.shadowClass}`}>
            <div className="font-heading text-[12px] text-poke-blue">▸ {emailTest.eyebrow}</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">{emailTest.title}</div>
            <div className="mt-5 grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              {emailTest.images.map((image, i) => (
                <div key={image.label}>
                  <span className={`rounded-xl border-2 px-[10px] py-1 font-pixel text-[10px] ${image.chipClass}`}>
                    ● {image.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(emailOffset + i)}
                    aria-label={`View larger ${image.alt}`}
                    className="group relative mt-[10px] block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw" />
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> {emailTest.problem}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> {emailTest.action}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b>{" "}
              {emailTest.resultPending ? (
                <span className="text-body/70">{emailTest.result}</span>
              ) : (
                emailTest.result
              )}
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                {emailTest.legend.map((row, i) => (
                  <div key={row.label} className={i === 0 ? "text-body" : "text-ink"}>
                    <span className={row.dotClass}>●</span> {row.label}
                  </div>
                ))}
              </div>
              <div className={`shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center ${emailTest.statTileShadowClass}`}>
                <div className={`font-heading text-[20px] ${emailTest.statValueClass}`}>{emailTest.statValue}</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">{emailTest.statLabel}</div>
              </div>
            </div>
            <Link
              href={`/work/experiments/${emailTest.slug}`}
              className="mt-5 inline-flex min-h-[44px] items-center self-start font-pixel text-[13px] text-fire-red transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poke-blue"
            >
              VIEW EXPERIMENT ▸
            </Link>
          </Reveal>

          {/* experiment 4 */}
          <Reveal className={`flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] ${creativeTest.shadowClass}`}>
            <div className="font-heading text-[12px] text-poke-blue">▸ {creativeTest.eyebrow}</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">{creativeTest.title}</div>
            <div className="mt-5 grid grid-cols-2 gap-[14px] sm:grid-cols-4">
              {creativeTest.images.map((image, i) => (
                <div key={image.label}>
                  <span className={`rounded-xl border-2 px-[10px] py-1 font-pixel text-[10px] ${image.chipClass}`}>
                    ● {image.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(creativeOffset + i)}
                    aria-label={`View larger ${image.alt}`}
                    className="group relative mt-[10px] block aspect-[9/16] w-full cursor-zoom-in overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-poke-blue"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 768px) 22vw, 45vw"
                    />
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> {creativeTest.problem}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> {creativeTest.action}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b>{" "}
              {creativeTest.resultPending ? (
                <span className="text-body/70">{creativeTest.result}</span>
              ) : (
                creativeTest.result
              )}
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                {creativeTest.legend.map((row, i) => (
                  <div key={row.label} className={i === 0 ? "text-body" : "text-ink"}>
                    <span className={row.dotClass}>●</span> {row.label}
                  </div>
                ))}
              </div>
              <div className={`shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center ${creativeTest.statTileShadowClass}`}>
                <div className={`font-heading text-[20px] ${creativeTest.statValueClass}`}>{creativeTest.statValue}</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">{creativeTest.statLabel}</div>
              </div>
            </div>
            <Link
              href={`/work/experiments/${creativeTest.slug}`}
              className="mt-5 inline-flex min-h-[44px] items-center self-start font-pixel text-[13px] text-fire-red transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poke-blue"
            >
              VIEW EXPERIMENT ▸
            </Link>
          </Reveal>
        </div>
      </div>

      <Lightbox
        images={AB_LIGHTBOX_IMAGES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
