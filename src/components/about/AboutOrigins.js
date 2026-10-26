"use client";

import SectionMark from "@/components/SectionMark";
import VisualFrame from "@/components/VisualFrame";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import { images } from "@/lib/images";

const philosophy = ["Regeneration", "Innovation", "Sustainability"];

export default function AboutOrigins() {
  return (
    <section className="about-origins theme-light">
      <div className="about-origins-container">
        <div className="about-origins-top">
          <Reveal className="about-origins-heading-wrap" y={36}>
            <h2 className="about-origins-heading">
              <LineReveal lines={["Building with", "Purpose"]} />
            </h2>
          </Reveal>

          <Reveal className="about-origins-est" delay={100} y={24}>
            <p>EST – 2026</p>
          </Reveal>
        </div>

        <div className="about-origins-grid">
          <div className="about-origins-copy-col">
            <Reveal className="about-origins-mark-wrap" y={24}>
              <SectionMark>Our Origins</SectionMark>
            </Reveal>

            <Reveal className="about-origins-copy-wrap" delay={80} y={28}>
              <ParaReveal className="about-origins-copy">
                Neozen was founded with a singular vision: to redefine
                architecture by harmonizing cutting-edge innovation with the
                principles of sustainability and tradition. Our story is one of
                renewal—a commitment to building spaces that honor the
                environment while pushing the boundaries of what is possible in
                modern design.
              </ParaReveal>
            </Reveal>

            <Reveal className="about-origins-copy-wrap" delay={140} y={28}>
              <ParaReveal className="about-origins-copy">
                Inspired by cultural heritage and forward-thinking technology,
                our founding architects sought to challenge conventional
                practices. Neozen creates living spaces that breathe, adapt, and
                regenerate—offering both functionality and a lasting positive
                impact on urban landscapes.
              </ParaReveal>
            </Reveal>

            <Reveal className="about-origins-philosophy" delay={200} y={24}>
              <p className="about-origins-philosophy-label">Our Philosophy</p>
              <ul className="about-origins-list">
                {philosophy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="about-origins-media" delay={160} y={40}>
            <VisualFrame
              src={images.aboutOrigin}
              alt="Ceramic vessels against a textured wall"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
