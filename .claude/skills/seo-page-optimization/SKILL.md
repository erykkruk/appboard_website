# SEO Page Optimization & CRO

Optimization of individual pages for on-page SEO and conversions (CRO). Run when the user talks about "optimize page", "improve conversions", "landing page optimization", "CRO", "page speed", "on-page SEO".

## Trigger

`/seo-page` or questions about optimizing a specific page.

## Page analysis framework

### 1. Value Proposition Clarity (highest impact)

The visitor must understand the offer within 5 seconds:
- [ ] Main headline communicates value (not a feature)
- [ ] Subheadline explains "how" and "for whom"
- [ ] Hero section has a clear CTA
- [ ] No jargon -- understandable for the target audience

**AppBoard homepage check:**
- Hero section -> is "Manage your App Store & Google Play listings with AI" immediately clear?
- CTA -> "Start Free" / "Get Started" visible above the fold?
- Value prop -> "AI-powered ASO platform" -- good, but is it concrete enough?
- Subheadline -> should address the pain point: "Stop managing listings manually. Let AI optimize your keywords, descriptions, and screenshots."

### 2. Heading & Copy Optimization

- [ ] H1 contains the primary keyword (1x per page)
- [ ] H2s contain secondary keywords
- [ ] Copy is benefit-focused (not feature-focused)
- [ ] Each section has a clear "so what?" for the reader
- [ ] Power words in headlines ("Optimize", "Boost", "Automate", "Grow")

**Copy patterns:**
```
Feature: "AI-powered keyword optimization"
Benefit: "Find the keywords that drive downloads — powered by AI"

Feature: "Multi-store listing management"
Benefit: "Manage App Store & Google Play from one dashboard — no more switching tabs"

Feature: "Screenshot management tool"
Benefit: "Design and organize screenshots for every device size in minutes"

Feature: "40+ locale support"
Benefit: "Reach global audiences with localized listings in 40+ languages"
```

### 3. CTA Optimization

- [ ] Primary CTA above the fold
- [ ] CTA text action-oriented ("Start Optimizing Free", "Try AppBoard Free")
- [ ] Color contrast of CTA vs background
- [ ] Repeated CTA every 2-3 sections (scroll depth)
- [ ] No competing CTAs (1 primary action per section)

### 4. Visual Hierarchy

- [ ] Eye path leads to the CTA
- [ ] Whitespace around key elements
- [ ] Text vs background contrast (WCAG AA minimum)
- [ ] Important info is not hidden below the fold
- [ ] Mobile: key elements visible without scrolling

### 5. Trust Signals

- [ ] Social proof (user count, apps managed, downloads optimized)
- [ ] Logos of clients / companies using AppBoard
- [ ] Testimonials with real names
- [ ] Security badges (SOC 2, data encryption)
- [ ] "Trusted by X developers" / "Managing Y apps"
- [ ] Integration badges (App Store Connect, Google Play Console)

### 6. Objection Handling

Common objections for AppBoard:
| Objection | How to address it |
|----------|--------------|
| "Does it work with my store?" | "Works with both App Store and Google Play" clearly on the page, with logos of both stores |
| "How is it different from AppTweak?" | Comparison page / section with concrete differences (AI-first, pricing, UX) |
| "Is my data safe?" | Security section: "Your App Store Connect and Google Play credentials are encrypted with AES-256-GCM" |
| "Does it support Google Play?" | "Full Google Play support" with a list of GP-specific features |
| "Is it free?" | "Free tier available — no credit card required" clearly near the CTA |
| "Will it mess up my listings?" | "Preview changes before publishing" + "Rollback anytime" |
| "Do I need technical knowledge?" | "No-code interface — designed for marketers and developers alike" |

### 7. Friction Points

- [ ] No unnecessary form fields (email + password enough for signup)
- [ ] Signup path: max 2 clicks to the dashboard
- [ ] No pop-ups blocking content
- [ ] Fast load time (< 3s)
- [ ] No broken links/images
- [ ] Free tier without requiring a credit card

## On-Page SEO Checklist

### Meta
- [ ] Title: 50-60 chars, primary keyword, brand
- [ ] Description: 150-160 chars, CTA, keyword
- [ ] Canonical URL set
- [ ] OG image 1200x630, descriptive alt

### Content
- [ ] Primary keyword in the first 100 words
- [ ] Keyword density 1-2% (naturally)
- [ ] LSI keywords (semantically related: ASO, app store, google play, keywords, listings, metadata)
- [ ] Internal links to related pages
- [ ] External links to authoritative sources (optional -- Apple docs, Google Play docs)

### Images
- [ ] All images have descriptive alt text
- [ ] WebP format
- [ ] Proper width/height (no CLS)
- [ ] Hero image `priority` + `fetchPriority="high"`

### Structure
- [ ] Semantic HTML (section, article, nav, main)
- [ ] Proper heading hierarchy
- [ ] Schema markup relevant
- [ ] Accessibility (ARIA labels, keyboard nav)

## Output Format

```markdown
## Page Optimization Report -- [URL]

### Score: [X/100]

### Value Proposition
- Current: "..."
- Recommended: "..."
- Reasoning: ...

### Quick Wins (< 1h effort)
1. [Change] -- [Expected impact]

### High-Impact Changes (> 1h effort)
1. [Change] -- [Expected impact] -- [Implementation notes]

### Copy Alternatives
| Current | Recommended | Rationale |
|---------|------------|-----------|
| "..." | "..." | ... |

### CTA Improvements
1. ...

### A/B Test Ideas
1. [Variant A vs B] -- [What it tests]
```

## Related skills

- `seo-audit` -- full technical audit
- `seo-content-strategy` -- content and keyword strategy
- `seo-ai-optimization` -- optimization for AI search
