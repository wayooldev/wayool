"use client";

import Image from "next/image";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/** Ribbon "W" mark with upward arrow — same asset as favicon / PWA icon. */
export function WayoolLogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <Image
      src="/icons/logo-mark.png"
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className ?? ""}`}
      priority
      aria-hidden
    />
  );
}

type WordmarkProps = {
  className?: string;
  textClassName?: string;
};

/** Lowercase wayool wordmark. */
export function WayoolWordmark({
  className,
  textClassName = "font-display text-lg font-bold tracking-tight",
}: WordmarkProps) {
  return (
    <span
      className={`text-[var(--text-primary)] ${textClassName} ${className ?? ""}`}
    >
      wayool
    </span>
  );
}

type BrandLogoProps = {
  markSize?: number;
  className?: string;
  wordmarkClassName?: string;
  textClassName?: string;
};

export function WayoolBrandLogo({
  markSize = 32,
  className,
  wordmarkClassName,
  textClassName,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <WayoolLogoMark size={markSize} />
      <WayoolWordmark className={wordmarkClassName} textClassName={textClassName} />
    </span>
  );
}
