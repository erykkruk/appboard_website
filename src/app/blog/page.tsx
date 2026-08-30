import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import { BLOG_ARTICLES } from "@/lib/blog";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const BLOG_DESCRIPTION =
  "Practical ASO articles for developers and indie makers: metadata, keywords, screenshots, descriptions, and reviews for App Store and Google Play.";

export const metadata: Metadata = buildPageMetadata({
  description: BLOG_DESCRIPTION,
  languages: buildAlternates("/blog"),
  path: "/blog",
  title: "Blog",
});

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
}

export default function BlogPage(): JSX.Element {
  const articles = [...BLOG_ARTICLES].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <>
      <Header />
      <main className="relative w-full flex-1">
        <section className="px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              Notes on shipping and selling apps
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Field notes on App Store Optimization from the people building
              AppBoard - metadata, keywords, screenshots, and reviews, with the
              real character limits and store rules that trip people up.
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
                    href={`/blog/${article.slug}`}
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
                      <span>{article.readingMinutes} min read</span>
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
      <Footer />
    </>
  );
}
