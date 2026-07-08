import { SectionHeading } from "@/components/ui";

import type { FaqEntry } from "@/lib/schema";
import type { JSX } from "react";

export const PRICING_FAQ: FaqEntry[] = [
  {
    answer:
      "Yes. AppBoard is in early access and every plan is free while we are in beta. We will announce final pricing before general availability, with plenty of notice for existing users.",
    question: "Is AppBoard really free right now?",
  },
  {
    answer:
      "AppBoard connects to App Store Connect (Apple App Store) and Google Play Console (Google Play). You can manage listings for both stores from a single workspace.",
    question: "Which app stores does AppBoard support?",
  },
  {
    answer:
      "Store credentials are protected by an end-to-end encrypted vault. Keys are encrypted with a passphrase-derived key, so they are never stored or readable in plaintext on our servers.",
    question: "How are my store credentials protected?",
  },
  {
    answer:
      "The AI assistant runs on OpenRouter, so you can pick any supported model for generating descriptions, translations, ASO keyword suggestions, and review replies.",
    question: "Which AI models can I use?",
  },
];

export function PricingFaqSection(): JSX.Element {
  return (
    <section className="border-t border-line bg-surface px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <dl className="mt-12 space-y-8">
          {PRICING_FAQ.map((entry) => (
            <div className="rounded-2xl border border-line bg-panel/40 p-6" key={entry.question}>
              <dt className="font-semibold text-foreground">{entry.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{entry.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
