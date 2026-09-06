import { Footer, Header } from "@/components/layout";
import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  FreeToolSection,
  HeroSection,
  HowItWorksSection,
  PricingTeaserSection,
  ProductTourSection,
  StoresSection,
} from "@/components/sections";
import { JsonLd } from "@/components/ui";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildSoftwareApplicationSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const ES_TITLE = "AppBoard - ASO para App Store y Google Play en un panel";
const ES_DESCRIPTION =
  "Gestiona tus fichas de App Store y Google Play desde un solo panel. Metadatos en cada idioma, cambios versionados con diffs y reversión, y publicación con ASO asistido por IA.";

export const metadata: Metadata = buildPageMetadata({
  absoluteTitle: true,
  description: ES_DESCRIPTION,
  languages: buildAlternates("/"),
  locale: "es_ES",
  path: "/pl",
  title: ES_TITLE,
});

export default function HomePagePl(): JSX.Element {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <Header locale="es" />
      <main className="relative w-full flex-1" lang="es">
        <HeroSection locale="es" />
        <StoresSection locale="es" />
        <HowItWorksSection locale="es" />
        <ProductTourSection locale="es" />
        <FeaturesSection locale="es" />
        <FreeToolSection locale="es" />
        <PricingTeaserSection locale="es" />
        <FaqSection locale="es" />
        <CtaSection locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
