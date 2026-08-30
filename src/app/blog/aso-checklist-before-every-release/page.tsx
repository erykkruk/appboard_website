import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { getArticle } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "aso-checklist-before-every-release";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "A practical pre-release ASO checklist for App Store and Google Play: metadata, character limits, screenshots, and the store rules that cause rejections.",
  path: `/blog/${SLUG}`,
  title: "The pre-release ASO checklist",
});

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <p>
        Most metadata mistakes I have shipped were not typos. They were things I
        forgot to check because I was tired, it was late, and the build was
        already uploading. A checklist fixes that. It turns release day from a
        memory test into a boring, repeatable procedure - which is exactly what
        you want when a bad character in your title field can sit live for a week
        before anyone notices.
      </p>
      <p>
        Here is the list I run before every submission, split into the four
        things that actually move the needle: metadata, keywords, visuals, and
        the store-specific rules that get releases rejected.
      </p>

      <h2>Before you touch the store: freeze a baseline</h2>
      <p>
        The single most useful habit is knowing what your listing said
        yesterday. When conversion drops after a release, the first question is
        always &quot;what changed?&quot; - and if you cannot answer it in
        seconds, you are guessing. Keep a versioned record of every field per
        language. This is the kind of thing AppBoard&apos;s history view catches
        automatically, but even a git repo of exported metadata beats nothing.
      </p>

      <h2>Metadata checklist</h2>
      <p>
        Run every field against the store&apos;s hard limit. Both stores will
        silently truncate or reject, and the character that pushes you over is
        usually an emoji or a smart quote you pasted from a doc.
      </p>
      <ul>
        <li>
          <strong>App Store title (30 chars):</strong> brand plus one or two
          high-value keywords. No filler like &quot;- The best app&quot;.
        </li>
        <li>
          <strong>App Store subtitle (30 chars):</strong> a second keyword line,
          not a tagline. It is indexed - use it.
        </li>
        <li>
          <strong>Google Play title (30 chars):</strong> was 50 until 2021, so
          old advice is wrong. Trim anything you copied from years-old guides.
        </li>
        <li>
          <strong>Google Play short description (80 chars):</strong> shown above
          the fold and indexed. Lead with the value, not the category.
        </li>
        <li>
          <strong>Descriptions (4000 chars each):</strong> on Google Play this
          is keyword-indexed; on the App Store it is not. Write them differently
          (more on that below).
        </li>
      </ul>
      <p>
        Check the fields in the language you actually ship most installs in, not
        just your default locale. A truncated German subtitle is invisible to
        you and obvious to every German user.
      </p>

      <h3>The counter trap</h3>
      <p>
        Character counts are measured in Unicode code points, and stores count
        them their own way. An emoji can be one visible glyph but two units. If
        your editor shows 30 and the console rejects it, that is why. Count
        against the store&apos;s limit, not your text field&apos;s.
      </p>

      <h2>Keyword checklist</h2>
      <p>
        Keywords are the field people either obsess over or ignore. The App
        Store gives you a dedicated 100-character keywords field that users never
        see; Google Play has no such field and indexes your visible text
        instead. That difference should change how you fill each store.
      </p>
      <ul>
        <li>
          <strong>App Store keywords (100 chars):</strong> comma-separated, no
          spaces after commas (spaces waste characters). Do not repeat words
          already in your title or subtitle - they are already indexed.
        </li>
        <li>
          <strong>Singular vs plural:</strong> the algorithm handles most stems,
          so pick one form and spend the saved characters elsewhere.
        </li>
        <li>
          <strong>Google Play density:</strong> get your two or three target
          phrases into the title, short description, and naturally into the full
          description - without keyword-stuffing, which Google demotes.
        </li>
      </ul>
      <p>
        If you track keyword positions, note where you rank the day before a
        release so you can tell whether a metadata change actually helped. Guessing
        from install numbers alone conflates a dozen variables.
      </p>

      <h2>Visual checklist</h2>
      <p>
        Screenshots convert better than any word you write, and they are the
        easiest thing to get subtly wrong. Verify the exact specs every time -
        Apple and Google change accepted sizes more often than you would expect.
      </p>
      <ul>
        <li>
          <strong>App Store:</strong> up to 10 screenshots per device. The 6.7&Prime;
          iPhone reference size is 1290&times;2796.
        </li>
        <li>
          <strong>Google Play:</strong> up to 8 screenshots per type, phone
          screenshots at least 1080px on the short side, feature graphic exactly
          1024&times;500, icon 512&times;512.
        </li>
        <li>
          <strong>First two frames:</strong> assume most people never scroll.
          Your strongest message and clearest UI go here.
        </li>
        <li>
          <strong>Localized text on images:</strong> if your screenshots have
          captions baked in, every locale needs its own set. Ship the wrong
          language and the store shows it verbatim.
        </li>
      </ul>

      <h2>Store-rules checklist (the rejection list)</h2>
      <p>
        These are the ones that do not just underperform - they get you bounced
        from review and cost you days.
      </p>
      <ul>
        <li>
          <strong>No competitor names</strong> in any metadata field. This is a
          fast rejection on both stores.
        </li>
        <li>
          <strong>Promotional text (App Store, 170 chars):</strong> you can
          update it without a new build, so use it for time-sensitive messaging -
          but it is not indexed, so do not stuff keywords there.
        </li>
        <li>
          <strong>Screenshots must show the real app.</strong> Heavily stylized
          marketing frames that hide the actual UI are a common rejection reason.
        </li>
        <li>
          <strong>Age rating and data-safety forms</strong> match what the build
          actually does. A new SDK that collects data can invalidate a form you
          filled months ago.
        </li>
      </ul>

      <h2>The two-minute version</h2>
      <p>
        When you are shipping a hotfix and do not want the full pass, at least do
        this: confirm no field exceeds its limit, confirm the screenshots match
        the current build, and diff the metadata against the last release so you
        know exactly what you changed. Ninety percent of the damage I have done to
        listings would have been caught by those three checks.
      </p>
      <p>
        The point of a checklist is not that any single item is clever. It is
        that you never have to trust your memory at 11pm again. Save the list,
        run it every time, and release day gets quiet.
      </p>
    </ArticleLayout>
  );
}
