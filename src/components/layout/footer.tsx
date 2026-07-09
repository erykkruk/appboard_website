import Link from "next/link";

import { APP_URL, DISCORD_URL, GITHUB_URL } from "@/lib/seo";

import { Logo } from "./logo";

import type { JSX } from "react";

interface FooterLink {
  external?: boolean;
  href: string;
  label: string;
}

interface FooterColumn {
  links: FooterLink[];
  title: string;
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    links: [
      { href: "/#tour", label: "Product tour" },
      { href: "/pricing", label: "Pricing" },
      { external: true, href: `${APP_URL}/demo`, label: "Live demo" },
      { external: true, href: APP_URL, label: "Sign in" },
    ],
    title: "Product",
  },
  {
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { external: true, href: GITHUB_URL, label: "Source on GitHub" },
      { external: true, href: DISCORD_URL, label: "Discord community" },
      { href: "/#self-hosted", label: "Self-hosting" },
    ],
    title: "Resources",
  },
  {
    links: [
      { href: "/policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
    title: "Legal",
  },
];

function FooterNavLink({ link }: { link: FooterLink }): JSX.Element {
  const className =
    "anim-underline text-sm text-muted transition-colors hover:text-foreground";

  if (link.external) {
    return (
      <a className={className} href={link.href}>
        {link.label}
      </a>
    );
  }

  return (
    <Link className={className} href={link.href}>
      {link.label}
    </Link>
  );
}

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              App Store Optimization for App Store and Google Play — listings,
              screenshots, research, and publishing from one panel.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {FOOTER_COLUMNS.map((column) => (
              <nav aria-label={column.title} key={column.title}>
                <h2 className="text-sm font-semibold text-foreground">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterNavLink link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">© 2026 AppBoard. All rights reserved.</p>
          <p className="text-sm text-muted">
            Built independently, one release at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
