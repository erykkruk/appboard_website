# SEO Page Optimization & CRO

Optymalizacja poszczegolnych stron pod SEO on-page i konwersje (CRO). Uruchamiaj gdy uzytkownik mowi o "optymalizuj strone", "popraw konwersje", "landing page optimization", "CRO", "page speed", "on-page SEO".

## Trigger

`/seo-page` lub pytania o optymalizacje konkretnej strony.

## Framework analizy strony

### 1. Value Proposition Clarity (najwyzszy wplyw)

Odwiedzajacy musi zrozumiec oferte w ciagu 5 sekund:
- [ ] Glowny headline komunikuje wartosc (nie feature)
- [ ] Subheadline wyjasnia "jak" i "dla kogo"
- [ ] Hero section ma jasny CTA
- [ ] Brak jargonu -- zrozumialy dla target audience

**AppBoard homepage check:**
- Hero section -> czy "Manage your App Store & Google Play listings with AI" jest natychmiast jasne?
- CTA -> "Start Free" / "Get Started" widoczne above the fold?
- Value prop -> "AI-powered ASO platform" -- dobrze, ale czy wystarczajaco konkretne?
- Subheadline -> powinien adresowac pain point: "Stop managing listings manually. Let AI optimize your keywords, descriptions, and screenshots."

### 2. Heading & Copy Optimization

- [ ] H1 zawiera primary keyword (1x per page)
- [ ] H2s zawieraja secondary keywords
- [ ] Copy jest benefit-focused (nie feature-focused)
- [ ] Kazda sekcja ma jasny "so what?" for the reader
- [ ] Power words w headlines ("Optimize", "Boost", "Automate", "Grow")

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
- [ ] Kontrast kolorystyczny CTA vs tlo
- [ ] Powtorzony CTA co 2-3 sekcje (scroll depth)
- [ ] Brak competing CTAs (1 primary action per section)

### 4. Visual Hierarchy

- [ ] Eye path prowadzi do CTA
- [ ] Whitespace wokol kluczowych elementow
- [ ] Kontrast tekstu vs tlo (WCAG AA minimum)
- [ ] Wazne info nie jest ukryte ponizej fold
- [ ] Mobile: kluczowe elementy widoczne bez scrollowania

### 5. Trust Signals

- [ ] Social proof (user count, apps managed, downloads optimized)
- [ ] Logos klientow / firm korzystajacych z AppBoard
- [ ] Testimonials z real names
- [ ] Security badges (SOC 2, data encryption)
- [ ] "Trusted by X developers" / "Managing Y apps"
- [ ] Integration badges (App Store Connect, Google Play Console)

### 6. Objection Handling

Typowe obiekcje dla AppBoard:
| Obiekcja | Jak adresowac |
|----------|--------------|
| "Does it work with my store?" | "Works with both App Store and Google Play" jasno na stronie, z logo obu sklepow |
| "How is it different from AppTweak?" | Comparison page / section z konkretnymi roznicami (AI-first, pricing, UX) |
| "Is my data safe?" | Security section: "Your App Store Connect and Google Play credentials are encrypted with AES-256-GCM" |
| "Does it support Google Play?" | "Full Google Play support" z lista features specyficznych dla GP |
| "Is it free?" | "Free tier available — no credit card required" jasno przy CTA |
| "Will it mess up my listings?" | "Preview changes before publishing" + "Rollback anytime" |
| "Do I need technical knowledge?" | "No-code interface — designed for marketers and developers alike" |

### 7. Friction Points

- [ ] Brak unnecessary form fields (email + password enough for signup)
- [ ] Signup path: max 2 kliki do dashboard
- [ ] Brak pop-ups blokujacych content
- [ ] Fast load time (< 3s)
- [ ] Brak broken links/images
- [ ] Free tier bez wymagania karty kredytowej

## On-Page SEO Checklist

### Meta
- [ ] Title: 50-60 chars, primary keyword, brand
- [ ] Description: 150-160 chars, CTA, keyword
- [ ] Canonical URL set
- [ ] OG image 1200x630, descriptive alt

### Content
- [ ] Primary keyword w pierwszych 100 slowach
- [ ] Keyword density 1-2% (naturalnie)
- [ ] LSI keywords (semantycznie powiazane: ASO, app store, google play, keywords, listings, metadata)
- [ ] Internal links do powiazanych stron
- [ ] External links do autorytatywnych zrodel (opcjonalnie -- Apple docs, Google Play docs)

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

## Powiazane skille

- `seo-audit` -- pelny audyt techniczny
- `seo-content-strategy` -- strategia tresci i keywords
- `seo-ai-optimization` -- optymalizacja pod AI search
