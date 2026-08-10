import Image from "next/image";
import Link from "next/link";

import {
  DEFAULT_LOCALE,
  localeHome,
  type Locale,
} from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

export function LogoMark({ className }: { className?: string }): JSX.Element {
  return (
    <Image
      alt=""
      className={cn("object-contain", className)}
      height={32}
      priority
      src="/images/brand/appboard-hex-a-violet.svg"
      width={28}
    />
  );
}

export function Logo({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}): JSX.Element {
  return (
    <Link
      className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80"
      href={localeHome(locale)}
    >
      <LogoMark className="h-8 w-7" />
      <span className="text-lg font-semibold tracking-tight">AppBoard</span>
    </Link>
  );
}
