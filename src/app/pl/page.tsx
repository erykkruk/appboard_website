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

const PL_TITLE = "AppBoard - ASO dla App Store i Google Play w jednym panelu";
const PL_DESCRIPTION =
  "Zarządzaj listingami w App Store i Google Play z jednego panelu. Metadane w każdym języku, wersjonowanie zmian z diffami i rollbackiem, publikacja z ASO od AI.";

export const metadata: Metadata = buildPageMetadata({
  absoluteTitle: true,
  description: PL_DESCRIPTION,
  languages: buildAlternates("/"),
  locale: "pl_PL",
  path: "/pl",
  title: PL_TITLE,
});

export default function HomePagePl(): JSX.Element {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <Header locale="pl" />
      <main className="relative w-full flex-1" lang="pl">
        <HeroSection locale="pl" />
        <StoresSection locale="pl" />
        <HowItWorksSection locale="pl" />
        <ProductTourSection locale="pl" />
        <FeaturesSection locale="pl" />
        <FreeToolSection locale="pl" />
        <PricingTeaserSection locale="pl" />
        <FaqSection locale="pl" />
        <CtaSection locale="pl" />
      </main>
      <Footer locale="pl" />
    </>
  );
}
