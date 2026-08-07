import { Footer, Header } from "@/components/layout";
import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  PricingTeaserSection,
  ProductTourSection,
  StoresSection,
} from "@/components/sections";
import { JsonLd } from "@/components/ui";
import { buildSoftwareApplicationSchema } from "@/lib/schema";
import { buildPageMetadata, SITE_DESCRIPTION } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = buildPageMetadata({
  description: SITE_DESCRIPTION,
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
        <PricingTeaserSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
