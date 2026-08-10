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
