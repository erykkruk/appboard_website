import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { Callout, JsonLd } from "@/components/ui";
import { buildBlogAlternates, getArticle, getPlSlugForEn } from "@/lib/blog";
import { buildFaqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { FaqEntry } from "@/lib/schema";
import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-preview-video-vs-screenshots";
const PL_SLUG = getPlSlugForEn(SLUG) ?? "wideo-promocyjne-aplikacji";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "What an app preview video is actually worth, how differently the App Store and Google Play ship video, YouTube channels per language, and the landscape trap that can leave your search result with no screenshots.",
  languages: buildBlogAlternates(SLUG),
  locale: "en_US",
  ogType: "article",
  path: `/blog/${SLUG}`,
  publishedTime: "2026-08-30",
  title: "App preview video vs screenshots",
});

const IMAGES = [
  "/images/blog/app-store-landscape-app-preview.jpg",
  "/images/blog/app-store-search-no-screenshots.jpg",
];

const FAQ: FaqEntry[] = [
  {
    answer:
      "A/B testing vendors report install conversion lifts of about 16 percent (SplitMetrics) up to 20 to 35 percent (StoreMaven). That is vendor data rather than peer-reviewed research, so treat it as directional. The effect depends heavily on category: games gain the most, while several finance and productivity tests show conversion dropping by 3 to 7 percent, because a video is a slower way to say what one captioned frame says instantly.",
    question: "Does an app preview video increase installs?",
  },
  {
    answer:
      "The App Store allows up to 3 app previews per localization, 15 to 30 seconds each, uploaded as a file (M4V, MP4 or MOV, up to 500 MB). Google Play takes one promo video per store listing, and only as the URL of a single YouTube video, not a playlist and not a channel.",
    question: "How many videos can you add on the App Store and Google Play?",
  },
  {
    answer:
      "The usual cause is a landscape app preview combined with portrait screenshots. A landscape preview takes the full width of the search result row and the screenshots are not shown beside it, and in practice the row can render with no creative at all. Check it on a device that has never installed your app, because the product page layout differs for people who already have it.",
    question:
      "Why does my app show no screenshots in App Store search results?",
  },
  {
    answer:
      "No. A Google Play promo video does not appear in Play search results at all. It only works on the product page, where it may autoplay inline muted for up to 30 seconds. That is the opposite of the App Store, where an app preview plays in search results before anyone has chosen you.",
    question: "Does the Google Play promo video show in search results?",
  },
  {
    answer:
      "Yes, in both stores. App Store previews are per localization. On Google Play the store listing graphics, video included, are localized per language. Play also has a separate and rarely used surface: under Grow users, Store presence, YouTube Videos you attach channels or playlists with a language set on each, one language per channel.",
    question: "Can you add a separate video for each language?",
  },
];

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      article={article}
      bylined
      images={IMAGES}
      translationHref={`/pl/blog/${PL_SLUG}`}
    >
      <JsonLd data={buildFaqSchema(`/blog/${SLUG}`, FAQ, "en-US")} />
      <p>
        Every other surface went to video years ago. Store listings are the last
        place where good teams still ship five static frames, and the teams who
        do add video often break their own search result doing it.
      </p>

      <Callout title="The short version">
        <ul>
        <li>
          On Meta, video roughly doubles click-through in the same slot. Static
          still wins on cost efficiency in prospecting.
        </li>
        <li>
          In the stores the effect is smaller: roughly{" "}
          <strong>+5% to +30% install conversion</strong>, category dependent.
          Games gain most, some finance and productivity tests come out negative.
        </li>
        <li>
          An App Store preview autoplays in search results. A Google Play video
          never appears in Play search at all.
        </li>
        <li>
          Play has a second, mostly unused surface: YouTube channels per
          language.
        </li>
        <li>
          <strong>A landscape App Store preview can wipe the screenshots out of
            your search row</strong>, sometimes leaving it with no creative at
            all.
          </li>
        </ul>
      </Callout>

      <h2>What video is actually worth</h2>
      <p>
        Aggregated 2026 benchmarks from Meta ad accounts (agency round-ups, not
        Meta&apos;s own data, so directional):
      </p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Static image</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CTR in the same Reels slot</td>
            <td>0.62%</td>
            <td>1.31%</td>
          </tr>
          <tr>
            <td>Average CTR across placements</td>
            <td>0.90%</td>
            <td>1.14%</td>
          </tr>
          <tr>
            <td>Time spent with the creative</td>
            <td>1.4 s</td>
            <td>4.7 s</td>
          </tr>
          <tr>
            <td>Mid-funnel conversion rate</td>
            <td>1.6%</td>
            <td>2.1%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Those numbers do not transfer. In a feed you are interrupting someone,
        and video wins because it stops a scroll. On a product page the user
        already tapped and is deciding whether to install, which is why store
        lifts land in single and low double digits, and why a bad video can lose
        you installs where a bad ad is merely ignored.
      </p>
      <p>
        SplitMetrics reports about <strong>+16%</strong> from adding an App Store
        preview, StoreMaven puts it at <strong>+20% to +35%</strong>. A strong
        static set is worth a similar amount on its own, so video is additive to
        good screenshots, not a replacement. By category, AppFollow&apos;s
        directional ranges:
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Conversion lift from video</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gaming</td>
            <td>+8% to +18%</td>
          </tr>
          <tr>
            <td>Health &amp; Fitness</td>
            <td>+7% to +14%</td>
          </tr>
          <tr>
            <td>Fintech</td>
            <td>+6% to +12%</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>+5% to +11%</td>
          </tr>
          <tr>
            <td>E-commerce</td>
            <td>+4% to +10%</td>
          </tr>
          <tr>
            <td>Utilities</td>
            <td>+3% to +9%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Several testing shops also report video <em>hurting</em> conversion in
        finance and productivity by 3 to 7 percent. The rule: video wins when
        your app is something to watch, and loses when it is something to use.
      </p>

      <h2>The two stores ship video differently</h2>
      <table>
        <thead>
          <tr>
            <th>Spec</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Videos per listing</td>
            <td>Up to 3 per localization</td>
            <td>1 promo video per store listing</td>
          </tr>
          <tr>
            <td>How you supply it</td>
            <td>Uploaded file (M4V, MP4, MOV, up to 500 MB)</td>
            <td>A YouTube URL for a single video, not a playlist or channel</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>15 to 30 s</td>
            <td>No hard limit, 30 to 90 s recommended</td>
          </tr>
          <tr>
            <td>In search results</td>
            <td>Autoplays, muted</td>
            <td>Does not appear at all</td>
          </tr>
          <tr>
            <td>On the product page</td>
            <td>Autoplays</td>
            <td>May autoplay inline muted, up to 30 s, device dependent</td>
          </tr>
          <tr>
            <td>Orientation</td>
            <td>Portrait or landscape, and it changes the layout</td>
            <td>Landscape 16:9 preferred</td>
          </tr>
          <tr>
            <td>Per language</td>
            <td>Yes, per localization</td>
            <td>Yes, listing graphics are localized per language</td>
          </tr>
        </tbody>
      </table>
      <p>
        On the App Store video is a discovery asset that plays before anyone has
        chosen you. On Play it only exists after the tap. That one difference
        should decide the budget split, and it is the opposite of how most teams
        allocate.
      </p>

      <h2>Play: YouTube channels per language</h2>
      <p>
        Under <strong>Grow users, Store presence, YouTube Videos</strong> you can
        attach channels or playlists to the listing, with a language set on each,
        one language per channel. A listing in four languages can carry four
        video surfaces instead of one. Very few do. The rules:
      </p>
      <ul>
        <li>Public videos, though playlists can be unlisted.</li>
        <li>Monetization off, embeddable, owned by your app or game.</li>
        <li>No Shorts, no live videos.</li>
        <li>
          Games: uploaded within 90 days to show on the listing, 21 days for the
          Games tab, 180 days for the Apps tab.
        </li>
        <li>
          Needs Premium growth tools eligibility and the Manage store presence
          permission.
        </li>
        <li>
          One playlist for an app, several playlists or channels for a game.
        </li>
      </ul>
      <p>
        Play Console then reports viewers, click-through and installs over 28
        days. A live example:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show
        </a>
        . Play also accepts a <code>referrer</code> parameter on store links, so
        tag them before sharing rather than guessing which channel drove an
        install.
      </p>

      <h2>The App Store landscape trap</h2>
      <p>
        Apple lets a preview be portrait or landscape and warns about neither
        consequence. On the product page a landscape preview does not lead the
        gallery, it moves into a separate <em>A Closer Look</em> section:
      </p>
      <figure>
        <Image
          alt="App Store product page for Buzzin showing a landscape app preview video in a separate section called A Closer Look, below What's New and above the portrait screenshot gallery"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-landscape-app-preview.jpg"
          width={620}
        />
        <figcaption>
          Landscape preview, pushed into its own block instead of leading the
          gallery.
        </figcaption>
      </figure>
      <p>
        In search results it takes the full width of the row and the screenshots
        are not shown beside it. In the wild it gets worse: the row renders with
        no creative at all. Below, the same app sits between two competitors
        showing three frames each, and shows nothing but an icon and a line of
        text.
      </p>
      <figure>
        <Image
          alt="App Store search results where the Buzzin listing shows only an icon, title and rating with no screenshots, while the apps above and below it each display three screenshot frames"
          className="mx-auto w-full max-w-[320px]"
          height={1348}
          sizes="(min-width: 640px) 320px, 100vw"
          src="/images/blog/app-store-search-no-screenshots.jpg"
          width={620}
        />
        <figcaption>
          Same app in search. Neighbours show three frames each. Ours shows a
          line of text.
        </figcaption>
      </figure>
      <Callout title="Check this before anything else" variant="warning">
        <p>
          Search rows are where you are compared side by side. Losing your
          creative there costs more than the video was going to earn on the
          product page, and nothing in App Store Connect warns you it happened.
        </p>
      </Callout>
      <ul>
        <li>
          <strong>Portrait app, portrait preview.</strong> It sits alongside your
          first screenshots instead of replacing them, so you keep both surfaces.
        </li>
        <li>
          <strong>Genuinely landscape product</strong> (a TV game, a racing game,
          a video editor): either letterbox the footage into a portrait frame so
          the row keeps the gallery, or accept a bare row and let the icon, title
          and subtitle carry it.
        </li>
        <li>
          <strong>Never mix orientations</strong> in one device&apos;s set. A
          portrait UI in a landscape frame is a documented App Review rejection
          reason, and the{" "}
          <Link href="/blog/app-store-screenshot-sizes">
            exact sizes each store expects
          </Link>{" "}
          are worth checking before you re-export.
        </li>
        <li>
          <strong>Verify on a clean device after every release.</strong> The
          layout differs for people who already have the app, so your own phone
          tells you very little.
        </li>
      </ul>
      <p>
        The same app on the other store, for comparison:{" "}
        <a
          href="https://apps.apple.com/pl/app/buzzin-tv-party-game-show/id6787068440"
          rel="noopener"
          target="_blank"
        >
          Buzzin on the App Store
        </a>
        .
      </p>

      <h2>The craft rules that decide the outcome</h2>
      <ul>
        <li>
          <strong>Your poster frame is a screenshot.</strong> Autoplay is
          conditional, so when it does not fire the whole video collapses to that
          one still. Caption it, make it legible at thumbnail size, and never
          ship a black screen with a wordmark.
        </li>
        <li>
          <strong>The first three seconds work on mute.</strong> Show the product
          in second one, carry the message in on-screen text, front-load the best
          moment.
        </li>
        <li>
          <strong>15 to 20 seconds</strong> even though Apple allows 30. Shorter
          loops get seen more than once.
        </li>
        <li>
          <strong>Localize it.</strong> Video is per localization in both stores;
          burned-in English text on a German listing is the same mistake as an
          untranslated caption.
        </li>
        <li>
          <strong>Keep it current.</strong> A preview showing a UI from two
          redesigns ago is worse than no video.
        </li>
      </ul>

      <h2>Before you spend the budget</h2>
      <ol>
        <li>
          If your first two frames are raw captures with no captions, fix those
          first. That is a bigger and cheaper win, and{" "}
          <Link href="/blog/app-screenshots-that-convert">
            ordering and captioning them
          </Link>{" "}
          costs an afternoon.
        </li>
        <li>
          If a still frame communicates the same thing, the video adds load time
          and risk without adding information.
        </li>
        <li>
          If budget is tight, iOS first: there video buys a discovery surface, on
          Play it only pays off after the tap.
        </li>
      </ol>
      <p>
        Then test it rather than trusting the averages above. Product Page
        Optimization on the App Store and store listing experiments on Google
        Play are free. Run video against no video, and poster frames against each
        other separately, because those are two different experiments. Give each
        two weeks, change one variable, and record what the listing looked like
        when the numbers moved. That last part is what quietly breaks, and
        keeping a per-language, per-store record of what shipped and when is a
        large part of what we built <Link href="/pricing">AppBoard</Link> to do.
      </p>
      <p>
        Do the cheap check first, though. Search for your own app on a phone that
        has never installed it and look at what the row renders. If it comes back
        as a line of text between two competitors showing three frames each, no
        amount of production value fixes that.
      </p>

      <h2>Frequently asked questions</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        Store rules verified against Apple and Google documentation in August
        2026. Conversion figures come from A/B testing vendors (SplitMetrics,
        StoreMaven, AppFollow) and are directional, not peer-reviewed.
      </p>
    </ArticleLayout>
  );
}
