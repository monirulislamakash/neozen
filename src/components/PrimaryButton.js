export default function PrimaryButton({ children, className = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={`primary-button ${className}`.trim()}
      onClick={onClick}
    >
      <span className="primary-button-flip">
        <span className="primary-button-face primary-button-front">
          <span className="primary-button-label">{children}</span>
        </span>
        <span className="primary-button-face primary-button-back" aria-hidden="true">
          <span className="primary-button-label">{children}</span>
        </span>
      </span>
    </button>
  );
}
