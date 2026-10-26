"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { useCurtain } from "@/components/CurtainPreloader";
import { useSmoothScroll } from "@/components/SmoothScroll";

const SLIDE_MS = 1250;
const WHEEL_THRESHOLD = 28;

function slideRole(index, active, incoming, from, direction, total) {
  if (incoming === index) return direction > 0 ? "is-next" : "is-prev";
  if (index === active) return "is-active";
  if (from !== active && index === from) {
    return direction > 0 ? "is-prev" : "is-next";
  }
  const next = (active + 1) % total;
  const prev = (active - 1 + total) % total;
  if (index === next) return "is-next";
  if (index === prev) return "is-prev";
  return "is-idle";
}

export default function ProjectShowcase() {
  const total = projects.length;
  const [active, setActive] = useState(0);
  const [incoming, setIncoming] = useState(null);
  const [from, setFrom] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeRef = useRef(0);
  const lockRef = useRef(false);
  const accumRef = useRef(0);
  const timerRef = useRef(0);
  const pointerRef = useRef(null);
  const dragRef = useRef(false);
  const { navigate } = useCurtain();
  const { holdScroll, releaseScroll, startScroll, subscribeVirtual } = useSmoothScroll();
  const heldRef = useRef(true);

  const commit = useCallback(
    (index, nextDirection) => {
      if (lockRef.current) return;
      if (index === activeRef.current) return;

      const previous = activeRef.current;
      lockRef.current = true;
      accumRef.current = 0;
      activeRef.current = index;
      setDirection(nextDirection);
      setIncoming(index);

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const reveal = () => {
        setFrom(previous);
        setIncoming(null);
        setActive(index);
      };

      if (reduced) {
        reveal();
      } else {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(reveal);
        });
      }

      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        lockRef.current = false;
      }, reduced ? 700 : SLIDE_MS);
    },
    []
  );

  const step = useCallback(
    (nextDirection) => {
      const current = activeRef.current;
      const index = (current + nextDirection + total) % total;
      commit(index, nextDirection);
    },
    [commit, total]
  );

  const goTo = useCallback(
    (index) => {
      const current = activeRef.current;
      if (index === current) return;
      const forward = (index - current + total) % total;
      const backward = (current - index + total) % total;
      commit(index, forward <= backward ? 1 : -1);
    },
    [commit, total]
  );

  useEffect(() => {
    holdScroll();
    heldRef.current = true;

    const unlockPage = () => {
      if (!heldRef.current) return;
      heldRef.current = false;
      releaseScroll();
      startScroll();
    };

    const lockPage = () => {
      if (heldRef.current) return;
      heldRef.current = true;
      holdScroll();
    };

    const unsubscribe = subscribeVirtual(({ deltaX = 0, deltaY = 0, event }) => {
      const type = event?.type ?? "";
      if (type === "touchstart" || type === "touchend") return;

      const primary = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

      if (window.scrollY > 12) return;

      lockPage();
      if (lockRef.current) {
        accumRef.current = 0;
        return;
      }

      accumRef.current += primary;
      if (Math.abs(accumRef.current) < WHEEL_THRESHOLD) return;

      const direction = accumRef.current > 0 ? 1 : -1;
      accumRef.current = 0;

      if (direction > 0 && activeRef.current === total - 1) {
        unlockPage();
        document.querySelector(".contact-footer")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      step(direction);
    });

    return () => {
      unsubscribe();
      if (heldRef.current) releaseScroll();
      heldRef.current = false;
      window.clearTimeout(timerRef.current);
      lockRef.current = false;
    };
  }, [holdScroll, releaseScroll, startScroll, step, subscribeVirtual, total]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        step(1);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        step(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const onPointerDown = (event) => {
    if (event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest("button")) return;
    pointerRef.current = { x: event.clientX, y: event.clientY };
    dragRef.current = false;
  };

  const onPointerUp = (event) => {
    const start = pointerRef.current;
    pointerRef.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    const moved = Math.abs(dx) > 12 || Math.abs(dy) > 12;
    dragRef.current = moved;
    if (!moved || (Math.abs(dx) < 48 && Math.abs(dy) < 48)) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      step(dx < 0 ? 1 : -1);
      return;
    }
    step(dy < 0 ? 1 : -1);
  };

  return (
    <section
      className="project-page"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        pointerRef.current = null;
      }}
    >
      <div className="project-page-bg" aria-hidden="true">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-page-bg-slide${index === active ? " is-active" : ""}`}
          >
            <Image
              src={project.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="project-page-bg-image"
            />
          </div>
        ))}
        <div className="project-page-bg-shade" />
      </div>

      <div className="project-page-top">
        <h1 className="project-page-kicker">Selected Project</h1>
        <div className="project-page-counter" aria-live="polite">
          <span>{active + 1}</span>
          <span>/</span>
          <span>{total}</span>
        </div>
      </div>

      <div className="project-page-stage">
        <div className="project-page-slider">
          {projects.map((project, index) => {
            const role = slideRole(
              index,
              active,
              incoming,
              from,
              direction,
              total
            );
            const prepping = incoming === index;
            return (
              <article
                key={project.id}
                data-id={project.id}
                className={`project-page-slide ${role}${prepping ? " is-prep" : ""}`}
                aria-hidden={role !== "is-active"}
                tabIndex={role === "is-active" ? 0 : -1}
                onClick={() => {
                  if (dragRef.current) return;
                  navigate(`/project/${project.id}`);
                }}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" || role !== "is-active") return;
                  navigate(`/project/${project.id}`);
                }}
              >
                <div className="project-page-frame">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 900px) 78vw, 29vw"
                    className="project-page-image"
                  />
                </div>
                <div className="project-page-meta">
                  <h2 className="project-page-title">
                    <span>{project.title}</span>
                  </h2>
                  <p className="project-page-location">
                    <span>{project.location}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="project-page-bottom">
        <div className="project-page-nav">
          <button type="button" className="project-page-btn" onClick={() => step(-1)}>
            Prev
          </button>
          <button type="button" className="project-page-btn" onClick={() => step(1)}>
            Next
          </button>
        </div>
        <div className="project-page-bullets" role="tablist" aria-label="Projects">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              className={`project-page-bullet${index === active ? " is-active" : ""}`}
              aria-label={project.title}
              aria-selected={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
