import { Footer, Header } from "@/components/layout";
import {
  CtaSection,
  PricingFaqSection,
  PricingTiersSection,
} from "@/components/sections";
import { getPricingFaq } from "@/components/sections/pricing-faq-section";
import { JsonLd } from "@/components/ui";
import { PRICING_CONTENT } from "@/lib/i18n/content/pricing";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const PL_TITLE = "Cennik";
const PL_DESCRIPTION =
  "Cennik AppBoard: darmowy wczesny dostęp w becie. Planowane plany Free, Pro i Team do zarządzania listingami w App Store i Google Play, AI oraz research ASO.";

export const metadata: Metadata = buildPageMetadata({
  description: PL_DESCRIPTION,
  languages: buildAlternates("/pricing"),
  locale: "pl_PL",
  path: "/pl/pricing",
  title: PL_TITLE,
});

export default function PricingPagePl(): JSX.Element {
  const content = PRICING_CONTENT.pl.page;

  return (
    <>
      <JsonLd data={buildFaqSchema("/pl/pricing", getPricingFaq("pl"), "pl-PL")} />
      <Header locale="pl" />
      <main className="relative w-full flex-1" lang="pl">
        <section className="px-4 pb-14 pt-20 text-center sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              {content.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {content.lead}
            </p>
          </div>
        </section>
        <PricingTiersSection locale="pl" />
        <PricingFaqSection locale="pl" />
        <CtaSection locale="pl" />
      </main>
      <Footer locale="pl" />
    </>
  );
}
