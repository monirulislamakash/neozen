"use client";

import Image from "next/image";
import Reveal, { ParaReveal } from "@/components/Reveal";
import { images } from "@/lib/images";

export default function ServiceQuote() {
  return (
    <section className="service-quote">
      <figure className="service-quote-visual">
        <Image
          src={images.serviceQuote}
          alt="Quiet interior with warm light"
          fill
          sizes="100vw"
          className="cover-image"
        />
        <div className="service-quote-overlay" />
      </figure>

      <div className="service-quote-container">
        <Reveal y={32}>
          <ParaReveal className="service-quote-copy">
            Our service is built on relationships of trust. This philosophy
            ensures that every interaction with our clients is marked by
            genuine care, dedication, and a commitment to exceeding
            expectations.
          </ParaReveal>
        </Reveal>
      </div>
    </section>
  );
}
