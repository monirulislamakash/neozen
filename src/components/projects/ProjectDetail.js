"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCurtain } from "@/components/CurtainPreloader";
import { useSmoothScroll } from "@/components/SmoothScroll";
import PrimaryButton from "@/components/PrimaryButton";
import Reveal, { LineReveal, ParaReveal } from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import VisualFrame from "@/components/VisualFrame";

function titleLines(title) {
  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) return [title];
  return [parts.slice(0, -1).join(" "), parts.at(-1)];
}

function Rise({ children, delay = 0, className = "" }) {
  return (
    <span className={`detail-rise ${className}`.trim()}>
      <span className="detail-rise-inner" style={{ "--d": `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

export default function ProjectDetail({ project, nextProject }) {
  const { phase, navigate } = useCurtain();
  const { subscribe } = useSmoothScroll();
  const parallaxRef = useRef(null);
  const [ready, setReady] = useState(false);
  const lines = titleLines(project.title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  useEffect(() => {
    if (phase === "open") {
      const timer = window.setTimeout(() => setReady(true), 80);
      return () => window.clearTimeout(timer);
    }
    setReady(false);
  }, [phase, project.id]);

  useEffect(() => {
    return subscribe((lenis) => {
      const node = parallaxRef.current;
      if (!node) return;
      const y = Math.min(lenis.scroll * 0.18, 180);
      const scale = 1.12 - Math.min(lenis.scroll / 4800, 0.08);
      node.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    });
  }, [subscribe]);

  return (
    <main className="detail-page">
      <section
        className="detail-hero"
        data-ready={ready ? "true" : "false"}
        aria-label={project.title}
      >
        <figure className="detail-hero-visual">
          <div ref={parallaxRef} className="detail-hero-parallax">
            <Image
              src={project.images.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="detail-hero-image"
            />
          </div>
          <div className="detail-hero-shade" />
        </figure>

        <div className="detail-hero-copy">
          <h1 className="detail-hero-title">
            {lines.map((line, index) => (
              <Rise key={line} delay={260 + index * 90}>
                {line}
              </Rise>
            ))}
          </h1>
          <div className="detail-hero-meta">
            <p>
              <Rise delay={480}>{project.location}</Rise>
            </p>
            <p className="detail-hero-facts">
              <Rise delay={560}>{project.category}</Rise>
              <Rise delay={620} className="detail-hero-dash">
                —
              </Rise>
              <Rise delay={680}>{project.year}</Rise>
            </p>
          </div>
        </div>
      </section>

      <section className="detail-info" aria-label="Project info">
        <div className="detail-info-grid">
          <Reveal className="detail-info-portrait" y={36}>
            <VisualFrame
              className="detail-frame detail-frame-portrait"
              src={project.images.portrait}
              alt={project.title}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </Reveal>

          <div className="detail-info-copy">
            <Reveal y={28}>
              <VisualFrame
                className="detail-frame detail-frame-band"
                src={project.images.band}
                alt=""
                sizes="(max-width: 900px) 100vw, 36vw"
              />
            </Reveal>
            <Reveal y={24}>
              <p className="detail-kicker">info</p>
              <ParaReveal className="detail-summary">{project.summary}</ParaReveal>
            </Reveal>
            <div className="detail-specs">
              <Reveal y={16}>
                <h2 className="detail-kicker">Details</h2>
              </Reveal>
              {project.details.map((item, index) => (
                <Reveal key={item.label} y={18} delay={index * 70}>
                  <div className="detail-spec">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-wide" aria-hidden="true">
        <Reveal y={20}>
          <VisualFrame
            className="detail-frame detail-frame-wide"
            src={project.images.wide}
            alt=""
            sizes="100vw"
          />
        </Reveal>
      </section>

      <section className="detail-features" aria-label="Main features">
        <div className="detail-features-top">
          <Reveal className="detail-features-visual" y={32}>
            <VisualFrame
              className="detail-frame detail-frame-feature"
              src={project.images.feature}
              alt=""
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </Reveal>
          <div className="detail-features-copy">
            <Reveal y={20}>
              <h2 className="detail-features-heading">
                <LineReveal lines={["Main features"]} />
              </h2>
            </Reveal>
            <ul className="detail-feature-list">
              {project.features.map((feature, index) => (
                <Reveal key={feature.name} y={22} delay={index * 80} className="detail-feature-reveal">
                  <li className="detail-feature">
                    <span className="detail-feature-dot" aria-hidden="true" />
                    <div>
                      <h3>{feature.name}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal y={24}>
              <VisualFrame
                className="detail-frame detail-frame-side"
                src={project.images.featureSide}
                alt=""
                sizes="(max-width: 900px) 70vw, 18vw"
              />
            </Reveal>
          </div>
        </div>
        <Reveal y={24}>
          <VisualFrame
            className="detail-frame detail-frame-feature-wide"
            src={project.images.featureWide}
            alt=""
            sizes="(max-width: 900px) 100vw, 70vw"
          />
        </Reveal>
      </section>

      <section className="detail-quote" aria-label="Client note">
        <Reveal y={30}>
          <blockquote>
            <ParaReveal className="detail-quote-text">{project.quote.text}</ParaReveal>
            <footer>
              <LineReveal lines={[project.quote.name]} className="detail-quote-name" />
              <p>{project.quote.role}</p>
            </footer>
          </blockquote>
        </Reveal>
      </section>

      <section className="detail-lists" aria-label="Awards and press">
        <RecordList title="Awards" items={project.awards} />
        <RecordList title="Press" items={project.press} />
      </section>

      <section className="detail-next" aria-label="Next project">
        <div className="detail-next-copy">
          <Reveal y={18}>
            <p className="detail-kicker">Next project</p>
          </Reveal>
          <Reveal y={24}>
            <h2>
              <LineReveal lines={titleLines(nextProject.title)} />
            </h2>
            <PrimaryButton onClick={() => navigate(`/project/${nextProject.id}`)}>
              See project
            </PrimaryButton>
          </Reveal>
        </div>
        <Reveal className="detail-next-visual" y={28}>
          <button
            type="button"
            className="detail-next-hit"
            onClick={() => navigate(`/project/${nextProject.id}`)}
            aria-label={`See ${nextProject.title}`}
          >
            <VisualFrame
              className="detail-frame detail-frame-next"
              src={nextProject.images.hero}
              alt={nextProject.title}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </button>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

function RecordList({ title, items }) {
  return (
    <div className="detail-record">
      <Reveal y={16}>
        <h2>
          <LineReveal lines={[title]} />
        </h2>
      </Reveal>
      <ul>
        {items.map((item, index) => (
          <Reveal key={`${item.org}-${item.year}-${index}`} y={16} delay={index * 60}>
            <li className="detail-record-row">
              <span>{item.org}</span>
              <span>{item.detail}</span>
              <span>{item.year}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
