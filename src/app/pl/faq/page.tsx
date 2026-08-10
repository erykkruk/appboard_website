import { Footer, Header } from "@/components/layout";
import { ArrowRightIcon, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import { FAQ_PAGE_CONTENT } from "@/lib/i18n/content/faq";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const PL_TITLE = "FAQ";
const PL_DESCRIPTION =
  "Odpowiedzi o AppBoard: demo na żywo, podłączenie App Store i Google Play, zaszyfrowany sejf na dane dostępowe, drafty i publikacja, research z AI oraz ceny w becie.";

export const metadata: Metadata = buildPageMetadata({
  description: PL_DESCRIPTION,
  languages: buildAlternates("/faq"),
  locale: "pl_PL",
  path: "/pl/faq",
  title: PL_TITLE,
});

const CONTENT = FAQ_PAGE_CONTENT.pl;

const ALL_FAQ_ENTRIES: FaqEntry[] = CONTENT.categories.flatMap(
  (category) => category.entries,
);

export default function FaqPagePl(): JSX.Element {
  return (
    <>
      <JsonLd data={buildFaqSchema("/pl/faq", ALL_FAQ_ENTRIES, "pl-PL")} />
      <Header locale="pl" />
      <main className="relative w-full flex-1" lang="pl">
        <section className="px-4 pb-6 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow align="center">{CONTENT.eyebrow}</Eyebrow>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              {CONTENT.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {CONTENT.lead}
            </p>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl space-y-14">
            {CONTENT.categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {category.title}
                </h2>
                <div className="mt-6 space-y-3">
                  {category.entries.map((entry) => (
                    <details
                      className="group rounded-2xl border border-line bg-panel/40 px-6 py-4 transition-colors open:border-accent/40 open:bg-panel/70"
                      key={entry.question}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                        {entry.question}
                        <span
                          aria-hidden="true"
                          className="text-xl leading-none text-accent-bright transition-transform duration-200 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {entry.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-panel/40 px-8 py-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {CONTENT.outro.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              {CONTENT.outro.lead}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={`${APP_URL}/demo`} size="lg" variant="secondary">
                {CONTENT.outro.demoCta}
              </ButtonLink>
              <ButtonLink href={APP_URL} size="lg" variant="primary">
                {CONTENT.outro.accountCta}
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="pl" />
    </>
  );
}
