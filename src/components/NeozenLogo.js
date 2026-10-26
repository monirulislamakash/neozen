export function NeozenLoaderMark({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle
        cx="100"
        cy="100"
        r="72"
        fill="var(--cream)"
        stroke="currentColor"
        strokeWidth="1"
        className="loader-circle-path"
        pathLength="1"
      />
    </svg>
  );
}

export function NeozenNavLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 96 18" className={className} aria-hidden="true">
      <text x="0" y="14.5" className="nav-logo-text">
        NEOZEN
      </text>
    </svg>
  );
}

export function NeozenSmallMark({ className = "" }) {
  return (
    <div className={`hero-small-mark ${className}`.trim()}>
      <div className="hero-small-mark-text">
        <span className="hero-small-mark-title">Neozen</span>
        <span className="hero-small-mark-subtitle">Space Studio</span>
      </div>
    </div>
  );
}

const HERO_LETTERS = ["N", "E", "O", "Z", "E", "N"];

export function NeozenHeroMark({ className = "", draw = false }) {
  return (
    <h1
      className={`hero-title-wrap ${className}`.trim()}
      aria-label="Neozen"
    >
      <svg
        viewBox="0 0 1443 390"
        preserveAspectRatio="xMinYMid meet"
        className={`hero-logo-svg${draw ? " is-drawing" : ""}`}
        aria-hidden="true"
      >
        <text x="0" y="318" className="hero-logo-word">
          {HERO_LETTERS.map((letter, index) => (
            <tspan
              key={`${letter}-${index}`}
              className="hero-logo-letter"
              style={{ "--i": index }}
            >
              {letter}
            </tspan>
          ))}
        </text>
      </svg>
    </h1>
  );
}

export function NeozenFooterMark({ className = "" }) {
  return (
    <div className={`footer-brand-mark ${className}`} aria-hidden="true">
      Neozen
    </div>
  );
}
