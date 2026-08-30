import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { JsonLd } from "@/components/ui";
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
    "Video outperforms static creative almost everywhere else, so what does it actually do in a store listing? The numbers from Meta and the app stores, how Apple and Google ship video differently, and the landscape trap that can leave your search result blank.",
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
        Every other surface a user touches has already gone to video. Instagram
        turned its feed into Reels, Facebook followed, TikTok never had a static
        format to begin with. App store listings are the last place where a lot
        of good teams still ship five static frames and call the creative work
        done.
      </p>
      <p>
        That is not necessarily wrong. A store listing is not a feed, and the
        numbers do not transfer one to one. But the gap between how much effort
        goes into a paid social creative and how much goes into an app preview
        is usually indefensible, and the mechanics of store video are
        underdocumented enough that teams who do invest in it often break their
        own listing in the process. This is a walk through both: what video is
        worth, and how to ship it without making your search result worse.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>
          On Meta, video roughly doubles click-through in the same slot and holds
          attention about three times longer than a static image. Static still
          wins on raw cost efficiency in prospecting.
        </li>
        <li>
          In the stores the effect is much smaller: vendor tests put an app
          preview at roughly <strong>+5% to +30% install conversion</strong>,
          heavily dependent on category. Games gain most. Some finance and
          productivity tests come out negative.
        </li>
        <li>
          Apple and Google ship video in completely different places. An App
          Store preview autoplays in search results. A Google Play promo video
          never appears in Play search at all.
        </li>
        <li>
          Google Play has a second, mostly unused video surface: per-language
          YouTube channels or playlists under Store presence.
        </li>
        <li>
          <strong>A landscape App Store preview can wipe the screenshots out of
          your search result row</strong>, and sometimes leaves the row with no
          creative at all. Screenshots of that below.
        </li>
        <li>
          Your poster frame and your first three muted seconds are the whole
          asset for most viewers. Treat them like screenshots, not like a video.
        </li>
      </ul>

      <h2>The feed settled this argument years ago</h2>
      <p>
        Start with the platform where the sample sizes are enormous and the
        feedback loop is a day long. Aggregated 2026 benchmarks from Meta ad
        accounts (agency round-ups, not Meta&apos;s own published data, so treat
        them as directional) land in roughly the same place every time.
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
        Video takes something like 58% of total Meta ad budgets now, Reels come
        in around 26% cheaper per click than Feed, and Instagram Stories
        engagement runs well above Facebook Feed. The honest counterpoint,
        because it matters: static creative frequently still wins on CPM, CPC and
        prospecting ROAS. A static image communicates a value proposition in a
        fraction of a second, and for a tight-CPA conversion campaign that
        sometimes beats a video nobody finishes.
      </p>
      <p>
        So the fair summary is not &quot;video wins&quot;. It is: video buys
        attention and engagement, static buys efficiency, and the format that
        wins depends on what you need from that specific placement.
      </p>

      <h2>A store listing is not a feed</h2>
      <p>
        Which is exactly why the social numbers do not carry over. In a feed you
        are interrupting someone. Video wins there because it is better at
        stopping a scroll.
      </p>
      <p>
        On a product page the user already tapped through. They have intent.
        They are not deciding whether to look, they are deciding whether to
        install, and the job of your creative changed from stopping attention to
        answering a question. That is why store lifts are measured in single and
        low double digits rather than in multiples, and why a bad video can
        genuinely lose you installs while a bad ad just gets ignored.
      </p>

      <h2>What a preview video is actually worth in the stores</h2>
      <p>
        Published figures are all vendor data from A/B testing platforms, so
        every number below is directional rather than peer-reviewed. They are
        consistent enough to plan with.
      </p>
      <ul>
        <li>
          SplitMetrics reports around <strong>+16%</strong> install conversion
          from adding an App Store preview video.
        </li>
        <li>
          StoreMaven test data has put the same effect in a{" "}
          <strong>+20% to +35%</strong> band.
        </li>
        <li>
          A strong static screenshot set is worth a similar amount on its own,
          which is the part people skip: video is additive to good screenshots,
          not a replacement for them.
        </li>
      </ul>
      <p>
        Broken down by category, AppFollow&apos;s directional ranges look like
        this:
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
        And the result nobody quotes: several testing shops report preview video
        actively <em>hurting</em> conversion in finance and productivity, on the
        order of 3% to 7%. The pattern is simple. Video wins when your app is
        something to watch: gameplay, motion, a transformation, a social moment.
        It loses when your app is something to use, because a 20-second video is
        a slower way to say &quot;this scans receipts&quot; than one captioned
        frame.
      </p>

      <h2>Apple and Google ship video in different places</h2>
      <p>
        This is where most of the avoidable mistakes live. The two stores share
        almost nothing here except the word &quot;video&quot;.
      </p>
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
        Read the search results row again. On the App Store, video is a discovery
        asset that plays before anyone has chosen you. On Google Play it is a
        conversion asset that only exists after the tap. That single difference
        should decide how much budget each one gets, and it is the opposite of
        how most teams allocate.
      </p>

      <h2>Google Play: the per-language YouTube channels almost nobody uses</h2>
      <p>
        The promo video field in your main store listing is not Play&apos;s only
        video surface. Under <strong>Grow users, Store presence, YouTube
        Videos</strong> you can attach YouTube channels or playlists to the
        listing itself: one dedicated playlist for an app, several playlists or
        channels for a game.
      </p>
      <p>
        The part worth the effort is the language targeting. You set a language
        on each channel or playlist, keeping one language per channel, and Play
        shows it to users whose language settings match. So a listing localized
        into English, Polish, German and Spanish can carry four separate video
        surfaces instead of one. Very few listings do this.
      </p>
      <p>The rules that will bounce you if you miss them:</p>
      <ul>
        <li>Videos must be publicly visible, though playlists can be unlisted.</li>
        <li>Monetization off, no ads, embeddable, owned by your app or game.</li>
        <li>No YouTube Shorts and no live videos.</li>
        <li>
          Freshness windows for games: uploaded within 90 days to show on the
          store listing, 21 days for the Games tab, 180 days for the Apps tab.
        </li>
        <li>
          It needs Premium growth tools eligibility, and the account needs the
          Manage store presence permission.
        </li>
      </ul>
      <p>
        Play Console then reports viewers, click-through and installs over a
        28-day window, which is more measurement than Apple gives you for
        previews.
      </p>
      <p>
        A live example of the setup:{" "}
        <a
          href="https://play.google.com/store/apps/details?id=tech.ravenlab.buzzin"
          rel="noopener"
          target="_blank"
        >
          Buzzin: TV Party Game Show on Google Play
        </a>
        , a party game where the video does real work because the product is
        literally people playing in a room together. Worth noting on that URL:
        Play accepts a <code>referrer</code> parameter on store links, so if you
        want to know whether the video, the newsletter or the TikTok campaign
        drove an install, tag the link before you share it rather than guessing
        from an install-count bump.
      </p>

      <h2>The App Store landscape trap</h2>
      <p>
        Apple lets an app preview be portrait or landscape and warns you about
        none of the consequences. There are two, and both are ugly if your
        screenshots are portrait.
      </p>
      <p>
        <strong>On the product page</strong>, a landscape preview does not lead
        the screenshot gallery. It gets moved into its own section called{" "}
        <em>A Closer Look</em>, separate from the screenshots:
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
          A landscape preview lands in its own <em>A Closer Look</em> block
          instead of leading the gallery.
        </figcaption>
      </figure>
      <p>
        Worse, the layout is not the same for everyone. If a viewer has already
        downloaded the app, or owns it on their account, the video renders in a
        different position. So testing your own listing on your own phone tells
        you very little. Check it on a device that has never installed the app.
      </p>
      <p>
        <strong>In search results</strong>, a landscape preview takes the full
        width of the row and the screenshots are not shown beside it. That is the
        documented behaviour. What actually happens in the wild is sometimes
        worse: the row renders with no creative whatsoever.
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
          Same app in search. The listings above and below show three frames
          each. Ours shows nothing but the icon, title and subtitle.
        </figcaption>
      </figure>
      <p>
        Look at the middle row and then at its neighbours. Two competitors are
        each spending three frames of screen real estate making their case, and
        the app in between them is a line of text. Search results are where the
        scan happens and where you are compared side by side. Losing your
        creative there costs more than whatever the video was going to earn on
        the product page.
      </p>

      <h3>What to do about it</h3>
      <ul>
        <li>
          <strong>If your app is portrait, keep the preview portrait.</strong> A
          portrait preview sits alongside your first screenshots in the search
          row instead of replacing them, so you keep both surfaces.
        </li>
        <li>
          <strong>If your product is genuinely landscape</strong>, a TV game, a
          racing game, a video editor, you have a real decision rather than a
          mistake. Either letterbox the landscape footage inside a portrait frame
          so the row keeps the gallery, or accept a bare row and make your icon,
          title and subtitle carry it.
        </li>
        <li>
          <strong>Never mix orientations</strong> within one device&apos;s
          screenshot set. Beyond the layout mess, a portrait UI presented inside
          a landscape frame is a documented App Review rejection reason. The{" "}
          <Link href="/blog/app-store-screenshot-sizes">
            exact sizes each store expects
          </Link>{" "}
          are worth checking before you re-export anything.
        </li>
        <li>
          <strong>Verify after every submission.</strong> This rendering has
          changed more than once and Apple documents it thinly. Search for your
          own app on a clean device after each metadata release and look at the
          row, not just the page.
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
        . Same product, same footage, two completely different sets of
        constraints, which is the entire point of this article.
      </p>

      <h2>Your poster frame is a screenshot</h2>
      <p>
        Autoplay is conditional. It depends on the surface, the device, low power
        mode, network conditions and the user&apos;s own settings. When it does
        not fire, the whole video collapses to a single still: the poster frame.
      </p>
      <p>
        Which means the poster frame is doing screenshot work and should be built
        like one. Give it a caption, make it legible at thumbnail size, and pick
        a moment that says what the app is rather than a title card or a logo
        wipe. A poster frame that is a black screen with a wordmark is a wasted
        slot on the most valuable piece of real estate in your listing.
      </p>

      <h2>The first three seconds have to work on mute</h2>
      <p>
        In search results the App Store plays your preview muted. Assume no
        audio, ever, and assume most viewers leave before the halfway mark.
      </p>
      <ul>
        <li>
          Show the actual product in the first second. No logo intro, no splash.
        </li>
        <li>
          Carry the message in on-screen text, because there is no voiceover as
          far as the viewer is concerned.
        </li>
        <li>
          Front-load the single best moment. Do not build to it, you will not get
          there.
        </li>
        <li>
          Keep it to 15 to 20 seconds even though Apple allows 30. Shorter loops
          get seen more than once.
        </li>
        <li>
          Localize it. Video is per-localization in both stores, and burned-in
          English text on a German listing is the same mistake as an untranslated
          screenshot caption.
        </li>
      </ul>

      <h2>Should you make one at all?</h2>
      <p>Some honest gates before you spend the budget:</p>
      <ol>
        <li>
          <strong>Are your screenshots already good?</strong> If your first two
          frames are raw captures with no captions, fix those first. That is a
          bigger and cheaper win than any video, and{" "}
          <Link href="/blog/app-screenshots-that-convert">
            ordering and captioning the frames
          </Link>{" "}
          costs you nothing but an afternoon.
        </li>
        <li>
          <strong>Is there motion worth watching?</strong> If a still frame
          communicates the same thing, the video adds load time and risk without
          adding information.
        </li>
        <li>
          <strong>Can you keep it current?</strong> An app preview showing a UI
          you shipped two redesigns ago is worse than no video, and on Play the
          YouTube surfaces have explicit freshness windows.
        </li>
        <li>
          <strong>Which store are you doing this for?</strong> On the App Store
          video buys you a discovery surface. On Play it only pays off after the
          tap. If budget is tight, iOS first.
        </li>
      </ol>

      <h2>Test it instead of believing the benchmarks</h2>
      <p>
        Every number in this article is somebody else&apos;s average. Both stores
        give you free tooling to find your own: Product Page Optimization on the
        App Store, store listing experiments on Google Play. Run video against no
        video, and separately run poster frames against each other, because those
        are two different experiments and teams routinely conflate them.
      </p>
      <p>
        Give a test at least two weeks and enough traffic to mean something,
        change one variable at a time, and record what the listing looked like
        when the numbers moved. That last part is the one that quietly breaks:
        six months later nobody remembers which screenshot set was live during
        the good quarter, or which languages ever got the localized video.
        Keeping a per-language, per-store record of what shipped and when is a
        large part of what we built <Link href="/pricing">AppBoard</Link> to do,
        but a spreadsheet you actually maintain beats a tool you do not.
      </p>
      <p>
        Whatever you end up shipping, do the cheap check first. Search for your
        own app on a phone that has never installed it, and look at what the row
        renders. If it comes back as a line of text between two competitors
        showing three frames each, no amount of video production value is going
        to fix that.
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
        2026. The conversion figures come from A/B testing vendors (SplitMetrics,
        StoreMaven, AppFollow) and are directional rather than peer-reviewed. If
        you are reading this much later, re-check the limits and the search
        result behaviour before a release.
      </p>
    </ArticleLayout>
  );
}
