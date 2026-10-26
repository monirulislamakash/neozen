import Image from "next/image";

export default function VisualFrame({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
}) {
  return (
    <div className={`visual-frame ${className}`.trim()}>
      <figure className="visual-frame-inner">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="cover-image"
        />
        <span className="visual-wipe" aria-hidden="true" />
      </figure>
    </div>
  );
}
