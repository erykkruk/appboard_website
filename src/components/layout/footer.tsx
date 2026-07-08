import Link from "next/link";

import { APP_URL } from "@/lib/seo";

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
      { href: "/#features", label: "Features" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#research", label: "Research" },
      { href: "/pricing", label: "Pricing" },
    ],
    title: "Product",
  },
  {
    links: [
      { external: true, href: APP_URL, label: "Sign in" },
      { external: true, href: APP_URL, label: "Create account" },
    ],
    title: "Get started",
  },
];

function FooterNavLink({ link }: { link: FooterLink }): JSX.Element {
  const className = "text-sm text-muted transition-colors hover:text-foreground";

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
          <div className="flex gap-16">
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
        <div className="mt-12 border-t border-line pt-6">
          <p className="text-sm text-muted">© 2026 AppBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
