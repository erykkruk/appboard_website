export const LOCALES = ["en", "pl"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleConfig {
  code: Locale;
  hreflang: string;
  htmlLang: string;
  label: string;
  ogLocale: string;
  pathPrefix: string;
  shortLabel: string;
}

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    hreflang: "en-US",
    htmlLang: "en",
    label: "English",
    ogLocale: "en_US",
    pathPrefix: "",
    shortLabel: "EN",
  },
  pl: {
    code: "pl",
    hreflang: "pl-PL",
    htmlLang: "pl",
    label: "Polski",
    ogLocale: "pl_PL",
    pathPrefix: "/pl",
    shortLabel: "PL",
  },
};

export const LOCALE_LIST: LocaleConfig[] = LOCALES.map(
  (code) => LOCALE_CONFIG[code],
);

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeHome(locale: Locale): string {
  return LOCALE_CONFIG[locale].pathPrefix || "/";
}

/** The locale a pathname belongs to, for chrome mounted outside a page. */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1] ?? "";

  return isLocale(segment) && segment !== DEFAULT_LOCALE
    ? segment
    : DEFAULT_LOCALE;
}

export function withLocalePrefix(path: string, locale: Locale): string {
  const prefix = LOCALE_CONFIG[locale].pathPrefix;

  if (!prefix) {
    return path;
  }

  return path === "/" ? prefix : `${prefix}${path}`;
}
