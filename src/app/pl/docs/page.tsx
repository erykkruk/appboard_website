import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { ArrowRightIcon } from "@/components/ui";
import { DOCS_SECTIONS_PL } from "@/lib/i18n/content/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const DOCS_DESCRIPTION =
  "Dokumentacja AppBoard: podłącz App Store i Google Play, edytuj listingi, publikuj z diffami i rollbackiem, prowadź research ASO i zabezpiecz dane dostępowe w sejfie.";

export const metadata: Metadata = buildPageMetadata({
  description: DOCS_DESCRIPTION,
  languages: buildAlternates("/docs"),
  locale: "pl_PL",
  path: "/pl/docs",
  title: "Dokumentacja",
});

export default function DocsIndexPlPage(): JSX.Element {
  return (
    <>
      <Header locale="pl" />
      <main
        className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-14 sm:px-6 sm:pt-20"
        lang="pl"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
            Dokumentacja
          </p>
          <h1 className="display mt-3 text-5xl text-foreground sm:text-6xl">
            Wszystko, czego potrzebujesz, żeby prowadzić ASO w AppBoard
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Przewodniki po podłączaniu sklepów, edycji i publikowaniu listingów,
            badaniu rynku i bezpiecznym trzymaniu danych dostępowych. Zacznij od
            kroków konfiguracyjnych, a potem wejdź w workflow, który pasuje do
            Twojego zespołu.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {DOCS_SECTIONS_PL.map((section) => (
            <section key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.pages.map((page) => (
                  <Link
                    className="group flex flex-col gap-2 rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/50 hover:bg-panel"
                    href={`/pl/docs/${page.slug}`}
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
      <Footer locale="pl" />
    </>
  );
}
