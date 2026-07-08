# SEO Content Strategy

Content strategy and keyword research for AppBoard. Run when the user mentions "keyword research", "content strategy", "which keywords to rank for", "content plan", "blog strategy", "SEO content".

## Trigger

`/seo-content` or questions about content strategy, keywords, ranking.

## Keyword research process

### 1. Seed keyword identification

AppBoard operates in the following niches:
- **ASO Tools** -- ASO tool, app store optimization tool, ASO platform, ASO software
- **App Store Optimization** -- app store optimization, keyword optimization, app listing optimization
- **Keyword Tracking** -- app keyword tracking, app store keywords, keyword research app
- **Listing Management** -- app listing management, app metadata management, app description generator
- **Screenshot Tools** -- app screenshot tool, app store screenshots, screenshot optimization
- **Multi-Store** -- manage app store and google play, cross-platform ASO, multi-store management
- **AI + ASO** -- AI ASO tool, AI app optimization, AI keyword suggestions, AI app descriptions

### 2. Keyword expansion

For each seed keyword, expand with:
- **Long-tail** -- "best AI ASO tool for indie developers 2026"
- **Question-based** -- "how to optimize app store listing"
- **Comparison** -- "appboard vs apptweak", "best ASO tools compared"
- **Feature-specific** -- "AI keyword generator for apps", "app screenshot management tool"
- **Intent-based:**
  - Informational: "what is app store optimization"
  - Navigational: "appboard login", "appboard pricing"
  - Commercial: "best ASO tool for startups"
  - Transactional: "sign up for ASO tool", "free ASO platform"

### 3. Prioritization

| Criterion | Weight |
|-----------|--------|
| Search volume | 25% |
| Difficulty (competition) | 25% |
| Business relevance | 30% |
| AI citability potential | 20% |

### 4. Content mapping

Each keyword cluster -> a specific page/section:

| Cluster | Target Page | Content Type |
|---------|-------------|-------------|
| "ASO tool" / "ASO platform" | Homepage hero | Product description |
| "app store optimization" | Features page | Feature showcase |
| "appboard vs apptweak" | Comparison page | Comparison table |
| "how to optimize app listing" | Blog / Guide | Educational content |
| "app keyword tracking" | Keywords feature page | Feature deep-dive |
| "app screenshot management" | Screenshots feature page | Feature deep-dive |
| "AI app description generator" | AI features page | Feature showcase |
| "ASO tool pricing" | Pricing page | Pricing comparison |
| "best ASO tools 2026" | Blog / Listicle | Listicle + comparison |

## Content Types for AppBoard

### 1. Product Pages (priority P0)
- Homepage with keyword-rich copy
- Feature pages per functionality (Keywords, Listings, Screenshots, AI)
- Pricing page with a plan comparison

### 2. Comparison Content (priority P1)
- "AppBoard vs AppTweak" -- feature-by-feature comparison
- "AppBoard vs Sensor Tower" -- pricing & features
- "AppBoard vs AppFollow" -- listing management focus
- "Best ASO Tools 2026" -- comprehensive guide
- "Free ASO Tools Compared"

### 3. Educational Content (priority P1)
- "What is App Store Optimization (ASO)? Complete Guide"
- "How to Research App Store Keywords"
- "App Store Screenshot Best Practices"
- "Google Play Store Optimization Guide"
- "App Store vs Google Play: ASO Differences"
- "How AI is Changing App Store Optimization"

### 4. Use Case Pages (priority P2)
- "AppBoard for Indie Developers"
- "AppBoard for App Agencies"
- "AppBoard for Enterprise Apps"
- "AppBoard for Game Developers"

### 5. Resource Pages (priority P2)
- "ASO Glossary"
- "App Store Optimization Checklist"
- "ASO Metrics & KPIs Guide"
- "App Store Algorithm Updates"

## Content Guidelines for SEO

### Title optimization
- Format: "Primary Keyword -- Secondary Keyword | AppBoard"
- 50-60 characters
- Primary keyword at the beginning

### Meta description
- 150-160 characters
- Includes the primary keyword naturally
- CTA ("Start free", "Try now", "Optimize your app")
- Unique per page

### Heading structure
- H1: Primary keyword (1x per page)
- H2: Secondary keywords / topic clusters
- H3: Long-tail variations / subtopics

### Content body
- Primary keyword within the first 100 words
- Keyword density: 1-2% (naturally)
- LSI keywords (semantically related)
- Min. 300 words per page (homepage more)
- Internal links to related sections

### Image SEO
- Alt text: descriptive with keywords ("AppBoard ASO dashboard showing keyword tracking and app store listing optimization")
- Filename: kebab-case with keywords (`appboard-keyword-tracking-dashboard.webp`)
- WebP format, optimized sizes

## Research tools

When Claude does research for content strategy:
1. **WebSearch** -- check what ranks for the target keywords
2. **Competitor analysis** -- who ranks? what content do they have? (AppTweak, Sensor Tower, AppFollow)
3. **SERP features** -- which rich results appear? (FAQ, How-to, Video)
4. **AI Overviews** -- do AI answers exist? who is cited?

## Output Format

```markdown
## Keyword Research Report

### Primary Keywords
| Keyword | Est. Volume | Difficulty | Intent | Target Page |
|---------|------------|------------|--------|-------------|
| ... | ... | ... | ... | ... |

### Content Recommendations
1. [Content piece] -- [Target keyword] -- [Estimated impact]

### Quick Wins (Low difficulty, high relevance)
1. ...

### Long-term Plays (High difficulty, high volume)
1. ...
```

## Related skills

- `seo-audit` -- audit of the current SEO state
- `seo-ai-optimization` -- optimization for AI search
- `seo-page-optimization` -- on-page optimization
