import { BLOG_ARTICLES_BY_LOCALE } from "@/lib/blog";
import { ALL_DOC_PAGES } from "@/lib/docs";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";
import { getLocalizedPath, localesForPath } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

import type { MetadataRoute } from "next";

interface StaticRoute {
  changeFrequency: "weekly" | "monthly" | "yearly";
  path: string;
  priority: number;
}

const STATIC_ROUTES: StaticRoute[] = [
  { changeFrequency: "weekly", path: "/", priority: 1 },
  { changeFrequency: "monthly", path: "/pricing", priority: 0.8 },
  { changeFrequency: "weekly", path: "/blog", priority: 0.8 },
  { changeFrequency: "weekly", path: "/docs", priority: 0.8 },
  { changeFrequency: "monthly", path: "/faq", priority: 0.7 },
  { changeFrequency: "monthly", path: "/screenshot-editor", priority: 0.7 },
  { changeFrequency: "monthly", path: "/opensource", priority: 0.6 },
  { changeFrequency: "yearly", path: "/policy", priority: 0.3 },
  { changeFrequency: "yearly", path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((route) =>
    localesForPath(route.path).map((locale) => ({
      changeFrequency: route.changeFrequency,
      lastModified: now,
      priority:
        locale === DEFAULT_LOCALE
          ? route.priority
          : Math.max(0.1, route.priority - 0.1),
      url: absoluteUrl(getLocalizedPath(route.path, locale)),
    })),
  );

  const docEntries: MetadataRoute.Sitemap = ALL_DOC_PAGES.flatMap((page) =>
    localesForPath(`/docs/${page.slug}`).map((locale) => ({
      changeFrequency: "monthly" as const,
      lastModified: now,
      priority: 0.6,
      url: absoluteUrl(getLocalizedPath(`/docs/${page.slug}`, locale)),
    })),
  );

  const blogEntries: MetadataRoute.Sitemap = Object.entries(
    BLOG_ARTICLES_BY_LOCALE,
  ).flatMap(([locale, articles]) =>
    articles.map((article) => ({
      changeFrequency: "monthly" as const,
      lastModified: new Date(article.date),
      priority: 0.6,
      url: absoluteUrl(
        locale === DEFAULT_LOCALE
          ? `/blog/${article.slug}`
          : `/${locale}/blog/${article.slug}`,
      ),
    })),
  );

  return [...staticEntries, ...docEntries, ...blogEntries];
}
