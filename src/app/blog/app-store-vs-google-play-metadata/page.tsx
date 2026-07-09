import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { getArticle } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "app-store-vs-google-play-metadata";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "A field-by-field comparison of App Store and Google Play metadata in 2026: exact character limits, what is keyword-indexed, screenshot specs, and review rules.",
  path: `/blog/${SLUG}`,
  title: "App Store vs Google Play metadata",
});

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <p>
        The App Store and Google Play look similar from a user&apos;s side, but
        their metadata systems are built on different assumptions. Apple splits
        keywords into a hidden field and does not index your description. Google
        has no keywords field at all and indexes almost everything visible. If
        you copy one store&apos;s listing straight into the other, you leave
        rankings on the table in both.
      </p>
      <p>
        Here is every field that matters, side by side, with the 2026 limits and
        — more importantly — what each store actually does with the text.
      </p>

      <h2>Text fields at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>App Store</th>
            <th>Google Play</th>
            <th>Indexed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title / app name</td>
            <td>30 chars</td>
            <td>30 chars</td>
            <td>Both (heaviest weight)</td>
          </tr>
          <tr>
            <td>Subtitle</td>
            <td>30 chars</td>
            <td>—</td>
            <td>App Store: yes</td>
          </tr>
          <tr>
            <td>Short description</td>
            <td>—</td>
            <td>80 chars</td>
            <td>Google Play: yes</td>
          </tr>
          <tr>
            <td>Keywords field</td>
            <td>100 chars</td>
            <td>—</td>
            <td>App Store: yes (hidden)</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>4000 chars</td>
            <td>4000 chars</td>
            <td>Google Play only</td>
          </tr>
          <tr>
            <td>Promotional text</td>
            <td>170 chars</td>
            <td>—</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h2>Title: same length, different jobs</h2>
      <p>
        Both stores cap the title at 30 characters, and on both it is the single
        strongest ranking signal. Note that Google Play only dropped to 30 in
        2021 — it used to allow 50 — so any guide telling you to pack keywords
        into a long Play title is out of date.
      </p>
      <p>
        With 30 characters you get your brand plus roughly one keyword phrase.
        &ldquo;Lumen: Habit Tracker&rdquo; spends its budget well; &ldquo;Lumen -
        The #1 Best App&rdquo; wastes it on words nobody searches for.
      </p>

      <h2>The keyword split: hidden field vs indexed body</h2>
      <p>
        This is the biggest structural difference. The App Store gives you a
        100-character keywords field that users never see. Google Play has
        nothing equivalent — instead it indexes your title, short description,
        and full description.
      </p>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Where keywords go</td>
            <td>Hidden 100-char field</td>
            <td>Woven into visible text</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>Comma-separated, no spaces</td>
            <td>Natural sentences</td>
          </tr>
          <tr>
            <td>Repetition</td>
            <td>Never repeat title words</td>
            <td>2&ndash;3 mentions reads as natural</td>
          </tr>
          <tr>
            <td>Description role</td>
            <td>Conversion only (not indexed)</td>
            <td>Conversion + ranking</td>
          </tr>
        </tbody>
      </table>
      <p>
        Practical consequence: on the App Store, write the description purely to
        convince a human, because it will not help you rank. On Google Play, the
        description does both jobs, so you have to balance readability against
        getting your target phrases in — usually two or three mentions across
        4000 characters, placed where they read naturally.
      </p>

      <h3>Using the App Store keywords field well</h3>
      <p>
        Do not put spaces after your commas — each space costs a character you
        could spend on another term. Do not repeat any word already in your
        title or subtitle; those are indexed, so repeating them is pure waste.
        And do not add your own brand name — you already rank for it.
      </p>

      <h2>Promotional text: the field with no ranking value</h2>
      <p>
        The App Store&apos;s 170-character promotional text sits above the
        description and — this is the useful part — can be changed without
        submitting a new build. It is perfect for a sale, an event, or a
        &ldquo;new in this version&rdquo; note. It is not indexed, so keywords
        here do nothing for search. Google Play has no direct equivalent; the
        closest lever is editing your short description.
      </p>

      <h2>Screenshots and graphics</h2>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screenshots</td>
            <td>Up to 10 per device</td>
            <td>Up to 8 per type</td>
          </tr>
          <tr>
            <td>Phone size</td>
            <td>6.7&Prime; = 1290&times;2796</td>
            <td>Min 1080px on short side</td>
          </tr>
          <tr>
            <td>Feature graphic</td>
            <td>—</td>
            <td>1024&times;500 (required)</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>1024&times;1024 (in build)</td>
            <td>512&times;512</td>
          </tr>
        </tbody>
      </table>
      <p>
        Google&apos;s feature graphic has no App Store analogue and is easy to
        forget — it appears at the top of your Play listing and in promotional
        placements, so a missing or ugly one is very visible. Both stores let you
        localize screenshots, and both will show whatever language you uploaded,
        even if it is wrong for the viewer.
      </p>

      <h2>Reviews and replies</h2>
      <p>
        You can reply publicly to reviews on both stores, but the mechanics
        differ. Google Play allows one reply per review, and you can edit it
        later. The App Store also supports public replies, but your reply appears
        after moderation rather than instantly. Neither store lets you reply
        privately, so every response is public-facing copy — write accordingly.
      </p>
      <table>
        <thead>
          <tr>
            <th>Behavior</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Public reply</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Replies per review</td>
            <td>One thread</td>
            <td>One reply, editable</td>
          </tr>
          <tr>
            <td>When it appears</td>
            <td>After moderation</td>
            <td>Immediately</td>
          </tr>
        </tbody>
      </table>

      <h2>What this means for a two-store release</h2>
      <p>
        Maintain the fields as related-but-separate. Share the brand voice and
        the core value proposition, but write the App Store description for
        persuasion and the Google Play description for persuasion plus indexing.
        Fill the App Store keywords field with terms you cannot fit into the
        visible copy, and make sure the Play short description carries a keyword
        because it is doing ranking work the App Store subtitle does elsewhere.
      </p>
      <p>
        The tab-juggling is the hard part — keeping two consoles, several
        languages, and two sets of rules straight in your head. Managing both
        listings in one place (with per-language counters against each
        store&apos;s exact limit) is most of why AppBoard exists. But even a
        spreadsheet with these limits pinned at the top will save you from the
        common mistakes.
      </p>
    </ArticleLayout>
  );
}
