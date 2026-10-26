"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal, { LineReveal } from "@/components/Reveal";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { images } from "@/lib/images";

const team = [
  {
    name: "Marcus Hale",
    role: "Founder & Lead Architect",
    image: images.team5,
  },
  {
    name: "Elena Brooks",
    role: "Chief Sustainability Officer",
    image: images.team6,
  },
  {
    name: "Claire Mercer",
    role: "Senior Design Consultant",
    image: images.team3,
  },
  {
    name: "David Ortega",
    role: "Head of Project Management",
    image: images.team4,
  },
  {
    name: "James Whitfield",
    role: "Lead Structural Engineer",
    image: images.team2,
  },
  {
    name: "Ava Chen",
    role: "Creative Director & Brand Strategist",
    image: images.team1,
  },
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

export default function AboutTeam() {
  const { subscribe } = useSmoothScroll();
  const listRef = useRef(null);

  useEffect(() => {
    const updateCards = () => {
      const root = listRef.current;
      if (!root) return;

      const cards = root.querySelectorAll(".about-team-card");
      const vh = window.innerHeight;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const start = vh * 0.92;
        const end = vh * 0.38;
        const raw = (start - rect.top) / (start - end);
        const progress = easeOutCubic(clamp(raw, 0, 1));

        const wipe = card.querySelector(".about-team-wipe");
        const photoImg = card.querySelector(".about-team-photo-img");
        const titles = card.querySelectorAll(".about-team-title-inner");
        const line = card.querySelector(".about-team-line-inner");
        const social = card.querySelector(".about-team-social");

        if (wipe) {
          wipe.style.transform = `scaleX(${1 - progress})`;
        }

        if (photoImg) {
          const scale = 1.28 - progress * 0.13;
          const y = (1 - progress) * 28;
          photoImg.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
        }

        titles.forEach((title) => {
          const y = (1 - progress) * 125;
          title.style.transform = `translate3d(0, ${y}%, 0)`;
        });

        if (line) {
          line.style.width = `${progress * 100}%`;
        }

        if (social) {
          social.style.opacity = String(progress);
          social.style.visibility = progress > 0.02 ? "visible" : "hidden";
        }

        card.dataset.visible = progress > 0.02 ? "true" : "false";
      });
    };

    updateCards();
    const frame = window.requestAnimationFrame(updateCards);
    const unsubscribe = subscribe(updateCards);

    return () => {
      window.cancelAnimationFrame(frame);
      unsubscribe();
    };
  }, [subscribe]);

  return (
    <section className="about-team theme-light">
      <div className="about-team-container">
        <div className="about-team-layout">
          <div className="about-team-header">
            <Reveal className="about-team-heading-wrap" y={36}>
              <h2 className="about-team-heading">
                <LineReveal lines={["Our", "Team"]} />
              </h2>
            </Reveal>
          </div>

          <div className="about-team-grid" ref={listRef}>
            {team.map((member) => (
              <article
                key={member.name}
                className="about-team-card"
                data-visible="false"
              >
                <div className="about-team-photo">
                  <div className="about-team-photo-inner">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 28vw"
                      className="about-team-photo-img cover-image"
                    />
                  </div>
                  <span className="about-team-wipe" aria-hidden="true" />
                </div>

                <div className="about-team-content">
                  <div className="about-team-meta">
                    <h3 className="about-team-name">
                      <span className="about-team-title-inner">{member.name}</span>
                    </h3>
                    <p className="about-team-role">
                      <span className="about-team-title-inner">{member.role}</span>
                    </p>
                  </div>

                  <div className="about-team-social">
                    <a
                      href="#"
                      className="about-team-social-link"
                      aria-label={`${member.name} on LinkedIn`}
                      onClick={(event) => event.preventDefault()}
                    >
                      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <path
                          d="M25.75.06H2.74C1.64.06.75.93.75 2V25.11c0 1.08.89 1.95 1.99 1.95H25.75c1.1 0 2-.87 2-1.95V2c0-1.07-.9-1.94-2-1.94ZM8.76 23.06H4.75V10.18h4.01v12.88Zm-2-14.65a2.32 2.32 0 1 1 0-4.64 2.32 2.32 0 0 1 0 4.64Zm17 14.65h-4V16.8c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.4 1.63-2.4 3.31v6.37h-4V10.18h3.84v1.76h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14v7.06Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="about-team-social-link"
                      aria-label={`${member.name} on Facebook`}
                      onClick={(event) => event.preventDefault()}
                    >
                      <svg viewBox="0 0 29 29" fill="none" aria-hidden="true">
                        <path
                          d="M26.51.8H2.49A1.49 1.49 0 0 0 1 2.29v24.02c0 .82.67 1.49 1.49 1.49h12.93V17.34h-3.52v-4.07h3.52v-3.01c0-3.49 2.13-5.39 5.24-5.39 1.49 0 2.77.11 3.14.16v3.64l-2.16.01c-1.69 0-2.02.8-2.02 1.98v2.61h4.03l-.52 4.07h-3.51V27.8h6.88A1.49 1.49 0 0 0 28 26.31V2.29A1.49 1.49 0 0 0 26.51.8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="about-team-line" aria-hidden="true">
                    <span className="about-team-line-inner" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
