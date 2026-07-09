import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArrowRightIcon, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import { BLOG_ARTICLES, type BlogArticle } from "@/lib/blog";
import { absoluteUrl, APP_URL, SITE_NAME } from "@/lib/seo";

import type { JSX, ReactNode } from "react";

interface ArticleLayoutProps {
  article: BlogArticle;
  children: ReactNode;
}

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
}

function buildArticleSchema(article: BlogArticle): Record<string, unknown> {
  const url = absoluteUrl(`/blog/${article.slug}`);

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
}: ArticleLayoutProps): JSX.Element {
  const moreArticles = BLOG_ARTICLES.filter(
    (candidate) => candidate.slug !== article.slug,
  ).slice(0, 2);

  return (
    <>
      <JsonLd data={buildArticleSchema(article)} />
      <Header />
      <main className="relative w-full flex-1">
        <section className="px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl">
            <Link
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              href="/blog"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
              Back to blog
            </Link>
            <div className="mt-8">
              <Eyebrow>{article.tag}</Eyebrow>
            </div>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
              <span>{article.readingMinutes} min read</span>
            </div>
          </div>
        </section>
        <section className="px-4 pb-20 sm:px-6">
          <div className="prose mx-auto max-w-3xl">{children}</div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl border border-line bg-panel/60 p-8 sm:p-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Try this workflow in AppBoard
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                See how AppBoard handles listings, versioning, keywords, and
                reviews for both stores — no signup required.
              </p>
              <ButtonLink
                className="mt-6"
                href={`${APP_URL}/demo`}
                variant="secondary"
              >
                Open the live demo
                <ArrowRightIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </section>
        <section className="border-t border-line px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              More articles
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {moreArticles.map((related) => (
                <Link
                  className="group flex flex-col rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/60 hover:bg-panel/70"
                  href={`/blog/${related.slug}`}
                  key={related.slug}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
                    {related.tag}
                  </span>
                  <span className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {related.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">
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
