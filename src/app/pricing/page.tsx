import { Footer, Header } from "@/components/layout";
import {
  CtaSection,
  PRICING_FAQ,
  PricingFaqSection,
  PricingTiersSection,
} from "@/components/sections";
import { JsonLd } from "@/components/ui";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const PRICING_DESCRIPTION =
  "AppBoard pricing: free early access while in beta. Planned Free, Pro, and Team tiers for App Store and Google Play listing management, AI, and ASO research.";

export const metadata: Metadata = buildPageMetadata({
  description: PRICING_DESCRIPTION,
  path: "/pricing",
  title: "Pricing",
});

export default function PricingPage(): JSX.Element {
  return (
    <>
      <JsonLd data={buildFaqSchema("/pricing", PRICING_FAQ)} />
      <Header />
      <main className="relative w-full flex-1">
        <section className="px-4 pb-14 pt-20 text-center sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              Pricing
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Simple plans for every stage
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              From your first app to a full portfolio — start free today and grow
              into the plan that fits your team.
            </p>
          </div>
        </section>
        <PricingTiersSection />
        <PricingFaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
