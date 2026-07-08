# AI SEO -- Generative Engine Optimization (GEO/AEO)

Optimizing content for AI search engines -- Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini, Copilot. Goal: AppBoard content should be CITED as a source in AI answers.

## Trigger

`/seo-ai` or questions about "AI SEO", "GEO", "AEO", "AI Overviews", "optimize for ChatGPT", "AI citations", "AI visibility", "how to appear in AI answers".

## Why this matters

- AI Overviews appear in ~45% of Google searches
- AI Overviews reduce clicks to pages by up to 58%
- Optimized content is cited 3x more often
- Statistics and quotes increase visibility by 40%+

## How AI Search works

| Platform | How it selects sources |
|-----------|-------------------|
| **Google AI Overviews** | Strong correlation with traditional ranking |
| **ChatGPT** | Broader range, not just top-ranked |
| **Perplexity** | Favors authoritative, fresh, well-structured content |
| **Gemini** | Google index + Knowledge Graph |
| **Copilot** | Bing index + authoritative sources |
| **Claude** | Brave Search + training data |

## Three pillars of AI SEO

### Pillar 1: Structure -- extractable content

AI extracts fragments, not whole pages. Every key claim must work as a standalone.

**Content block patterns:**
- **Definition blocks** -- for "What is X?" (40-60 words, first paragraph)
- **Step-by-step blocks** -- for "How to X" (numbered lists)
- **Comparison tables** -- for "X vs Y" (tables > prose)
- **FAQ blocks** -- natural questions and answers
- **Statistic blocks** -- data with sources

**Structural rules:**
- Each section starts with a direct answer
- Key fragments 40-60 words (optimal for extraction)
- H2/H3 headings matched to search phrases
- Tables > prose for comparisons
- Numbered lists > paragraphs for processes

### Pillar 2: Authority -- citable content

Princeton GEO research (KDD 2024):

| Method | Visibility boost |
|--------|:-----------------:|
| Cite sources | +40% |
| Add statistics | +37% |
| Add expert quotes | +30% |
| Authoritative tone | +25% |
| Improve clarity | +20% |
| Technical terms | +18% |
| ~~Keyword stuffing~~ | **-10%** |

**For AppBoard specifically:**
- Cite research on the impact of ASO on app downloads and revenue
- Provide concrete numbers (e.g. "Support for 40+ locales", "Manage App Store & Google Play from one dashboard")
- Author expertise -- write from the position of an ASO and mobile growth expert
- Visible update dates ("Last updated: [date]")
- Comparisons with competitors backed by concrete data (AppTweak, Sensor Tower, AppFollow)

### Pillar 3: Presence -- be where AI looks

AI doesn't cite only your page -- it cites where you appear:
- **Wikipedia** (7.8% of ChatGPT citations)
- **Reddit** (1.8% of citations)
- **YouTube** (frequent citations in AI Overviews)
- **Product Hunt, G2, Capterra** (review sites)
- **GitHub** (for developer-oriented content)
- **Dev.to, Medium** (for technical articles)

**Actions for AppBoard:**
- Maintain a Product Hunt profile
- Create content on YouTube (ASO workflow demos, keyword research tutorials)
- Be active on Reddit r/iOSProgramming, r/androiddev, r/AppStoreOptimization
- Earn reviews on G2, Capterra, Product Hunt
- Publish case studies and ASO guides on the blog
- Share open-source tools or free ASO resources

## AI Bot Access -- CRITICAL

Check `robots.txt` to ensure these bots are NOT blocked:
- **GPTBot** + **ChatGPT-User** -- OpenAI
- **PerplexityBot** -- Perplexity
- **ClaudeBot** + **anthropic-ai** -- Anthropic
- **Google-Extended** -- Google Gemini/AI Overviews
- **Bingbot** -- Microsoft Copilot

AppBoard's robots.txt should NOT block these bots. Keep it that way.

## Content types AI cites most often

| Content type | Share of citations |
|------------|:--------------:|
| Comparisons (vs articles) | ~33% |
| Definitive guides | ~15% |
| Original data/research | ~12% |
| Best-of/listicles | ~10% |
| Product pages | ~10% |
| How-to guides | ~8% |

## Optimizing AppBoard content for AI

### Homepage
- Clear definition in the first paragraph: "AppBoard is an AI-powered ASO platform that helps developers optimize their App Store and Google Play listings..."
- Feature comparison table: AppBoard vs manual ASO vs other tools
- Statistics: "Support for App Store & Google Play", "40+ locales", "AI-generated descriptions & keywords"
- FAQ section with natural questions

### Feature Pages
- Specific metrics: "Generate optimized keywords in seconds", "Manage screenshots across all device sizes"
- Use case examples with concrete scenarios (indie dev, agency, enterprise)
- Pricing transparency with a plan comparison

### Comparison Pages (key for AI citations)
- "AppBoard vs AppTweak" -- detailed comparison of features and prices
- "AppBoard vs Sensor Tower" -- focus on availability and AI features
- "AppBoard vs AppFollow" -- focus on listing management
- "Best ASO Tools 2026" -- listicle with AppBoard at the top

### Blog/Content Pages
- 1 target query per post
- Definition in the first paragraph
- Original data or expert quotes
- "Last updated" visible
- Author bio with credentials

### Educational Content (ASO Guides)
- "What is ASO? Complete Guide"
- "How to Optimize App Store Listings"
- "App Store Keywords: Research & Strategy"
- "Google Play Store Optimization Best Practices"
- "Screenshot Optimization for Higher Conversions"

## Monitoring AI Visibility

### Tools
| Tool | Scope |
|-----------|--------|
| **Otterly AI** | ChatGPT, Perplexity, Google AI Overviews |
| **Peec AI** | Multi-platform monitoring |
| **ZipTie** | Brand mention + sentiment |

### DIY Monitoring (monthly)
1. Take the top 20 ASO-related phrases
2. Check them in ChatGPT, Perplexity, Google
3. Record: is AppBoard cited? Who is?
4. Track month over month

## Implementation checklist

- [ ] Make sure AI bots are NOT blocked in robots.txt
- [ ] Add a definition block in the hero section (40-60 words)
- [ ] Add an FAQ section with schema markup
- [ ] Add comparison tables (AppBoard vs competitors)
- [ ] Add statistics with sources
- [ ] Check freshness signals (update dates)
- [ ] Add proper schema markup (FAQPage, WebApplication)
- [ ] Create comparison pages vs AppTweak, Sensor Tower, AppFollow
- [ ] Set up monthly AI visibility monitoring

## Related skills

- `seo-audit` -- full SEO audit
- `seo-schema-markup` -- structured data helps AI understand content
- `seo-content-strategy` -- content strategy for creating citable content
