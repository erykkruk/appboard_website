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

const DE_TITLE = "Preise";
const DE_DESCRIPTION =
  "Preise von AppBoard: kostenloser Early Access in der Beta. Geplante Pläne Free, Pro und Team für Einträge im App Store und bei Google Play, KI und ASO-Research.";

export const metadata: Metadata = buildPageMetadata({
  description: DE_DESCRIPTION,
  languages: buildAlternates("/pricing"),
  locale: "de_DE",
  path: "/de/pricing",
  title: DE_TITLE,
});

export default function PricingPagePl(): JSX.Element {
  const content = PRICING_CONTENT.de.page;

  return (
    <>
      <JsonLd data={buildFaqSchema("/de/pricing", getPricingFaq("de"), "de-DE")} />
      <Header locale="de" />
      <main className="relative w-full flex-1" lang="de">
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
        <PricingTiersSection locale="de" />
        <PricingFaqSection locale="de" />
        <CtaSection locale="de" />
      </main>
      <Footer locale="de" />
    </>
  );
}
