# AppBoard Website

## Overview
Marketing/landing page website for AppBoard - an ASO (App Store Optimization) tool for managing apps in App Store and Google Play.

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
| `bun dev` | Start dev server |
| `bun run build` | Production build |
| `bun start` | Start production server |
| `bun run lint` | Run ESLint |

## Directory Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page (landing)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── layout/           # Layout components (Header, Footer, Navigation)
│   ├── sections/         # Landing page sections (Hero, Features, Pricing, CTA)
│   └── ui/               # Reusable UI primitives (Button, Card, Badge)
├── lib/                  # Utilities, constants, helpers
├── types/                # Shared TypeScript types
└── styles/               # Additional style files
public/
├── images/               # Static images (screenshots, illustrations)
├── icons/                # Icon assets (favicon, app icons)
└── videos/               # Video assets (demo videos)
```

## Architecture Pattern

Static marketing website using Next.js App Router with server components. Pages are composed of section components. Reusable UI primitives in `components/ui/`.

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

## Error Handling

Standard Next.js error boundaries via `error.tsx` and `not-found.tsx` files.

## Anti-patterns

- NEVER use `console.log` in production code
- NEVER hardcode colors/spacing - use Tailwind theme tokens
- NEVER use inline styles when Tailwind classes are available
- NEVER skip TypeScript types - no `any`
- NEVER import from `node_modules` directly - use package names

## Best Practices

- ALWAYS use `@/` path aliases for imports
- ALWAYS use Next.js `<Image>` for images (optimization)
- ALWAYS use Next.js `<Link>` for internal navigation
- ALWAYS use semantic HTML elements
- ALWAYS ensure responsive design (mobile-first)
- ALWAYS optimize for SEO (metadata, Open Graph, structured data)
- ALWAYS use server components by default, client components only when needed

## New Feature Checklist

1. Create component in appropriate directory (`sections/`, `ui/`, `layout/`)
2. Use TypeScript props interface
3. Use Tailwind CSS for styling
4. Ensure responsive design
5. Add proper SEO metadata if it's a page
6. Test build with `bun run build`

## Ports

- Development: 3000 (default Next.js)

## Claude Code Integration

| Type | Name | Purpose |
|------|------|---------|
| Agent | architecture-review | Module structure, component organization |
| Agent | code-review | Code quality, naming, TypeScript |
| Agent | security-review | Input validation, dependencies |
| Agent | testing-review | Test coverage |
