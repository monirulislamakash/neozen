export default function SectionMark({ children, className = "" }) {
  return (
    <p className={`section-mark ${className}`.trim()}>{children}</p>
  );
}
