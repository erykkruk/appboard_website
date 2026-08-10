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
import { buildSoftwareApplicationSchema } from "@/lib/schema";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata, SITE_DESCRIPTION } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = buildPageMetadata({
  description: SITE_DESCRIPTION,
  languages: buildAlternates("/"),
  path: "/",
});

export default function HomePage(): JSX.Element {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <Header />
      <main className="relative w-full flex-1">
        <HeroSection />
        <StoresSection />
        <HowItWorksSection />
        <ProductTourSection />
        <FeaturesSection />
        <FreeToolSection />
        <PricingTeaserSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
