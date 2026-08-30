import { absoluteUrl, APP_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

type JsonLdObject = Record<string, unknown>;

export function buildOrganizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}/#organization`,
    "@type": "Organization",
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/icon.svg`,
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildWebSiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}/#website`,
    "@type": "WebSite",
    description: SITE_DESCRIPTION,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
  };
}

export function buildSoftwareApplicationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}/#software`,
    "@type": "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    description: SITE_DESCRIPTION,
    featureList: [
      "App Store Connect and Google Play Console connections",
      "Listing metadata editing per language with draft and publish flows",
      "GitHub-style change history with diffs and rollback",
      "AI assistant for descriptions, translations, and ASO keyword suggestions",
      "Screenshot studio with CLI and CI uploads",
      "Keyword rank tracking, market comparison, and competitor research",
      "Review management with AI-drafted replies",
      "Batch publishing to both stores with per-item reports",
      "Privacy declarations, age ratings, and in-app purchase management",
      "Multi-workspace teams with roles and an end-to-end encrypted credentials vault",
    ],
    name: SITE_NAME,
    offers: {
      "@type": "Offer",
      description: "Free early access while AppBoard is in beta.",
      price: "0",
      priceCurrency: "USD",
      url: APP_URL,
    },
    operatingSystem: "Web",
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
  };
}

export function buildScreenshotEditorSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@id": `${absoluteUrl("/screenshot-editor")}#app`,
    "@type": "WebApplication",
    applicationCategory: "DesignApplication",
    browserRequirements: "Requires a modern browser with JavaScript.",
    description:
      "A free, browser-based App Store and Google Play screenshot editor: device mockups, gradients, text, shapes, panorama layouts, templates, and PNG export - everything runs on your device.",
    featureList: [
      "iPhone, iPad, Android, Apple Watch, and laptop device mockups",
      "Real Apple product bezels (Photo style)",
      "Gradient, mesh, radial, and patterned backgrounds",
      "Decorative text, shapes, badges, callouts, and emoji stickers",
      "One-click templates and 3D device tilt",
      "Panorama layouts split into multiple store screenshots on export",
      "Undo/redo, snap guides, and localStorage autosave",
      "PNG export at exact store dimensions",
    ],
    isAccessibleForFree: true,
    name: "Free ASO Screenshot Editor",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Web",
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: absoluteUrl("/screenshot-editor"),
  };
}

/**
 * The person behind the product. A named author with a role is what search
 * engines look for as an experience signal on an article, so bylined posts
 * carry this instead of the bare Organization.
 */
export const SITE_AUTHOR = {
  jobTitle: "Founder",
  name: "Eryk Kruk",
} as const;

export function buildPersonSchema(): JsonLdObject {
  return {
    "@id": `${SITE_URL}/#author`,
    "@type": "Person",
    jobTitle: SITE_AUTHOR.jobTitle,
    name: SITE_AUTHOR.name,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: absoluteUrl(item.path),
      name: item.name,
      position: index + 1,
    })),
  };
}

export interface FaqEntry {
  answer: string;
  question: string;
}

export function buildFaqSchema(
  path: string,
  entries: FaqEntry[],
  inLanguage?: string,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@id": `${absoluteUrl(path)}#faq`,
    "@type": "FAQPage",
    ...(inLanguage ? { inLanguage } : {}),
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
      name: entry.question,
    })),
  };
}
