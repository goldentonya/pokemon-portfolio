import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BattleTextBox from "@/components/BattleTextBox";
import ExperimentGallery from "@/components/ExperimentGallery";
import PixelButton from "@/components/PixelButton";
import PokeBallIcon from "@/components/PokeBallIcon";
import Reveal from "@/components/Reveal";
import { experiments, getExperiment } from "@/lib/experiments";

export function generateStaticParams() {
  return experiments.map((experiment) => ({ slug: experiment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  if (!experiment) return {};
  return {
    title: `${experiment.title} — Tonya Golden`,
    description: experiment.problem,
  };
}

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  if (!experiment) notFound();

  return (
    <div className="text-ink [--nav-h:77px]">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b-[5px] border-ink bg-poke-blue px-[clamp(16px,4vw,40px)] py-[14px]">
        <Link
          href="/#work"
          className="inline-flex min-h-[44px] items-center gap-3 font-pixel text-[13px] tracking-wide text-pikachu-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span aria-hidden>◀</span> BACK TO PORTFOLIO
        </Link>
        <span
          className="font-heading text-[12px] text-pikachu-yellow"
          style={{ textShadow: "2px 2px 0 #17171b" }}
        >
          T.GOLDEN
        </span>
      </nav>

      <div className="mx-auto max-w-[860px] px-[clamp(16px,4vw,40px)] py-[clamp(40px,8vw,64px)]">
        <Reveal>
          <div className="inline-block rounded-2xl border-[3px] border-ink bg-pikachu-yellow px-3 py-[6px] font-pixel text-[11px] tracking-wide text-ink">
            A/B EXPERIMENT
          </div>
          <div className="mt-[22px] font-heading text-[13px] text-poke-blue">
            <span aria-hidden>▸</span> {experiment.eyebrow}
          </div>
          <h1 className="mt-3 font-heading text-[clamp(22px,4.5vw,30px)] leading-[1.5] text-ink">
            {experiment.title}
          </h1>
        </Reveal>

        <Reveal className="mt-9" delay={60}>
          <BattleTextBox tone="light" accent="blue" headline="THE HYPOTHESIS">
            <p>{experiment.problem}</p>
            <p className="mt-4">{experiment.action}</p>
          </BattleTextBox>
        </Reveal>

        <Reveal className="mt-9" delay={100}>
          <ExperimentGallery images={experiment.images} />
        </Reveal>

        <Reveal className="mt-9" delay={140}>
          <BattleTextBox tone="dark" accent="grass" showCursor={false} headline="THE RESULT">
            {experiment.resultPending ? (
              <p className="text-dark-text-muted italic">{experiment.result}</p>
            ) : (
              <p>{experiment.result}</p>
            )}
          </BattleTextBox>
        </Reveal>

        <Reveal className="mt-7 flex flex-wrap items-end justify-between gap-4" delay={160}>
          <div className="font-pixel text-[13px] leading-[2]">
            {experiment.legend.map((row, i) => (
              <div key={row.label} className={i === 0 ? "text-body" : "text-ink"}>
                <span className={row.dotClass}>●</span> {row.label}
              </div>
            ))}
          </div>
          <div
            className={`shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-6 py-5 text-center ${experiment.statTileShadowClass}`}
          >
            <div className={`font-heading text-[24px] ${experiment.statValueClass}`}>
              {experiment.statValue}
            </div>
            <div className="mt-2 font-pixel text-[10px] text-dark-text">{experiment.statLabel}</div>
          </div>
        </Reveal>
      </div>

      <footer className="bg-ink px-[clamp(16px,4vw,40px)] py-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PixelButton
            href="/#work"
            className="bg-pikachu-yellow text-ink shadow-[5px_5px_0_#e3350d] hover:shadow-[7px_7px_0_#e3350d]"
          >
            <span aria-hidden>◀</span> BACK TO ALL PROJECTS
          </PixelButton>
        </div>
        <div className="mt-7 flex items-center justify-center gap-3">
          <PokeBallIcon size={20} borderWidth={2} borderColor="#8b93a0" />
        </div>
      </footer>
    </div>
  );
}
