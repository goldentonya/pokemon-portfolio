import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PokeBallIcon from "@/components/PokeBallIcon";
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
    title: `${project.title} — Tonya Golden`,
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

  return (
    <div className="text-ink">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b-[5px] border-ink bg-poke-blue px-[clamp(16px,4vw,40px)] py-[14px]">
        <Link href="/#work" className="flex items-center gap-3 font-pixel text-[13px] tracking-wide text-pikachu-yellow">
          <span aria-hidden>◀</span> BACK TO PORTFOLIO
        </Link>
        <span className="font-heading text-[12px] text-pikachu-yellow" style={{ textShadow: "2px 2px 0 #17171b" }}>
          T.GOLDEN
        </span>
      </nav>

      <header className="mx-auto max-w-[1080px] px-[clamp(16px,4vw,40px)] pt-[clamp(40px,8vw,64px)] pb-10">
        <div className="inline-block rounded-2xl border-[3px] border-ink bg-poke-blue px-3 py-[6px] font-pixel text-[11px] tracking-wide text-white">
          {project.pageEyebrow}
        </div>
        <h1 className="mt-[22px] font-heading text-[clamp(24px,5vw,34px)] leading-[1.5] text-ink">
          {project.headingLine1}
          <br />
          <span className="text-poke-blue">{project.headingLine2}</span>
        </h1>
        <p className="mt-[22px] max-w-[680px] text-[20px] leading-[1.65] text-body">{project.summary}</p>
        <div className="mt-7 flex flex-wrap gap-6">
          <div>
            <div className="font-pixel text-[11px] text-poke-blue">ROLE</div>
            <div className="mt-[6px] font-pixel text-[13px] text-ink">{project.role}</div>
          </div>
          <div>
            <div className="font-pixel text-[11px] text-poke-blue">YEAR</div>
            <div className="mt-[6px] font-pixel text-[13px] text-ink">{project.year}</div>
          </div>
          <div>
            <div className="font-pixel text-[11px] text-poke-blue">TYPE</div>
            <div className="mt-[6px] font-pixel text-[13px] text-ink">{project.type}</div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1080px] px-[clamp(16px,4vw,40px)]">
        <div className="overflow-hidden rounded-[20px] border-[5px] border-ink bg-white shadow-[8px_8px_0_#2a75bb]">
          <Image src={project.heroImage} alt={`${project.title} — before and after`} className="h-auto w-full" sizes="(min-width: 1080px) 1000px, 100vw" />
        </div>
      </div>

      <section className="mx-auto grid max-w-[1080px] grid-cols-1 gap-12 px-[clamp(16px,4vw,40px)] py-[clamp(40px,8vw,56px)] md:grid-cols-[1.6fr_.9fr]">
        <div>
          <h2 className="font-heading text-[18px] text-ink">OVERVIEW</h2>
          <p className="mt-4 text-[18px] leading-[1.75] text-body">{project.overview}</p>

          <h2 className="mt-9 font-heading text-[18px] text-ink">THE CHALLENGE</h2>
          <p className="mt-4 text-[18px] leading-[1.75] text-body">{project.challenge}</p>

          <h2 className="mt-9 font-heading text-[18px] text-ink">WHAT I DID</h2>
          <ul className="mt-4 list-disc space-y-2 pl-[22px] text-[18px] leading-[1.8] text-body">
            {project.whatIDid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-9 font-heading text-[18px] text-ink">THE OUTCOME</h2>
          <p className="mt-4 text-[18px] leading-[1.75] text-body">{project.outcome}</p>
        </div>

        <aside className="sticky top-[90px] h-fit rounded-[18px] border-4 border-ink bg-white p-6 shadow-[6px_6px_0_#ffcb05]">
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
          <a
            href="#"
            className="block rounded-xl border-[3px] border-ink bg-fire-red px-[14px] py-[14px] text-center font-pixel text-[13px] tracking-wide text-white shadow-[4px_4px_0_#17171b] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px]"
          >
            {project.ctaLabel} ▸
          </a>
        </aside>
      </section>

      <section className="mx-auto max-w-[1080px] px-[clamp(16px,4vw,40px)] pt-5 pb-[60px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {project.galleryImages.map((image, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border-4 border-ink bg-white shadow-[6px_6px_0_#17171b]"
            >
              <Image src={image} alt={`${project.title} detail ${i + 1}`} className="h-auto w-full" sizes="(min-width: 640px) 50vw, 100vw" />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-ink px-[clamp(16px,4vw,40px)] py-10 text-center">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-xl border-4 border-pikachu-yellow bg-pikachu-yellow px-[26px] py-[14px] font-pixel text-[14px] tracking-wide text-ink shadow-[5px_5px_0_#e3350d] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px]"
        >
          <span aria-hidden>◀</span> BACK TO ALL PROJECTS
        </Link>
        <div className="mt-6 flex items-center justify-center gap-3">
          <PokeBallIcon size={20} borderWidth={2} borderColor="#8b93a0" />
        </div>
      </footer>
    </div>
  );
}
