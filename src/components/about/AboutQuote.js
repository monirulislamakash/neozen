"use client";

import Image from "next/image";
import Reveal, { ParaReveal } from "@/components/Reveal";
import SectionMark from "@/components/SectionMark";
import { images } from "@/lib/images";

export default function AboutQuote() {
  return (
    <section className="about-quote">
      <figure className="about-quote-visual">
        <Image
          src={images.aboutQuote}
          alt="Quiet Neozen interior with mirrored light"
          fill
          sizes="100vw"
          className="cover-image"
        />
        <div className="about-quote-overlay" />
      </figure>

      <div className="about-quote-container">
        <Reveal className="about-quote-mark-wrap" y={24}>
          <div className="about-quote-mark">
            <span className="about-quote-mark-word">Challenger</span>
            <SectionMark className="is-light">Philosophy</SectionMark>
          </div>
        </Reveal>

        <Reveal className="about-quote-copy-wrap" delay={100} y={32}>
          <ParaReveal className="about-quote-copy">
            We embrace the spirit of the challenger. This philosophy drives us
            to approach every project with boldness and a commitment to pushing
            boundaries, ensuring we continuously innovate and evolve.
          </ParaReveal>
        </Reveal>
      </div>
    </section>
  );
}
