import { DEFAULT_LOCALE, type SiteLocale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface ComingSoonBadgeProps {
  className?: string;
  locale?: SiteLocale;
}

const LABEL: Record<SiteLocale, string> = {
  en: "Coming soon",
  pl: "Wkrótce",
};

export function ComingSoonBadge({
  className,
  locale = DEFAULT_LOCALE,
}: ComingSoonBadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-glow/30 bg-glow/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-glow",
        className,
      )}
    >
      {LABEL[locale]}
    </span>
  );
}
