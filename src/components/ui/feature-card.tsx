import Link from "next/link";

import { cn } from "@/lib/utils";

import { ArrowRightIcon } from "./icons";

import type { JSX, ReactNode } from "react";

interface FeatureCardProps {
  badge?: ReactNode;
  className?: string;
  description: string;
  href?: string;
  icon: ReactNode;
  linkLabel?: string;
  title: string;
}

export function FeatureCard({
  badge,
  className,
  description,
  href,
  icon,
  linkLabel = "Learn more",
  title,
}: FeatureCardProps): JSX.Element {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface text-accent-bright transition-colors group-hover:border-accent/50">
          {icon}
        </div>
        {badge}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright">
          {linkLabel}
          <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      ) : null}
    </>
  );

  const cardStyles = cn(
    "lift group rounded-2xl border border-line bg-panel/60 p-6 hover:border-accent/50 hover:bg-panel",
    className,
  );

  if (href) {
    return (
      <Link className={cn(cardStyles, "flex flex-col")} href={href}>
        {body}
      </Link>
    );
  }

  return <article className={cardStyles}>{body}</article>;
}
