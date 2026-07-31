import Image from "next/image";
import Link from "next/link";
import CornerSprite from "./CornerSprite";
import Reveal from "./Reveal";
import { projects } from "@/lib/projects";
import caseButtonOrig from "@/assets/case-studies/case-button-orig.png";
import caseButtonVar from "@/assets/case-studies/case-button-var.png";
import caseLifeTyvVar from "@/assets/case-studies/case-life-tyv-var.png";
import caseEmailOrig from "@/assets/case-studies/case-email-orig.png";
import caseEmailVar from "@/assets/case-studies/case-email-var.png";

export default function CaseStudies() {
  return (
    <section id="work" className="relative overflow-hidden bg-cream">
      <CornerSprite src="/sprites/blastoise-pixel-1bb26919.png" corner="top" side="left" size={110} durationMs={3400} />
      <CornerSprite src="/sprites/charizard-pixel-464af05b.png" corner="bottom" side="right" size={104} />

      <div className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(56px,9vw,88px)]">
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

        <div className="mt-[22px] grid grid-cols-1 gap-[22px] lg:grid-cols-2">
          {/* experiment 1 */}
          <Reveal className="flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] shadow-[6px_6px_0_#e3350d]">
            <div className="font-heading text-[12px] text-poke-blue">▸ CTA COLOR TEST</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">BUTTON COLOR CHANGE</div>
            <div className="mt-5 grid grid-cols-2 gap-[14px]">
              <div>
                <span className="rounded-xl border-2 border-poke-blue bg-chip-blue px-[10px] py-1 font-pixel text-[10px] text-poke-blue">
                  ● ORIGINAL
                </span>
                <div className="relative mt-[10px] aspect-[3/4] overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream">
                  <Image src={caseButtonOrig} alt="Original red CTA button" fill className="object-cover object-top" sizes="(min-width: 1024px) 25vw, 45vw" />
                </div>
              </div>
              <div>
                <span className="rounded-xl border-2 border-fire-red bg-[#fdece9] px-[10px] py-1 font-pixel text-[10px] text-fire-red">
                  ● VARIANT
                </span>
                <div className="relative mt-[10px] aspect-[3/4] overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream">
                  <Image src={caseButtonVar} alt="Variant orange CTA button" fill className="object-cover object-top" sizes="(min-width: 1024px) 25vw, 45vw" />
                </div>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> While auditing competitor websites, I noticed many were using
              orange CTA buttons while we were using red. I wanted to test whether the color shift would lift our
              click rate.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> Ran an A/B test on the primary CTA, swapping the red button for an
              orange variant while keeping copy and placement identical.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b> The orange variant outperformed the red control, lifting click rate
              from 43.61% to 44.26%, a small change with meaningful downstream impact at scale.
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                <div className="text-body">
                  <span className="text-[#9aa0ac]">●</span> ORIGINAL (RED): 43.61%
                </div>
                <div className="text-ink">
                  <span className="text-fire-red">●</span> VARIANT (ORANGE): 44.26%
                </div>
              </div>
              <div className="shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center shadow-[4px_4px_0_#e3350d]">
                <div className="font-heading text-[20px] text-[#ff8a7a]">44.26%</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">VARIANT CLICK RATE</div>
              </div>
            </div>
          </Reveal>

          {/* experiment 2 */}
          <Reveal className="flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] shadow-[6px_6px_0_#2a75bb]">
            <div className="font-heading text-[12px] text-poke-blue">▸ FUNNEL OPTIMIZATION</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">
              LIFECOMPARED THANK YOU VIDEO
            </div>
            <div className="mt-5">
              <span className="rounded-xl border-2 border-grass-green bg-[#eaf7ec] px-[10px] py-1 font-pixel text-[10px] text-grass-green">
                ● WINNING VARIANT
              </span>
              <div className="relative mt-[10px] aspect-video overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream">
                <Image src={caseLifeTyvVar} alt="LifeCompared winning Thank You Video variant" fill className="object-cover object-top" sizes="(min-width: 1024px) 45vw, 90vw" />
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> After a Thank You Video boosted performance in our Medicare flow,
              we wanted to validate the same play in our Life Insurance funnel to drive higher lead-to-policy
              conversion.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> Tested two Thank You Video variations on the LifeCompared
              confirmation page (one AI-generated and one featuring our director on camera), measuring downstream
              lead-to-policy.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b> The director-led video won, lifting lead-to-policy from 5.8% to
              6.9% and confirming that authentic, human-led video outperformed the AI alternative.
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                <div className="text-body">
                  <span className="text-[#9aa0ac]">●</span> ORIGINAL: 5.8%
                </div>
                <div className="text-ink">
                  <span className="text-poke-blue">●</span> WINNING VARIANT: 6.9%
                </div>
              </div>
              <div className="shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center shadow-[4px_4px_0_#2a75bb]">
                <div className="font-heading text-[20px] text-[#7fbaff]">6.90%</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">LEAD-TO-POLICY</div>
              </div>
            </div>
          </Reveal>

          {/* experiment 3 — spans full width */}
          <Reveal className="flex flex-col rounded-[18px] border-4 border-ink bg-white px-6 py-[26px] shadow-[6px_6px_0_#3b9c4a] lg:col-span-2">
            <div className="font-heading text-[12px] text-poke-blue">▸ EMAIL CAPTURE TEST</div>
            <div className="mt-[14px] font-heading text-[17px] leading-[1.4] text-ink">EMAIL FIELD PLACEMENT</div>
            <div className="mt-5 grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              <div>
                <span className="rounded-xl border-2 border-poke-blue bg-chip-blue px-[10px] py-1 font-pixel text-[10px] text-poke-blue">
                  ● ORIGINAL
                </span>
                <div className="relative mt-[10px] aspect-[4/3] overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream">
                  <Image src={caseEmailOrig} alt="Original quote funnel step without an email field" fill className="object-cover object-top" sizes="(min-width: 640px) 45vw, 90vw" />
                </div>
              </div>
              <div>
                <span className="rounded-xl border-2 border-fire-red bg-[#fdece9] px-[10px] py-1 font-pixel text-[10px] text-fire-red">
                  ● VARIANT
                </span>
                <div className="relative mt-[10px] aspect-[4/3] overflow-hidden rounded-[10px] border-[3px] border-ink bg-cream">
                  <Image src={caseEmailVar} alt="Variant quote funnel step with an email field added" fill className="object-cover object-top" sizes="(min-width: 640px) 45vw, 90vw" />
                </div>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Problem:</b> The quote funnel didn&rsquo;t collect an email address until late
              in the flow, so anyone who dropped off early couldn&rsquo;t be followed up with.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Action:</b> Tested adding an email address field earlier in the multi-step
              quote flow, alongside the existing county, date of birth, and gender questions.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              <b className="text-ink">Result:</b> <span className="text-body/70">Add your real result here — e.g. email capture rate or downstream follow-up conversion.</span>
            </p>
            <div className="mt-[22px] border-t-2 border-dashed border-divider" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div className="font-pixel text-[12px] leading-[2]">
                <div className="text-body">
                  <span className="text-[#9aa0ac]">●</span> ORIGINAL: —
                </div>
                <div className="text-ink">
                  <span className="text-grass-green">●</span> VARIANT: —
                </div>
              </div>
              <div className="shrink-0 rounded-[14px] border-[3px] border-ink bg-ink px-5 py-4 text-center shadow-[4px_4px_0_#3b9c4a]">
                <div className="font-heading text-[20px] text-[#6cc47a]">TBD</div>
                <div className="mt-2 font-pixel text-[10px] text-dark-text">AWAITING RESULT</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
