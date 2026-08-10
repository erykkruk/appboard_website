export const LOCALES = ["en", "pl"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/**
 * How much of the site a locale serves.
 *
 * - `site`: every page, marketing and blog alike.
 * - `blog`: the blog only. Used for markets where we publish articles but do
 *   not translate the product pages. These locales never appear in the switcher
 *   outside the blog, so there are no dead links to pages that do not exist.
 */
export type LocaleScope = "site" | "blog";

export interface LocaleConfig {
  code: Locale;
  hreflang: string;
  htmlLang: string;
  label: string;
  ogLocale: string;
  pathPrefix: string;
  scope: LocaleScope;
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
    scope: "site",
    shortLabel: "EN",
  },
  pl: {
    code: "pl",
    hreflang: "pl-PL",
    htmlLang: "pl",
    label: "Polski",
    ogLocale: "pl_PL",
    pathPrefix: "/pl",
    scope: "site",
    shortLabel: "PL",
  },
};

/** Paths a `blog` scoped locale is allowed to serve, as English paths. */
export function scopeCoversPath(
  scope: LocaleScope,
  englishPath: string,
): boolean {
  if (scope === "site") {
    return true;
  }

  return englishPath === "/blog" || englishPath.startsWith("/blog/");
}

export function localeCoversPath(locale: Locale, englishPath: string): boolean {
  return scopeCoversPath(LOCALE_CONFIG[locale].scope, englishPath);
}

export const LOCALE_LIST: LocaleConfig[] = LOCALES.map(
  (code) => LOCALE_CONFIG[code],
);

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Where a locale's switcher entry points when the current page has no
 * counterpart. A blog-only locale has no marketing homepage, so its blog index
 * is its landing page.
 */
export function localeHome(locale: Locale): string {
  const config = LOCALE_CONFIG[locale];

  if (config.scope === "blog") {
    return `${config.pathPrefix}/blog`;
  }

  return config.pathPrefix || "/";
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
