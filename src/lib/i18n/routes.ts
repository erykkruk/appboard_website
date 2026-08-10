import { ALL_DOC_PAGES } from "@/lib/docs";
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIG,
  LOCALES,
  localeHome,
  withLocalePrefix,
  type Locale,
} from "@/lib/i18n/locales";

export type RoutePair = Record<Locale, string>;

/**
 * Paths that keep the same slug in every locale and only gain the locale
 * prefix. Adding a locale needs no change here.
 */
const MIRRORED_PATHS: string[] = [
  "/",
  "/pricing",
  "/faq",
  "/opensource",
  "/policy",
  "/terms",
  "/docs",
  "/blog",
  "/screenshot-editor",
  ...ALL_DOC_PAGES.map((page) => `/docs/${page.slug}`),
];

/**
 * Paths whose slug is itself translated, keyed by the English path. Blog
 * articles are the only such routes: their slugs are SEO targets per market.
 */
const TRANSLATED_PATHS: Record<string, Partial<Record<Locale, string>>> = {
  "/blog/app-store-localization": {
    pl: "/pl/blog/google-play-console-publikacja-aplikacji",
  },
  "/blog/app-store-optimization-services": {
    pl: "/pl/blog/promocja-aplikacji-mobilnej",
  },
  "/blog/app-store-screenshot-sizes": {
    pl: "/pl/blog/app-store-connect-publikacja-aplikacji",
  },
  "/blog/best-aso-tools": {
    pl: "/pl/blog/pozycjonowanie-aplikacji-mobilnych",
  },
};

function buildRoutePair(englishPath: string): RoutePair {
  const overrides = TRANSLATED_PATHS[englishPath] ?? {};
  const pair = {} as RoutePair;

  for (const locale of LOCALES) {
    pair[locale] =
      overrides[locale] ?? withLocalePrefix(englishPath, locale);
  }

  return pair;
}

export const ROUTE_PAIRS: RoutePair[] = [
  ...MIRRORED_PATHS,
  ...Object.keys(TRANSLATED_PATHS),
].map(buildRoutePair);

const PAIR_BY_PATH = new Map<string, RoutePair>();

for (const pair of ROUTE_PAIRS) {
  for (const locale of LOCALES) {
    PAIR_BY_PATH.set(pair[locale], pair);
  }
}

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

/** The counterpart of any known path in every locale, or null if unpaired. */
export function findRoutePair(path: string): RoutePair | null {
  return PAIR_BY_PATH.get(normalizePath(path)) ?? null;
}

/** Where the language switcher should send a visitor, per locale. */
export function switcherTarget(path: string, locale: Locale): string {
  return findRoutePair(path)?.[locale] ?? localeHome(locale);
}

/** The localized path for an English path, falling back to the prefix rule. */
export function getLocalizedPath(englishPath: string, locale: Locale): string {
  return (
    TRANSLATED_PATHS[englishPath]?.[locale] ??
    withLocalePrefix(englishPath, locale)
  );
}

/**
 * hreflang alternates for a page, keyed the way Next.js expects. x-default
 * always points at the default locale so unmatched visitors land on English.
 */
export function buildAlternates(englishPath: string): Record<string, string> {
  const alternates: Record<string, string> = {};

  for (const locale of LOCALES) {
    alternates[LOCALE_CONFIG[locale].hreflang] = getLocalizedPath(
      englishPath,
      locale,
    );
  }

  alternates["x-default"] = getLocalizedPath(englishPath, DEFAULT_LOCALE);

  return alternates;
}

/** Every non-default-locale path, used to fill the sitemap. */
export function localizedPathsFor(locale: Locale): string[] {
  return ROUTE_PAIRS.map((pair) => pair[locale]);
}
