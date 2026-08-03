import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BattleTextBox from "@/components/BattleTextBox";
import CornerSprite from "@/components/CornerSprite";
import EncounterScene from "@/components/EncounterScene";
import MoveCard from "@/components/MoveCard";
import PixelButton from "@/components/PixelButton";
import PokeBallIcon from "@/components/PokeBallIcon";
import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Tonya Golden`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { encounter, moves } = project;

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

      {/* encounter hero */}
      <section className="relative overflow-hidden border-b-[5px] border-ink bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#ffcb0518 2px, transparent 2px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-[clamp(16px,4vw,40px)] py-[clamp(40px,7vw,72px)] lg:grid-cols-[1.02fr_.98fr]">
          <Reveal>
            <div className="inline-block rounded-2xl border-[3px] border-ink bg-pikachu-yellow px-3 py-[6px] font-pixel text-[11px] tracking-wide text-ink">
              {project.pageEyebrow}
            </div>
            <h1
              className="mt-[22px] font-heading text-[clamp(24px,5vw,36px)] leading-[1.5] text-white"
              style={{ textShadow: "3px 3px 0 #e3350d" }}
            >
              {project.headingLine1}
              <br />
              <span className="text-pikachu-yellow">{project.headingLine2}</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[clamp(16px,4.2vw,19px)] leading-[1.7] text-dark-text">
              {project.summary}
            </p>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-[14px] border-[3px] border-ink bg-dark-card px-4 py-[14px] shadow-[4px_4px_0_#2a75bb]">
                <dt className="font-pixel text-[10px] text-[#7fbaff]">ROLE</dt>
                <dd className="mt-2 font-pixel text-[12px] text-dark-text">{project.role}</dd>
              </div>
              <div className="rounded-[14px] border-[3px] border-ink bg-dark-card px-4 py-[14px] shadow-[4px_4px_0_#ffcb05]">
                <dt className="font-pixel text-[10px] text-pikachu-yellow">YEAR</dt>
                <dd className="mt-2 font-pixel text-[12px] text-dark-text">{project.year}</dd>
              </div>
              <div className="rounded-[14px] border-[3px] border-ink bg-dark-card px-4 py-[14px] shadow-[4px_4px_0_#e3350d]">
                <dt className="font-pixel text-[10px] text-[#ff8a7a]">TYPE</dt>
                <dd className="mt-2 font-pixel text-[12px] text-dark-text">{project.type}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80}>
            <EncounterScene encounter={encounter} />
          </Reveal>
        </div>
      </section>

      {/* battle record — the homepage screenshot */}
      <Reveal
        as="section"
        className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] pt-[clamp(32px,6vw,52px)]"
      >
        <div className="overflow-hidden rounded-[20px] border-[5px] border-ink bg-white shadow-[8px_8px_0_#2a75bb]">
          <div className="flex items-center justify-between border-b-[5px] border-ink bg-poke-blue px-5 py-[14px]">
            <span className="font-pixel text-[12px] text-white">BATTLE RECORD</span>
            <span className="font-pixel text-[12px] text-pikachu-yellow">HOMEPAGE</span>
          </div>
          <Image
            src={project.heroImage}
            alt={`${project.title} homepage`}
            className="h-auto w-full"
            sizes="(min-width: 1160px) 1080px, 100vw"
          />
        </div>
      </Reveal>

      {/* the challenge */}
      <section className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(40px,7vw,64px)]">
        <Reveal>
          <div className="font-heading text-[14px] text-fire-red">
            <span aria-hidden>▸</span> ENCOUNTER
          </div>
          <h2 className="mt-4 font-heading text-[clamp(18px,3.4vw,24px)] leading-[1.5] text-ink">
            THE CHALLENGE
          </h2>
        </Reveal>

        <Reveal className="mt-7" delay={60}>
          <BattleTextBox tone="light" accent="fire" headline={encounter.wildLine}>
            {project.challenge}
          </BattleTextBox>
        </Reveal>

        <Reveal className="mt-6" delay={120}>
          <BattleTextBox tone="dark" accent="blue" headline="TRAINER'S NOTES" showCursor={false}>
            {project.overview}
          </BattleTextBox>
        </Reveal>
      </section>

      {/* your move — note: no `overflow-hidden` here, it would break the sticky panel */}
      <section className="border-y-[5px] border-ink bg-light-blue-band">
        <div className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,76px)]">
          <Reveal>
            <div className="font-heading text-[14px] text-poke-blue">
              <span aria-hidden>▸</span> WHAT WILL YOU DO?
            </div>
            <h2 className="mt-4 font-heading text-[clamp(18px,3.4vw,24px)] leading-[1.5] text-ink">
              YOUR MOVE
            </h2>
          </Reveal>

          <div className="mt-11 grid grid-cols-1 gap-[22px] lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-[20px] border-[5px] border-ink bg-white p-[18px] shadow-[8px_8px_0_#2a75bb]">
              <div className="grid grid-cols-1 gap-x-[18px] gap-y-[30px] pt-4 sm:grid-cols-2">
                {moves.map((move, i) => (
                  <Reveal
                    key={move.name}
                    delay={i * 60}
                    className={
                      moves.length % 2 === 1 && i === moves.length - 1 ? "sm:col-span-2" : ""
                    }
                  >
                    <MoveCard move={move} index={i} />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="lg:sticky lg:top-[calc(var(--nav-h)+16px)]">
              <div className="rounded-[18px] border-4 border-ink bg-white p-6 shadow-[6px_6px_0_#ffcb05]">
                <div className="font-heading text-[13px] text-ink">TOOLS &amp; SKILLS</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-xl border-2 border-poke-blue bg-chip-blue px-[11px] py-[5px] font-pixel text-[11px] text-ink"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="my-[22px] border-t-2 border-dashed border-divider" />
                {project.liveUrl ? (
                  <PixelButton
                    href={project.liveUrl}
                    newTab
                    className="w-full bg-fire-red text-white shadow-[4px_4px_0_#17171b] hover:shadow-[6px_6px_0_#17171b]"
                  >
                    <span aria-hidden>▶</span> {project.ctaLabel}
                  </PixelButton>
                ) : (
                  <div className="rounded-xl border-[3px] border-dashed border-divider bg-cream px-[14px] py-[14px] text-center font-pixel text-[12px] text-body">
                    {project.ctaLabel} · COMING SOON
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* super effective results */}
      <section className="relative overflow-hidden bg-cream">
        <CornerSprite
          src="/sprites/charizard-pixel-464af05b.png"
          corner="top"
          side="right"
          size={100}
          durationMs={3200}
        />
        <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,80px)]">
          <Reveal className="text-center">
            <div className="font-heading text-[14px] text-grass-green">
              <span aria-hidden>▸</span> IT&rsquo;S SUPER EFFECTIVE!
            </div>
            <h2 className="mt-4 font-heading text-[clamp(18px,3.4vw,24px)] leading-[1.5] text-ink">
              RESULTS
            </h2>
          </Reveal>

          <div className="mt-[46px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result, i) => (
              <Reveal
                key={result.label}
                delay={i * 70}
                className="relative rounded-[16px] border-4 border-ink bg-dark-card px-5 py-[26px] text-center shadow-[5px_5px_0_#3b9c4a]"
              >
                <span className="absolute -top-[15px] left-1/2 -translate-x-1/2 rounded-[10px] border-[3px] border-ink bg-grass-green px-[10px] py-[5px] font-pixel text-[10px] text-white">
                  <span aria-hidden>×</span>2
                </span>
                <h3 className="mt-3 font-heading text-[13px] leading-[1.5] text-[#6cc47a]">
                  {result.label}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-dark-text">{result.detail}</p>
                <div
                  className="mt-5 h-[12px] overflow-hidden rounded-[6px] border-[3px] border-ink bg-cream"
                  aria-hidden
                >
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg,#3b9c4a 0 10px,#6cc47a 10px 12px)",
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-11" delay={120}>
            <BattleTextBox tone="light" accent="grass" headline="THE OUTCOME" showCursor={false}>
              {project.outcome}
            </BattleTextBox>
          </Reveal>
        </div>
      </section>

      {/* project dex */}
      <section className="border-y-[5px] border-ink bg-light-blue-band">
        <div className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,76px)]">
          <Reveal>
            <div className="font-heading text-[14px] text-fire-red">
              <span aria-hidden>▸</span> POK&Eacute;DEX ENTRY
            </div>
            <h2 className="mt-4 font-heading text-[clamp(18px,3.4vw,24px)] leading-[1.5] text-ink">
              PROJECT DEX
            </h2>
          </Reveal>
          <div className="mt-9">
            <ProjectGallery images={project.galleryImages} projectTitle={project.title} />
          </div>
        </div>
      </section>

      <footer className="bg-ink px-[clamp(16px,4vw,40px)] py-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PixelButton
            href="/#work"
            className="bg-pikachu-yellow text-ink shadow-[5px_5px_0_#e3350d] hover:shadow-[7px_7px_0_#e3350d]"
          >
            <span aria-hidden>◀</span> RUN BACK TO ALL PROJECTS
          </PixelButton>
        </div>
        <div className="mt-7 flex items-center justify-center gap-3">
          <PokeBallIcon size={20} borderWidth={2} borderColor="#8b93a0" />
        </div>
      </footer>
    </div>
  );
}
