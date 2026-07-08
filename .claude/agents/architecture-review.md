# Architecture Review Agent

## Role

Reviews component architecture, layers, dependencies, and design patterns in the context of Next.js 16 App Router.

## When to Run

- New page or section
- New UI component
- Changes to folder structure
- Component refactoring
- Adding new functionality

## Project Architecture Pattern

Modular Component Architecture z Next.js 16 App Router:

```
Layout Components -> Section Components -> UI Components -> Interactive Elements
```

### Component Hierarchy
- **Layout Components**: App-wide elements (Header, Footer, Navigation)
- **Section Components**: Page-specific sections composed from UI components
- **UI Components**: Reusable building blocks (cards, buttons, containers)
- **Interactive Elements**: State-driven components with user interaction

## File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata & structured data
│   ├── page.tsx           # Homepage composition
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── blog/              # Blog section
│   ├── docs/              # Documentation
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   │   └── index.ts      # Barrel exports
│   ├── sections/          # Page sections
│   │   └── index.ts      # Barrel exports
│   └── ui/                # Reusable UI components
│       ├── cards/
│       ├── containers/
│       ├── buttons/
│       ├── forms/
│       ├── icons/
│       └── index.ts      # Main UI barrel export
├── lib/                   # Business logic & utilities
│   ├── utils.ts          # cn() utility
│   ├── seo.ts            # SEO helpers
│   └── schema.ts         # JSON-LD generators
├── types/                 # TypeScript type definitions
└── styles/
    └── globals.css        # CSS variables + Tailwind
```

## Layer Responsibilities

### 1. App Layer (`/app`)
- Root layout with metadata and SEO
- Page composition and routing
- Global styles and font loading
- Structured data (JSON-LD)

### 2. Layout Layer (`/components/layout`)
- Fixed navigation and app structure
- Global layout elements (header, footer)
- Consistent positioning and z-index management

### 3. Section Layer (`/components/sections`)
- Page section composition using UI components
- Section-level layout and spacing
- Data coordination between UI components

### 4. UI Layer (`/components/ui`)
- Reusable building blocks
- Self-contained interactive components
- Single-purpose components
- Client-side state management for interactive elements

## Component Patterns

### Page Composition Pattern
```typescript
import { Header, Footer } from '@/components/layout';
import { HeroSection, FeaturesSection, PricingSection } from '@/components/sections';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className="relative w-full min-h-screen bg-appboard-dark overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
```

### Section Pattern (Composition-Based)
```typescript
"use client";

import { SectionHeader, FeatureCard } from '@/components/ui';

export function FeaturesSection(): JSX.Element {
  return (
    <section className="relative w-full py-24 bg-appboard-dark">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Features"
          title="Everything you need for ASO"
          description="Powerful tools to optimize your app store presence."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### UI Component Pattern
```typescript
"use client"; // Only if interactive

interface ComponentProps {
  className?: string;
}

export function UIComponent({ className, ...props }: ComponentProps): JSX.Element {
  return (
    <div className={cn("base-styles", className)}>
      {/* Single-purpose component content */}
    </div>
  );
}
```

## Design System

### CSS Variables + Tailwind Classes
```typescript
// CORRECT - Tailwind classes
<section className="bg-appboard-dark text-white">
  <h1 className="text-appboard-accent">Title</h1>
  <p className="text-white/70">Description</p>
</section>

// WRONG - Inline styles
<section style={{ backgroundColor: 'var(--appboard-dark)' }}>
```

### Responsive Design
- **Mobile First**: Base styles for mobile, scale up
- **Tailwind Breakpoints**: `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)
- **Container Max Width**: `max-w-7xl` for standard content

## Architecture Review Checklist

### Structure Compliance
- [ ] Components follow src/ architecture with proper separation
- [ ] All interactive components use `"use client"`
- [ ] Barrel exports in `index.ts` files for clean imports
- [ ] CSS variables used for theming
- [ ] Responsive breakpoints follow mobile-first approach
- [ ] Types defined in src/types/ for shared interfaces

### Performance Requirements
- [ ] Images use Next.js Image component with proper sizing
- [ ] Animations use CSS transitions or requestAnimationFrame
- [ ] Priority loading for above-the-fold content

### SEO & Metadata
- [ ] Structured data (JSON-LD) present
- [ ] Comprehensive Open Graph tags
- [ ] Twitter Card metadata
- [ ] Proper image alt text and descriptions
- [ ] Font loading optimization

### Code Comment Policy

**IMPORTANT: NO UNNECESSARY COMMENTS**

- Code should be self-documenting through clear naming
- Only add comments for complex business logic or non-obvious behavior
- Never add obvious comments like `// Create button` or `// Set state`
- Use TypeScript interfaces and JSDoc for API documentation when needed
