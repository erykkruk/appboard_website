import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArrowRightIcon, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import {
  BLOG_ARTICLES,
  BLOG_ARTICLES_PL,
  type BlogArticle,
} from "@/lib/blog";
import { absoluteUrl, APP_URL, SITE_NAME } from "@/lib/seo";

import type { JSX, ReactNode } from "react";

export type ArticleLocale = "en" | "pl";

interface ArticleLayoutProps {
  article: BlogArticle;
  children: ReactNode;
  locale?: ArticleLocale;
  translationHref?: string;
}

interface LocaleConfig {
  articles: BlogArticle[];
  backToBlog: string;
  blogHref: string;
  ctaBody: string;
  ctaButton: string;
  ctaTitle: string;
  dateLocale: string;
  htmlLang: string;
  inLanguage: string;
  moreArticles: string;
  readingSuffix: string;
  translationLabel: string;
}

const LOCALES: Record<ArticleLocale, LocaleConfig> = {
  en: {
    articles: BLOG_ARTICLES,
    backToBlog: "Back to blog",
    blogHref: "/blog",
    ctaBody:
      "See how AppBoard handles listings, versioning, keywords, and reviews for both stores — no signup required.",
    ctaButton: "Open the live demo",
    ctaTitle: "Try this workflow in AppBoard",
    dateLocale: "en-US",
    htmlLang: "en",
    inLanguage: "en-US",
    moreArticles: "More articles",
    readingSuffix: "min read",
    translationLabel: "Przeczytaj po polsku",
  },
  pl: {
    articles: BLOG_ARTICLES_PL,
    backToBlog: "Wróć na blog",
    blogHref: "/pl/blog",
    ctaBody:
      "Zobacz, jak AppBoard prowadzi listingi, wersjonowanie, słowa kluczowe i opinie w obu sklepach. Bez zakładania konta.",
    ctaButton: "Otwórz demo",
    ctaTitle: "Sprawdź ten workflow w AppBoard",
    dateLocale: "pl-PL",
    htmlLang: "pl",
    inLanguage: "pl-PL",
    moreArticles: "Więcej artykułów",
    readingSuffix: "min czytania",
    translationLabel: "Read in English",
  },
};

function formatDate(date: string, dateLocale: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
}

function buildArticleSchema(
  article: BlogArticle,
  config: LocaleConfig,
): Record<string, unknown> {
  const url = absoluteUrl(`${config.blogHref}/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    dateModified: article.date,
    datePublished: article.date,
    description: article.description,
    headline: article.title,
    inLanguage: config.inLanguage,
    mainEntityOfPage: {
      "@id": url,
      "@type": "WebPage",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function ArticleLayout({
  article,
  children,
  locale = "en",
  translationHref,
}: ArticleLayoutProps): JSX.Element {
  const config = LOCALES[locale];
  const moreArticles = config.articles
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd data={buildArticleSchema(article, config)} />
      <Header />
      <main className="relative w-full flex-1">
        <section className="px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                href={config.blogHref}
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
                {config.backToBlog}
              </Link>
              {translationHref ? (
                <Link
                  className="text-sm font-medium text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
                  href={translationHref}
                  hrefLang={locale === "en" ? "pl" : "en"}
                >
                  {config.translationLabel}
                </Link>
              ) : null}
            </div>
            <div className="mt-8">
              <Eyebrow>{article.tag}</Eyebrow>
            </div>
            <h1
              className="display mt-4 text-5xl text-foreground sm:text-6xl"
              lang={config.htmlLang}
            >
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <time dateTime={article.date}>
                {formatDate(article.date, config.dateLocale)}
              </time>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
              <span>
                {article.readingMinutes} {config.readingSuffix}
              </span>
            </div>
          </div>
        </section>
        <section className="px-4 pb-20 sm:px-6">
          <div className="prose mx-auto max-w-3xl" lang={config.htmlLang}>
            {children}
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl border border-line bg-panel/60 p-8 sm:p-10">
              <h2
                className="text-xl font-semibold tracking-tight text-foreground"
                lang={config.htmlLang}
              >
                {config.ctaTitle}
              </h2>
              <p
                className="mt-3 text-base leading-relaxed text-muted"
                lang={config.htmlLang}
              >
                {config.ctaBody}
              </p>
              <ButtonLink
                className="mt-6"
                href={`${APP_URL}/demo`}
                variant="secondary"
              >
                {config.ctaButton}
                <ArrowRightIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </section>
        <section className="border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2
              className="text-sm font-semibold uppercase tracking-widest text-accent-bright"
              lang={config.htmlLang}
            >
              {config.moreArticles}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {moreArticles.map((related) => (
                <Link
                  className="group flex flex-col rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/60 hover:bg-panel/70"
                  href={`${config.blogHref}/${related.slug}`}
                  key={related.slug}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
                    {related.tag}
                  </span>
                  <span
                    className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground"
                    lang={config.htmlLang}
                  >
                    {related.title}
                  </span>
                  <span
                    className="mt-2 text-sm leading-relaxed text-muted"
                    lang={config.htmlLang}
                  >
                    {related.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
