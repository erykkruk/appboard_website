import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/article-layout";
import { getArticle } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "keyword-research-for-apps";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "A practical app keyword research workflow that does not need a $300/month tool: mine reviews and autocomplete, judge relevance and difficulty, and track real rankings.",
  path: `/blog/${SLUG}`,
  title: "Keyword research for apps",
});

export default function Page(): JSX.Element {
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      <p>
        Keyword research for apps has a reputation for requiring an expensive
        tool and a spreadsheet with forty columns. It does not. The paid tools
        estimate search volume and difficulty using models that are, at best,
        directionally correct - and you can get most of the way there with free
        signals and a bit of discipline. Here is the workflow I actually use.
      </p>

      <h2>Step 1: build a seed list from three sources</h2>
      <p>
        Start wide. You are collecting candidate phrases, not judging them yet.
        Three sources cover almost everything:
      </p>
      <h3>Store autocomplete</h3>
      <p>
        Type your core term into the App Store and Google Play search bars and
        write down every suggestion. Autocomplete is ranked by real query
        popularity, so it is the closest thing to free volume data you have. Do
        it on both stores - their suggestions differ.
      </p>
      <h3>Your own reviews</h3>
      <p>
        This is the source people skip, and it is the best one. Read your reviews
        and note the exact words users use to describe what your app does for
        them. Real users rarely use your marketing vocabulary. If they keep
        saying &quot;meal planner&quot; and your listing says &quot;nutrition
        organizer&quot;, you have found a gap. AppBoard surfaces review themes
        automatically, but reading fifty reviews by hand works fine too.
      </p>
      <h3>Competitors</h3>
      <p>
        Look at the titles and subtitles of the apps that rank for your core
        term. They have already done research; their word choices are data. You
        are not copying - you are noting which phrases the market treats as
        important.
      </p>

      <h2>Step 2: score each phrase on relevance and difficulty</h2>
      <p>
        Now narrow. For each candidate, judge two things honestly: how relevant
        it is to what your app actually does, and how hard it would be to rank.
        Relevance is non-negotiable - ranking for a term that brings the wrong
        users just tanks your conversion and, over time, your ranking.
      </p>
      <table>
        <thead>
          <tr>
            <th>Bucket</th>
            <th>Relevance</th>
            <th>Difficulty</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Core</td>
            <td>High</td>
            <td>High</td>
            <td>Target long-term</td>
          </tr>
          <tr>
            <td>Winnable</td>
            <td>High</td>
            <td>Low-medium</td>
            <td>Target now</td>
          </tr>
          <tr>
            <td>Long tail</td>
            <td>High, specific</td>
            <td>Low</td>
            <td>Easy early wins</td>
          </tr>
          <tr>
            <td>Vanity</td>
            <td>Low</td>
            <td>Any</td>
            <td>Drop</td>
          </tr>
        </tbody>
      </table>
      <p>
        As a new or small app, live in the &quot;winnable&quot; and &quot;long
        tail&quot; rows. You will not outrank an incumbent for
        &quot;fitness&quot; this quarter, but you can absolutely own
        &quot;strength training log for lifters&quot; - and those users convert
        better anyway because the match is exact.
      </p>

      <h3>Judging difficulty without a paid metric</h3>
      <p>
        Search the term and look at the top results. Are they big, polished apps
        with tens of thousands of ratings, or a thin field of smaller apps? Is
        the exact phrase in their titles, or are they ranking loosely? A term
        where the top apps do not even target it directly is a term you can take.
      </p>

      <h2>Step 3: place keywords by store</h2>
      <p>
        The two stores want the same research placed differently, because their
        indexing differs.
      </p>
      <ul>
        <li>
          <strong>App Store:</strong> highest-value phrases in the title and
          subtitle; everything else in the 100-character keywords field,
          comma-separated with no spaces, never repeating title words.
        </li>
        <li>
          <strong>Google Play:</strong> no keywords field, so weave your phrases
          into the title, the 80-character short description, and naturally into
          the full description - two or three mentions, not twenty.
        </li>
      </ul>
      <p>
        A single phrase might live in your App Store subtitle and your Google
        Play short description - same research, different slot. Keeping that
        mapping straight across languages is the tedious part; a listing editor
        with per-store counters helps, but a table works too.
      </p>

      <h2>Step 4: measure, then iterate</h2>
      <p>
        Research is a hypothesis. Rankings are the result. Record where you rank
        for your target phrases before a change, ship the change, and check again
        in a week or two - store indexes take days to update, so do not panic on
        day one.
      </p>
      <p>
        Track the top 50 positions for your target set and watch the trend, not
        the daily noise. Positions bounce; what matters is whether a phrase is
        drifting up or down over weeks. AppBoard tracks keyword positions in the
        top 50 for exactly this loop, but the discipline is what counts: change
        one thing, wait, measure, keep what worked.
      </p>

      <h3>Change one variable at a time</h3>
      <p>
        The temptation on release day is to rewrite the title, swap the keywords,
        and redo the screenshots all at once. Then something moves and you have
        no idea which change did it. If you can, isolate metadata changes from
        big visual overhauls so each experiment tells you something.
      </p>

      <h2>What you can safely ignore</h2>
      <p>
        You do not need precise search-volume numbers to start. You do not need
        to target hundreds of keywords - a focused set of ten to fifteen you can
        realistically win beats a scattergun of a hundred you cannot. And you do
        not need to re-research from scratch every month; revisit when you add a
        major feature, enter a new market, or see a phrase in your reviews you
        had not considered.
      </p>
      <p>
        The whole workflow fits on an index card: gather candidates from
        autocomplete, reviews, and competitors; keep the relevant, winnable ones;
        place them per store; measure and iterate. Do that consistently and you
        will out-rank apps spending far more, because most of them never do the
        boring part.
      </p>
    </ArticleLayout>
  );
}
