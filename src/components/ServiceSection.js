"use client";

import Image from "next/image";
import SectionMark from "@/components/SectionMark";
import PrimaryButton from "@/components/PrimaryButton";
import Reveal, { ParaReveal } from "@/components/Reveal";
import { useCurtain } from "@/components/CurtainPreloader";
import { images } from "@/lib/images";

export default function ServiceSection() {
  const { navigate } = useCurtain();

  return (
    <section className="home-service theme-light" id="services">
      <div className="service-container">
        <Reveal className="service-mark-wrap" y={24}>
          <SectionMark>Service</SectionMark>
        </Reveal>

        <h2 className="service-headline" aria-label="Precision in every design">
          <span className="service-line service-line-1">Precision</span>

          <span className="service-line service-line-2">
            <span className="service-word">In</span>
            <span className="service-inline-media" aria-hidden="true">
              <Image
                src={images.service}
                alt=""
                fill
                sizes="(max-width: 900px) 46vw, 30vw"
                className="service-inline-image"
              />
            </span>
            <span className="service-word">Every</span>
          </span>

          <span className="service-line service-line-3">Design</span>
        </h2>

        <div className="service-bottom">
          <Reveal className="service-copy-wrap" delay={120} y={28}>
            <ParaReveal className="service-copy">
              Each Neozen project blends custom solutions with sustainable
              innovation, ensuring our designs meet your exact needs while
              respecting the planet.
            </ParaReveal>
          </Reveal>

          <PrimaryButton onClick={() => navigate("/service")}>
            Our service
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
