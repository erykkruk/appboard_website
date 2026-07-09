import { cn } from "@/lib/utils";

import { Eyebrow } from "./eyebrow";

import type { JSX, ReactNode } from "react";

interface SectionHeadingProps {
  align?: "center" | "left";
  className?: string;
  description?: string;
  eyebrow: string;
  title: ReactNode;
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
      <Eyebrow align={align}>{eyebrow}</Eyebrow>
      <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
