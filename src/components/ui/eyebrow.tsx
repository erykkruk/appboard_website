import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface EyebrowProps {
  align?: "center" | "left";
  children: string;
  className?: string;
}

export function Eyebrow({
  align = "left",
  children,
  className,
}: EyebrowProps): JSX.Element {
  return (
    <p
      className={cn(
        "flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright",
        align === "center" && "items-center",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-accent-bright" />
      {children}
    </p>
  );
}
