import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { ArrowRightIcon } from "@/components/ui";
import { DOCS_SECTIONS } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const DOCS_DESCRIPTION =
  "AppBoard documentation: connect the App Store and Google Play, edit listings, publish with diffs and rollback, run ASO research, and secure credentials in the vault.";

export const metadata: Metadata = buildPageMetadata({
  description: DOCS_DESCRIPTION,
  languages: buildAlternates("/docs"),
  path: "/docs",
  title: "Documentation",
});

export default function DocsIndexPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
            Documentation
          </p>
          <h1 className="display mt-3 text-5xl text-foreground sm:text-6xl">
            Everything you need to run ASO in AppBoard
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Guides for connecting your stores, editing and publishing listings,
            researching the market, and keeping credentials safe. Start with the
            setup steps, then dive into the workflow that fits your team.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {DOCS_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.pages.map((page) => (
                  <Link
                    className="group flex flex-col gap-2 rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/50 hover:bg-panel"
                    href={`/docs/${page.slug}`}
                    key={page.slug}
                  >
                    <span className="flex items-center gap-2 text-base font-medium text-foreground">
                      {page.title}
                      <ArrowRightIcon className="size-4 -translate-x-1 text-accent-bright opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted">
                      {page.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
