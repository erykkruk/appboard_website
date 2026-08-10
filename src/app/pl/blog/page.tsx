import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import { BLOG_ARTICLES_PL } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const BLOG_DESCRIPTION =
  "Praktyczne artykuły o ASO po polsku: Google Play Console, App Store Connect, pozycjonowanie aplikacji mobilnych i koszty promocji aplikacji w Polsce.";

export const metadata: Metadata = buildPageMetadata({
  description: BLOG_DESCRIPTION,
  languages: buildAlternates("/blog"),
  locale: "pl_PL",
  path: "/pl/blog",
  title: "Blog po polsku",
});

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
}

export default function BlogPlPage(): JSX.Element {
  const articles = [...BLOG_ARTICLES_PL].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <>
      <Header locale="pl" />
      <main className="relative w-full flex-1" lang="pl">
        <section className="px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              Publikowanie i promocja aplikacji po polsku
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Przewodniki po Google Play Console i App Store Connect,
              pozycjonowanie aplikacji mobilnych i realne koszty promocji na
              polskim rynku. Wszystkie liczby sprawdzone u źródła, u Apple i
              Google.
            </p>
            <p className="mt-4 text-sm text-muted">
              <Link
                className="underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
                href="/blog"
                hrefLang="en"
              >
                Read the English blog
              </Link>
            </p>
          </div>
        </section>
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ul className="flex flex-col gap-4">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    className="group flex flex-col rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/60 hover:bg-panel/70 sm:p-8"
                    href={`/pl/blog/${article.slug}`}
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                      <span className="font-semibold uppercase tracking-[0.2em] text-accent-bright">
                        {article.tag}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-line"
                      />
                      <time dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-line"
                      />
                      <span>{article.readingMinutes} min czytania</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent-soft">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {article.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer locale="pl" />
    </>
  );
}
