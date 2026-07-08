# Schema Markup

Implementation and optimization of structured data (JSON-LD) on the AppBoard website. Run when the user mentions "schema markup", "structured data", "JSON-LD", "rich snippets", "schema.org", "rich results", "knowledge panel".

## Trigger

`/seo-schema` or questions about structured data.

## Core Principles

1. **Accuracy First** -- the schema must reflect the actual content of the page
2. **JSON-LD format** -- Google recommends it, easier to maintain
3. **Validation** -- always test before deploying
4. **@graph pattern** -- combine multiple schema types on a single page

## Schema Types for AppBoard

### Currently to be implemented

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AppBoard",
  "description": "AI-powered App Store Optimization (ASO) platform for managing App Store & Google Play listings",
  "url": "https://appboard.app"
}
```

### Schema types to add

#### 1. Organization (homepage)
```json
{
  "@type": "Organization",
  "name": "AppBoard",
  "url": "https://appboard.app",
  "logo": "https://appboard.app/images/logo.svg",
  "description": "AI-powered ASO tool for App Store & Google Play optimization",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@appboard.app",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://twitter.com/appboard",
    "https://github.com/appboard"
  ]
}
```

#### 2. WebApplication / SoftwareApplication (product page)
```json
{
  "@type": "WebApplication",
  "name": "AppBoard",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered App Store Optimization platform. Manage listings, keywords, and screenshots for App Store and Google Play.",
  "featureList": [
    "AI-powered keyword optimization",
    "App Store & Google Play listing management",
    "Screenshot management and optimization",
    "Metadata management across locales",
    "Keyword tracking and ranking",
    "AI-generated app descriptions"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "99",
    "priceCurrency": "USD",
    "offerCount": "3"
  }
}
```

#### 3. FAQPage (homepage FAQ section, pricing page)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AppBoard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AppBoard is an AI-powered ASO (App Store Optimization) platform that helps developers manage and optimize their App Store and Google Play listings, keywords, screenshots, and metadata."
      }
    },
    {
      "@type": "Question",
      "name": "Does AppBoard support both App Store and Google Play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AppBoard supports both Apple App Store and Google Play Store, allowing you to manage listings across both platforms from a single dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AI optimization work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AppBoard uses AI to generate optimized app titles, descriptions, and keywords based on market analysis, competitor research, and best ASO practices."
      }
    }
  ]
}
```

#### 4. BreadcrumbList (on subpages)
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://appboard.app" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://appboard.app/pricing" }
  ]
}
```

#### 5. Product (pricing plans)
```json
{
  "@type": "Product",
  "name": "AppBoard Pro",
  "description": "Professional ASO platform with AI-powered optimization for App Store & Google Play",
  "brand": { "@type": "Brand", "name": "AppBoard" },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "Basic ASO features for individual developers"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "29",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      },
      "availability": "https://schema.org/InStock",
      "description": "Advanced ASO features with AI optimization"
    },
    {
      "@type": "Offer",
      "name": "Team",
      "price": "99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      },
      "availability": "https://schema.org/InStock",
      "description": "Full ASO suite for teams with multi-app management"
    }
  ]
}
```

## @graph Pattern -- combining multiple types

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "name": "AppBoard", "url": "https://appboard.app" },
    { "@type": "WebSite", "name": "AppBoard", "url": "https://appboard.app" },
    { "@type": "WebApplication", "name": "AppBoard", "applicationCategory": "BusinessApplication" },
    { "@type": "BreadcrumbList", "itemListElement": ["..."] }
  ]
}
```

## Implementation in Next.js

```typescript
// In layout.tsx or page.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schemaData),
  }}
/>
```

For dynamic pages, use a helper function:

```typescript
// src/lib/schema.ts
export function generateOrganizationSchema() { ... }
export function generateAppSchema() { ... }
export function generateFAQSchema(items: FAQItem[]) { ... }
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) { ... }
export function generateProductSchema(plans: PricingPlan[]) { ... }
```

## Validation

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console** -> Enhancements

## Implementation checklist

- [ ] Add Organization schema on the homepage
- [ ] Add WebApplication schema with features and pricing
- [ ] Add WebSite schema with potentialAction (search)
- [ ] Add FAQPage schema on pages with FAQs
- [ ] Add BreadcrumbList on subpages
- [ ] Add Product schema on the pricing page (with pricing plans)
- [ ] Validate every type in the Rich Results Test
- [ ] Remove fake/placeholder data -- it must be real

## Related skills

- `seo-audit` -- full SEO audit
- `seo-ai-optimization` -- schema helps AI extract information
- `seo-technical` -- technical code changes
