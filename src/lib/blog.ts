import { buildAlternates, findRoutePair } from "@/lib/i18n/routes";

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
    date: "2026-08-07",
    description:
      "What ASO agencies actually deliver, what they cost in 2026, and when hiring one beats doing app store optimization yourself with tools. Plus how to vet a vendor.",
    readingMinutes: 11,
    slug: "app-store-optimization-services",
    tag: "Strategy",
    title: "App store optimization services vs doing it yourself",
  },
  {
    date: "2026-08-05",
    description:
      "How many languages each store supports, which markets pay back first, why keywords are per-locale and never translated, and the localization mistakes that waste budget.",
    readingMinutes: 12,
    slug: "app-store-localization",
    tag: "Localization",
    title: "App localization: which markets are actually worth it",
  },
  {
    date: "2026-08-03",
    description:
      "Every App Store and Google Play screenshot size required in 2026, verified against Apple and Google documentation, plus how to generate the whole set fast.",
    readingMinutes: 10,
    slug: "app-store-screenshot-sizes",
    tag: "Reference",
    title: "App Store screenshot sizes and dimensions (2026 guide)",
  },
  {
    date: "2026-08-01",
    description:
      "A comparison of the best ASO tools in 2026 with prices checked against vendor pages, what each one is genuinely best at, and the products still listed that no longer exist.",
    readingMinutes: 11,
    slug: "best-aso-tools",
    tag: "Tools",
    title: "The best ASO tools in 2026: an honest comparison",
  },
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

export const BLOG_ARTICLES_PL: BlogArticle[] = [
  {
    date: "2026-08-09",
    description:
      "Ile realnie kosztuje promocja aplikacji mobilnej w Polsce: stawki agencji w złotówkach, benchmarki CPI, kanały które działają i moment, w którym warto zlecić to na zewnątrz.",
    readingMinutes: 12,
    slug: "promocja-aplikacji-mobilnej",
    tag: "Marketing",
    title: "Promocja aplikacji mobilnej: ile to kosztuje i co naprawdę działa",
  },
  {
    date: "2026-08-07",
    description:
      "Pozycjonowanie aplikacji mobilnych w Google Play i App Store: aktualne limity znaków, polska fleksja w słowach kluczowych, testy A/B w sklepach i narzędzia, które nadal istnieją.",
    readingMinutes: 13,
    slug: "pozycjonowanie-aplikacji-mobilnych",
    tag: "ASO",
    title: "Pozycjonowanie aplikacji mobilnych (ASO): przewodnik na 2026",
  },
  {
    date: "2026-08-05",
    description:
      "App Store Connect od podstaw: klucz API i plik .p8, role użytkowników, limity metadanych, pole keywords liczone w bajtach oraz aktualne wymagane rozmiary zrzutów ekranu.",
    readingMinutes: 12,
    slug: "app-store-connect-publikacja-aplikacji",
    tag: "App Store",
    title: "App Store Connect: publikacja aplikacji krok po kroku (2026)",
  },
  {
    date: "2026-08-03",
    description:
      "Google Play Console w 2026: konto osobiste czy organizacji, numer D-U-N-S, wymóg 12 testerów przez 14 dni, limity znaków, specyfikacja grafik i ścieżki testowe.",
    readingMinutes: 12,
    slug: "google-play-console-publikacja-aplikacji",
    tag: "Google Play",
    title: "Google Play Console: publikacja aplikacji krok po kroku (2026)",
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getArticlePl(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES_PL.find((article) => article.slug === slug);
}

export function getPlSlugForEn(slug: string): string | undefined {
  return findRoutePair(`/blog/${slug}`)?.pl.replace("/pl/blog/", "");
}

export function getEnSlugForPl(slug: string): string | undefined {
  return findRoutePair(`/pl/blog/${slug}`)?.en.replace("/blog/", "");
}

export function buildBlogAlternates(enSlug: string): Record<string, string> {
  return buildAlternates(`/blog/${enSlug}`);
}
