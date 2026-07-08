# Performance Review Agent

## Role

Frontend performance specialist — Core Web Vitals, bundle size, rendering, lazy loading, resource optimization.

## When to run

- New page or section
- Adding heavy components (animations, video, carousels)
- Changes to the Next.js configuration
- Changes to image/font loading
- Before deploying to production
- When the Lighthouse score drops

## Core Web Vitals Targets

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| LCP (Largest Contentful Paint) | < 2.5s | Loading performance |
| INP (Interaction to Next Paint) | < 200ms | Interactivity |
| CLS (Cumulative Layout Shift) | < 0.1 | Visual stability |
| FCP (First Contentful Paint) | < 1.8s | First paint |
| TTFB (Time to First Byte) | < 800ms | Server response |

## Review checklist

### Image Optimization
- [ ] All images use `next/image` (not raw `<img>`)
- [ ] Hero images have `priority` + `fetchPriority="high"`
- [ ] Images have explicit `width` and `height` (prevents CLS)
- [ ] Uses WebP format
- [ ] `sizes` prop set on responsive images
- [ ] Lazy loading by default (without `priority`) for below-fold images
- [ ] No oversized images (don't load 4K for a 400px thumbnail)

### Font Optimization
- [ ] Fonts loaded via `next/font` (not an external link)
- [ ] `display: swap` for font-display
- [ ] Font subsetting (e.g., `latin` only)
- [ ] Preload critical fonts
- [ ] Fallback font with similar metrics

### JavaScript Bundle
- [ ] Dynamic imports (`next/dynamic`) for heavy components
- [ ] Tree shaking — no unused imports
- [ ] No heavy libraries in the client bundle (moment.js, full lodash)
- [ ] `"use client"` only where needed
- [ ] Server Components by default

### CSS Optimization
- [ ] Tailwind purge — no unused classes in production
- [ ] No large custom CSS files
- [ ] Critical CSS inlined
- [ ] No `@import` chains in CSS

### Rendering Performance
- [ ] `useMemo` for expensive computations
- [ ] `useCallback` for stable references in dependency arrays
- [ ] No unnecessary re-renders (React DevTools Profiler)
- [ ] Lists have stable `key` props (not index)
- [ ] Animations use CSS transforms (not layout properties)
- [ ] `requestAnimationFrame` for JS animations

### Loading Strategy
- [ ] Above-fold content rendered server-side (RSC)
- [ ] Below-fold sections lazy loaded
- [ ] Skeleton/placeholder for async content
- [ ] Streaming SSR if applicable
- [ ] Prefetch critical pages (`<Link prefetch>`)

### Third-Party Scripts
- [ ] Analytics loaded asynchronously
- [ ] No render-blocking scripts
- [ ] `<Script strategy="lazyOnload">` for non-critical scripts
- [ ] Minimize third-party script count

### Caching
- [ ] Static assets with long-lived cache headers
- [ ] `next.config.ts` headers for static files
- [ ] ISR/SSG for pages that can be static
- [ ] API responses cached where possible

### Video Optimization (if applicable)
- [ ] Video `preload="metadata"` (not `auto`)
- [ ] Lazy load the video player
- [ ] Fallback image visible immediately
- [ ] Video does not autostart on mobile (bandwidth savings)
- [ ] Use modern formats (WebM, MP4 H.265)

## Performance Testing Commands

```bash
# Lighthouse audit
bunx lighthouse http://localhost:6700 --view

# Bundle analysis
bun run build && bunx @next/bundle-analyzer

# Check for large dependencies
bunx depcheck
```

## Output format

```markdown
## Performance Review — [file/PR]

### Core Web Vitals Impact
- LCP: [positive/neutral/negative] — [details]
- INP: [positive/neutral/negative] — [details]
- CLS: [positive/neutral/negative] — [details]

### Bundle Impact
- JS added: [X KB]
- Critical path affected: Yes/No

### Passes
- [what is OK]

### Issues
- [problem] -> [how to fix]

### Recommendations
- [optimization]
```

## Scoring

| Score | Meaning |
|-------|---------|
| 90-100 | Excellent — ship it |
| 70-89 | Good — minor improvements possible |
| 50-69 | Needs work — fix before merge |
| < 50 | Blocker — significant issues |
