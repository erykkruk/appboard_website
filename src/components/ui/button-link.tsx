import Link from "next/link";

import { cn } from "@/lib/utils";

import type { JSX, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  ghost: "text-muted hover:text-foreground",
  primary: "bg-accent text-white hover:bg-accent-bright",
  secondary:
    "border border-line bg-panel text-foreground hover:border-accent/60 hover:bg-panel/60",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  lg: "px-6 py-3 text-base",
  md: "px-4 py-2 text-sm",
};

export function ButtonLink({
  children,
  className,
  href,
  size = "md",
  variant = "primary",
}: ButtonLinkProps): JSX.Element {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className);

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
