import { BLOG_ARTICLES, BLOG_ARTICLES_PL } from "@/lib/blog";
import { ALL_DOC_PAGES } from "@/lib/docs";
import { absoluteUrl } from "@/lib/seo";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1,
      url: absoluteUrl("/"),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: absoluteUrl("/pricing"),
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
      url: absoluteUrl("/blog"),
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
      url: absoluteUrl("/pl/blog"),
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
      url: absoluteUrl("/docs"),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: absoluteUrl("/faq"),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: absoluteUrl("/screenshot-editor"),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.6,
      url: absoluteUrl("/opensource"),
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.3,
      url: absoluteUrl("/policy"),
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.3,
      url: absoluteUrl("/terms"),
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    changeFrequency: "monthly",
    lastModified: new Date(article.date),
    priority: 0.6,
    url: absoluteUrl(`/blog/${article.slug}`),
  }));

  const blogPlEntries: MetadataRoute.Sitemap = BLOG_ARTICLES_PL.map(
    (article) => ({
      changeFrequency: "monthly",
      lastModified: new Date(article.date),
      priority: 0.6,
      url: absoluteUrl(`/pl/blog/${article.slug}`),
    }),
  );

  const docEntries: MetadataRoute.Sitemap = ALL_DOC_PAGES.map((page) => ({
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: 0.6,
    url: absoluteUrl(`/docs/${page.slug}`),
  }));

  return [...staticEntries, ...blogEntries, ...blogPlEntries, ...docEntries];
}
