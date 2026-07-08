import Link from "next/link";

import type { JSX } from "react";

export function LogoMark({ className }: { className?: string }): JSX.Element {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
      <rect fill="url(#appboard-logo-gradient)" height="32" rx="8" width="32" />
      <rect fill="white" fillOpacity="0.95" height="7" rx="1.5" width="7" x="6" y="6" />
      <rect fill="white" fillOpacity="0.65" height="7" rx="1.5" width="11" x="15" y="6" />
      <rect fill="white" fillOpacity="0.65" height="11" rx="1.5" width="7" x="6" y="15" />
      <rect fill="white" fillOpacity="0.9" height="11" rx="1.5" width="11" x="15" y="15" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="appboard-logo-gradient"
          x1="0"
          x2="32"
          y1="0"
          y2="32"
        >
          <stop stopColor="#6d6ffb" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo(): JSX.Element {
  return (
    <Link
      className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80"
      href="/"
    >
      <LogoMark className="size-7" />
      <span className="text-lg font-semibold tracking-tight">AppBoard</span>
    </Link>
  );
}
