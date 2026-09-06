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

const ES_TITLE = "Precios";
const ES_DESCRIPTION =
  "Precios de AppBoard: acceso anticipado gratuito durante la beta. Planes previstos Free, Pro y Team para gestionar fichas de App Store y Google Play, IA y research ASO.";

export const metadata: Metadata = buildPageMetadata({
  description: ES_DESCRIPTION,
  languages: buildAlternates("/pricing"),
  locale: "es_ES",
  path: "/es/pricing",
  title: ES_TITLE,
});

export default function PricingPagePl(): JSX.Element {
  const content = PRICING_CONTENT.es.page;

  return (
    <>
      <JsonLd data={buildFaqSchema("/es/pricing", getPricingFaq("es"), "es-ES")} />
      <Header locale="es" />
      <main className="relative w-full flex-1" lang="es">
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
        <PricingTiersSection locale="es" />
        <PricingFaqSection locale="es" />
        <CtaSection locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
