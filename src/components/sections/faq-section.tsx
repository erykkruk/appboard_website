import Link from "next/link";

import { JsonLd, SectionHeading } from "@/components/ui";
import { buildFaqSchema } from "@/lib/schema";

import type { FaqEntry } from "@/lib/schema";
import type { JSX } from "react";

const LANDING_FAQ: FaqEntry[] = [
  {
    answer:
      "No. The live demo is a real AppBoard workspace pre-filled with example apps, reviews and listing history. You can click through everything — no signup, no store credentials needed.",
    question: "Can I try AppBoard without connecting my own apps?",
  },
  {
    answer:
      "Your App Store Connect key and Google Play service account live in an end-to-end encrypted vault. They are encrypted with a key derived from your passphrase, so AppBoard's servers never see them in plaintext — and nothing can be published without you unlocking the vault.",
    question: "Is it safe to hand over my store credentials?",
  },
  {
    answer:
      "No. Everything you edit is a draft until you explicitly publish it. Before publishing you see a per-field, per-language diff of what will change, and every published change is recorded in history with one-click rollback.",
    question: "Can AppBoard break my live store listing?",
  },
  {
    answer:
      "Both. AppBoard connects to App Store Connect and Google Play Console, and apps from both stores sit side by side in one workspace — including grouped Android + iOS pairs of the same app.",
    question: "Does it support the App Store and Google Play?",
  },
  {
    answer:
      "The App Store and Google Play are supported today. Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore, Xiaomi GetApps, RuStore and ONE Store are being built and will appear in the same workspace, so one listing can go to every store you publish on.",
    question: "What about stores other than Apple and Google?",
  },
  {
    answer:
      "AI features run through OpenRouter with your own API key, so you pick the model and pay the provider directly. AI drafts descriptions, translations, keyword ideas and review replies — but nothing is ever sent to a store without your approval.",
    question: "How does the AI work, and whose API key does it use?",
  },
  {
    answer:
      "Yes — AppBoard is an open-source product, and everything runs in the web panel: no desktop app, no plugins, nothing to install. If it works in your browser, it works.",
    question: "Is AppBoard open source, and do I need to install anything?",
  },
  {
    answer:
      "AppBoard is free while in beta. No credit card is required, and you'll be told well in advance before any paid plan is introduced.",
    question: "What does it cost?",
  },
];

export function FaqSection(): JSX.Element {
  return (
    <section className="scroll-mt-24 px-4 py-24 sm:px-6" id="faq">
      <JsonLd data={buildFaqSchema("/", LANDING_FAQ)} />
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions people actually ask"
        />
        <div className="mt-12 space-y-3">
          {LANDING_FAQ.map((entry) => (
            <details
              className="group rounded-2xl border border-line bg-panel/40 px-6 py-4 transition-colors open:border-accent/40 open:bg-panel/70"
              key={entry.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {entry.question}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-accent-bright transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{entry.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          More questions answered in the{" "}
          <Link className="anim-underline text-accent-bright" href="/faq">
            full FAQ
          </Link>{" "}
          and the{" "}
          <Link className="anim-underline text-accent-bright" href="/docs">
            documentation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
