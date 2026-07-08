import { Footer, Header } from "@/components/layout";
import {
  CtaSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  ResearchSection,
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
        <FeaturesSection />
        <HowItWorksSection />
        <ResearchSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
