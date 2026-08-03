import Link from "next/link";
import type { Metadata } from "next";
import BattleTextBox from "@/components/BattleTextBox";
import CornerSprite from "@/components/CornerSprite";
import PersonalGallery from "@/components/PersonalGallery";
import PixelButton from "@/components/PixelButton";
import PokeBallIcon from "@/components/PokeBallIcon";
import Reveal from "@/components/Reveal";
import personal1 from "@/assets/about/personal-1.jpg";
import personal2 from "@/assets/about/personal-2.jpg";
import personal3 from "@/assets/about/personal-3.jpg";
import personal4 from "@/assets/about/personal-4.jpg";
import personal5 from "@/assets/about/personal-5.jpg";
import personal6 from "@/assets/about/personal-6.jpg";
import personal7 from "@/assets/about/personal-7.jpg";
import personal8 from "@/assets/about/personal-8.jpg";
import personal9 from "@/assets/about/personal-9.jpg";

export const metadata: Metadata = {
  title: "About Tonya Golden",
  description: "More about Tonya Golden, her passions, and her hobbies outside of work.",
};

const PERSONAL_PHOTOS = [
  { src: personal1, shadow: "shadow-[5px_5px_0_#ffcb05]" },
  { src: personal2, shadow: "shadow-[5px_5px_0_#2a75bb]" },
  { src: personal3, shadow: "shadow-[5px_5px_0_#e3350d]" },
  { src: personal4, shadow: "shadow-[5px_5px_0_#3b9c4a]" },
  { src: personal5, shadow: "shadow-[5px_5px_0_#7b62c9]" },
  { src: personal6, shadow: "shadow-[5px_5px_0_#f0a30a]" },
  { src: personal7, shadow: "shadow-[5px_5px_0_#2a75bb]" },
  { src: personal8, shadow: "shadow-[5px_5px_0_#e3350d]" },
  { src: personal9, shadow: "shadow-[5px_5px_0_#ffcb05]" },
];

export default function AboutPage() {
  return (
    <div className="text-ink [--nav-h:77px]">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b-[5px] border-ink bg-poke-blue px-[clamp(16px,4vw,40px)] py-[14px]">
        <Link
          href="/#about"
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

      <section className="relative overflow-hidden border-b-[5px] border-ink bg-blush-band">
        <CornerSprite src="/sprites/pikachu-pixel-b4bcc4ea.png" corner="top" side="left" size={96} flip />
        <CornerSprite src="/sprites/gengar-0f29c816.png" corner="bottom" side="right" size={96} durationMs={3200} />

        <div className="relative z-2 mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(40px,8vw,64px)]">
          <Reveal>
            <div className="inline-block rounded-2xl border-[3px] border-ink bg-pikachu-yellow px-3 py-[6px] font-pixel text-[11px] tracking-wide text-ink">
              TRAINER PROFILE
            </div>
            <div className="mt-[22px] font-heading text-[13px] text-poke-blue">
              <span aria-hidden>▸</span> THE TRAINER
            </div>
            <h1 className="mt-3 font-heading text-[clamp(22px,4.5vw,30px)] leading-[1.5] text-ink">
              MORE ABOUT TONYA
            </h1>
          </Reveal>

          <Reveal className="mt-9" delay={60}>
            <BattleTextBox tone="light" accent="blue" headline="WHO I AM">
              <p>
                Outside of front end development and UI/UX design, I&rsquo;m endlessly curious
                about how people think and interact with the world. Whether I&rsquo;m optimizing a
                user journey, running A/B experiments, or designing an interface, I&rsquo;m always
                asking why. That curiosity is what led me into product thinking, experimentation,
                and building experiences that solve real problems&mdash;not just look good.
              </p>
            </BattleTextBox>
          </Reveal>

          <Reveal className="mt-11" delay={100}>
            <div className="font-heading text-[13px] text-poke-blue">
              <span aria-hidden>▸</span> PASSIONS &amp; HOBBIES
            </div>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={120}>
              <BattleTextBox tone="light" accent="blue" headline="TRAVEL" className="h-full">
                <p>
                  Travel is one of my biggest motivations. I love experiencing new places,
                  cultures, and food, and I&rsquo;m always planning the next adventure. At the top
                  of my bucket list is Japan, where I can&rsquo;t wait to explore everything from
                  Tokyo&rsquo;s tech scene to quiet mountain towns and Pok&eacute;mon Centers.
                </p>
              </BattleTextBox>
            </Reveal>

            <Reveal delay={160}>
              <BattleTextBox tone="dark" accent="grass" showCursor={false} headline="THE OUTDOORS" className="h-full">
                <p>
                  When I&rsquo;m away from my computer, you&rsquo;ll usually find me outside. I
                  enjoy camping, fishing, spending time at the beach, and exploring Florida
                  whenever I get the chance. It&rsquo;s the perfect reset before diving back into
                  my next project.
                </p>
              </BattleTextBox>
            </Reveal>

            <Reveal delay={200}>
              <BattleTextBox tone="light" accent="fire" headline="GAMING" className="h-full">
                <p>
                  I&rsquo;ve been a gamer for as long as I can remember, and it&rsquo;s one of the
                  reasons I fell in love with technology and design. I enjoy everything from
                  competitive shooters to massive RPGs and survival games. Pok&eacute;mon has
                  always been a favorite, but you&rsquo;ll also find me playing Counter Strike,
                  Ark, Skyrim, Dark Souls, Valorant, GTA, and plenty more.
                </p>
              </BattleTextBox>
            </Reveal>

            <Reveal delay={240}>
              <BattleTextBox tone="dark" accent="yellow" showCursor={false} headline="FANDOM" className="h-full">
                <p>
                  I&rsquo;m proudly a nerd at heart. Pok&eacute;mon, Star Wars, and anime have
                  shaped a lot of the creativity behind this portfolio. Series like Bleach, Demon
                  Slayer, Black Clover, and Jujutsu Kaisen are constant favorites, and they&rsquo;ve
                  inspired me to build something that&rsquo;s a little more fun and memorable than
                  the average developer website.
                </p>
              </BattleTextBox>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-[clamp(16px,4vw,40px)] py-[clamp(48px,8vw,76px)]">
        <Reveal>
          <div className="font-heading text-[14px] text-fire-red">
            <span aria-hidden>▸</span> POK&Eacute;DEX ENTRY
          </div>
          <h2 className="mt-4 font-heading text-[clamp(18px,3.4vw,24px)] leading-[1.5] text-ink">
            PICTURES OF ME
          </h2>
        </Reveal>

        <div className="mt-9">
          <PersonalGallery photos={PERSONAL_PHOTOS} />
        </div>
      </section>

      <footer className="bg-ink px-[clamp(16px,4vw,40px)] py-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PixelButton
            href="/#about"
            className="bg-pikachu-yellow text-ink shadow-[5px_5px_0_#e3350d] hover:shadow-[7px_7px_0_#e3350d]"
          >
            <span aria-hidden>◀</span> BACK TO PORTFOLIO
          </PixelButton>
        </div>
        <div className="mt-7 flex items-center justify-center gap-3">
          <PokeBallIcon size={20} borderWidth={2} borderColor="#8b93a0" />
        </div>
      </footer>
    </div>
  );
}
