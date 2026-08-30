import type { Metadata } from "next";

export const SITE_URL = "https://appboard.dev";
export const APP_URL = "https://app.appboard.dev";
export const API_URL = "https://api.appboard.dev";
export const GITHUB_URL = "https://github.com/erykkruk/appboard_backend";
export const GITHUB_REPOS = {
  backend: "https://github.com/erykkruk/appboard_backend",
  panel: "https://github.com/erykkruk/appboard_web",
  website: "https://github.com/erykkruk/appboard_website",
};
export const DISCORD_URL = "https://discord.gg/3VpCwukDE3";
export const REDDIT_URL = "https://www.reddit.com/r/appboard/";
export const SITE_NAME = "AppBoard";
export const SITE_TITLE = "AppBoard - ASO for App Store & Google Play in One Panel";
export const SITE_DESCRIPTION =
  "Manage App Store and Google Play listings from one panel. Edit metadata per language, version changes with diffs and rollback, and publish with AI-powered ASO.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

interface PageMetadataInput {
  absoluteTitle?: boolean;
  description: string;
  languages?: Record<string, string>;
  locale?: string;
  /**
   * og:type. Blog articles should pass "article" so the post is understood as
   * a dated piece of writing rather than another marketing page; everything
   * else keeps the "website" default.
   */
  ogType?: "article" | "website";
  path: string;
  publishedTime?: string;
  title?: string;
}

export function buildPageMetadata({
  absoluteTitle,
  description,
  languages,
  locale,
  ogType,
  path,
  publishedTime,
  title,
}: PageMetadataInput): Metadata {
  const resolvedTitle = title ?? SITE_TITLE;

  return {
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    description,
    openGraph: {
      description,
      ...(locale ? { locale } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      siteName: SITE_NAME,
      title: resolvedTitle,
      type: ogType ?? "website",
      url: path,
    },
    title: absoluteTitle && title ? { absolute: title } : (title ?? { absolute: SITE_TITLE }),
    twitter: {
      card: "summary_large_image",
      description,
      title: resolvedTitle,
    },
  };
}
