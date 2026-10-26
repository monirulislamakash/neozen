"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCurtain } from "@/components/CurtainPreloader";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { images } from "@/lib/images";

export default function AboutHero() {
  const { phase } = useCurtain();
  const { subscribe } = useSmoothScroll();
  const parallaxRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (phase === "open") {
      const timer = window.setTimeout(() => setReady(true), 80);
      return () => window.clearTimeout(timer);
    }
    setReady(false);
  }, [phase]);

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
    <section className="about-hero" data-ready={ready ? "true" : "false"}>
      <figure className="about-hero-visual">
        <div ref={parallaxRef} className="about-hero-parallax">
          <Image
            src={images.aboutHero}
            alt="Neozen studio interior with soft light and quiet materials"
            fill
            priority
            sizes="100vw"
            className="about-hero-image"
          />
        </div>
        <div className="about-hero-overlay" />
      </figure>

      <div className="about-hero-container">
        <div
          className="about-hero-mid about-hero-anim"
          style={{ "--about-delay": "120ms" }}
        >
          <div className="about-hero-mark" aria-hidden="true">
            <span className="about-hero-mark-label">Tradition</span>
          </div>
        </div>

        <div
          className="about-hero-copy about-hero-anim"
          style={{ "--about-delay": "280ms" }}
        >
          <p className="about-hero-kicker">About Us</p>
          <p className="about-hero-text">
            Since inception, Neozen has taken on the challenge of designing
            spaces that not only stand the test of time but evolve with
            it—enriching the lives of those who experience them.
          </p>
        </div>

        <div
          className="about-hero-scroll about-hero-anim"
          style={{ "--about-delay": "420ms" }}
        >
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
