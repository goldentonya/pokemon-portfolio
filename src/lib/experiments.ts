import type { StaticImageData } from "next/image";

import caseButtonOrig from "@/assets/case-studies/case-button-orig.png";
import caseButtonVar from "@/assets/case-studies/case-button-var.png";
import caseLifeTyvVar from "@/assets/case-studies/case-life-tyv-var.png";
import caseEmailOrig from "@/assets/case-studies/case-email-orig.png";
import caseEmailVar from "@/assets/case-studies/case-email-var.png";
import caseTyvOrig from "@/assets/case-studies/case-tyv-orig.png";
import caseTyvVar2 from "@/assets/case-studies/case-tyv-var2.png";
import caseTyvVar3 from "@/assets/case-studies/case-tyv-var3.png";
import caseTyvVar4 from "@/assets/case-studies/case-tyv-var4.png";

export type ExperimentImage = {
  src: StaticImageData;
  alt: string;
  /** Chip label shown above the image, e.g. "ORIGINAL" or "VARIANT B". */
  label: string;
  /** Complete literal class string for the label chip. */
  chipClass: string;
};

export type ExperimentLegendRow = {
  /** Complete literal class string for the leading dot color. */
  dotClass: string;
  /** Pre-formatted row text, e.g. "VARIANT (ORANGE): 44.26%". */
  label: string;
};

export type Experiment = {
  slug: string;
  /** Small eyebrow above the title, e.g. "CTA COLOR TEST" (no glyph — added at render). */
  eyebrow: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  /** True while the result copy is still a placeholder awaiting real numbers. */
  resultPending?: boolean;
  images: ExperimentImage[];
  legend: ExperimentLegendRow[];
  statValue: string;
  statLabel: string;
  /** Complete literal class strings for the card/stat-tile accent. */
  shadowClass: string;
  statTileShadowClass: string;
  statValueClass: string;
};

export const experiments: Experiment[] = [
  {
    slug: "cta-color-test",
    eyebrow: "CTA COLOR TEST",
    title: "BUTTON COLOR CHANGE",
    problem:
      "While auditing competitor websites, I noticed many were using orange CTA buttons while we were using red. I wanted to test whether the color shift would lift our click rate.",
    action:
      "Ran an A/B test on the primary CTA, swapping the red button for an orange variant while keeping copy and placement identical.",
    result:
      "The orange variant outperformed the red control, lifting click rate from 43.61% to 44.26%, a small change with meaningful downstream impact at scale.",
    images: [
      {
        src: caseButtonOrig,
        alt: "Original red CTA button",
        label: "ORIGINAL",
        chipClass: "border-poke-blue bg-chip-blue text-poke-blue",
      },
      {
        src: caseButtonVar,
        alt: "Variant orange CTA button",
        label: "VARIANT",
        chipClass: "border-fire-red bg-[#fdece9] text-fire-red",
      },
    ],
    legend: [
      { dotClass: "text-[#9aa0ac]", label: "ORIGINAL (RED): 43.61%" },
      { dotClass: "text-fire-red", label: "VARIANT (ORANGE): 44.26%" },
    ],
    statValue: "44.26%",
    statLabel: "VARIANT CLICK RATE",
    shadowClass: "shadow-[6px_6px_0_#e3350d]",
    statTileShadowClass: "shadow-[4px_4px_0_#e3350d]",
    statValueClass: "text-[#ff8a7a]",
  },
  {
    slug: "funnel-optimization",
    eyebrow: "FUNNEL OPTIMIZATION",
    title: "LIFECOMPARED THANK YOU VIDEO",
    problem:
      "After a Thank You Video boosted performance in our Medicare flow, we wanted to validate the same play in our Life Insurance funnel to drive higher lead-to-policy conversion.",
    action:
      "Tested two Thank You Video variations on the LifeCompared confirmation page (one AI-generated and one featuring our director on camera), measuring downstream lead-to-policy.",
    result:
      "The director-led video won, lifting lead-to-policy from 5.8% to 6.9% and confirming that authentic, human-led video outperformed the AI alternative.",
    images: [
      {
        src: caseLifeTyvVar,
        alt: "LifeCompared winning Thank You Video variant",
        label: "WINNING VARIANT",
        chipClass: "border-grass-green bg-[#eaf7ec] text-grass-green",
      },
    ],
    legend: [
      { dotClass: "text-[#9aa0ac]", label: "ORIGINAL: 5.8%" },
      { dotClass: "text-poke-blue", label: "WINNING VARIANT: 6.9%" },
    ],
    statValue: "6.90%",
    statLabel: "LEAD-TO-POLICY",
    shadowClass: "shadow-[6px_6px_0_#2a75bb]",
    statTileShadowClass: "shadow-[4px_4px_0_#2a75bb]",
    statValueClass: "text-[#7fbaff]",
  },
  {
    slug: "email-capture-test",
    eyebrow: "EMAIL CAPTURE TEST",
    title: "EMAIL FIELD PLACEMENT",
    problem:
      "Analytics showed a heavy drop-off on the final step where users were asked for name, phone, and email all at once; it felt like handing over everything in a single ask.",
    action:
      "Restructured the form by moving the email field to an earlier step, separating it from the phone field so the contact ask felt more progressive and less invasive.",
    result:
      "The repositioned email field reduced friction at the final step and lifted overall conversions by 3.48%.",
    images: [
      {
        src: caseEmailOrig,
        alt: "Original quote funnel with email on the final step",
        label: "ORIGINAL",
        chipClass: "border-poke-blue bg-chip-blue text-poke-blue",
      },
      {
        src: caseEmailVar,
        alt: "Variant quote funnel with the email field moved earlier",
        label: "VARIANT",
        chipClass: "border-fire-red bg-[#fdece9] text-fire-red",
      },
    ],
    legend: [
      { dotClass: "text-[#9aa0ac]", label: "ORIGINAL: EMAIL ON FINAL STEP" },
      { dotClass: "text-grass-green", label: "VARIANT: EMAIL MOVED EARLIER" },
    ],
    statValue: "+3.48%",
    statLabel: "CONVERSIONS",
    shadowClass: "shadow-[6px_6px_0_#3b9c4a]",
    statTileShadowClass: "shadow-[4px_4px_0_#3b9c4a]",
    statValueClass: "text-[#6cc47a]",
  },
  {
    slug: "creative-test",
    eyebrow: "CREATIVE TEST",
    title: "MEDICARE THANK YOU VIDEO THUMBNAILS",
    problem:
      "After launching the Medicare Thank You Video, watch rates were lower than expected; the default thumbnail wasn't compelling enough to pull users into the video.",
    action:
      "Designed and tested 3 new high-contrast thumbnail variations against the original, optimizing for visual interrupt and click-to-play intent.",
    result:
      "All 3 variations beat the control on lead-to-policy, with the winning thumbnail lifting LTP from 4.3% to 5.9%.",
    images: [
      {
        src: caseTyvOrig,
        alt: "Original Thank You Video thumbnail",
        label: "ORIGINAL",
        chipClass: "border-poke-blue bg-chip-blue text-poke-blue",
      },
      {
        src: caseTyvVar2,
        alt: "Thank You Video thumbnail variant b",
        label: "VARIANT B",
        chipClass: "border-fire-red bg-[#fdece9] text-fire-red",
      },
      {
        src: caseTyvVar3,
        alt: "Thank You Video thumbnail variant c",
        label: "VARIANT C",
        chipClass: "border-accent-orange bg-[#fdf1e3] text-accent-orange",
      },
      {
        src: caseTyvVar4,
        alt: "Thank You Video thumbnail variant d",
        label: "VARIANT D",
        chipClass: "border-grass-green bg-[#eaf7ec] text-grass-green",
      },
    ],
    legend: [
      { dotClass: "text-[#9aa0ac]", label: "ORIGINAL: 4.3%" },
      { dotClass: "text-psychic-purple", label: "WINNING VARIANT: 5.9%" },
    ],
    statValue: "5.90%",
    statLabel: "LEAD-TO-POLICY",
    shadowClass: "shadow-[6px_6px_0_#7b62c9]",
    statTileShadowClass: "shadow-[4px_4px_0_#7b62c9]",
    statValueClass: "text-[#a58ee0]",
  },
];

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((e) => e.slug === slug);
}
