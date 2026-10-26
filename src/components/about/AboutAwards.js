"use client";

import Reveal, { LineReveal } from "@/components/Reveal";

const awards = [
  {
    year: "2022",
    title: "World Architecture Festival",
    detail: "Sustainable Building – Completed Buildings",
  },
  {
    year: "2022",
    title: "Architizer A+",
    detail: "Best Firm – Architecture + Sustainability",
  },
  {
    year: "2022",
    title: "Green Good Design",
    detail: "Green Architecture",
  },
  {
    year: "2022",
    title: "Asia-Pacific Property",
    detail: "Best Residential Architecture",
  },
  {
    year: "2022",
    title: "Dezeen",
    detail: "Sustainable Building",
  },
  {
    year: "2022",
    title: "Institute of Architects",
    detail: "Architectural Design Excellence",
  },
  {
    year: "2022",
    title: "MIPIM Asia",
    detail: "Best Green Development",
  },
  {
    year: "2022",
    title: "International Design Awards",
    detail: "Sustainable Living / Green Architecture",
  },
  {
    year: "2022",
    title: "Urban Land Institute",
    detail: "Excellence in Sustainability",
  },
  {
    year: "2022",
    title: "Global Future Design",
    detail: "Cultural Architecture",
  },
];

export default function AboutAwards() {
  return (
    <section className="about-awards theme-light">
      <div className="about-awards-container">
        <div className="about-awards-layout">
          <div className="about-awards-header">
            <Reveal className="about-awards-heading-wrap" y={36}>
              <h2 className="about-awards-heading">
                <LineReveal lines={["Awards"]} />
              </h2>
            </Reveal>
          </div>

          <ul className="about-awards-list">
            {awards.map((award, index) => (
              <li key={`${award.title}-${index}`} className="about-awards-row">
                <Reveal className="about-awards-item" delay={index * 35} y={20}>
                  <span className="about-awards-index">{index + 1}</span>
                  <p className="about-awards-title">{award.title}</p>
                  <p className="about-awards-detail">{award.detail}</p>
                  <span className="about-awards-year">{award.year}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
