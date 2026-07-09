import { describe, expect, it } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { BLOG_ARTICLES } from "./blog";
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
