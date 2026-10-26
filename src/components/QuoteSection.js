"use client";

import Image from "next/image";
import SectionMark from "@/components/SectionMark";
import Reveal, { ParaReveal } from "@/components/Reveal";
import { images } from "@/lib/images";

export default function QuoteSection() {
  return (
    <section className="home-quote">
      <figure className="quote-visual">
        <Image
          src={images.quote}
          alt="Natural materials and light"
          fill
          sizes="100vw"
          className="cover-image"
        />
        <div className="quote-overlay" />
      </figure>

      <div className="quote-container">
        <Reveal className="quote-top" y={24}>
          <SectionMark className="is-light">Philosophy</SectionMark>
        </Reveal>

        <Reveal className="quote-bottom" delay={120} y={32}>
          <ParaReveal className="quote-copy">
            We embrace mindful craft, recognizing that each project presents a
            unique opportunity to create something exceptional. This philosophy
            guides our practice with meticulous care in every design and
            interaction.
          </ParaReveal>
        </Reveal>
      </div>
    </section>
  );
}
