# SEO Technical Implementation

Techniczne zmiany w kodzie Next.js pod katem SEO. Uruchamiaj gdy trzeba zaimplementowac konkretne zmiany techniczne SEO w kodzie.

## Trigger

`/seo-tech` lub konkretne zadania implementacyjne: "dodaj sitemap", "popraw robots.txt", "dodaj schema", "zoptymalizuj meta tagi", "popraw Core Web Vitals".

## Architektura SEO w projekcie

```
src/
├── app/
│   ├── layout.tsx              <- Root metadata + JSON-LD schema
│   ├── page.tsx                <- Homepage metadata
│   ├── robots.txt/route.ts     <- Dynamic robots.txt
│   ├── sitemap.xml/route.ts    <- Dynamic XML sitemap
│   ├── pricing/page.tsx        <- Pricing page metadata
│   ├── features/page.tsx       <- Features page metadata
│   ├── blog/                   <- Blog pages metadata
│   ├── privacy-policy/page.tsx <- Page metadata
│   └── terms-of-use/page.tsx   <- Page metadata
├── lib/
│   ├── seo.ts                  <- SEO utility functions
│   └── schema.ts               <- [DO STWORZENIA] Schema generators
├── middleware.ts                <- URL canonicalization, HTTPS redirect
└── next.config.js              <- Headers, caching, security
```

## Implementacja patterns

### 1. Metadata per strona (Next.js Metadata API)

```typescript
// Kazda page.tsx eksportuje metadata
export const metadata: Metadata = {
  title: "Page Title -- AppBoard",
  description: "150-160 char description with ASO keywords",
  alternates: {
    canonical: "https://appboard.app/page-slug",
  },
  openGraph: {
    title: "Page Title -- AppBoard",
    description: "OG description",
    url: "https://appboard.app/page-slug",
    images: [{ url: "/images/og-page.webp", width: 1200, height: 630, alt: "..." }],
  },
  robots: getRobotsConfig(),
};
```

### 2. Schema helpers (src/lib/schema.ts)

Stworz centralne generatory schema:

```typescript
import { Organization, WebApplication, FAQPage, BreadcrumbList, WebSite, Product } from "schema-dts";

const BASE_URL = "https://appboard.app";

export function generateOrganizationSchema(): Organization {
  return {
    "@type": "Organization",
    name: "AppBoard",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.svg`,
    description: "AI-powered ASO platform for App Store & Google Play optimization",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@appboard.app",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://twitter.com/appboard",
      "https://github.com/appboard",
    ],
  };
}

export function generateAppSchema(): WebApplication {
  return {
    "@type": "WebApplication",
    name: "AppBoard",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "AI-powered ASO platform for managing App Store & Google Play listings, keywords, and screenshots",
    featureList: [
      "AI-powered keyword optimization",
      "App Store & Google Play listing management",
      "Screenshot management and optimization",
      "Multi-locale metadata management",
      "Keyword tracking and ranking",
      "AI-generated app descriptions and keywords",
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "99",
      priceCurrency: "USD",
      offerCount: "3",
    },
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductSchema(plans: { name: string; price: string; description: string }[]) {
  return {
    "@type": "Product",
    name: "AppBoard",
    brand: { "@type": "Brand", name: "AppBoard" },
    description: "AI-powered ASO platform for App Store & Google Play optimization",
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: plan.description,
    })),
  };
}

export function generateGraphSchema(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
```

### 3. Sitemap rozszerzony

Kazda nowa strona musi byc dodana do `src/app/sitemap.xml/route.ts`:

```typescript
const sitemap = [
  { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${baseUrl}/features`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  // Dodawaj tu kazda nowa strone
];
```

### 4. Robots.txt z AI botami

Upewnij sie, ze `robots.txt` NIE blokuje AI crawlerow. Przy zmianach pamietaj:

```
# AI bots -- NIGDY nie blokuj (chcemy byc cytowani)
# GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended
```

### 5. Image optimization

```typescript
import Image from "next/image";

// Hero images -- priority + fetchPriority
<Image src="/images/hero.webp" alt="AppBoard ASO dashboard with keyword tracking" width={1200} height={630} priority fetchPriority="high" />

// Below fold -- lazy loading (default)
<Image src="/images/feature.webp" alt="AppBoard screenshot management tool" width={600} height={400} sizes="(max-width: 768px) 100vw, 50vw" />
```

### 6. Performance checklist

- [ ] Font preload w layout.tsx
- [ ] `next/image` zamiast `<img>` wszedzie
- [ ] `priority` na hero images
- [ ] Dynamic imports dla ciezkich komponentow
- [ ] Compression enabled w next.config.js
- [ ] Cache headers na assets (1 year immutable)

### 7. Nowe strony -- template

Przy tworzeniu nowej strony:

```typescript
// 1. Metadata
export const metadata: Metadata = { ... };

// 2. Schema (jesli relevant)
const schemaData = generateGraphSchema(
  generateOrganizationSchema(),
  generateBreadcrumbSchema([...])
);

// 3. Component
export default function NewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <main>...</main>
    </>
  );
}

// 4. Dodaj do sitemap.xml/route.ts
// 5. Dodaj internal link z homepage/nav
```

## Pliki do modyfikacji (czeste)

| Plik | Kiedy |
|------|-------|
| `src/app/layout.tsx` | Globalny schema, metadata template, fonts |
| `src/app/page.tsx` | Homepage metadata, homepage schema |
| `src/app/sitemap.xml/route.ts` | Nowa strona -> dodaj URL |
| `src/app/robots.txt/route.ts` | Nowa blokowana/dozwolona sciezka |
| `src/lib/seo.ts` | Nowe SEO utility functions |
| `src/lib/schema.ts` | Nowe schema generators |
| `middleware.ts` | URL redirects, canonicalization |
| `next.config.js` | Headers, caching, image config |

## Powiazane skille

- `seo-audit` -- co trzeba naprawic
- `seo-schema-markup` -- szczegoly schema implementation
- `seo-content-strategy` -- jakie metadata i tresc
