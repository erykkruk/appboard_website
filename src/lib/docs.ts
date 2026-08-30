export interface DocPage {
  description: string;
  slug: string;
  title: string;
}

export interface DocSection {
  pages: DocPage[];
  title: string;
}

export const DOCS_SECTIONS: DocSection[] = [
  {
    pages: [
      {
        description:
          "Create a workspace, take the guided tour, and get your first app into AppBoard in about ten minutes.",
        slug: "getting-started",
        title: "Getting started",
      },
      {
        description:
          "Connect App Store Connect with an API key: issuer ID, key ID, and the .p8 private key - plus how the encrypted vault protects them.",
        slug: "connect-app-store",
        title: "Connect App Store Connect",
      },
      {
        description:
          "Connect Google Play Console with a service account JSON, register draft apps manually, and run a full re-import when needed.",
        slug: "connect-google-play",
        title: "Connect Google Play Console",
      },
    ],
    title: "Setup",
  },
  {
    pages: [
      {
        description:
          "Edit titles, descriptions, and keywords per language with drafts, character counters, and dirty-state tracking.",
        slug: "listings",
        title: "Listings & languages",
      },
      {
        description:
          "Manage screenshots per device and language, meet each store's size requirements, and use the built-in editor.",
        slug: "screenshots",
        title: "Screenshots & graphics",
      },
      {
        description:
          "Push changes to the App Store and Google Play, publish as draft or send for review, and read the per-item publish report.",
        slug: "publishing",
        title: "Publishing",
      },
      {
        description:
          "Every published change is recorded per field and language with red/green diffs - and one-click rollback into your draft.",
        slug: "history-and-rollback",
        title: "History & rollback",
      },
    ],
    title: "Core workflow",
  },
  {
    pages: [
      {
        description:
          "Read and reply to App Store and Google Play reviews from one inbox, with AI-drafted responses you approve.",
        slug: "reviews",
        title: "Reviews",
      },
      {
        description:
          "Research any store app: keyword rankings, market comparison, competitor analysis, and AI review mining.",
        slug: "research",
        title: "Research",
      },
      {
        description:
          "Set up the AI assistant with your own OpenRouter key, pick models, and see exactly what AI can and cannot touch.",
        slug: "ai-assistant",
        title: "AI assistant",
      },
    ],
    title: "Optimization",
  },
  {
    pages: [
      {
        description:
          "How the end-to-end encrypted credentials vault works: passphrase, unlocking, and what happens on reset.",
        slug: "security",
        title: "Security & the vault",
      },
      {
        description:
          "Workspaces, feature flags, app groups for Android + iOS pairs, and managing in-app purchases and compliance data.",
        slug: "workspace",
        title: "Workspace & settings",
      },
    ],
    title: "Platform",
  },
  {
    pages: [
      {
        description:
          "AppBoard is open source and self-hostable. Which repository is which, how to run the stack yourself with Docker, and the license terms.",
        slug: "self-hosting",
        title: "Self-hosting & open source",
      },
    ],
    title: "Open source",
  },
];

export const ALL_DOC_PAGES: DocPage[] = DOCS_SECTIONS.flatMap(
  (section) => section.pages,
);

export function getDocPage(slug: string): DocPage | undefined {
  return ALL_DOC_PAGES.find((page) => page.slug === slug);
}
