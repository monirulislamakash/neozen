"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { useSmoothScroll } from "./SmoothScroll";

const collageImages = [
  {
    src: images.scroll4,
    className: "innovation-collage-left",
    enterY: 140,
    enterX: -60,
  },
  {
    src: images.scroll5,
    className: "innovation-collage-center",
    enterY: 100,
    enterX: 0,
  },
  {
    src: images.scroll3,
    className: "innovation-collage-right",
    enterY: -80,
    enterX: 70,
  },
];

function seededRandom(index) {
  const value = Math.sin((index + 1) * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function SplitHeadline({ text, progress }) {
  return (
    <div className="innovation-headline-row">
      <div className="innovation-headline">
        {text.split("").map((char, index) => {
          const order = seededRandom(index);
          const start = order * 0.38;
          const local = Math.min(1, Math.max(0, (progress - start) / 0.42));
          const yDir = index % 2 === 0 ? -60 : 60;
          const rotDir = index % 2 === 0 ? 180 : -180;
          const y = (1 - local) * yDir;
          const rotate = (1 - local) * rotDir;
          const scale = local;

          return (
            <span
              key={`${text}-${index}`}
              className="innovation-char"
              style={{
                transform: `translateY(${y}%) rotateY(${rotate}deg) scale(${scale})`,
                opacity: local,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function InnovationSection() {
  const triggerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { subscribe } = useSmoothScroll();

  useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const total = node.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const next = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(next);
    };

    update();
    const unsubscribe = subscribe(update);
    window.addEventListener("resize", update);
    return () => {
      unsubscribe();
      window.removeEventListener("resize", update);
    };
  }, [subscribe]);

  const labelProgress = Math.min(1, progress / 0.2);
  const labelY = (1 - labelProgress) * 100;
  const labelOpacity = Math.min(1, progress * 3.5);
  const headlineProgress = Math.min(1, Math.max(0, (progress - 0.05) / 0.7));
  const collageProgress = Math.min(1, Math.max(0, (progress - 0.28) / 0.55));

  return (
    <section className="innovation-scroll theme-light" id="innovation">
      <div ref={triggerRef} className="innovation-trigger">
        <div className="innovation-sticky">
          <div className="innovation-stage">
            <div className="innovation-copy">
              <div
                className="innovation-label"
                style={{
                  transform: `translateY(${labelY}%)`,
                  opacity: labelOpacity,
                }}
              >
                <p className="innovation-mark">Innovation</p>
              </div>

              <div className="innovation-text-block">
                <SplitHeadline text="the art of" progress={headlineProgress} />
                <SplitHeadline text="innovation" progress={headlineProgress} />
              </div>
            </div>

            <div className="innovation-collage" aria-hidden="true">
              {collageImages.map((item) => {
                const y = (1 - collageProgress) * item.enterY;
                const x = (1 - collageProgress) * item.enterX;
                const scale = 0.72 + collageProgress * 0.28;

                return (
                  <div
                    key={item.src}
                    className={`innovation-collage-slot ${item.className}`}
                  >
                    <figure
                      className="innovation-collage-figure"
                      style={{
                        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                        opacity: collageProgress,
                      }}
                    >
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 28vw, 14vw"
                        className="innovation-image"
                      />
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
