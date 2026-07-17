"use client";

import Link from "next/link";
import { useState } from "react";

import { ButtonLink, CloseIcon, MenuIcon } from "@/components/ui";
import { APP_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

import type { JSX } from "react";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/#tour", label: "Product" },
  { href: `${APP_URL}/editor`, label: "Free editor" },
  { href: "/pricing", label: "Pricing" },
  { href: "/opensource", label: "Open source" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              className="anim-underline text-sm text-muted transition-colors hover:text-foreground"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={`${APP_URL}/demo`} variant="ghost">
            Live demo
          </ButtonLink>
          <ButtonLink href={APP_URL} variant="primary">
            Get started
          </ButtonLink>
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>
      <div
        className={cn(
          "border-t border-line bg-background md:hidden",
          !isMenuOpen && "hidden",
        )}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-panel hover:text-foreground"
              href={link.href}
              key={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <ButtonLink href={`${APP_URL}/demo`} variant="secondary">
              Live demo
            </ButtonLink>
            <ButtonLink href={APP_URL} variant="primary">
              Get started
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
