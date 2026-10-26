"use client";

import SectionMark from "@/components/SectionMark";
import VisualFrame from "@/components/VisualFrame";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import { images } from "@/lib/images";

const values = ["Regeneration", "Innovation", "Sustainability"];

export default function AboutValues() {
  return (
    <section className="about-values theme-light">
      <div className="about-values-container">
        <div className="about-values-layout">
          <div className="about-values-copy-col">
            <Reveal className="about-values-heading-wrap" y={36}>
              <h2 className="about-values-heading">
                <LineReveal lines={["What", "We", "Stand", "For"]} />
              </h2>
            </Reveal>

            <Reveal className="about-values-mark-wrap" delay={80} y={24}>
              <SectionMark>Our Philosophy</SectionMark>
            </Reveal>

            <Reveal className="about-values-copy-wrap" delay={120} y={28}>
              <ParaReveal className="about-values-copy">
                Neozen is more than an architecture firm—it is a community
                united by shared values and a passion for sustainability. Our
                culture is rooted in continuous learning, creativity, and an
                unwavering respect for tradition.
              </ParaReveal>
            </Reveal>

            <Reveal className="about-values-copy-wrap" delay={180} y={28}>
              <ParaReveal className="about-values-copy">
                Inspired by cultural heritage and forward-thinking technology,
                Neozen creates living spaces that breathe, adapt, and
                regenerate—offering both functionality and a lasting positive
                impact on urban landscapes.
              </ParaReveal>
            </Reveal>

            <Reveal className="about-values-list-wrap" delay={220} y={24}>
              <p className="about-values-list-label">Key Values</p>
              <ul className="about-values-list">
                {values.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="about-values-media" delay={160} y={40}>
            <VisualFrame
              src={images.aboutValues}
              alt="Neozen team member portrait"
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
