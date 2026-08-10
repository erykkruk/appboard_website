# AppBoard Website

## Overview

Marketing/landing page website for AppBoard — an ASO (App Store Optimization) SaaS tool for managing apps in App Store and Google Play. Built with Next.js 16, TypeScript, and TailwindCSS 4. The website showcases AppBoard's features, pricing, and documentation for potential customers.

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Runtime | Bun | 1.3.x |
| Framework | Next.js | 16.x |
| UI Library | React | 19.x |
| Styling | Tailwind CSS | 4.x |
| Language | TypeScript | 5.x |
| Linter | ESLint | 9.x |
| Package Manager | Bun | - |

## Development Commands

| Command | Description |
|---------|------------|
| `bun dev` | Start dev server (http://localhost:6700) |
| `bun run build` | Production build |
| `bun start` | Start production server |
| `bun run lint` | Run ESLint |

## Directory Structure

```
src/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                # Root layout with metadata & structured data
│   ├── page.tsx                  # Homepage/landing page
│   ├── globals.css               # Global styles + Tailwind
│   ├── features/                 # Features page
│   ├── pricing/                  # Pricing page
│   ├── blog/                     # Blog section
│   ├── docs/                     # Documentation section
│   ├── contact/                  # Contact page
│   ├── sitemap.xml/              # Dynamic sitemap
│   ├── robots.txt/               # Robots configuration
│   └── api/                      # API routes
├── components/
│   ├── layout/                   # Layout components (Header, Footer, Navigation)
│   │   └── index.ts             # Barrel exports
│   ├── sections/                 # Landing page sections (Hero, Features, Pricing, CTA)
│   │   └── index.ts             # Barrel exports
│   └── ui/                       # Reusable UI primitives (Button, Card, Badge)
│       ├── cards/
│       ├── containers/
│       ├── buttons/
│       ├── forms/
│       ├── icons/
│       └── index.ts             # Main UI barrel export
├── lib/                          # Utilities, constants, helpers
│   ├── utils.ts                 # cn() utility
│   ├── seo.ts                   # SEO utilities
│   └── schema.ts                # JSON-LD schema generators
├── types/                        # Shared TypeScript types
└── styles/                       # Additional style files
public/
├── images/                       # Static images (screenshots, illustrations)
├── icons/                        # Icon assets (favicon, app icons)
└── videos/                       # Video assets (demo videos)
```

## Internationalization

The site ships English and Polish and is built for more locales. English stays at
the root (`/pricing`) and is indexed — never move or redirect an English URL.
Other locales live under a prefix (`/pl/pricing`).

Everything derives from `src/lib/i18n/`: `locales.ts` (registry), `routes.ts`
(EN/PL route pairs, `buildAlternates`), `dictionaries.ts` (shared header/footer
chrome), and `content/*.ts` (per-surface copy keyed by locale). The sitemap, the
`hreflang` tags, the language switcher and the route-pairing test all read from
`ROUTE_PAIRS`, so the registry cannot drift from the filesystem.

Each locale declares a **scope**: `site` (every page) or `blog` (the blog only,
for markets where we publish articles but do not translate the product). A
blog-scoped locale is filtered out of the sitemap, the `hreflang` alternates and
the language switcher on every non-blog page, so it can never produce a dead link
like `/de/pricing`. Planned: EN and PL are `site`; DE and ES will be `blog`.

**Adding a locale** = registry entry + dictionary + per-page content files and
routes. Nothing else. Full instructions in `src/lib/i18n/README.md`.

Rules: pages pass `locale` explicitly to `Header`, `Footer` and sections (default
`DEFAULT_LOCALE`); non-default locales set `lang` on their main element; canonical
points at itself and `x-default` at English; product terms (App Store, Google
Play, ASO, listing, open source, self-hosting) stay English in every locale.

## Architecture Pattern

Static marketing website using Next.js App Router with server components. Pages are composed of section components. Reusable UI primitives in `components/ui/`.

**Component Hierarchy:**
```
Layout Components -> Section Components -> UI Components -> Interactive Elements
```

- **Layout Components**: App-wide elements (Header, Footer, Navigation)
- **Section Components**: Page-specific sections composed from UI components
- **UI Components**: Reusable building blocks (cards, buttons, containers)
- **Interactive Elements**: State-driven components with user interaction

## Module Structure

```
src/components/sections/{section-name}.tsx   # Section component
src/components/ui/{component-name}.tsx       # UI primitive
src/components/layout/{layout-part}.tsx      # Layout component
```

## Naming Conventions

- Files: kebab-case (e.g., `hero-section.tsx`, `pricing-card.tsx`)
- Components: PascalCase (e.g., `HeroSection`, `PricingCard`)
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- CSS classes: Tailwind utility classes (no custom class names unless necessary)
- Types/Interfaces: PascalCase (e.g., `FeatureCardProps`)

## Error Handling

Standard Next.js error boundaries via `error.tsx` and `not-found.tsx` files.

```typescript
// Component Error Boundaries
export function SectionErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={<ErrorFallback />}
      onError={(error) => console.error('Section error:', error)}
    >
      {children}
    </ErrorBoundary>
  );
}
```

## Anti-patterns

- NEVER use `console.log` in production code
- NEVER hardcode colors/spacing — use Tailwind theme tokens
- NEVER use inline styles when Tailwind classes are available
- NEVER skip TypeScript types — no `any`
- NEVER import from `node_modules` directly — use package names
- NEVER add unnecessary comments — code should be self-documenting
- NEVER use string concatenation for class names — use `cn()` utility
- NEVER skip SEO metadata on new pages
- NEVER block AI crawlers in robots.txt

## Best Practices

- ALWAYS use `@/` path aliases for imports
- ALWAYS use Next.js `<Image>` for images (optimization)
- ALWAYS use Next.js `<Link>` for internal navigation
- ALWAYS use semantic HTML elements
- ALWAYS ensure responsive design (mobile-first)
- ALWAYS optimize for SEO (metadata, Open Graph, structured data)
- ALWAYS use server components by default, client components only when needed
- ALWAYS use barrel exports (`index.ts`) for clean imports
- ALWAYS add descriptive alt text on images
- ALWAYS use `cn()` utility for conditional classes
- ALWAYS run `bun run build` before committing

## New Feature Checklist

1. Create component in appropriate directory (`sections/`, `ui/`, `layout/`)
2. Use TypeScript props interface with explicit `JSX.Element` return type
3. Use Tailwind CSS for styling
4. Ensure responsive design (mobile-first)
5. Add proper SEO metadata if it's a page
6. Add page to sitemap if it's a new route
7. Add JSON-LD schema markup if relevant
8. Update barrel exports (`index.ts`)
9. Test build with `bun run build`
10. Run relevant review agents from `.claude/agents/`

## Ports

| Service | Port |
|---------|------|
| AppBoard Website (Next.js) | 6700 |
| AppBoard Backend (Elysia) | 6680 |
| AppBoard Admin Panel (Next.js) | 6600 |

## Agent System

This project uses a specialized agent system for code quality and consistency. **BEFORE every task, Claude MUST:**

1. **Read this CLAUDE.md** — Understand project context
2. **Identify task type** — architecture, code quality, security, testing, SEO
3. **Select appropriate agents** from `.claude/agents/`
4. **Apply guidelines** — follow both general and specific patterns

### Agent Decision Framework

| Task | Agents to Consult |
|------|-------------------|
| New page/section | architecture-review + seo-technical-review + seo-content-review |
| Bug fix | code-review + testing-review |
| Content/copy changes | seo-content-review + seo-ai-visibility-review |
| SEO audit | all 3 SEO agents |
| New API endpoint | architecture-review + security-review |
| Performance issue | performance-review + code-review |
| UI component | code-review + architecture-review |
| Schema/structured data | seo-technical-review |
| Refactoring | architecture-review + code-review + testing-review |

### Available Agents

```
.claude/agents/
├── architecture-review.md        # Component patterns, dependency flow, structure
├── code-review.md                # Code quality, naming, TypeScript, styling
├── security-review.md            # Security headers, validation, secrets
├── testing-review.md             # Testing strategies, coverage, patterns
├── performance-review.md         # Core Web Vitals, bundle, loading optimization
├── seo-technical-review.md       # Technical SEO: metadata, schema, crawlability
├── seo-content-review.md         # Content SEO: keywords, E-E-A-T, copy quality
└── seo-ai-visibility-review.md   # AI Search: GEO/AEO, extractability, authority
```

### Available Commands

```
.claude/commands/
├── commit.md                     # /commit — conventional commits
├── pr.md                         # /pr — structured PR creation
├── review.md                     # /review — route files to agents
└── quality-check.md              # /quality-check — full pipeline
```

## Claude Code Integration

| Type | Name | Purpose |
|------|------|---------|
| Agent | architecture-review | Module structure, component organization |
| Agent | code-review | Code quality, naming, TypeScript, styling |
| Agent | security-review | Input validation, headers, dependencies |
| Agent | testing-review | Test coverage, patterns |
| Agent | performance-review | Core Web Vitals, bundle, loading |
| Agent | seo-technical-review | Metadata, schema, crawlability |
| Agent | seo-content-review | Keywords, E-E-A-T, copy quality |
| Agent | seo-ai-visibility-review | AI search visibility, GEO/AEO |
| Command | /commit | Conventional commits |
| Command | /pr | Structured pull requests |
| Command | /review | Route changed files to agents |
| Command | /quality-check | Full quality pipeline |

---

## SEO-First Development Rules

This is a public-facing marketing website — SEO is paramount.

1. **Every new page** MUST have unique metadata (title 50-60 chars, description 150-160 chars, canonical URL, OG image)
2. **Every new page** MUST be added to `sitemap.xml/route.ts`
3. **Schema markup** on every page where relevant (use `src/lib/schema.ts` generators)
4. **AI-friendly content** — definition blocks, standalone fragments, FAQ sections, comparison tables
5. **NEVER block AI bots** in robots.txt (GPTBot, PerplexityBot, ClaudeBot, Google-Extended)
6. **Images** — always `next/image` with descriptive alt text, WebP format, proper width/height
7. **Headings** — exactly 1x H1 per page with primary keyword, hierarchical H2 -> H3
8. **Internal linking** — descriptive anchor text, no orphan pages
9. **Run SEO agents** after creating/modifying pages — `seo-technical-review` + `seo-content-review`

---

## AppBoard-Specific Content Context

### Key Features to Showcase
- **App Store Optimization** — keyword research, metadata optimization
- **Keyword Tracking** — real-time rankings for App Store and Google Play
- **Listing Management** — manage app metadata across stores
- **Screenshot Tools** — visual optimization for store listings
- **AI-Powered Metadata** — AI generation for titles, descriptions, keywords
- **Review Management** — monitor and respond to app reviews
- **Analytics Dashboard** — download tracking, conversion rates

### Key Messaging
- **ASO Made Simple** — powerful tools, easy interface
- **AI-Powered Optimization** — metadata generation, keyword suggestions
- **Multi-Store Support** — App Store + Google Play in one place
- **Real-Time Analytics** — keyword rankings, download tracking
- **Team Collaboration** — workspace-based multi-user access

### Design Direction
- Modern SaaS landing page
- Dark theme with accent colors
- Clean typography, generous spacing
- Conversion-focused CTAs
- Trust signals (testimonials, partner logos)

---

## Coding Standards

### Comment Policy

**NO UNNECESSARY COMMENTS** — Code should be self-documenting through clear naming. Only comment for complex business logic or non-obvious behavior.

### TypeScript
- Explicit `JSX.Element` return types on all components
- No `any` types
- Typed event handlers
- Proper useState/useRef typing

### Component Pattern
```typescript
"use client"; // Only if interactive

import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
}

export function Component({ className }: ComponentProps): JSX.Element {
  return (
    <div className={cn("base-styles", className)}>
      {/* Content */}
    </div>
  );
}
```

### Page Pattern
```typescript
import { Header, Footer } from '@/components/layout';
import { HeroSection, FeaturesSection } from '@/components/sections';

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <main className="relative w-full min-h-screen">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
```

---

## Final Compliance Review

After completing any task, verify:

- [ ] TypeScript types explicit and correct
- [ ] Performance — images optimized, lazy loading
- [ ] Accessibility — ARIA labels, semantic HTML, keyboard nav
- [ ] Responsive — mobile-first, proper breakpoints
- [ ] SEO — metadata, schema, sitemap updated
- [ ] Build passes — `bun run build` succeeds
- [ ] No unnecessary comments in code
