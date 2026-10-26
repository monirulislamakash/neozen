"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { images } from "@/lib/images";
import { serviceIntro } from "@/lib/service";

export default function ServiceHero() {
  const parallaxRef = useRef(null);
  const { subscribe } = useSmoothScroll();

  useEffect(() => {
    return subscribe((lenis) => {
      const node = parallaxRef.current;
      if (!node) return;
      const y = Math.min(lenis.scroll * 0.22, 140);
      const scale = 1.22 - Math.min(lenis.scroll / 4200, 0.12);
      node.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    });
  }, [subscribe]);

  return (
    <section className="service-hero" aria-label="Our service">
      <figure className="service-hero-visual">
        <div ref={parallaxRef} className="service-hero-parallax">
          <Image
            src={images.serviceHero}
            alt="Modern kitchen with wood finishes and tall windows"
            fill
            priority
            sizes="100vw"
            className="service-hero-image"
          />
        </div>
        <div className="service-hero-overlay" />
      </figure>

      <div className="service-hero-layout">
        <p className="service-hero-scroll">Scroll</p>

        <p className="service-hero-mark">Service</p>

        <div className="service-hero-copy">
          <Reveal y={28}>
            <h1 className="service-hero-title">
              <LineReveal lines={["Our Service"]} />
            </h1>
          </Reveal>
          <Reveal delay={120} y={32}>
            <ParaReveal className="service-hero-text">{serviceIntro}</ParaReveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
