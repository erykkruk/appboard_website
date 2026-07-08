import { cn } from "@/lib/utils";

import type { JSX, ReactNode } from "react";

interface FeatureCardProps {
  className?: string;
  description: string;
  icon: ReactNode;
  title: string;
}

export function FeatureCard({
  className,
  description,
  icon,
  title,
}: FeatureCardProps): JSX.Element {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/50 hover:bg-panel",
        className,
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface text-accent-bright transition-colors group-hover:border-accent/50">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
