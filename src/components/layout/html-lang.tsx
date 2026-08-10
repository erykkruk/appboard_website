"use client";

import { useEffect } from "react";

import { DEFAULT_LOCALE, LOCALE_CONFIG, type Locale } from "@/lib/i18n/locales";

/**
 * Next.js renders the <html> element once, in the single root layout, so a
 * nested locale segment cannot set its lang attribute at build time. This syncs
 * it on the client and restores the default on the way out, which is what
 * assistive technology reads. Search engines target language via the hreflang
 * alternates, which are static.
 */
export function HtmlLang({ locale }: { locale: Locale }): null {
  useEffect(() => {
    const element = document.documentElement;
    const previous = element.lang;
    element.lang = LOCALE_CONFIG[locale].htmlLang;

    return () => {
      element.lang = previous || LOCALE_CONFIG[DEFAULT_LOCALE].htmlLang;
    };
  }, [locale]);

  return null;
}
