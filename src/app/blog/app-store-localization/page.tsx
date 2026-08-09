import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { getArticle } from "@/lib/blog";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-store-localization";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "How to localize your app store listing: how many languages each store supports, which markets pay back first, per-locale keyword rules, and the mistakes that waste budget.",
  path: `/blog/${SLUG}`,
  title: "App localization in 2026: which markets are worth it",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "App Store Connect supports 50 languages for app metadata. Google Play supports 103 languages for store listing translations. The figures of 30, 39, 40, 51 and 77 that circulate in older articles are either outdated or read off the wrong Google table, which lists app-level supported languages rather than store listing translations.",
    question: "How many languages do the App Store and Google Play support?",
  },
  {
    answer:
      "On the App Store, users see the next most relevant localization you have published, and if none applies they see your primary language. On Google Play, users see an automated Google Translate version of your listing with a banner explaining it was machine translated, plus an option to view your default language instead. Neither fallback ranks you for local keywords.",
    question: "What happens if I do not translate my listing into a language?",
  },
  {
    answer:
      "Yes. On the App Store, the 100 character keyword field is per localization, and keywords indexed in one localization do not combine with keywords in another to form phrases. A term in your English keyword field and a term in your Spanish field will not produce a ranking for the two words used together. Google Play has no keyword field at all; it extracts terms from your title, short description and full description.",
    question: "Are App Store keywords per language?",
  },
  {
    answer:
      "No. Translating your existing keyword list gives you grammatically correct phrases that nobody searches for. Build a new keyword list per market from what local users actually type, using local competitor listings, local review language and Apple Ads Search Match data from that storefront.",
    question: "Should I translate my keywords?",
  },
  {
    answer:
      "Start with what your analytics already tell you. Look at which storefronts already send you installs without any localization, and localize those first, because you have proven demand there. After that, the split matters: India, Brazil and Indonesia lead on download volume, while the United States, Japan, China, Germany, the United Kingdom and Korea lead on in-app purchase revenue. Which set you pick depends entirely on whether you monetize by scale or by spend per user.",
    question: "Which languages should I localize first?",
  },
  {
    answer:
      "It is a reasonable first draft and a poor final one. Machine translation does not know your product vocabulary, does not know which brand terms must stay in English, and does not know which local phrase your category actually uses for your feature. Use it to produce a draft, then have a native speaker or a specialist review it before it goes live, particularly for the title and subtitle.",
    question: "Can I use machine translation for my app store listing?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <JsonLd data={buildFaqSchema(`/blog/${SLUG}`, FAQ)} />
      <p>
        App store localization gets written about by two groups who never talk to
        each other. Translation platforms explain resource files, plurals and
        pseudolocalization, then treat the store listing as a closing paragraph.
        ASO tools explain keyword localization and never mention that your app
        also contains strings. This piece covers the store half properly, because
        that is the half you can ship this week without touching code.
      </p>
      <p>
        It is also the half where the published advice is factually wrong most
        often. Nearly every guide currently ranking states a language count for
        one or both stores that is out of date, and several quote a 2012 study as
        if it were current data.
      </p>

      <h2>Three words people use interchangeably</h2>
      <ul>
        <li>
          <strong>Internationalization</strong> is the engineering work that
          makes localization possible: strings out of the code, no hardcoded date
          or currency formats, layouts that survive German text being roughly a
          third longer than English.
        </li>
        <li>
          <strong>Translation</strong> converts text from one language to
          another.
        </li>
        <li>
          <strong>Localization</strong> adapts the whole experience to a market:
          the copy, the screenshots, the examples, the pricing, and critically
          for ASO, the keywords, which are not a translation of your English ones.
        </li>
      </ul>
      <p>
        Store localization can be done entirely without internationalizing the
        app. An English-only app with a properly localized Spanish listing will
        outperform the same app with an English listing in Spanish-speaking
        storefronts. Start there, because it is cheap and reversible.
      </p>

      <h2>How many languages each store supports</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Listing languages</td>
            <td>50</td>
            <td>103</td>
          </tr>
          <tr>
            <td>Dedicated keyword field</td>
            <td>Yes, 100 characters per locale</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>30 characters</td>
            <td>30 characters</td>
          </tr>
          <tr>
            <td>Subtitle or short description</td>
            <td>30 characters (subtitle)</td>
            <td>80 characters (short description)</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>4,000 characters</td>
            <td>4,000 characters</td>
          </tr>
          <tr>
            <td>Fallback when a language is missing</td>
            <td>Next relevant localization, then primary language</td>
            <td>Machine translation banner, or default language</td>
          </tr>
          <tr>
            <td>Region targeting beyond language</td>
            <td>Custom Product Pages</td>
            <td>Custom Store Listings</td>
          </tr>
        </tbody>
      </table>
      <p>
        One detail with real strategic value: Google states that its character
        limits count full-width and half-width characters the same. A Japanese or
        Chinese character costs one of your 30 title characters, exactly like a
        Latin letter, so a CJK title can carry far more meaning than an English
        one in the same budget.
      </p>

      <h2>What your listing looks like in a market you skipped</h2>
      <p>
        The two stores behave completely differently here, and it changes how
        aggressively you should localize each.
      </p>
      <p>
        <strong>Apple</strong> falls back in two steps. If a user&apos;s language
        does not match any of your localizations, Apple shows the next most
        relevant one, and failing that, your primary language. A French
        localization therefore serves users in every storefront where the App
        Store supports French, not only France. Delete a localization later and
        those storefronts revert to your primary language.
      </p>
      <p>
        <strong>Google</strong> does not fall back to a related language. It
        offers the user a machine-translated version of your listing with a
        visible banner saying so, or the default language, which is English (US)
        unless you changed it. Google also offers free machine translation into
        ten languages inside the Play Console, with an explicit warning that no
        human reviewed the output.
      </p>
      <p>
        Neither fallback earns you a single keyword ranking in that market. A
        machine-translated listing is a courtesy to a user who already found you.
        It is not discovery.
      </p>

      <h2>The keyword rule that decides your strategy</h2>
      <p>
        Apple indexes keywords per localization, and keywords do not combine
        across localizations. If &ldquo;bus&rdquo; sits in your English (US)
        keyword field and &ldquo;metro&rdquo; sits in your Spanish (Mexico)
        field, you can rank for each term in the US storefront, but you will not
        rank for the two words used together as a phrase.
      </p>
      <p>
        This matters because of how the App Store maps storefronts to languages.
        Apple publishes a table giving each country a default language plus
        additional supported languages, and terms in any of those localizations
        can be indexed in that storefront. The United States storefront, for
        example, supports English (US) as the default plus Arabic, Chinese
        (Simplified and Traditional), French, Korean, Portuguese (Brazil),
        Russian, Spanish (Mexico) and Vietnamese.
      </p>
      <p>
        The practical consequence: filling in additional locales multiplies your
        indexable keyword budget in a storefront you already sell in, without
        translating a single screenshot. That is a real and underused tactic. Two
        caveats keep it honest. First, this indexing behaviour has been observed
        by practitioners through controlled testing rather than documented by
        Apple, so it can change. Second, repeating the same word across your
        title, subtitle and keyword field, or across a primary and secondary
        locale, wastes budget; the union is what gets indexed, so every duplicate
        is a character you spent twice.
      </p>

      <h2>Choosing which markets to do first</h2>
      <p>
        The instinct is to sort by population. The better sort is by proven
        demand and by monetization fit, because the download-leading markets and
        the revenue-leading markets are different sets of countries.
      </p>
      <p>
        India, Brazil and Indonesia dominate install volume. The United States,
        Japan, China, Germany, the United Kingdom and Korea dominate in-app
        purchase revenue, with the US alone a large multiple of any single
        European market. If you monetize with ads at scale, the first group is
        your list. If you monetize with subscriptions, the second is.
      </p>
      <p>Score each candidate market on five things before committing:</p>
      <ol>
        <li>
          <strong>Existing organic installs</strong> from that storefront with no
          localization at all. This is your only piece of real evidence and it
          should dominate the decision.
        </li>
        <li>
          <strong>Category revenue</strong> in that market for apps like yours,
          not for apps in general.
        </li>
        <li>
          <strong>Competitive density</strong>. A market where the top ten
          listings are already properly localized is a market where localization
          is table stakes, not an edge.
        </li>
        <li>
          <strong>Total cost per locale</strong>, including screenshots, not just
          words of text.
        </li>
        <li>
          <strong>Ongoing maintenance</strong>. Every locale you add is a locale
          that goes stale on your next feature release.
        </li>
      </ol>
      <p>
        A realistic honest note on cost: budgeting roughly a few hundred dollars
        per locale for a proper text pass, plus screenshot production, plus
        native review, is a reasonable planning figure. The recurring cost is
        larger than the launch cost over a year, and almost nobody plans for it.
      </p>

      <h2>A workflow that survives the tenth language</h2>
      <ol>
        <li>
          <strong>Pick a pilot pair.</strong> Two markets, chosen on the evidence
          above. Not eight.
        </li>
        <li>
          <strong>Rebuild the keyword list locally.</strong> Read the top local
          competitors&apos; titles and subtitles, read local reviews for the
          words users actually use, and run a small Apple Ads campaign in that
          storefront to see which real search terms Apple matches you to. Our{" "}
          <Link href="/blog/keyword-research-for-apps">
            keyword research workflow
          </Link>{" "}
          works the same way in any language.
        </li>
        <li>
          <strong>Write the title and subtitle first, natively.</strong> These
          are 30 characters each and carry most of the ranking and most of the
          first impression. They deserve a human, not a draft.
        </li>
        <li>
          <strong>Draft the description with AI, then have it reviewed.</strong>{" "}
          The description is long, low-risk and where machine assistance pays
          off.
        </li>
        <li>
          <strong>Localize the screenshots.</strong> If captions are baked into
          images, and they are, this is the expensive step. Sizes and per-locale
          set counts are in our{" "}
          <Link href="/blog/app-store-screenshot-sizes">
            screenshot sizes guide
          </Link>
          .
        </li>
        <li>
          <strong>Publish, then wait.</strong> Indexing takes days, not hours,
          and comparing week one against week zero will tell you nothing.
        </li>
        <li>
          <strong>Measure per country, never in aggregate.</strong> A blended
          conversion rate hides the entire result.
        </li>
      </ol>

      <h2>Where AI translation genuinely helps</h2>
      <p>
        Machine translation is now good enough for a first pass on long-form
        copy, and bad enough on short copy that shipping it unreviewed is
        visible. The difference between useful and useless output is almost
        entirely context.
      </p>
      <p>Three things to give any translation step, human or machine:</p>
      <ul>
        <li>
          <strong>A do-not-translate list.</strong> Your product name, feature
          names you have branded, integration names, and any term your users
          already search for in English. Without this, your brand gets translated
          into a word nobody searches.
        </li>
        <li>
          <strong>The ASO constraint.</strong> A title has 30 characters. A
          translation that is faithful and 42 characters long is unusable. State
          the limit as part of the task.
        </li>
        <li>
          <strong>The category vocabulary.</strong> The local word for your
          feature is often not the translation of your word for it. This is the
          single biggest cause of a perfectly grammatical listing that nobody
          finds.
        </li>
      </ul>
      <p>
        In AppBoard the assistant runs on your own OpenRouter key and drafts
        translated metadata per language directly into the listing editor, where
        it lands as a draft. Nothing reaches either store until you review and
        publish it, and the change history records what changed per field per
        language so you can roll a bad translation back. That review gate is the
        point, not a limitation.
      </p>

      <h2>The mistakes that cost the most</h2>
      <ul>
        <li>
          <strong>Translating keywords instead of researching them.</strong> The
          most expensive mistake on this list, and the most common.
        </li>
        <li>
          <strong>Reusing one locale for a related one.</strong> Portuguese
          (Brazil) is not Portuguese (Portugal), and Spanish (Mexico) is not
          Spanish (Spain). Users notice immediately.
        </li>
        <li>
          <strong>Localizing text and leaving screenshots in English.</strong>{" "}
          The screenshots are what people actually look at.
        </li>
        <li>
          <strong>Repeating words across title, subtitle and keyword field.</strong>{" "}
          Pure waste of a 160 character budget.
        </li>
        <li>
          <strong>Shipping the Play Console machine translation as final.</strong>{" "}
          Google itself warns that no human reviewed it.
        </li>
        <li>
          <strong>Adding twelve locales and never touching them again.</strong>{" "}
          Stale localizations describe a version of your app that no longer
          exists.
        </li>
        <li>
          <strong>Measuring in aggregate.</strong> If you cannot see conversion
          per storefront, you cannot tell which localizations worked.
        </li>
      </ul>

      <h2>The maintenance loop nobody writes about</h2>
      <p>
        Launching a localization is a project. Keeping twelve of them current is
        an operation, and it is the part that quietly fails. Ship a feature,
        update the English description, and eleven listings now describe an older
        product. Six months later nobody remembers which locales are current.
      </p>
      <p>
        Whatever tooling you use, you need to be able to answer one question at
        any moment: which language versions differ from what is live, and in
        which fields? That is a diff, and treating listing copy like code, with a
        draft state, a visible diff against what is published, and a history you
        can roll back, is what makes ten locales maintainable instead of
        theoretical. It is the reason AppBoard versions listings that way.
      </p>
      <p>
        Before you add a language, make sure the base listing is worth
        translating. Our{" "}
        <Link href="/blog/how-to-write-app-store-descriptions">
          guide to writing app store descriptions
        </Link>{" "}
        covers the structure that should exist in English before you multiply it
        by ten.
      </p>

      <h2>Frequently asked questions</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        If you want to see per-language listing editing, diffs and publishing
        without setting anything up, AppBoard is{" "}
        <Link href="/pricing">free while it is in beta</Link>.
      </p>
    </ArticleLayout>
  );
}
