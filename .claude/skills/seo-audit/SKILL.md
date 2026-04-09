# SEO Audit

Kompleksowy audyt SEO strony AppBoard. Uruchamiaj gdy uzytkownik mowi o "audyt SEO", "technical SEO", "problemy z pozycjonowaniem", "ranking issues", "SEO check".

## Trigger

`/seo-audit` lub pytania o stan SEO strony.

## Workflow

### 1. Wstepna analiza

Zbierz kontekst przed audytem:
- Jaki zakres? (cala strona / konkretna podstrona)
- Czy sa znane problemy z indeksacja?
- Czy Google Search Console zglasza bledy?

### 2. Technical SEO Framework

#### Crawlability
- [ ] `robots.txt` poprawny -- sprawdz `src/app/robots.txt/route.ts`
- [ ] AI boty dozwolone (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) -- **KRYTYCZNE dla AI SEO**
- [ ] Sitemap XML kompletny -- sprawdz `src/app/sitemap.xml/route.ts`
- [ ] Wszystkie strony w sitemap (homepage, pricing, features, blog, legal + nowe)
- [ ] Architektura URL czysta (kebab-case, bez query params)
- [ ] Brak orphan pages (kazda strona ma link wewnetrzny)

#### Indexation
- [ ] Canonical URLs ustawione na kazdej stronie
- [ ] Brak duplikatow tytulow/opisow
- [ ] `noindex` tylko na stronach, ktore NIE powinny byc indeksowane (404, admin, dashboard)
- [ ] Middleware redirect www -> non-www dziala (`middleware.ts`)
- [ ] Trailing slashes usuwane (301)

#### Core Web Vitals
- [ ] LCP < 2.5s (sprawdz hero images, animations)
- [ ] INP < 200ms (sprawdz event handlers, animations)
- [ ] CLS < 0.1 (sprawdz Image width/height, font loading)
- [ ] Fonts preloaded z fallbackami (w `layout.tsx`)

#### Mobile & Security
- [ ] Viewport meta poprawny
- [ ] Responsive design (mobile-first Tailwind)
- [ ] HTTPS enforced (middleware)
- [ ] Security headers (HSTS, X-Frame-Options, X-Content-Type-Options w `next.config.js`)

### 3. On-Page SEO

#### Meta Tags
- [ ] Title 50-60 znakow, unikalne per strona
- [ ] Description 150-160 znakow z CTA
- [ ] Keywords odpowiednie (ASO, app store optimization, keyword tracking)
- [ ] Open Graph kompletne (type, locale, url, title, description, image 1200x630)
- [ ] Twitter Card `summary_large_image` z image

#### Heading Hierarchy
- [ ] Dokladnie 1x `<h1>` per strona
- [ ] Hierarchia h1 -> h2 -> h3 bez przeskokow
- [ ] Headingi zawieraja primary keywords naturalnie

#### Content Quality
- [ ] Unikalna tresc na kazdej stronie
- [ ] E-E-A-T sygnaly (Experience, Expertise, Authority, Trust)
- [ ] Statystyki ze zrodlami cytowanymi
- [ ] Swiezosc -- daty aktualizacji widoczne
- [ ] Alt text na wszystkich obrazach (opisowy, z keywords)

#### Internal Linking
- [ ] Breadcrumbs na podstronach
- [ ] Link do homepage z kazdej podstrony (logo/nav)
- [ ] Descriptive anchor text (nie "click here")
- [ ] Brak broken links

### 4. Structured Data (JSON-LD)

- [ ] Organization schema poprawny
- [ ] WebApplication / SoftwareApplication schema z cena i features
- [ ] FAQ schema na stronach z pytaniami
- [ ] BreadcrumbList schema na podstronach
- [ ] Product schema na stronie pricing (plany cenowe)
- [ ] Walidacja: Google Rich Results Test
- [ ] Brak duplikatow schema

### 5. AppBoard-Specific Checks

- [ ] Keywords ASO obecne w tresci (ASO tool, app store optimization, keyword tracking, listing management)
- [ ] Pricing page z przejrzystymi planami
- [ ] Feature pages z USP (AI-powered ASO, multi-store support, screenshot tools)
- [ ] Comparison pages vs konkurencja (AppTweak, Sensor Tower, AppFollow)
- [ ] Obrazy mockupow i screenshots zoptymalizowane (WebP, odpowiednie rozmiary)
- [ ] Demo/trial CTA widoczne na kazdej stronie

### 6. AI Visibility

- [ ] Tresc extractable -- kluczowe info w pierwszym akapicie
- [ ] Comparison tables tam, gdzie maja sens
- [ ] FAQ sections z naturalnymi pytaniami
- [ ] Brak gated content
- [ ] Schema markup pomaga AI zrozumiec tresc
- [ ] AI boty NIE zablokowane w robots.txt

## Output Format

```markdown
## SEO Audit Report -- [data]

### Wynik ogolny: [X/100]

### Krytyczne problemy
1. [Problem] -- [Wplyw] -- [Jak naprawic]

### Ostrzezenia
1. [Problem] -- [Wplyw] -- [Jak naprawic]

### Pozytywne
1. [Co dziala dobrze]

### Rekomendacje priorytetyzowane
| # | Dzialanie | Wplyw | Trudnosc | Priorytet |
|---|-----------|-------|----------|-----------|
| 1 | ... | Wysoki | Niski | P0 |
```

## Powiazane skille

- `seo-schema-markup` -- implementacja structured data
- `seo-ai-optimization` -- optymalizacja pod AI search
- `seo-technical` -- techniczne zmiany w kodzie
- `seo-content-strategy` -- strategia tresci i keywords
- `seo-page-optimization` -- optymalizacja konwersji i on-page
