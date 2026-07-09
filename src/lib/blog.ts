export interface BlogArticle {
  date: string;
  description: string;
  readingMinutes: number;
  slug: string;
  tag: string;
  title: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    date: "2026-07-06",
    description:
      "A practical pre-release checklist for app metadata, screenshots, and store compliance — the exact steps to run before every App Store and Google Play release.",
    readingMinutes: 8,
    slug: "aso-checklist-before-every-release",
    tag: "Workflow",
    title: "The ASO checklist to run before every release",
  },
  {
    date: "2026-06-29",
    description:
      "Character limits, keyword fields, and review rules differ more than you'd think between App Store Connect and Google Play Console. A field-by-field comparison.",
    readingMinutes: 9,
    slug: "app-store-vs-google-play-metadata",
    tag: "Reference",
    title: "App Store vs Google Play metadata: every field compared",
  },
  {
    date: "2026-06-22",
    description:
      "Most app descriptions are written for the algorithm and read by no one. How to structure title, subtitle, and description so both stores and humans respond.",
    readingMinutes: 7,
    slug: "how-to-write-app-store-descriptions",
    tag: "Copywriting",
    title: "How to write app store descriptions people actually read",
  },
  {
    date: "2026-06-15",
    description:
      "A keyword research workflow for apps that doesn't require a $300/month tool: mining reviews, checking real rankings, and choosing phrases you can win.",
    readingMinutes: 10,
    slug: "keyword-research-for-apps",
    tag: "Research",
    title: "Keyword research for apps: a practical workflow",
  },
  {
    date: "2026-06-08",
    description:
      "Screenshot sizes and specs for App Store and Google Play in 2026, plus how to order your screenshots so the first two do the selling.",
    readingMinutes: 8,
    slug: "app-screenshots-that-convert",
    tag: "Design",
    title: "App screenshots that convert: sizes, order, and message",
  },
  {
    date: "2026-06-01",
    description:
      "Replying to reviews measurably improves ratings and retention — but only if you do it consistently. A sustainable system for answering every review.",
    readingMinutes: 6,
    slug: "respond-to-app-reviews",
    tag: "Reviews",
    title: "How (and why) to respond to every app review",
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
