import { describe, expect, it } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";

import {
  BLOG_ARTICLES,
  BLOG_ARTICLES_PL,
  getEnSlugForPl,
  getPlSlugForEn,
} from "./blog";
import { ALL_DOC_PAGES, DOCS_SECTIONS } from "./docs";
import { ALL_DOC_PAGES_PL } from "./i18n/content/docs";
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIG,
  LOCALES,
  localeHome,
  scopeCoversPath,
} from "./i18n/locales";
import {
  buildAlternates,
  findRoutePair,
  localesForPath,
  ROUTE_PAIRS,
  switcherOptions,
} from "./i18n/routes";

const APP_DIR = join(import.meta.dir, "..", "app");

describe("blog registry", () => {
  it("has a page for every registered article", () => {
    for (const article of BLOG_ARTICLES) {
      const pagePath = join(APP_DIR, "blog", article.slug, "page.tsx");
      expect(existsSync(pagePath)).toBe(true);
    }
  });

  it("has unique slugs and valid dates", () => {
    const slugs = BLOG_ARTICLES.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const article of BLOG_ARTICLES) {
      expect(Number.isNaN(new Date(article.date).getTime())).toBe(false);
    }
  });
});

describe("polish blog registry", () => {
  it("has a page for every registered article", () => {
    for (const article of BLOG_ARTICLES_PL) {
      const pagePath = join(APP_DIR, "pl", "blog", article.slug, "page.tsx");
      expect(existsSync(pagePath)).toBe(true);
    }
  });

  it("has unique slugs, valid dates, and no date in the slug", () => {
    const slugs = BLOG_ARTICLES_PL.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const article of BLOG_ARTICLES_PL) {
      expect(Number.isNaN(new Date(article.date).getTime())).toBe(false);
      expect(/\d{4}/.test(article.slug)).toBe(false);
    }
  });

  it("pairs every translated article in both directions", () => {
    for (const article of BLOG_ARTICLES) {
      const plSlug = getPlSlugForEn(article.slug);
      if (!plSlug) continue;
      expect(BLOG_ARTICLES_PL.some((pl) => pl.slug === plSlug)).toBe(true);
      expect(getEnSlugForPl(plSlug)).toBe(article.slug);
    }

    for (const article of BLOG_ARTICLES_PL) {
      const enSlug = getEnSlugForPl(article.slug);
      expect(enSlug).toBeDefined();
      expect(BLOG_ARTICLES.some((en) => en.slug === enSlug)).toBe(true);
    }
  });
});

describe("docs registry", () => {
  it("has a page for every registered doc", () => {
    for (const page of ALL_DOC_PAGES) {
      const pagePath = join(APP_DIR, "docs", page.slug, "page.tsx");
      expect(existsSync(pagePath)).toBe(true);
    }
  });

  it("has unique slugs across sections", () => {
    const slugs = DOCS_SECTIONS.flatMap((section) =>
      section.pages.map((page) => page.slug),
    );
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("locale routing", () => {
  it("has a rendered page for every registered path", () => {
    for (const pair of ROUTE_PAIRS) {
      for (const [locale, path] of Object.entries(pair)) {
        const segments = path === "/" ? [] : path.slice(1).split("/");
        const pagePath = join(APP_DIR, ...segments, "page.tsx");
        expect(existsSync(pagePath), `${locale}: ${path}`).toBe(true);
      }
    }
  });

  it("pairs every route in both directions", () => {
    for (const pair of ROUTE_PAIRS) {
      for (const path of Object.values(pair)) {
        expect(findRoutePair(path), path).toEqual(pair);
      }
    }
  });

  it("keeps the default locale unprefixed and other locales prefixed", () => {
    for (const pair of ROUTE_PAIRS) {
      expect(pair[DEFAULT_LOCALE]?.startsWith("/pl")).toBe(false);
      for (const locale of LOCALES) {
        if (locale === DEFAULT_LOCALE) continue;
        const path = pair[locale];
        if (!path) continue;
        expect(path.startsWith(`/${locale}`), path).toBe(true);
      }
    }
  });

  it("mirrors the docs registry across locales", () => {
    expect(ALL_DOC_PAGES_PL.map((page) => page.slug)).toEqual(
      ALL_DOC_PAGES.map((page) => page.slug),
    );
    for (const page of ALL_DOC_PAGES_PL) {
      expect(page.title.length).toBeGreaterThan(0);
      expect(page.description.length).toBeGreaterThan(0);
    }
  });
});

describe("locale scope", () => {
  it("lets a site locale serve everything and a blog locale only the blog", () => {
    expect(scopeCoversPath("site", "/pricing")).toBe(true);
    expect(scopeCoversPath("site", "/blog/best-aso-tools")).toBe(true);

    expect(scopeCoversPath("blog", "/blog")).toBe(true);
    expect(scopeCoversPath("blog", "/blog/best-aso-tools")).toBe(true);
    expect(scopeCoversPath("blog", "/pricing")).toBe(false);
    expect(scopeCoversPath("blog", "/")).toBe(false);
    expect(scopeCoversPath("blog", "/docs/listings")).toBe(false);
  });

  it("does not treat a lookalike marketing path as a blog path", () => {
    expect(scopeCoversPath("blog", "/blogging")).toBe(false);
  });

  it("lands a blog-only locale on its blog index", () => {
    for (const locale of LOCALES) {
      const home = localeHome(locale);
      if (LOCALE_CONFIG[locale].scope === "blog") {
        expect(home.endsWith("/blog")).toBe(true);
      }
      expect(findRoutePair(home), `${locale} home ${home}`).not.toBeNull();
    }
  });

  it("only advertises locales that actually serve the path", () => {
    for (const pair of ROUTE_PAIRS) {
      const englishPath = pair[DEFAULT_LOCALE];
      if (!englishPath) continue;

      for (const locale of localesForPath(englishPath)) {
        expect(LOCALE_CONFIG[locale].scope === "site" || englishPath.startsWith("/blog")).toBe(true);
      }

      const alternates = buildAlternates(englishPath);
      const advertised = Object.entries(alternates).filter(
        ([key]) => key !== "x-default",
      );
      expect(advertised.length).toBe(localesForPath(englishPath).length);
      for (const [, href] of advertised) {
        expect(Object.values(pair), `${englishPath} -> ${href}`).toContain(href);
      }
    }
  });

  it("offers exactly the paired locales in the switcher", () => {
    for (const pair of ROUTE_PAIRS) {
      for (const path of Object.values(pair)) {
        const options = switcherOptions(path);
        expect(options.map((option) => option.href).sort()).toEqual(
          Object.values(pair).sort(),
        );
      }
    }
  });

  it("falls back to site locales on an unknown path", () => {
    const options = switcherOptions("/not-a-real-page");
    expect(options.length).toBeGreaterThan(0);
    for (const option of options) {
      expect(option.config.scope).toBe("site");
      expect(option.href).toBe(localeHome(option.config.code));
    }
  });
});
