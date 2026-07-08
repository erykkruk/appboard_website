import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface SectionHeadingProps {
  align?: "center" | "left";
  className?: string;
  description?: string;
  eyebrow: string;
  title: string;
}

export function SectionHeading({
  align = "center",
  className,
  description,
  eyebrow,
  title,
}: SectionHeadingProps): JSX.Element {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
