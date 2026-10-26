"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 48,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.style.setProperty("--reveal-delay", `${delay}ms`);
        node.dataset.visible = "true";
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    node.style.setProperty("--reveal-y", `${y}px`);
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={`reveal ${className}`} data-visible="false">
      {children}
    </div>
  );
}

export function LineReveal({ text, lines, className = "" }) {
  const rows = lines ?? text.split(" ");

  return (
    <span className={`line-reveal ${className}`}>
      {rows.map((row, index) => (
        <span key={`${row}-${index}`} className="line-reveal-row">
          <span
            className="line-reveal-word"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            {row}
          </span>
        </span>
      ))}
    </span>
  );
}

export function ParaReveal({ children, className = "" }) {
  const lines =
    typeof children === "string"
      ? children.split(/(?<=[.!?])\s+/)
      : [children];

  return (
    <p className={`para-reveal ${className}`.trim()}>
      {lines.map((line, index) => (
        <span key={`${index}-${String(line).slice(0, 12)}`} className="para-reveal-row">
          <span
            className="para-reveal-line"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </p>
  );
}
