"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { serviceCards } from "@/lib/service";

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`service-card${shown ? " is-shown" : ""}`}
      style={{ zIndex: index + 1 }}
    >
      <header className="service-card-header">
        <h2 className="service-card-title">{service.title}</h2>
      </header>

      <div className="service-card-body">
        <p className="service-card-number">{service.number}</p>

        <div className="service-card-copy">
          <div>
            <p className="service-card-label">About</p>
            <p className="service-card-about">{service.about}</p>
          </div>
          <div>
            <p className="service-card-label">What&apos;s Included</p>
            <ul className="service-card-list">
              {service.included.map((item) => (
                <li key={item}>
                  <span className="service-card-dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="service-card-figure">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 900px) 80vw, 22vw"
            className="service-card-image"
          />
          <span className="service-card-wipe" aria-hidden="true" />
        </figure>
      </div>
    </article>
  );
}

export default function ServiceCards() {
  return (
    <section className="service-cards" aria-label="Services">
      {serviceCards.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </section>
  );
}
