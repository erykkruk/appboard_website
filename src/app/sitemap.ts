import { absoluteUrl } from "@/lib/seo";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
}
