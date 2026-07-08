# Code Review Agent

## Role

Reviews code quality, naming, style, TypeScript patterns, and project consistency.

## When to Run

- Every code change
- New component or page
- Refactoring
- Before merging to main

## Review Checklist

### Styling & Design
- [ ] **Tailwind Classes Only**: Colors use Tailwind classes from the AppBoard palette
- [ ] **AppBoard Color Palette via Tailwind**:
  - Dark background: `bg-appboard-dark`
  - Surface: `bg-appboard-surface`
  - Accent: `text-appboard-accent` / `bg-appboard-accent`
  - White text: `text-white`
  - Secondary text: `text-white/70`
- [ ] **NO Inline Styles**: Avoid `style={{ }}` — use Tailwind classes
- [ ] **CN Utility**: Use the `cn()` utility for conditional classes instead of string concatenation
- [ ] **Responsive Classes**: Mobile-first approach with `md:`, `lg:`, `xl:` breakpoints
- [ ] **Container Patterns**: Use `max-w-7xl mx-auto` for standard content

### Component Architecture
- [ ] **Function Signatures**: All components return an explicit `JSX.Element`
- [ ] **Client Components**: Interactive components use the `"use client"` directive
- [ ] **Barrel Exports**: Components exported through `index.ts` files
- [ ] **Sectional Architecture**:
  - Layout components in `/components/layout/`
  - Page sections in `/components/sections/`
  - Reusable UI in `/components/ui/`

### File Organization
- [ ] **Correct Folders**:
  - `src/app/` for Next.js pages, layout, API routes
  - `src/components/layout/` for Header, Footer
  - `src/components/sections/` for page sections
  - `src/components/ui/` for reusable UI components
  - `src/lib/` for utilities
  - `src/types/` for TypeScript definitions
- [ ] **Import Paths**: Uses `@/` for absolute imports
- [ ] **Naming Convention**:
  - Files: `kebab-case.tsx` (hero-section.tsx)
  - Components: `PascalCase` (HeroSection)
  - Types: `PascalCase` (FeatureCardProps)

### TypeScript Standards
- [ ] **Strict Typing**: All functions have explicit return types (`JSX.Element`)
- [ ] **No Any Types**: Explicit typing for all variables and props
- [ ] **State Typing**: Proper typing for useState and useRef
  ```typescript
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  ```
- [ ] **Event Handlers**: Properly typed event handlers
  ```typescript
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { };
  ```

### Image Optimization
- [ ] **Next.js Image**: All images use the Next.js `Image` component
- [ ] **Priority Loading**: Hero/above-fold images have the `priority` prop
- [ ] **Responsive Sizing**: Proper `className` for responsive image sizing
- [ ] **Alt Text**: Descriptive alt text on all images
- [ ] **WebP Format**: Uses `.webp` format

### Responsive Design (Mobile-First)
- [ ] **Breakpoint Usage**:
  - Base: Mobile styles
  - `md:` 768px+ (tablet)
  - `lg:` 1024px+ (desktop)
  - `xl:` 1280px+ (large desktop)
- [ ] **Container Constraints**: `max-w-7xl` for content

### Performance
- [ ] **Effect Cleanup**: All `useEffect` hooks have proper cleanup functions
- [ ] **Image Loading**: Critical images have the `priority` prop
- [ ] **Dynamic Imports**: Heavy components lazy loaded

### Accessibility (WCAG)
- [ ] **Semantic HTML**: Uses proper `<section>`, `<nav>`, `<main>` elements
- [ ] **Alt Text**: All images have descriptive alt attributes
- [ ] **Focus Management**: Interactive elements are keyboard accessible
- [ ] **ARIA Labels**: Custom controls have proper ARIA attributes
- [ ] **Color Contrast**: Text meets WCAG AA standards

### SEO & Metadata
- [ ] **Page Metadata**: Every page has unique metadata
- [ ] **Open Graph**: Complete OG tags
- [ ] **Structured Data**: JSON-LD schema markup
- [ ] **Image Meta**: Social sharing images properly configured

## Real Code Examples to Follow

### Component Structure Pattern
```typescript
"use client"; // For interactive components

import Image from 'next/image';
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
}

export function Component({ className }: ComponentProps): JSX.Element {
  return (
    <section className={cn("relative w-full py-24 bg-appboard-dark", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  );
}
```

## Common Anti-Patterns to Avoid

### Styling Issues
- NO hardcoded colors -> USE Tailwind classes
- NO inline styles -> USE Tailwind classes or cn()
- NO string concatenation for classes -> USE cn() utility

### Component Issues
- NO missing `"use client"` for interactive components
- NO implicit return types -> USE explicit `: JSX.Element`
- NO missing cleanup in `useEffect` -> ALWAYS return cleanup function

### Performance Issues
- NO regular `<img>` tags -> USE Next.js `<Image>` component
- NO missing `priority` on hero images -> USE `priority` for above-fold content
- NO `any` types -> USE explicit typing

### Code Comment Policy

**IMPORTANT: NO UNNECESSARY COMMENTS**

- Code should be self-documenting through clear naming
- Only add comments for complex business logic or non-obvious behavior
- Never add obvious comments like `// Create button` or `// Set state`
- Prefer descriptive variable/function names over explanatory comments
