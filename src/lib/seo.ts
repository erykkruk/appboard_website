import type { Metadata } from "next";

export const SITE_URL = "https://appboard.dev";
export const APP_URL = "https://app.appboard.dev";
export const SITE_NAME = "AppBoard";
export const SITE_TITLE = "AppBoard — ASO for App Store & Google Play in One Panel";
export const SITE_DESCRIPTION =
  "Manage App Store and Google Play listings from one panel. Edit metadata per language, version changes with diffs and rollback, and publish with AI-powered ASO.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

interface PageMetadataInput {
  description: string;
  path: string;
  title?: string;
}

export function buildPageMetadata({
  description,
  path,
  title,
}: PageMetadataInput): Metadata {
  const resolvedTitle = title ?? SITE_TITLE;

  return {
    alternates: {
      canonical: path,
    },
    description,
    openGraph: {
      description,
      siteName: SITE_NAME,
      title: resolvedTitle,
      type: "website",
      url: path,
    },
    title: title ?? { absolute: SITE_TITLE },
    twitter: {
      card: "summary_large_image",
      description,
      title: resolvedTitle,
    },
  };
}
