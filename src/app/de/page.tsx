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

const DE_TITLE = "AppBoard - ASO für App Store und Google Play in einem Panel";
const DE_DESCRIPTION =
  "Verwalten Sie Ihre Einträge im App Store und bei Google Play aus einem Panel. Metadaten in jeder Sprache, versionierte Änderungen mit Diffs und Rollback, Veröffentlichen mit KI-gestütztem ASO.";

export const metadata: Metadata = buildPageMetadata({
  absoluteTitle: true,
  description: DE_DESCRIPTION,
  languages: buildAlternates("/"),
  locale: "de_DE",
  path: "/pl",
  title: DE_TITLE,
});

export default function HomePagePl(): JSX.Element {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <Header locale="de" />
      <main className="relative w-full flex-1" lang="de">
        <HeroSection locale="de" />
        <StoresSection locale="de" />
        <HowItWorksSection locale="de" />
        <ProductTourSection locale="de" />
        <FeaturesSection locale="de" />
        <FreeToolSection locale="de" />
        <PricingTeaserSection locale="de" />
        <FaqSection locale="de" />
        <CtaSection locale="de" />
      </main>
      <Footer locale="de" />
    </>
  );
}
