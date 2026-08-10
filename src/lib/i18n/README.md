# Internationalization

The site ships English and Polish. English lives at the root (`/pricing`), every
other locale lives under its prefix (`/pl/pricing`). English URLs are indexed and
must never move or redirect.

## The four moving parts

| File | Responsibility |
|------|----------------|
| `locales.ts` | The locale registry: codes, labels, `hreflang`, OG locale, path prefix, and **scope**. |
| `routes.ts` | Pairs every English path with its counterpart in each locale, and builds `hreflang` alternates from those pairs. |
| `dictionaries.ts` | Shared chrome copy: header nav, footer columns, CTAs, article layout labels. |
| `content/*.ts` | Per-surface page copy, keyed by locale (`home.ts`, `docs.ts`, `pricing.ts`, `faq.ts`, `opensource.ts`). |

Routes come in two kinds. **Mirrored** paths keep their slug and only gain the
prefix, which is every marketing and docs page. **Translated** paths have a
different slug per locale and are listed explicitly in `TRANSLATED_PATHS`; blog
articles are the only ones, because their slugs are per-market SEO targets.

## Locale scope

Not every locale gets the whole site. Each locale declares a `scope`:

| Scope | Serves | Use it for |
|-------|--------|------------|
| `site` | Every page, marketing and blog | A market where we translate the product |
| `blog` | The blog and its articles only | A market where we publish articles but do not translate the product pages |

A `blog` locale is filtered out of `localesForPath`, so it never reaches the
sitemap, the `hreflang` alternates or the language switcher on a marketing page.
There is no way to emit a link to `/de/pricing` when German is blog-scoped. On
blog pages it behaves like any other locale, and `localeHome` sends it to its
blog index rather than a marketing homepage it does not have.

Article coverage is independent of scope. A locale appears on a specific article
only once that article's slug is registered in `TRANSLATED_PATHS`, so you can
register a market before writing its articles without advertising alternates to
pages that do not exist yet.

`ROUTE_PAIRS` is the single source of truth for the sitemap, the language
switcher and the route-pairing test in `src/lib/content-registry.test.ts`. That
test fails the build if a registered path has no `page.tsx`, so the registry
cannot drift from the filesystem.

## Adding a locale

Say you are adding German as a **blog-only** locale, which is the plan for German
and Spanish.

1. **Registry.** Add `"de"` to `LOCALES` in `locales.ts` and a `de` entry to
   `LOCALE_CONFIG` with `scope: "blog"` (`hreflang: "de-DE"`, `ogLocale: "de_DE"`,
   `pathPrefix: "/de"`, `label: "Deutsch"`). The switcher, `buildAlternates` and
   the sitemap pick it up automatically and confine it to the blog.
2. **Dictionary.** Add a `DE` object in `dictionaries.ts` and register it in the
   `CHROME` map. Only the blog nav entries matter for a blog-only locale, but the
   type requires the full object.
3. **Content.** Add `BLOG_ARTICLES_DE` and register it in `BLOG_ARTICLES_BY_LOCALE`
   in `src/lib/blog.ts`, then create `src/app/de/blog/page.tsx` and one page per
   article. The registry test fails until every registered path has a page, so
   you cannot half-ship a locale.
4. **Translated slugs.** Add a `de` entry to `TRANSLATED_PATHS` for each article
   that has a German counterpart. Articles without one simply advertise no German
   alternate.

For a **full-site** locale, use `scope: "site"` and additionally add a `de` key to
each `content/*.ts` file plus the page files under `src/app/de/...` mirroring the
English routes.

No other file needs changing. The sitemap, `hreflang` alternates, the switcher
and the tests all derive from the registry.

## Rules

- Pages pass `locale` explicitly to `Header`, `Footer` and every section. The
  default is always `DEFAULT_LOCALE`, so English pages render unchanged.
- Non-default locales set `lang` on the page's main element.
- Every page's canonical points at itself; `x-default` points at English.
- Product terms stay in English across locales: App Store, Google Play, ASO,
  listing, open source, self-hosting.
