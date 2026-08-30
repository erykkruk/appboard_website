import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { getArticle } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "how-to-write-app-store-descriptions";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "How to structure App Store and Google Play descriptions so both the algorithm and real people respond - the first line, formatting, and good vs bad examples.",
  path: `/blog/${SLUG}`,
  title: "Writing app descriptions that get read",
});

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <p>
        Almost nobody reads your full app description. On the App Store it does
        not even affect your ranking. So why write it well? Because the small
        fraction of people who do expand it are your highest-intent visitors -
        they are close to installing and looking for a reason. And on Google
        Play, where the description is keyword-indexed, it is doing double duty.
        Either way, the first line matters far more than the last paragraph.
      </p>

      <h2>The first line does the work</h2>
      <p>
        Both stores collapse the description and show only the first line or two
        before a &quot;more&quot; tap. Assume most people read only that. So
        your opening sentence has to state, plainly, what the app does and who it
        is for - not set a mood.
      </p>
      <p>
        <strong>Weak:</strong> In today&apos;s fast-paced world, staying
        organized has never been more important.
      </p>
      <p>
        <strong>Strong:</strong> Track every workout, see your strength trend
        over months, and never lose a personal record again.
      </p>
      <p>
        The strong version names concrete outcomes in the first breath. The weak
        one could describe a thousand apps. If a stranger read only your first
        sentence, would they know whether this app is for them? That is the whole
        test.
      </p>

      <h2>Structure beats prose</h2>
      <p>
        People scan store listings; they do not read them like an essay. A wall
        of text gets skipped. Break the description into short, scannable blocks:
      </p>
      <ul>
        <li>
          <strong>Opening (1-2 lines):</strong> what it does, who it is
          for, the main outcome.
        </li>
        <li>
          <strong>Feature groups:</strong> short headers followed by one or two
          lines each, not a 20-item bullet dump.
        </li>
        <li>
          <strong>Proof:</strong> a specific number, an award, a recognizable
          integration - something a skeptic can verify.
        </li>
        <li>
          <strong>Close:</strong> a plain call to action and any support or
          privacy note.
        </li>
      </ul>
      <p>
        You have 4000 characters on both stores. That is room for maybe 250-350
        words of actual content. Using all 4000 is almost always a mistake; the
        density of a good landing page beats the length of a bad one.
      </p>

      <h3>Write for Google Play&apos;s index without stuffing</h3>
      <p>
        On Google Play the description feeds search, so your two or three target
        phrases should appear - but naturally, a couple of times, in sentences a
        human would actually write. Keyword-stuffing (&quot;best free habit
        tracker habit app habit tracking daily habits&quot;) reads like spam and
        Google demotes it. If you would be embarrassed to read the sentence
        aloud, rewrite it.
      </p>
      <p>
        On the App Store, since the description is not indexed, drop the keyword
        anxiety entirely and write purely to convince. Your keywords live in the
        dedicated field; the description is a sales page.
      </p>

      <h2>Concrete beats clever</h2>
      <p>
        The fastest way to improve any app description is to replace adjectives
        with facts. &quot;Powerful analytics&quot; means nothing.
        &quot;See your 7-day and 30-day trends, export to CSV, and compare any
        two periods&quot; means something. Numbers, nouns, and verbs sell;
        adjectives decorate.
      </p>
      <table>
        <thead>
          <tr>
            <th>Vague</th>
            <th>Concrete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Powerful and easy to use</td>
            <td>Log a workout in two taps</td>
          </tr>
          <tr>
            <td>Advanced privacy features</td>
            <td>Your data stays on device - no account required</td>
          </tr>
          <tr>
            <td>Seamless syncing</td>
            <td>Changes appear on your other devices in seconds</td>
          </tr>
          <tr>
            <td>Trusted by thousands</td>
            <td>Used by 40,000 lifters logging 2M sets a month</td>
          </tr>
        </tbody>
      </table>

      <h2>Localize the message, not just the words</h2>
      <p>
        Machine-translating your English description into ten languages is better
        than nothing, but it is not the same as a localized listing. Idioms fall
        flat, the keyword phrases people actually search differ by market, and
        the first-line hook that lands in English may be clumsy in German. At
        minimum, hand-check the opening line and the feature headers per locale -
        those are what people read.
      </p>

      <h2>Keep a version history</h2>
      <p>
        Descriptions drift. You tweak a line for a sale, add a feature, remove a
        deprecated one, and six months later you cannot remember what the
        original said or which edit moved conversion. Version the copy the way
        you version code - every change, per language, with the ability to roll
        back. This is exactly what AppBoard&apos;s change history is for, but the
        principle holds with any tool: never let your live copy be the only copy
        you have.
      </p>

      <h2>A quick editing pass</h2>
      <p>Before you ship a description, read it once and ask:</p>
      <ol>
        <li>
          Does the first sentence say what the app does and who it is for?
        </li>
        <li>Did I replace at least three adjectives with facts?</li>
        <li>Can someone scan the headers and get the gist in ten seconds?</li>
        <li>
          On Google Play, do my target phrases appear naturally two or three
          times?
        </li>
        <li>Is there one concrete proof point a skeptic could verify?</li>
      </ol>
      <p>
        Do that pass every release and your description will already beat most of
        the store. The bar is low - most descriptions open with a cliché and
        never recover. Say something real in the first line and you are ahead.
      </p>
    </ArticleLayout>
  );
}
