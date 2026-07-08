# SEO Audit

Comprehensive SEO audit of the AppBoard website. Run when the user mentions "SEO audit", "technical SEO", "ranking problems", "ranking issues", "SEO check".

## Trigger

`/seo-audit` or questions about the website's SEO state.

## Workflow

### 1. Initial analysis

Gather context before the audit:
- What scope? (whole site / a specific subpage)
- Are there known indexation problems?
- Is Google Search Console reporting errors?

### 2. Technical SEO Framework

#### Crawlability
- [ ] `robots.txt` correct -- check `src/app/robots.txt/route.ts`
- [ ] AI bots allowed (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) -- **CRITICAL for AI SEO**
- [ ] Sitemap XML complete -- check `src/app/sitemap.xml/route.ts`
- [ ] All pages in the sitemap (homepage, pricing, features, blog, legal + new ones)
- [ ] Clean URL architecture (kebab-case, no query params)
- [ ] No orphan pages (every page has an internal link)

#### Indexation
- [ ] Canonical URLs set on every page
- [ ] No duplicate titles/descriptions
- [ ] `noindex` only on pages that should NOT be indexed (404, admin, dashboard)
- [ ] Middleware redirect www -> non-www works (`middleware.ts`)
- [ ] Trailing slashes removed (301)

#### Core Web Vitals
- [ ] LCP < 2.5s (check hero images, animations)
- [ ] INP < 200ms (check event handlers, animations)
- [ ] CLS < 0.1 (check Image width/height, font loading)
- [ ] Fonts preloaded with fallbacks (in `layout.tsx`)

#### Mobile & Security
- [ ] Viewport meta correct
- [ ] Responsive design (mobile-first Tailwind)
- [ ] HTTPS enforced (middleware)
- [ ] Security headers (HSTS, X-Frame-Options, X-Content-Type-Options in `next.config.js`)

### 3. On-Page SEO

#### Meta Tags
- [ ] Title 50-60 characters, unique per page
- [ ] Description 150-160 characters with a CTA
- [ ] Appropriate keywords (ASO, app store optimization, keyword tracking)
- [ ] Open Graph complete (type, locale, url, title, description, image 1200x630)
- [ ] Twitter Card `summary_large_image` with image

#### Heading Hierarchy
- [ ] Exactly 1x `<h1>` per page
- [ ] Hierarchy h1 -> h2 -> h3 without skipping levels
- [ ] Headings include primary keywords naturally

#### Content Quality
- [ ] Unique content on every page
- [ ] E-E-A-T signals (Experience, Expertise, Authority, Trust)
- [ ] Statistics with cited sources
- [ ] Freshness -- update dates visible
- [ ] Alt text on all images (descriptive, with keywords)

#### Internal Linking
- [ ] Breadcrumbs on subpages
- [ ] Link to homepage from every subpage (logo/nav)
- [ ] Descriptive anchor text (not "click here")
- [ ] No broken links

### 4. Structured Data (JSON-LD)

- [ ] Organization schema correct
- [ ] WebApplication / SoftwareApplication schema with price and features
- [ ] FAQ schema on pages with questions
- [ ] BreadcrumbList schema on subpages
- [ ] Product schema on the pricing page (pricing plans)
- [ ] Validation: Google Rich Results Test
- [ ] No duplicate schema

### 5. AppBoard-Specific Checks

- [ ] ASO keywords present in the content (ASO tool, app store optimization, keyword tracking, listing management)
- [ ] Pricing page with clear plans
- [ ] Feature pages with USPs (AI-powered ASO, multi-store support, screenshot tools)
- [ ] Comparison pages vs competitors (AppTweak, Sensor Tower, AppFollow)
- [ ] Mockup and screenshot images optimized (WebP, appropriate sizes)
- [ ] Demo/trial CTA visible on every page

### 6. AI Visibility

- [ ] Content extractable -- key info in the first paragraph
- [ ] Comparison tables where they make sense
- [ ] FAQ sections with natural questions
- [ ] No gated content
- [ ] Schema markup helps AI understand the content
- [ ] AI bots NOT blocked in robots.txt

## Output Format

```markdown
## SEO Audit Report -- [date]

### Overall score: [X/100]

### Critical problems
1. [Problem] -- [Impact] -- [How to fix]

### Warnings
1. [Problem] -- [Impact] -- [How to fix]

### Positives
1. [What works well]

### Prioritized recommendations
| # | Action | Impact | Difficulty | Priority |
|---|--------|--------|------------|----------|
| 1 | ... | High | Low | P0 |
```

## Related skills

- `seo-schema-markup` -- structured data implementation
- `seo-ai-optimization` -- optimization for AI search
- `seo-technical` -- technical code changes
- `seo-content-strategy` -- content and keyword strategy
- `seo-page-optimization` -- conversion and on-page optimization
