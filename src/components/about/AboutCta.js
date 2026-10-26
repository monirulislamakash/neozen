"use client";

import SectionMark from "@/components/SectionMark";
import VisualFrame from "@/components/VisualFrame";
import PrimaryButton from "@/components/PrimaryButton";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import { useCurtain } from "@/components/CurtainPreloader";
import { images } from "@/lib/images";

export default function AboutCta() {
  const { navigate } = useCurtain();

  return (
    <section className="about-cta theme-light">
      <div className="about-cta-container">
        <div className="about-cta-layout">
          <div className="about-cta-col about-cta-col-left">
            <Reveal className="about-cta-mark-wrap" y={24}>
              <SectionMark>Connect</SectionMark>
            </Reveal>

            <Reveal className="about-cta-small-media" delay={120} y={32}>
              <VisualFrame
                src={images.aboutCtaSmall}
                alt="Architectural courtyard detail"
                sizes="(max-width: 900px) 100vw, 22vw"
                className="is-small"
              />
            </Reveal>
          </div>

          <div className="about-cta-col about-cta-col-mid">
            <Reveal className="about-cta-heading-wrap" delay={60} y={36}>
              <h2 className="about-cta-heading">
                <LineReveal lines={["Craft Your", "Vision"]} />
              </h2>
            </Reveal>

            <Reveal className="about-cta-copy-wrap" delay={120} y={28}>
              <ParaReveal className="about-cta-copy">
                Neozen blends innovation and sustainability to craft spaces that
                stand out and stand for something. Let&apos;s bring your vision
                to life with thoughtful, modern design.
              </ParaReveal>
            </Reveal>

            <Reveal className="about-cta-action" delay={180} y={24}>
              <PrimaryButton onClick={() => navigate("/contact")}>
                Get in touch
              </PrimaryButton>
            </Reveal>
          </div>

          <Reveal className="about-cta-col about-cta-col-right" delay={160} y={40}>
            <VisualFrame
              src={images.aboutCtaLarge}
              alt="Neozen studio atmosphere"
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
