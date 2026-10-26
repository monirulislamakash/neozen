"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { simplicityPhotos } from "@/lib/service";

function seededRandom(index) {
  const value = Math.sin((index + 1) * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function FlipLine({ text, seed }) {
  return (
    <div className="service-simplicity-line">
      {text.split("").map((char, index) => (
        <span key={`${text}-${index}`} className="service-simplicity-char-mask">
          <span
            className="service-simplicity-char"
            data-order={seededRandom(index + seed).toFixed(4)}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function ServiceSimplicity() {
  const triggerRef = useRef(null);
  const { subscribe } = useSmoothScroll();

  useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const stage = node.querySelector(".service-simplicity-stage");
    const photos = [...node.querySelectorAll("[data-travel]")];
    const chars = [...node.querySelectorAll(".service-simplicity-char")];

    const update = () => {
      const rect = node.getBoundingClientRect();
      const total = node.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / total));

      if (stage) {
        stage.style.transform = `translate3d(0, ${-progress * 95}vh, 0)`;
      }

      photos.forEach((photo) => {
        const travel = Number(photo.dataset.travel) || 0;
        photo.style.transform = `translate3d(0, ${-progress * travel}px, 0)`;
      });

      chars.forEach((char) => {
        const order = Number(char.dataset.order) || 0;
        const local = Math.min(1, Math.max(0, (progress - order * 0.22) / 0.28));
        char.style.transform = `translate3d(0, ${(1 - local) * 110}%, 0)`;
        char.style.opacity = String(local);
      });
    };

    update();
    const unsubscribe = subscribe(update);
    window.addEventListener("resize", update);
    return () => {
      unsubscribe();
      window.removeEventListener("resize", update);
    };
  }, [subscribe]);

  return (
    <section className="service-simplicity" aria-label="Simplicity in motion">
      <div ref={triggerRef} className="service-simplicity-trigger">
        <div className="service-simplicity-sticky">
          <div className="service-simplicity-stage" aria-hidden="true">
            {simplicityPhotos.map((item) => (
              <div key={item.src} className={`service-simplicity-photo ${item.className}`}>
                <div className="service-simplicity-photo-shift" data-travel={item.drift}>
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 34vw, 18vw"
                    className="service-simplicity-image"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="service-simplicity-words">
            <FlipLine text="Simplicity" seed={1} />
            <FlipLine text="In motion" seed={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
