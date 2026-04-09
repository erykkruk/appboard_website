# Code Review Agent

## Rola

Recenzuje jakosc kodu, naming, style, TypeScript patterns i zgodnosc z projektem.

## Kiedy uruchamiac

- Kazda zmiana w kodzie
- Nowy komponent lub strona
- Refactoring
- Przed mergem do main

## Checklist review

### Styling & Design
- [ ] **Tailwind Classes Only**: Kolory uzywaja Tailwind classes z AppBoard palette
- [ ] **AppBoard Color Palette via Tailwind**:
  - Dark background: `bg-appboard-dark`
  - Surface: `bg-appboard-surface`
  - Accent: `text-appboard-accent` / `bg-appboard-accent`
  - White text: `text-white`
  - Secondary text: `text-white/70`
- [ ] **NO Inline Styles**: Unikaj `style={{ }}` — uzywaj Tailwind classes
- [ ] **CN Utility**: Uzyj `cn()` utility dla conditional classes zamiast string concatenation
- [ ] **Responsive Classes**: Mobile-first approach z `md:`, `lg:`, `xl:` breakpoints
- [ ] **Container Patterns**: Uzyj `max-w-7xl mx-auto` dla standard content

### Component Architecture
- [ ] **Function Signatures**: Wszystkie komponenty zwracaja explicit `JSX.Element`
- [ ] **Client Components**: Interaktywne komponenty uzywaja `"use client"` directive
- [ ] **Barrel Exports**: Komponenty exportowane przez `index.ts` files
- [ ] **Sectional Architecture**:
  - Layout components w `/components/layout/`
  - Page sections w `/components/sections/`
  - Reusable UI w `/components/ui/`

### File Organization
- [ ] **Correct Folders**:
  - `src/app/` dla Next.js pages, layout, API routes
  - `src/components/layout/` dla Header, Footer
  - `src/components/sections/` dla page sections
  - `src/components/ui/` dla reusable UI components
  - `src/lib/` dla utilities
  - `src/types/` dla TypeScript definitions
- [ ] **Import Paths**: Uzywa `@/` dla absolute imports
- [ ] **Naming Convention**:
  - Files: `kebab-case.tsx` (hero-section.tsx)
  - Components: `PascalCase` (HeroSection)
  - Types: `PascalCase` (FeatureCardProps)

### TypeScript Standards
- [ ] **Strict Typing**: Wszystkie funkcje maja explicit return types (`JSX.Element`)
- [ ] **No Any Types**: Explicit typing dla wszystkich variables i props
- [ ] **State Typing**: Proper typing dla useState i useRef
  ```typescript
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  ```
- [ ] **Event Handlers**: Properly typed event handlers
  ```typescript
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { };
  ```

### Image Optimization
- [ ] **Next.js Image**: Wszystkie images uzywaja Next.js `Image` component
- [ ] **Priority Loading**: Hero/above-fold images maja `priority` prop
- [ ] **Responsive Sizing**: Proper `className` dla responsive image sizing
- [ ] **Alt Text**: Descriptive alt text na wszystkich images
- [ ] **WebP Format**: Uzywa `.webp` format

### Responsive Design (Mobile-First)
- [ ] **Breakpoint Usage**:
  - Base: Mobile styles
  - `md:` 768px+ (tablet)
  - `lg:` 1024px+ (desktop)
  - `xl:` 1280px+ (large desktop)
- [ ] **Container Constraints**: `max-w-7xl` dla content

### Performance
- [ ] **Effect Cleanup**: Wszystkie `useEffect` hooks maja proper cleanup functions
- [ ] **Image Loading**: Critical images maja `priority` prop
- [ ] **Dynamic Imports**: Heavy components lazy loaded

### Accessibility (WCAG)
- [ ] **Semantic HTML**: Uzywa proper `<section>`, `<nav>`, `<main>` elements
- [ ] **Alt Text**: Wszystkie images maja descriptive alt attributes
- [ ] **Focus Management**: Interactive elements sa keyboard accessible
- [ ] **ARIA Labels**: Custom controls maja proper ARIA attributes
- [ ] **Color Contrast**: Text meets WCAG AA standards

### SEO & Metadata
- [ ] **Page Metadata**: Kazda strona ma unikalne metadata
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
