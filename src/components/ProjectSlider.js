"use client";

import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { useCurtain } from "@/components/CurtainPreloader";
import { images } from "@/lib/images";

const slides = [
  {
    title: "Shizuka Gardens",
    image: images.project1,
    index: "01",
  },
  {
    title: "Kawa Lofts",
    image: images.project2,
    index: "02",
  },
  {
    title: "Kinsei Pavilion",
    image: images.project3,
    index: "03",
  },
];

export default function ProjectSlider() {
  const { navigate } = useCurtain();

  return (
    <section className="project-stack" id="projects" aria-label="Featured projects">
      {slides.map((slide, index) => (
        <article
          key={slide.title}
          className="project-stack-item"
          style={{ zIndex: index + 1 }}
        >
          <figure className="project-stack-visual">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="project-stack-image"
            />
            <div className="project-stack-overlay" />
          </figure>

          <div className="project-stack-content">
            <div className="project-stack-grid">
              <div className="project-stack-info">
                <h3 className="project-stack-title">{slide.title}</h3>
              </div>

              <div className="project-stack-side">
                <div className="project-stack-counter" aria-label={`Project ${index + 1} of 3`}>
                  <span>{slide.index}</span>
                  <span>/</span>
                  <span>03</span>
                </div>

                <PrimaryButton
                  className="is-on-dark"
                  onClick={() => navigate("/project")}
                >
                  See project
                </PrimaryButton>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
