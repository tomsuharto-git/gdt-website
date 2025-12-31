'use client';

interface FallbackImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function FallbackImage({ src, fallbackSrc, alt, className }: FallbackImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
}
