import { Footer, Header } from "@/components/layout";
import { ArrowRightIcon, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import { buildFaqSchema } from "@/lib/schema";
import { buildAlternates } from "@/lib/i18n/routes";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const FAQ_DESCRIPTION =
  "Answers about AppBoard: the live demo, connecting App Store and Google Play, the encrypted credentials vault, drafts and publishing, AI research, and beta pricing.";

export const metadata: Metadata = buildPageMetadata({
  description: FAQ_DESCRIPTION,
  languages: buildAlternates("/faq"),
  path: "/faq",
  title: "FAQ",
});

interface FaqCategory {
  entries: FaqEntry[];
  title: string;
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    entries: [
      {
        answer:
          "AppBoard is one panel for managing your App Store and Google Play listings - metadata, screenshots, versions, reviews and ASO research - instead of jumping between App Store Connect and the Play Console. It's built for indie developers and small teams shipping the same app on both stores.",
        question: "What is AppBoard?",
      },
      {
        answer:
          "Yes. The live demo is a real AppBoard workspace pre-filled with example apps, reviews and listing history. It opens in one click - no signup and no store credentials - so you can click through every screen before deciding.",
        question: "Can I try it without connecting my own apps?",
      },
      {
        answer:
          "You sign in with your email and a one-time code we send you. There's no password to create or remember, and nothing to reset.",
        question: "How does login work?",
      },
      {
        answer:
          "About ten minutes if you have your store keys ready - an App Store Connect API key and a Google Play service account. Once they're connected, AppBoard imports your apps and listings automatically.",
        question: "How long does setup take?",
      },
      {
        answer:
          "Yes. AppBoard is an open-source product, and the whole tool runs in the web panel - there's no desktop app, no plugin and nothing to install. Any modern browser is enough.",
        question: "Is AppBoard open source, and do I need to install anything?",
      },
    ],
    title: "Getting started",
  },
  {
    entries: [
      {
        answer:
          "Both. App Store Connect connects with an API key - Issuer ID, Key ID and the .p8 file. Google Play connects with a service account JSON. Apps from both stores then sit side by side in one workspace.",
        question: "Which stores does AppBoard support?",
      },
      {
        answer:
          "Google's Reporting API doesn't expose apps that are still in draft, so a brand-new app won't show up on its own. You can register its package manually and AppBoard will track it from then on.",
        question: "Why doesn't my Google Play draft app appear?",
      },
      {
        answer:
          "Yes. A full re-import per store pulls everything fresh from the store and replaces the local data for that store - useful if something drifted out of sync or you changed things directly in the store console.",
        question: "Can I re-sync everything from a store?",
      },
      {
        answer:
          "Yes. You can have multiple apps and multiple workspaces, and app groups link the Android and iOS versions of the same app so you edit and compare them together.",
        question: "Can I manage multiple apps and workspaces?",
      },
    ],
    title: "Stores & connections",
  },
  {
    entries: [
      {
        answer:
          "In an end-to-end encrypted vault. The encryption key is derived from your passphrase, so AppBoard's servers only ever store ciphertext and never see your keys in plaintext.",
        question: "How are my store credentials stored?",
      },
      {
        answer:
          "By design there's no backdoor, so a reset wipes the stored credentials and you re-enter your keys afterwards. That's the trade-off for the servers never being able to read them.",
        question: "What happens if I forget my passphrase?",
      },
      {
        answer:
          "Only what you explicitly trigger. AppBoard uses your keys to read and edit listings, but nothing is ever published to a store without an explicit action from you.",
        question: "What can AppBoard actually do with my keys?",
      },
      {
        answer:
          "No. Credentials stay encrypted in the vault, and everything in AppBoard is workspace-scoped - teammates work with your listings without ever seeing the raw keys.",
        question: "Can teammates see my credentials?",
      },
    ],
    title: "Security",
  },
  {
    entries: [
      {
        answer:
          "No. Everything you change is a draft, you get a per-field diff preview of exactly what will change before you publish, and every published change is kept in history with one-click rollback.",
        question: "Can AppBoard break my live listing?",
      },
      {
        answer:
          "Every published change, per field and per language, shown as a red/green diff. You can see what changed, when, and roll any field back.",
        question: "What's tracked in history?",
      },
      {
        answer:
          "You can push a version as a draft or send it for review. AppBoard doesn't override the managed-publishing timing you've set - that stays in the Play Console.",
        question: "What publishing options exist on Google Play?",
      },
      {
        answer:
          "Screenshots are managed per device and per language at exact store dimensions, and the built-in editor composes scenes - device frame, background, headline - and exports each image at the precise size the stores require, with language variants of the same scene.",
        question: "How does AppBoard handle screenshots?",
      },
      {
        answer:
          "Upload one wide panorama and AppBoard splits it into 2-10 consecutive screenshots for the panoramic store-listing effect. And if an image has the wrong size, the crop tool locks to per-device presets - from iPhone 3.5\" to iPad Pro 12.9\" to Android tablets - so the store accepts the upload on the first try.",
        question: "What about panoramas and wrong-sized images?",
      },
    ],
    title: "Editing & publishing",
  },
  {
    entries: [
      {
        answer:
          "Your own. AI runs through your OpenRouter key with any model you choose, and you pay the provider directly - AppBoard doesn't mark up or resell tokens.",
        question: "Whose AI key does AppBoard use?",
      },
      {
        answer:
          "It drafts descriptions, translations, keyword ideas and review replies. Everything the AI produces is a suggestion you review and approve - nothing reaches a store automatically.",
        question: "What does the AI actually do?",
      },
      {
        answer:
          "Yes. Scraping, rank tracking and heuristic grouping of negative reviews all work without an AI key. Adding your own key layers deeper AI analysis on top.",
        question: "Does research work without AI?",
      },
      {
        answer:
          "Yes. You can research any app on the stores - its keywords, the markets it ranks in, its reviews, and a side-by-side visual comparison with yours.",
        question: "Can I research competitors?",
      },
    ],
    title: "AI & research",
  },
  {
    entries: [
      {
        answer:
          "AppBoard is free while it's in beta. No credit card is required, and you'll get advance notice before any paid plan is introduced.",
        question: "How much does AppBoard cost?",
      },
      {
        answer:
          "Early users get notice and a migration path onto whatever plan fits - no silent charging and no surprise switch from free to paid.",
        question: "What happens to my account after the beta?",
      },
    ],
    title: "Billing",
  },
];

const ALL_FAQ_ENTRIES: FaqEntry[] = FAQ_CATEGORIES.flatMap(
  (category) => category.entries,
);

export default function FaqPage(): JSX.Element {
  return (
    <>
      <JsonLd data={buildFaqSchema("/faq", ALL_FAQ_ENTRIES)} />
      <Header />
      <main className="relative w-full flex-1">
        <section className="px-4 pb-6 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow align="center">FAQ</Eyebrow>
            <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              Everything people ask before trusting us with their store keys
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Honest answers about how AppBoard connects to your stores, keeps your
              credentials encrypted, and lets you edit and publish without breaking
              anything live.
            </p>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl space-y-14">
            {FAQ_CATEGORIES.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {category.title}
                </h2>
                <div className="mt-6 space-y-3">
                  {category.entries.map((entry) => (
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
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {entry.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-panel/40 px-8 py-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Still have a question?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              The fastest way to get an answer is to try it. Open the live demo and
              click through a real workspace, or create your own account free while
              AppBoard is in beta.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={`${APP_URL}/demo`} size="lg" variant="secondary">
                Explore the live demo
              </ButtonLink>
              <ButtonLink href={APP_URL} size="lg" variant="primary">
                Create free account
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
