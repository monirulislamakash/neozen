"use client";

import TraditionMark from "@/components/TraditionMark";
import VisualFrame from "@/components/VisualFrame";
import PrimaryButton from "@/components/PrimaryButton";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import { useCurtain } from "@/components/CurtainPreloader";
import { images } from "@/lib/images";

export default function IntroSection() {
  const { navigate } = useCurtain();

  return (
    <section className="home-intro theme-light" id="philosophy">
      <div className="intro-container">
        <div className="intro-layout">
          <div className="intro-col intro-col-left">
            <Reveal className="intro-mark-wrap" y={24}>
              <TraditionMark />
            </Reveal>

            <div className="intro-head-wrap">
              <h2 className="intro-heading">
                <LineReveal lines={["Every", "Line", "Tells a", "story"]} />
              </h2>
            </div>
          </div>

          <Reveal className="intro-col intro-col-image" delay={80} y={32}>
            <VisualFrame
              src={images.intro}
              alt="Minimal wooden interior"
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </Reveal>

          <div className="intro-col intro-col-right">
            <div className="intro-content-wrap">
              <Reveal className="intro-copy-wrap" delay={160} y={28}>
                <ParaReveal className="intro-copy">
                  In every project at Neozen, the essence of tradition is evident.
                  By integrating the disciplined aesthetics and thoughtful
                  methodologies of our ancestors, we ensure that each structure is
                  not only environmentally attuned but also rich in cultural
                  significance. Our designs reflect a deep respect for the past,
                  while embracing the innovations of the future.
                </ParaReveal>
              </Reveal>

              <PrimaryButton onClick={() => navigate("/about")}>
                About Us
              </PrimaryButton>
            </div>

            <Reveal className="intro-small-image-wrap" delay={260} y={32}>
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
