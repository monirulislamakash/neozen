"use client";

import SectionMark from "@/components/SectionMark";
import VisualFrame from "@/components/VisualFrame";
import PrimaryButton from "@/components/PrimaryButton";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import { useCurtain } from "@/components/CurtainPreloader";
import { images } from "@/lib/images";

export default function ArchitectureSection() {
  const { navigate } = useCurtain();

  return (
    <section className="home-sustain theme-light" id="architecture">
      <div className="sustain-container">
        <div className="sustain-layout">
          <Reveal className="sustain-col sustain-col-image" delay={80} y={32}>
            <VisualFrame
              src={images.architecture}
              alt="Sustainable architecture"
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </Reveal>

          <div className="sustain-col sustain-col-mid">
            <Reveal className="sustain-mark-wrap" y={24}>
              <SectionMark>Architecture</SectionMark>
            </Reveal>

            <div className="sustain-head-wrap">
              <h2 className="sustain-heading">
                <LineReveal lines={["Designs That", "Sustain Life"]} />
              </h2>
            </div>
          </div>

          <div className="sustain-col sustain-col-right">
            <div className="sustain-content-wrap">
              <Reveal className="sustain-copy-wrap" delay={160} y={28}>
                <ParaReveal className="sustain-copy">
                  Neozen is committed to revolutionizing architecture through
                  sustainability. Each of our projects embodies our dedication to
                  environmental stewardship, leveraging innovative technologies
                  and green practices that set new standards for the industry.
                </ParaReveal>
              </Reveal>

              <PrimaryButton onClick={() => navigate("/sustainability")}>
                Sustainability
              </PrimaryButton>
            </div>

            <Reveal className="sustain-small-image-wrap" delay={260} y={32}>
              <VisualFrame
                src={images.innovation}
                alt="Architectural detail"
                sizes="(max-width: 900px) 100vw, 22vw"
                className="is-small"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section-line" aria-hidden="true">
        <Reveal className="section-line-reveal" y={0}>
          <span className="section-line-inner" />
        </Reveal>
      </div>
    </section>
  );
}
