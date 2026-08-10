import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
import { buildBlogAlternates, getArticle, getPlSlugForEn } from "@/lib/blog";
import { buildFaqSchema } from "@/lib/schema";
import { APP_URL, buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "best-aso-tools";
const PL_SLUG = getPlSlugForEn(SLUG) ?? "pozycjonowanie-aplikacji-mobilnych";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "A comparison of the best ASO tools in 2026 with prices checked against vendor pages: AppTweak, App Radar, Appfigures, Mobile Action, AppFollow, AppBoard and more.",
  languages: buildBlogAlternates(SLUG),
  locale: "en_US",
  path: `/blog/${SLUG}`,
  title: "The best ASO tools in 2026",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "For a solo developer with one app, Appfigures Connect at $9.99 per month and Mobile Action Lite at $15 per month are the cheapest paid entry points, and Astro is $9 per month billed annually if you are on macOS and iOS only. For a team that needs deep keyword data across both stores, AppTweak at $79 per month and App Radar at 69 euros per month are the usual shortlist. There is no single best ASO tool, only the cheapest tool that covers the jobs you actually do every week.",
    question: "What is the best ASO tool?",
  },
  {
    answer:
      "Yes, and for a first app they are often enough. App Store Connect, Google Play Console, Apple Ads Search Match and Google Keyword Planner cost nothing and give you real first-party data. Several paid tools also keep free tiers: ASOMobile allows 20 keywords on 2 apps, App Radar allows 10 keywords, and AppBoard is free while it is in beta. The limit you hit first is usually keyword history, not features.",
    question: "Are there free ASO tools that actually work?",
  },
  {
    answer:
      "Published entry prices in 2026 run from about $9.99 per month to about $79 per month, mid tiers land between $150 and $500 per month, and enterprise platforms such as Sensor Tower are quote-only annual contracts. The number that matters is not the entry price but the tier you get pushed into once your keyword list grows past the entry quota, which is usually 500 keywords.",
    question: "How much do ASO tools cost?",
  },
  {
    answer:
      "Most of them do, but the depth differs per store. Apple exposes a dedicated keyword field and no public search volume, so vendors model iOS volume with their own estimates. Google Play has no keyword field and publishes different signals. Two tools can give you very different volume numbers for the same phrase, and neither is wrong, they are different models. Never compare a volume score from one tool against a score from another.",
    question: "Can one ASO tool cover both the App Store and Google Play?",
  },
  {
    answer:
      "No. data.ai was acquired by Sensor Tower in March 2024 and the brand was retired, with its features folded into Sensor Tower. StoreMaven no longer operates as a standalone product either. Several current comparison articles still list both, which is a good signal that the article has not been checked since it was published.",
    question: "Is data.ai still available?",
  },
  {
    answer:
      "An ASO tool gives you data and a place to edit and publish. An ASO agency gives you a person who decides what to do with that data. Tools cost tens to hundreds of dollars a month, agency retainers commonly start around $2,000 per month. If nobody on your team will look at the dashboard weekly, the tool subscription is wasted money and the agency is the better buy.",
    question: "What is the difference between an ASO tool and an ASO agency?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      article={article}
      translationHref={`/pl/blog/${PL_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/blog/${SLUG}`, FAQ)} />
      <p>
        Every &ldquo;best ASO tools&rdquo; list currently ranking on Google was
        written by a company that sells one of the tools, and every one of them
        puts its own product first. That is not the real problem. The real
        problem is that the prices are wrong. Three of the top-ranking lists
        still quote AppTweak at $69 per month (it is $79), AppFollow at $111 (it
        is not), and Appfigures at $29 (it starts at $9.99). Two of them still
        recommend data.ai, a product that stopped existing in 2024.
      </p>
      <p>
        So here is the disclosure up front: we build AppBoard, which is one of
        the tools below. We have listed it where it honestly fits and said
        plainly what it does not do. Every price in the table was read off the
        vendor&apos;s own pricing page in August 2026, and anything we could not
        verify at the source is marked as unverified rather than guessed.
      </p>

      <h2>The five jobs an ASO tool has to do</h2>
      <p>
        Before comparing products, be clear about which of these you actually do
        every week. Most teams need two or three of them, and paying for a
        platform that does all five is the most common way to overspend.
      </p>
      <ol>
        <li>
          <strong>Keyword research and rank tracking</strong> - finding phrases
          worth targeting and watching your position move.
        </li>
        <li>
          <strong>Metadata editing and publishing</strong> - actually changing
          the title, subtitle, keyword field and description, per language,
          without living inside two separate consoles.
        </li>
        <li>
          <strong>Creative production</strong> - screenshots, feature graphics
          and preview videos at the exact sizes each store demands.
        </li>
        <li>
          <strong>Review monitoring and replies</strong> - reading and answering
          reviews across both stores in one inbox.
        </li>
        <li>
          <strong>Market intelligence</strong> - competitor downloads, revenue
          estimates and category trends. This is the most expensive category by
          far and the one most small teams do not need.
        </li>
      </ol>

      <h2>Prices, checked in August 2026</h2>
      <p>
        Entry price is the number vendors advertise. The quota is the number that
        decides what you will actually pay six months in, because the entry tier
        almost always caps you at 500 tracked keywords.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Entry price</th>
            <th>Entry keyword quota</th>
            <th>Next tier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appfigures</td>
            <td>$9.99/mo (Connect)</td>
            <td>25 keywords, 5 apps</td>
            <td>$44.99, then $149.99</td>
          </tr>
          <tr>
            <td>Astro</td>
            <td>$9/mo billed yearly</td>
            <td>Unlimited, iOS only</td>
            <td>Single tier</td>
          </tr>
          <tr>
            <td>Mobile Action</td>
            <td>$15/mo (Lite)</td>
            <td>100 keywords, 5 apps</td>
            <td>$69, then $239</td>
          </tr>
          <tr>
            <td>ASODesk</td>
            <td>$59/mo (Pro)</td>
            <td>700 keywords, 2 apps</td>
            <td>$159, then $199</td>
          </tr>
          <tr>
            <td>ASOMobile</td>
            <td>$59/mo (Indie)</td>
            <td>500 keywords, 5 apps</td>
            <td>$119, then $229</td>
          </tr>
          <tr>
            <td>App Radar</td>
            <td>69 EUR/mo (Essentials)</td>
            <td>500 keywords, 2 apps</td>
            <td>169 EUR, then 299 EUR</td>
          </tr>
          <tr>
            <td>AppTweak</td>
            <td>$79/mo (Essential)</td>
            <td>500 keywords, 1 seat</td>
            <td>$249, then $499</td>
          </tr>
          <tr>
            <td>AppFollow</td>
            <td>$179/mo (reported)</td>
            <td>Free tier: 2 apps, 20 keywords</td>
            <td>$599 (unverified)</td>
          </tr>
          <tr>
            <td>SplitMetrics</td>
            <td>Free Starter</td>
            <td>20,000 keywords</td>
            <td>$500/mo add-on</td>
          </tr>
          <tr>
            <td>Sensor Tower</td>
            <td>No public price</td>
            <td>Quote only</td>
            <td>Annual contract</td>
          </tr>
          <tr>
            <td>AppBoard</td>
            <td>Free in beta</td>
            <td>No cap</td>
            <td>Self-host at zero cost</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two honest caveats about that table. AppFollow&apos;s pricing page did
        not render for us, so the $179 and $599 figures come from three
        third-party sources rather than the vendor, and we have marked them
        accordingly. Sensor Tower publishes nothing at all; the figures you see
        quoted elsewhere, anywhere from $500 per month to $150,000 per year, are
        other people&apos;s estimates and none of them are sourced. If you need
        Sensor Tower, you are going to a sales call.
      </p>

      <h2>What each tool is genuinely best at</h2>

      <h3>AppTweak</h3>
      <p>
        The deepest keyword dataset on both stores, covering more than 100
        countries, with a reporting studio that agencies lean on for client
        decks. It is the default choice when keyword data quality is the thing
        you are buying. The Essential tier at 500 keywords is tight for anything
        beyond a single app in a couple of markets, so budget for $249.
      </p>

      <h3>App Radar</h3>
      <p>
        The one big platform that lets you edit and publish metadata in the same
        place you track it, which removes a genuinely annoying copy-and-paste
        loop between a dashboard and two consoles. Pricing is in euros and the
        trial requires a card.
      </p>

      <h3>Appfigures</h3>
      <p>
        The cheapest credible entry into paid ASO, and the only mainstream tool
        that puts revenue, downloads and keyword ranks on the same dashboard.
        The tier ladder is long, which is good if you grow slowly and annoying if
        you need one feature that sits three tiers up.
      </p>

      <h3>Mobile Action</h3>
      <p>
        Strongest when your organic and paid strategies are linked, because its
        Apple Ads campaign management is free up to $10,000 in monthly ad spend.
        If you run Apple Search Ads at all, this changes the maths.
      </p>

      <h3>ASODesk and ASOMobile</h3>
      <p>
        Both sit in the $59 entry bracket with good review-reply tooling and
        generous keyword quotas relative to price. ASOMobile has the most usable
        free tier of any paid vendor: 20 keywords, 2 apps, 100 replies, no card
        required. Both are a sensible middle ground if AppTweak is too expensive
        and Appfigures is too thin.
      </p>

      <h3>AppFollow</h3>
      <p>
        Built around review management first and keyword tracking second. If you
        have a large portfolio and a support team answering reviews, its reply
        automation is the reason to buy it, not its ASO data.
      </p>

      <h3>Sensor Tower</h3>
      <p>
        Market intelligence, not day-to-day ASO. You buy Sensor Tower to know
        what a competitor earned last quarter, not to fix your subtitle. If your
        job is shipping a listing next week, this is the wrong product.
      </p>

      <h3>SplitMetrics</h3>
      <p>
        Store listing A/B testing at scale. The Starter tier is free with no time
        limit, which makes it worth having in the stack even if you never buy the
        $500 per month App Intelligence add-on.
      </p>

      <h3>Astro</h3>
      <p>
        A native macOS app for iOS-only developers, $9 per month billed annually,
        unlimited keywords, 60 or more countries. If you ship on the App Store
        only and you live on a Mac, this is the best value in the whole list.
      </p>

      <h3>Launch Shots and Mokbi</h3>
      <p>
        Both attack the creative half of ASO: screenshots, store copy and
        publishing to both stores. Launch Shots has a free tier that gives you
        one publish credit per month with no watermark. Mokbi is free forever for
        the editor itself and charges from 29.99 euros per month once you want to
        publish. Neither does keyword research, and neither pretends to.
      </p>

      <h3>AppBoard</h3>
      <p>
        We built AppBoard for the case none of the above covers cheaply: editing
        and publishing the same listing to both stores, per language, with a
        change history you can diff and roll back like code. It includes a{" "}
        <a href={`${APP_URL}/editor`}>free browser-based screenshot editor</a>{" "}
        that exports at exact store dimensions, review management, and AI
        drafting that runs on your own OpenRouter key. It is free while in beta
        and source-available under the PolyForm Noncommercial License, so you can
        self-host it.
      </p>
      <p>
        Where it is not the right pick: it does not sell competitor download or
        revenue estimates, and its keyword data is not a substitute for
        AppTweak&apos;s if market-level keyword volume is the thing you are
        paying for. If your ASO job is mostly research, buy a research tool.
      </p>

      <h2>Tools that no longer exist</h2>
      <p>
        Check any comparison article against this list before trusting the rest
        of it.
      </p>
      <ul>
        <li>
          <strong>data.ai</strong> (formerly App Annie) was acquired by Sensor
          Tower in March 2024 and retired as a brand.
        </li>
        <li>
          <strong>StoreMaven</strong> no longer operates as an independent
          product, though its research is still widely cited.
        </li>
        <li>
          <strong>Checkaso</strong> appears to be gone; the domain no longer
          resolves. Prices for it still circulate.
        </li>
      </ul>

      <h2>The free stack that actually works</h2>
      <p>
        You can run competent ASO for a first app without paying anyone. The
        pieces exist, they are just scattered:
      </p>
      <ul>
        <li>
          <strong>App Store Connect</strong> for impressions, product page
          views, conversion rate and Product Page Optimization tests.
        </li>
        <li>
          <strong>Google Play Console</strong> for acquisition reports and Store
          Listing Experiments.
        </li>
        <li>
          <strong>Apple Ads Search Match</strong> as a keyword discovery source:
          run a small campaign and read which search terms Apple matched you to.
          This is real Apple data, not a model.
        </li>
        <li>
          <strong>Google Keyword Planner and Google Trends</strong> for
          directional demand and seasonality.
        </li>
        <li>
          A free editor for the visuals, and a free tier of one tracker for rank
          history.
        </li>
      </ul>
      <p>
        The gap in that stack is history and speed, not capability. Consoles show
        you today; they do not show you what your rank did over the last ninety
        days. That is the moment a paid tracker starts earning its price. Our{" "}
        <Link href="/blog/keyword-research-for-apps">
          keyword research workflow for apps
        </Link>{" "}
        walks through doing this without a $300 subscription.
      </p>

      <h2>The quota trap</h2>
      <p>
        Advertised entry prices are almost meaningless because of one number: the
        keyword quota. A realistic tracking list for one app in five markets is
        roughly 100 keywords per market, so 500 keywords. That is exactly the cap
        on AppTweak Essential, App Radar Essentials and ASOMobile Indie. Add a
        second app or a sixth market and you are on the next tier, which is three
        to four times the price, not twenty percent more.
      </p>
      <p>
        Before you buy, count your real list: apps, multiplied by markets,
        multiplied by keywords per market. Then price the tier that number lands
        in, not the tier on the pricing page hero. Also check whether the vendor
        requires an annual commitment, because several of the mid-market
        platforms do, and whether renewal pricing is fixed.
      </p>

      <h2>Which one should you buy</h2>
      <table>
        <thead>
          <tr>
            <th>Your situation</th>
            <th>Reasonable pick</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>One app, no budget</td>
            <td>Consoles plus Apple Ads Search Match plus a free tier</td>
          </tr>
          <tr>
            <td>One app, iOS only, macOS user</td>
            <td>Astro at $9/mo</td>
          </tr>
          <tr>
            <td>Both stores, want editing and publishing in one place</td>
            <td>App Radar or AppBoard</td>
          </tr>
          <tr>
            <td>Keyword data quality is the purchase</td>
            <td>AppTweak</td>
          </tr>
          <tr>
            <td>Running Apple Search Ads</td>
            <td>Mobile Action</td>
          </tr>
          <tr>
            <td>Large portfolio, review load is the pain</td>
            <td>AppFollow</td>
          </tr>
          <tr>
            <td>You only need screenshots</td>
            <td>A dedicated editor, not a platform</td>
          </tr>
          <tr>
            <td>You need competitor revenue estimates</td>
            <td>Sensor Tower, and budget for a sales call</td>
          </tr>
        </tbody>
      </table>

      <h2>Before you subscribe, do this</h2>
      <p>
        Run one trial at a time and give it a specific job. Pick three keywords
        you already rank for and check whether the tool&apos;s reported position
        matches what you see searching manually on a clean device in that
        storefront. If a vendor&apos;s ranks disagree with reality on keywords
        you can verify by hand, its volume estimates on keywords you cannot
        verify are not worth paying for either.
      </p>
      <p>
        Then check the boring part: can you export your keyword list, and does
        the tool cover the specific fields each store gives you? The character
        limits and field structures differ more than people expect, which we
        broke down field by field in{" "}
        <Link href="/blog/app-store-vs-google-play-metadata">
          App Store vs Google Play metadata
        </Link>
        . A tool that models only Apple&apos;s keyword field will not help much
        on Google Play, where there is no keyword field at all.
      </p>

      <h2>Frequently asked questions</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        If you want to see what listing management looks like without a
        subscription, AppBoard is free while it is in beta and you can{" "}
        <Link href="/pricing">check the planned pricing</Link> before you invest
        any time in it.
      </p>
    </ArticleLayout>
  );
}
