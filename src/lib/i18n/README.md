# Internationalization

The site ships English and Polish. English lives at the root (`/pricing`), every
other locale lives under its prefix (`/pl/pricing`). English URLs are indexed and
must never move or redirect.

## The four moving parts

| File | Responsibility |
|------|----------------|
| `locales.ts` | The locale registry: codes, labels, `hreflang`, OG locale, path prefix. |
| `routes.ts` | Pairs every English path with its counterpart in each locale, and builds `hreflang` alternates from those pairs. |
| `dictionaries.ts` | Shared chrome copy: header nav, footer columns, CTAs, article layout labels. |
| `content/*.ts` | Per-surface page copy, keyed by locale (`home.ts`, `docs.ts`, `pricing.ts`, `faq.ts`, `opensource.ts`). |

Routes come in two kinds. **Mirrored** paths keep their slug and only gain the
prefix, which is every marketing and docs page. **Translated** paths have a
different slug per locale and are listed explicitly in `TRANSLATED_PATHS`; blog
articles are the only ones, because their slugs are per-market SEO targets.

`ROUTE_PAIRS` is the single source of truth for the sitemap, the language
switcher and the route-pairing test in `src/lib/content-registry.test.ts`. That
test fails the build if a registered path has no `page.tsx`, so the registry
cannot drift from the filesystem.

## Adding a locale

Say you are adding German.

1. **Registry.** Add `"de"` to `LOCALES` in `locales.ts` and a `de` entry to
   `LOCALE_CONFIG` (`hreflang: "de-DE"`, `ogLocale: "de_DE"`, `pathPrefix: "/de"`,
   `label: "Deutsch"`). The switcher, `buildAlternates`, and the sitemap pick it
   up automatically, and TypeScript will now flag every `Record<Locale, ...>` that
   is missing a German branch.
2. **Dictionary.** Add a `DE` object in `dictionaries.ts` and register it in the
   `CHROME` map. This localizes the header, footer and article chrome everywhere.
3. **Content.** Add a `de` key to each `content/*.ts` file, then create the page
   files under `src/app/de/...` mirroring the English routes.
4. **Translated slugs.** Only if German blog articles get their own slugs, add a
   `de` entry to the relevant `TRANSLATED_PATHS` records.

No other file needs changing. The sitemap, `hreflang` alternates, the switcher
and the tests all derive from the registry.

## Rules

- Pages pass `locale` explicitly to `Header`, `Footer` and every section. The
  default is always `DEFAULT_LOCALE`, so English pages render unchanged.
- Non-default locales set `lang` on the page's main element.
- Every page's canonical points at itself; `x-default` points at English.
- Product terms stay in English across locales: App Store, Google Play, ASO,
  listing, open source, self-hosting.
