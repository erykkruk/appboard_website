import type { Locale } from "@/lib/i18n/locales";
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
    date: "2026-08-30",
    description:
      "Video outperforms static creative almost everywhere else, so what does it do in a store listing? The real numbers, how Apple and Google ship video differently, and the landscape trap that can leave your search result blank.",
    readingMinutes: 7,
    slug: "app-preview-video-vs-screenshots",
    tag: "Creative",
    title: "App preview video vs screenshots: what actually converts",
  },
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
      "A practical pre-release checklist for app metadata, screenshots, and store compliance - the exact steps to run before every App Store and Google Play release.",
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
      "Replying to reviews measurably improves ratings and retention - but only if you do it consistently. A sustainable system for answering every review.",
    readingMinutes: 6,
    slug: "respond-to-app-reviews",
    tag: "Reviews",
    title: "How (and why) to respond to every app review",
  },
];

export const BLOG_ARTICLES_PL: BlogArticle[] = [
  {
    date: "2026-08-30",
    description:
      "Ile realnie daje wideo promocyjne w App Store i Google Play, czym App Preview różni się od filmu na Play, kanały YouTube per język i pułapka poziomego wideo, która zabiera zrzuty z wyników wyszukiwania.",
    readingMinutes: 7,
    slug: "wideo-promocyjne-aplikacji",
    tag: "Kreacje",
    title: "Wideo promocyjne aplikacji czy zrzuty ekranu: co konwertuje lepiej",
  },
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

export const BLOG_ARTICLES_DE: BlogArticle[] = [
  {
    date: "2026-08-30",
    description:
      "Was ein App Preview Video wirklich an Conversion bringt, wie unterschiedlich App Store und Google Play Video ausspielen, YouTube-Kanäle pro Sprache und die Querformat-Falle, die Screenshots aus den Suchergebnissen entfernt.",
    readingMinutes: 7,
    slug: "app-preview-video-oder-screenshots",
    tag: "Creatives",
    title: "App Preview Video oder Screenshots: was wirklich konvertiert",
  },
  {
    date: "2026-08-11",
    description:
      "Google Play Console 2026: privates Konto oder Organisation, D-U-N-S, die 12-Tester-Regel über 14 Tage, Zeichenlimits, Grafikvorgaben und der DSA-Händlerstatus.",
    readingMinutes: 13,
    slug: "google-play-console-app-veroeffentlichen",
    tag: "Google Play",
    title: "Google Play Console: App veröffentlichen (Leitfaden 2026)",
  },
  {
    date: "2026-08-10",
    description:
      "App Store Connect von Grund auf: API-Key und .p8-Datei, Metadatenlimits, das Keyword-Feld in Bytes statt Zeichen, aktuelle Screenshot-Größen und der DSA-Händlerstatus.",
    readingMinutes: 13,
    slug: "app-store-connect-app-veroeffentlichen",
    tag: "App Store",
    title: "App Store Connect: App veröffentlichen (Leitfaden 2026)",
  },
  {
    date: "2026-08-09",
    description:
      "App Store Optimierung 2026: die tatsächlich geltenden Zeichenlimits, deutsche Keywords und Umlaute, kostenlose A/B-Tests in beiden Stores und Tools, die es noch gibt.",
    readingMinutes: 13,
    slug: "app-store-optimierung",
    tag: "ASO",
    title: "App Store Optimierung (ASO): der Leitfaden für 2026",
  },
  {
    date: "2026-08-08",
    description:
      "Was ASO wirklich kostet: veröffentlichte Agenturpreise in Euro, der Aufwand in Eigenregie, die Rechnung gegen eine eigene Stelle und die Warnsignale bei Anbietern.",
    readingMinutes: 12,
    slug: "aso-agentur-kosten",
    tag: "Marketing",
    title: "Was kostet ASO? Agentur, Tools oder selbst machen (2026)",
  },
];

export const BLOG_ARTICLES_ES: BlogArticle[] = [
  {
    date: "2026-08-30",
    description:
      "Cuánto suma de verdad un vídeo de presentación, en qué se diferencian App Store y Google Play al mostrarlo, los canales de YouTube por idioma y la trampa del formato horizontal que deja tu resultado de búsqueda sin capturas.",
    readingMinutes: 7,
    slug: "video-promocional-o-capturas",
    tag: "Creatividades",
    title: "Vídeo promocional o capturas: qué convierte mejor en las tiendas",
  },
  {
    date: "2026-08-11",
    description:
      "Google Play Console en 2026: cuenta personal u organización, D-U-N-S, la regla de 12 testers durante 14 días, límites de caracteres, gráficos y el estatus de comerciante del DSA.",
    readingMinutes: 13,
    slug: "google-play-console-publicar-app",
    tag: "Google Play",
    title: "Google Play Console: cómo publicar una app (guía 2026)",
  },
  {
    date: "2026-08-10",
    description:
      "App Store Connect desde cero: clave de API y archivo .p8, límites de metadatos, el campo de keywords medido en bytes, tamaños de captura vigentes y el estatus de comerciante.",
    readingMinutes: 13,
    slug: "app-store-connect-publicar-app",
    tag: "App Store",
    title: "App Store Connect: cómo publicar una app (guía 2026)",
  },
  {
    date: "2026-08-09",
    description:
      "Posicionamiento ASO en 2026: los límites de caracteres reales, las tildes que consumen el doble en el campo de keywords, tests A/B gratuitos y herramientas que siguen vivas.",
    readingMinutes: 13,
    slug: "posicionamiento-aso",
    tag: "ASO",
    title: "Posicionamiento ASO: la guía completa de 2026",
  },
  {
    date: "2026-08-08",
    description:
      "Cuánto cuesta el ASO en España: los pocos precios publicados en euros, el coste real de hacerlo tú, cuándo compensa una agencia y las señales de alarma al contratar.",
    readingMinutes: 12,
    slug: "agencia-aso-precios",
    tag: "Marketing",
    title: "Agencia ASO: precios reales y cuándo merece la pena (2026)",
  },
];

/**
 * Every locale that has articles. A locale is absent until its first article
 * ships, which is what lets a blog-only locale be registered ahead of content.
 */
export const BLOG_ARTICLES_BY_LOCALE: Partial<Record<Locale, BlogArticle[]>> = {
  de: BLOG_ARTICLES_DE,
  en: BLOG_ARTICLES,
  es: BLOG_ARTICLES_ES,
  pl: BLOG_ARTICLES_PL,
};

export function getArticlesFor(locale: Locale): BlogArticle[] {
  return BLOG_ARTICLES_BY_LOCALE[locale] ?? [];
}

export function getArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getArticlePl(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES_PL.find((article) => article.slug === slug);
}

export function getPlSlugForEn(slug: string): string | undefined {
  return findRoutePair(`/blog/${slug}`)?.pl?.replace("/pl/blog/", "");
}

export function getEnSlugForPl(slug: string): string | undefined {
  return findRoutePair(`/pl/blog/${slug}`)?.en?.replace("/blog/", "");
}

export function buildBlogAlternates(enSlug: string): Record<string, string> {
  return buildAlternates(`/blog/${enSlug}`);
}
