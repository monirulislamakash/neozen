"use client";

import Image from "next/image";
import IntroSection from "@/components/IntroSection";
import ProjectSlider from "@/components/ProjectSlider";
import InnovationSection from "@/components/InnovationSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ServiceSection from "@/components/ServiceSection";
import QuoteSection from "@/components/QuoteSection";
import ConnectSection from "@/components/ConnectSection";
import SiteFooter from "@/components/SiteFooter";
import { NeozenHeroMark, NeozenSmallMark } from "@/components/NeozenLogo";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <main className="main">
      <section className="home-hero" id="top">
        <figure className="hero-visual">
          <Image
            src={images.hero}
            alt="Neozen architectural interior"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" data-loader-target="overlay" />
        </figure>

        <div className="hero-container">
          <div className="hero-layout">
            <div className="hero-logo-wrap" data-loader-target="svg">
              <NeozenHeroMark draw />
            </div>

            <div className="hero-content" data-loader-target="content">
              <div className="hero-content-top">
                <NeozenSmallMark className="hero-small-mark" />
                <p className="hero-copy" data-loader-target="para">
                  Meaning to &quot;renewal&quot; and &quot;balance,&quot; Neozen
                  reflects a commitment to sustainable and regenerative design
                  practices, aiming to redefine urban environments.
                </p>
              </div>
              <div className="hero-scroll" data-loader-target="scroll-txt">
                <span>scroll</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IntroSection />

      <InnovationSection />

      <ProjectSlider />

      <ArchitectureSection />

      <ServiceSection />

      <QuoteSection />

      <ConnectSection />

      <SiteFooter />
    </main>
  );
}
