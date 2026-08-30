import { ALL_DOC_PAGES } from "@/lib/docs";
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIG,
  LOCALE_LIST,
  LOCALES,
  localeCoversPath,
  localeHome,
  withLocalePrefix,
  type Locale,
  type LocaleConfig,
} from "@/lib/i18n/locales";

/**
 * A path in every locale that serves it. Locales scoped to the blog are absent
 * from marketing pairs, so nothing downstream can emit a link, an alternate or
 * a sitemap entry for a page that does not exist.
 */
export type RoutePair = Partial<Record<Locale, string>>;

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
 * A locale missing from an entry simply has no version of that article yet.
 */
const TRANSLATED_PATHS: Record<string, Partial<Record<Locale, string>>> = {
  "/blog/app-preview-video-vs-screenshots": {
    de: "/de/blog/app-preview-video-oder-screenshots",
    es: "/es/blog/video-promocional-o-capturas",
    pl: "/pl/blog/wideo-promocyjne-aplikacji",
  },
  "/blog/app-store-localization": {
    de: "/de/blog/google-play-console-app-veroeffentlichen",
    es: "/es/blog/google-play-console-publicar-app",
    pl: "/pl/blog/google-play-console-publikacja-aplikacji",
  },
  "/blog/app-store-optimization-services": {
    de: "/de/blog/aso-agentur-kosten",
    es: "/es/blog/agencia-aso-precios",
    pl: "/pl/blog/promocja-aplikacji-mobilnej",
  },
  "/blog/app-store-screenshot-sizes": {
    de: "/de/blog/app-store-connect-app-veroeffentlichen",
    es: "/es/blog/app-store-connect-publicar-app",
    pl: "/pl/blog/app-store-connect-publikacja-aplikacji",
  },
  "/blog/best-aso-tools": {
    de: "/de/blog/app-store-optimierung",
    es: "/es/blog/posicionamiento-aso",
    pl: "/pl/blog/pozycjonowanie-aplikacji-mobilnych",
  },
};

/** The locales that serve a given English path, in registry order. */
export function localesForPath(englishPath: string): Locale[] {
  const overrides = TRANSLATED_PATHS[englishPath];

  return LOCALES.filter((locale) => {
    if (!localeCoversPath(locale, englishPath)) {
      return false;
    }

    // A translated path exists in a non-default locale only once its slug is
    // registered, so a locale can be added before its articles are written.
    if (overrides && locale !== DEFAULT_LOCALE) {
      return Boolean(overrides[locale]);
    }

    return true;
  });
}

function buildRoutePair(englishPath: string): RoutePair {
  const overrides = TRANSLATED_PATHS[englishPath] ?? {};
  const pair: RoutePair = {};

  for (const locale of localesForPath(englishPath)) {
    pair[locale] = overrides[locale] ?? withLocalePrefix(englishPath, locale);
  }

  return pair;
}

export const ROUTE_PAIRS: RoutePair[] = [
  ...MIRRORED_PATHS,
  ...Object.keys(TRANSLATED_PATHS),
].map(buildRoutePair);

const PAIR_BY_PATH = new Map<string, RoutePair>();

for (const pair of ROUTE_PAIRS) {
  for (const path of Object.values(pair)) {
    PAIR_BY_PATH.set(path, pair);
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

export interface SwitcherOption {
  config: LocaleConfig;
  href: string;
}

/**
 * The locales the switcher should offer on a given page. A blog-only locale is
 * offered on blog pages and nowhere else; on an unknown page only locales that
 * serve the whole site are offered, each pointing at its landing page.
 */
export function switcherOptions(path: string): SwitcherOption[] {
  const pair = findRoutePair(path);

  if (pair) {
    return LOCALE_LIST.filter((config) => pair[config.code]).map((config) => ({
      config,
      href: pair[config.code] as string,
    }));
  }

  return LOCALE_LIST.filter((config) => config.scope === "site").map(
    (config) => ({ config, href: localeHome(config.code) }),
  );
}

/** The localized path for an English path, falling back to the prefix rule. */
export function getLocalizedPath(englishPath: string, locale: Locale): string {
  return (
    TRANSLATED_PATHS[englishPath]?.[locale] ??
    withLocalePrefix(englishPath, locale)
  );
}

/**
 * hreflang alternates for a page, keyed the way Next.js expects. Only locales
 * that actually serve the path are listed. x-default always points at the
 * default locale so unmatched visitors land on English.
 */
export function buildAlternates(englishPath: string): Record<string, string> {
  const alternates: Record<string, string> = {};

  for (const locale of localesForPath(englishPath)) {
    alternates[LOCALE_CONFIG[locale].hreflang] = getLocalizedPath(
      englishPath,
      locale,
    );
  }

  alternates["x-default"] = getLocalizedPath(englishPath, DEFAULT_LOCALE);

  return alternates;
}
