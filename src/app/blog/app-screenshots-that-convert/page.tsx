import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { getArticle } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-screenshots-that-convert";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "App Store and Google Play screenshot specs for 2026, plus how to order and caption your screenshots so the first two frames do most of the selling.",
  path: `/blog/${SLUG}`,
  title: "App screenshots that convert",
});

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <p>
        Screenshots sell your app better than any sentence you write. Most
        visitors decide from the first two frames without scrolling and without
        reading a word of your description. Yet screenshots are usually an
        afterthought - a few raw captures with no caption, in whatever order the
        export tool spat them out. Fixing that is one of the highest-return
        things you can do to a listing.
      </p>
      <p>
        Let us get the specs out of the way first, then talk about the part that
        actually moves conversion: order and message.
      </p>

      <h2>The specs (2026)</h2>
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
            <td>Max screenshots</td>
            <td>10 per device</td>
            <td>8 per type</td>
          </tr>
          <tr>
            <td>Phone reference size</td>
            <td>6.7&Prime; = 1290&times;2796</td>
            <td>Min 1080px on short side</td>
          </tr>
          <tr>
            <td>Feature graphic</td>
            <td>-</td>
            <td>1024&times;500 (required)</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>1024&times;1024 (in build)</td>
            <td>512&times;512</td>
          </tr>
          <tr>
            <td>Localization</td>
            <td>Per language</td>
            <td>Per language</td>
          </tr>
        </tbody>
      </table>
      <p>
        A few things people trip on. The App Store 6.7&Prime; size at
        1290&times;2796 is the current iPhone reference - upload at exactly that
        resolution to avoid resampling artifacts. Google Play&apos;s feature
        graphic is mandatory and has no App Store equivalent, so it is easy to
        forget; it appears at the top of your listing, so a blank or ugly one is
        very visible. Both stores accept fewer than the maximum, but giving them
        only two or three when competitors show eight looks thin.
      </p>

      <h2>The first two frames are the ad</h2>
      <p>
        Assume the majority of viewers see only your first two screenshots - the
        ones visible without scrolling in the search results and at the top of
        your page. Everything after frame two is for the minority who are already
        interested. So your two strongest ideas go first, not your onboarding
        flow and not your settings screen.
      </p>
      <p>
        Frame one should answer &ldquo;what is this and why should I care?&rdquo;
        in a single glance: your core value, shown in the app, with a short
        caption. Frame two builds on it with the next most compelling thing.
        Everything else is supporting evidence.
      </p>

      <h3>Caption every frame</h3>
      <p>
        A bare screenshot makes the viewer do the work of figuring out what they
        are looking at. A short caption does it for them. Keep captions to a few
        words - a benefit, not a UI label. &ldquo;See your strength trend over
        months&rdquo; beats a raw chart with no context; &ldquo;Analytics
        Screen&rdquo; is worse than nothing.
      </p>
      <table>
        <thead>
          <tr>
            <th>Weak caption</th>
            <th>Strong caption</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home screen</td>
            <td>Log a workout in two taps</td>
          </tr>
          <tr>
            <td>Statistics</td>
            <td>Watch your PRs climb over time</td>
          </tr>
          <tr>
            <td>Settings</td>
            <td>Your data stays on your device</td>
          </tr>
        </tbody>
      </table>

      <h2>Order tells a story</h2>
      <p>
        Think of the sequence as a short pitch, not a gallery. A reliable order:
      </p>
      <ol>
        <li>
          <strong>The core value</strong> - the one thing your app is best at.
        </li>
        <li>
          <strong>The second hook</strong> - the next reason to care.
        </li>
        <li>
          <strong>Depth</strong> - a feature that shows the app is serious.
        </li>
        <li>
          <strong>Proof or trust</strong> - social proof, privacy, an
          integration people recognize.
        </li>
        <li>
          <strong>The ask</strong> - a clean final frame that invites the tap.
        </li>
      </ol>
      <p>
        You do not need all ten slots. Five or six strong, ordered frames beat
        ten random ones. Every extra frame that does not earn its place just
        dilutes the story.
      </p>

      <h2>Show the real app</h2>
      <p>
        Heavily stylized frames that hide the actual interface are both a
        conversion risk and a rejection risk. If your screenshots look nothing
        like the app, install-to-retention suffers because expectations were set
        wrong - and both stores can reject screenshots that misrepresent the
        product. Frame the real UI attractively: a device bezel, a clean
        background, a caption. Do not fake a UI that does not exist.
      </p>

      <h2>Localize the images, not just the store text</h2>
      <p>
        If your captions are baked into the images - and they usually are - every
        localized listing needs its own screenshot set with translated captions.
        Upload English captions to your Japanese listing and that is exactly what
        Japanese users see. Managing separate screenshot sets per language and
        per device is tedious enough that it gets skipped; a grid that shows
        every set against each store&apos;s size requirements (which is one of
        the things AppBoard organizes) keeps it from slipping.
      </p>

      <h2>Do not forget the preview video</h2>
      <p>
        Both stores support a short video above your screenshots, and it plays a
        different role than a static frame. The App Store allows up to three app
        preview videos (15&ndash;30 seconds) that autoplay, muted, right in
        search results - so the first few seconds have to make sense without
        sound. Google Play takes a promo video via a YouTube link that sits with
        your feature graphic. A video is not mandatory and a weak one hurts more
        than no video, so only ship one if it genuinely shows the app in motion
        doing something a screenshot cannot. If your app is mostly static
        screens, spend the effort on stronger frames instead.
      </p>
      <p>
        Whatever you ship, treat visuals as an experiment, not a one-time task.
        Change the first frame, wait a couple of weeks, and watch whether your
        install rate moves. Screenshots are the highest-leverage thing to test
        because they carry most of the conversion - a better frame one can lift
        installs more than any keyword change you make that quarter.
      </p>

      <h2>A test you can run today</h2>
      <p>
        Show a friend who has never seen your app just the first two screenshots,
        for three seconds, then hide them. Ask what the app does and who it is
        for. If they can answer, your frames are working. If they hesitate, your
        first two frames are not pulling their weight - and that is where nearly
        all of your conversion is won or lost.
      </p>
    </ArticleLayout>
  );
}
