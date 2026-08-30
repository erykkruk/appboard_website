import { cn } from "@/lib/utils";

import type { JSX, ReactNode } from "react";

type CalloutVariant = "key" | "warning";

interface CalloutProps {
  children: ReactNode;
  className?: string;
  title: string;
  variant?: CalloutVariant;
}

/**
 * A boxed aside inside long-form prose. `key` fronts the takeaways at the top
 * of an article, `warning` marks the one thing a reader must not get wrong.
 * Both sit outside the reading flow so a skimmer still catches them.
 */
const VARIANT_STYLE: Record<CalloutVariant, string> = {
  key: "border-accent/40 bg-accent/5",
  warning: "border-destructive/40 bg-destructive/5",
};

const VARIANT_LABEL: Record<CalloutVariant, string> = {
  key: "text-accent-bright",
  warning: "text-destructive",
};

export function Callout({
  children,
  className,
  title,
  variant = "key",
}: CalloutProps): JSX.Element {
  return (
    <aside
      className={cn(
        "rounded-2xl border p-6 sm:p-7",
        VARIANT_STYLE[variant],
        className,
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          VARIANT_LABEL[variant],
        )}
      >
        {title}
      </p>
      <div className="callout-body mt-4 text-[0.9375rem] leading-relaxed text-muted">
        {children}
      </div>
    </aside>
  );
}
