import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArrowRightIcon, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import { getArticlesFor, type BlogArticle } from "@/lib/blog";
import { getChrome } from "@/lib/i18n/dictionaries";
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIG,
  localeHome,
  type Locale,
} from "@/lib/i18n/locales";
import { buildBreadcrumbSchema, buildPersonSchema } from "@/lib/schema";
import { absoluteUrl, APP_URL, SITE_NAME } from "@/lib/seo";

import type { JSX, ReactNode } from "react";

interface ArticleLayoutProps {
  article: BlogArticle;
  /**
   * Sign the post off with the founder byline and credit it to a Person rather
   * than the bare Organization. Unbylined posts keep the previous schema.
   */
  bylined?: boolean;
  children: ReactNode;
  /** Article images, in order, for the BlogPosting `image` property. */
  images?: string[];
  locale?: Locale;
  translationHref?: string;
}

interface ArticleChrome {
  articles: BlogArticle[];
  backToBlog: string;
  blogHref: string;
  byline: string;
  homeLabel: string;
  homeHref: string;
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

const BLOG_HREF: Record<Locale, string> = {
  de: "/de/blog",
  en: "/blog",
  es: "/es/blog",
  pl: "/pl/blog",
};

/** Label for the inline link to the article's counterpart in another locale. */
const TRANSLATION_LABEL: Record<Locale, string> = {
  de: "Read in English",
  en: "Przeczytaj po polsku",
  es: "Read in English",
  pl: "Read in English",
};

/** Sign-off shown at the end of a bylined article. */
const BYLINE: Record<Locale, string> = {
  de: "Geschrieben von Eryk Kruk, Gründer von AppBoard.",
  en: "Written by Eryk Kruk, Founder of AppBoard.",
  es: "Escrito por Eryk Kruk, fundador de AppBoard.",
  pl: "Napisał Eryk Kruk, założyciel AppBoard.",
};

/** Breadcrumb root label, so the trail reads in the reader's language. */
const HOME_LABEL: Record<Locale, string> = {
  de: "Startseite",
  en: "Home",
  es: "Inicio",
  pl: "Strona główna",
};

function articleChrome(locale: Locale): ArticleChrome {
  const chrome = getChrome(locale);
  const config = LOCALE_CONFIG[locale];

  return {
    articles: getArticlesFor(locale),
    backToBlog: chrome.articleBackToBlog,
    blogHref: BLOG_HREF[locale],
    byline: BYLINE[locale],
    homeHref: localeHome(locale),
    homeLabel: HOME_LABEL[locale],
    ctaBody: chrome.articleCtaBody,
    ctaButton: chrome.articleCtaButton,
    ctaTitle: chrome.articleCtaTitle,
    dateLocale: config.hreflang,
    htmlLang: config.htmlLang,
    inLanguage: config.hreflang,
    moreArticles: chrome.articleMore,
    readingSuffix: chrome.articleReadingSuffix,
    translationLabel: TRANSLATION_LABEL[locale],
  };
}

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
  config: ArticleChrome,
  bylined: boolean,
  images: string[],
): Record<string, unknown> {
  const url = absoluteUrl(`${config.blogHref}/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: bylined
      ? buildPersonSchema()
      : {
          "@type": "Organization",
          name: SITE_NAME,
          url: absoluteUrl("/"),
        },
    dateModified: article.date,
    datePublished: article.date,
    description: article.description,
    headline: article.title,
    ...(images.length > 0
      ? { image: images.map((image) => absoluteUrl(image)) }
      : {}),
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
  bylined = false,
  children,
  images = [],
  locale = DEFAULT_LOCALE,
  translationHref,
}: ArticleLayoutProps): JSX.Element {
  const config = articleChrome(locale);
  const moreArticles = config.articles
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd data={buildArticleSchema(article, config, bylined, images)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: config.homeLabel, path: config.homeHref },
          { name: "Blog", path: config.blogHref },
          { name: article.title, path: `${config.blogHref}/${article.slug}` },
        ])}
      />
      <Header locale={locale} />
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
            {bylined ? (
              <div className="mt-12 flex items-center gap-3 border-t border-line pt-6">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-sm font-semibold text-accent-bright"
                >
                  EK
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {config.byline}
                </span>
              </div>
            ) : null}
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
      <Footer locale={locale} />
    </>
  );
}
