import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface ComingSoonBadgeProps {
  className?: string;
}

export function ComingSoonBadge({ className }: ComingSoonBadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-glow/30 bg-glow/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-glow",
        className,
      )}
    >
      Coming soon
    </span>
  );
}
