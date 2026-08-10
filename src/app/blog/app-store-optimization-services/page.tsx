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

const SLUG = "app-store-optimization-services";
const PL_SLUG = getPlSlugForEn(SLUG) ?? "promocja-aplikacji-mobilnej";
const article = getArticle(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description:
    "What app store optimization services actually deliver, what agencies cost in 2026, how that compares to doing ASO yourself with tools, and how to vet a vendor.",
  languages: buildBlogAlternates(SLUG),
  locale: "en_US",
  path: `/blog/${SLUG}`,
  title: "App store optimization services vs doing it yourself (2026)",
});

const FAQ: FaqEntry[] = [
  {
    answer:
      "Published third-party estimates put freelancers and boutique consultants at roughly $1,500 to $4,000 per month, mid-market agencies at $5,000 to $15,000, and enterprise agencies at $15,000 and up. One-off audits are commonly quoted between $2,000 and $7,500. Treat all of these as estimates: most reputable ASO agencies do not publish prices at all, and every source quoting agency prices is itself selling something.",
    question: "How much do app store optimization services cost?",
  },
  {
    answer:
      "Keyword research and a semantic core per market, metadata writing for title, subtitle, keyword field and description, creative direction and A/B testing of screenshots and icons, localization for target markets, competitor tracking, and a recurring report. Ongoing engagements add experiment design and a monthly or bi-weekly review cadence.",
    question: "What does an ASO agency actually do?",
  },
  {
    answer:
      "Metadata changes typically show keyword position movement within two to four weeks once indexed, meaningful install impact takes two to three months, and a full read on return usually needs four to six months. Any vendor promising a top ranking in weeks is describing paid installs, not optimization.",
    question: "How long does ASO take to show results?",
  },
  {
    answer:
      "No legitimate agency can guarantee a ranking, because neither Apple nor Google sells ranking positions. Vendors that do guarantee results are almost always selling incentivized installs, bulk ratings or purchased reviews. Those violate both stores' guidelines and can get an app removed and a developer account terminated.",
    question: "Do ASO agencies guarantee rankings?",
  },
  {
    answer:
      "Roughly when a sustained retainer would exceed what an in-house hire costs fully loaded, which lands around $10,000 per month in most markets. Below that, an agency buys you senior judgement without a headcount. Above it, you are paying agency margin for work a dedicated person could own with better product context.",
    question: "When should I hire in-house instead of an agency?",
  },
  {
    answer:
      "Yes, and for a first app it is usually the right call. The stores expose the data you need for free, and tools start below $20 per month. What you are really buying from an agency is not access to data but the hours and the judgement to use it. If someone on your team will spend a few hours a month on ASO, tools are enough.",
    question: "Can I do ASO myself instead of hiring a service?",
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
        Search for app store optimization services and you get three kinds of
        page: agency sales pages with no prices, tool vendors explaining why you
        should buy a tool instead, and, on the first page of results, at least
        one vendor openly selling incentivized installs and bulk reviews with a
        published per-unit price list. You also get a couple of results about
        Administrative Services Only, an unrelated HR outsourcing model that
        shares the acronym.
      </p>
      <p>
        This is a comparison written by a tool vendor, so treat our conclusion
        with the same suspicion you should apply to everyone else&apos;s. What we
        can do is show the numbers with their sources labelled, including the
        cases where the honest answer is that nobody publishes a price.
      </p>

      <h2>What an ASO service actually delivers</h2>
      <p>
        Strip the positioning from a dozen agency pages and the scope is
        remarkably consistent. Six deliverables appear on essentially every one:
      </p>
      <ol>
        <li>
          <strong>Keyword research per market</strong>, producing a semantic core
          rather than a list, ideally rebuilt for each language rather than
          translated.
        </li>
        <li>
          <strong>Metadata optimization</strong> for title, subtitle, keyword
          field, short and full description, per store and per locale.
        </li>
        <li>
          <strong>Creative optimization and A/B testing</strong> of icon,
          screenshots and preview video, run through Apple Product Page
          Optimization and Google Play Store Listing Experiments.
        </li>
        <li>
          <strong>Localization</strong> of metadata and creatives for target
          markets.
        </li>
        <li>
          <strong>Competitor and category tracking</strong>.
        </li>
        <li>
          <strong>Reporting</strong>, usually monthly at entry tiers and weekly
          at premium ones.
        </li>
      </ol>
      <p>
        Notice what is not on that list: nobody is doing anything you cannot do.
        There is no privileged access, no back channel to Apple, no ranking API.
        What an agency sells is hours and judgement, applied consistently.
      </p>

      <h2>What it costs</h2>
      <p>
        Here is the awkward truth about this section. Of the agencies that rank
        for this keyword, the credible ones publish no pricing at all. Phiture,
        Moburst, Yodel Mobile and Gummicube all say contact us. The only vendors
        publishing detailed per-unit prices are the ones selling installs and
        reviews. Everything below therefore comes from third-party estimates, and
        every one of those sources sells either a competing agency service or a
        tool.
      </p>
      <table>
        <thead>
          <tr>
            <th>Engagement</th>
            <th>Reported range</th>
            <th>Source type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freelancer or boutique consultant, monthly</td>
            <td>$1,500 to $4,000</td>
            <td>Third-party estimate</td>
          </tr>
          <tr>
            <td>Mid-market agency, monthly</td>
            <td>$5,000 to $15,000</td>
            <td>Third-party estimate</td>
          </tr>
          <tr>
            <td>Enterprise agency, monthly</td>
            <td>$15,000 and up, often with a minimum commitment</td>
            <td>Third-party estimate</td>
          </tr>
          <tr>
            <td>One-off ASO audit</td>
            <td>$2,000 to $7,500</td>
            <td>Third-party estimate</td>
          </tr>
          <tr>
            <td>Audit, published price</td>
            <td>500 EUR (AppFollow)</td>
            <td>Vendor published</td>
          </tr>
          <tr>
            <td>Senior freelance hourly, US and Western Europe</td>
            <td>$75 to $150, typically 5 to 15 hours per month</td>
            <td>Third-party estimate</td>
          </tr>
          <tr>
            <td>Screenshot production, per set</td>
            <td>$300 to $1,500 freelance, higher through an agency</td>
            <td>Third-party estimate</td>
          </tr>
        </tbody>
      </table>
      <p>
        Against that, the tooling side is knowable, because tool vendors publish
        prices. Paid ASO tools start at $9.99 per month and mid tiers land
        between $150 and $500. Apple charges $99 a year for the Developer
        Program and Google charges $25 once. We compared the tools and their
        actual verified prices in{" "}
        <Link href="/blog/best-aso-tools">our ASO tools comparison</Link>.
      </p>
      <p>
        The gap is not subtle. The cheapest credible agency retainer is roughly
        twenty times the cost of a good tool subscription. That gap is labour,
        and whether it is worth paying depends entirely on whether anyone on your
        side has the hours.
      </p>

      <h2>The real comparison is with your own time</h2>
      <p>
        Doing ASO yourself is not free, it is just a different budget line.
        Honest accounting for a two-store app in three or four markets:
      </p>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Realistic time</th>
            <th>Cadence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initial keyword research per market</td>
            <td>4 to 8 hours</td>
            <td>Once, then quarterly refresh</td>
          </tr>
          <tr>
            <td>Writing and fitting metadata to character limits</td>
            <td>3 to 5 hours</td>
            <td>Per major release</td>
          </tr>
          <tr>
            <td>Screenshot design and export per locale</td>
            <td>4 to 10 hours</td>
            <td>Per major release</td>
          </tr>
          <tr>
            <td>Setting up and reading one A/B test</td>
            <td>2 to 3 hours</td>
            <td>Per test, 4 to 8 weeks each</td>
          </tr>
          <tr>
            <td>Rank and review monitoring</td>
            <td>1 to 2 hours</td>
            <td>Monthly</td>
          </tr>
        </tbody>
      </table>
      <p>
        Call it fifteen to thirty hours to get set up and three to six hours a
        month to keep it moving. If a founder or a product marketer has that,
        tools plus discipline beats a low-end retainer, because nobody
        understands your positioning better than you do. If nobody has that, the
        tool subscription becomes shelfware and the agency is the cheaper option
        despite costing twenty times more.
      </p>

      <h2>The break-even</h2>
      <p>
        There are effectively four rungs, and the decision between them is about
        who owns the hours, not about capability:
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Sensible choice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pre-launch or first app, no revenue</td>
            <td>Free consoles plus a cheap tool. Do it yourself.</td>
          </tr>
          <tr>
            <td>Growing, one or two markets, someone owns growth</td>
            <td>Tools, plus a one-off paid audit for a second opinion</td>
          </tr>
          <tr>
            <td>Multi-market, nobody owns ASO</td>
            <td>Freelancer or boutique retainer</td>
          </tr>
          <tr>
            <td>Retainer would exceed roughly $10,000 per month</td>
            <td>Hire in-house; a fully loaded ASO manager costs less</td>
          </tr>
        </tbody>
      </table>
      <p>
        That last line is worth stating plainly, because agencies rarely will. A
        $120,000 base salary loads to something like $165,000 to $226,000 all in
        with taxes, benefits, equipment and tooling. Once a retainer passes that
        annualised, you are paying agency margin for work an employee would do
        with far better product context.
      </p>
      <p>
        A cheaper intermediate step that almost nobody offers you: buy a one-off
        audit rather than a retainer. You get the senior read on your listing,
        the keyword gaps and the creative direction, and you execute it yourself.
        If the audit is good, it pays for itself immediately. If it is generic,
        you learned that for a few thousand dollars instead of a year of
        retainer.
      </p>

      <h2>The vendors you should walk away from</h2>
      <p>
        This is the part the agency comparison pages leave out, and it matters
        more than any pricing table. Vendors selling app store manipulation rank
        on the same search results as legitimate agencies, use the same
        vocabulary, and publish price lists that make them look like the
        transparent option.
      </p>
      <p>
        What they sell, in their own words, is keyword installs priced per
        install, ratings priced per rating, and reviews priced per review,
        including guaranteed reviews delivered on a schedule. The pricing is
        real. So are the consequences: buying installs, ratings or reviews
        violates both stores&apos; guidelines, and enforcement ranges from update
        rejection to permanent removal of the app and termination of the
        developer account. Removal for manipulation is frequently not reversed on
        appeal.
      </p>
      <p>Concrete warning signs, in order of how damning they are:</p>
      <ul>
        <li>
          <strong>A guaranteed ranking or a guaranteed number of reviews.</strong>{" "}
          Nobody can guarantee either without buying them.
        </li>
        <li>
          <strong>Pricing per install, per rating or per review.</strong> That is
          the product, stated openly.
        </li>
        <li>
          <strong>Results promised in days.</strong> Metadata takes weeks to
          index. Anything faster is traffic, not optimization.
        </li>
        <li>
          <strong>Vagueness about where installs come from.</strong> Ask directly
          whether any installs, ratings or reviews are delivered by the agency or
          any subcontractor, and get the answer in the contract.
        </li>
        <li>
          <strong>Case studies with no methodology.</strong> A ranking chart with
          a vertical line and no explanation of what changed is not evidence.
        </li>
      </ul>

      <h2>Questions to ask before signing</h2>
      <p>
        Six questions separate a good agency from a competent-sounding one. The
        answers should be specific.
      </p>
      <ol>
        <li>
          <strong>Where does your keyword data come from?</strong> A named tool
          or their own dataset. If they cannot answer, they are reselling a $79
          subscription.
        </li>
        <li>
          <strong>How do you separate iOS and Android strategy?</strong> Apple
          has a keyword field, Google does not. An agency treating both the same
          has not done this before.
        </li>
        <li>
          <strong>What is the update cadence, and who publishes?</strong> Do they
          push metadata to your consoles, or hand you a document?
        </li>
        <li>
          <strong>How do you measure success?</strong> The right answer includes
          conversion rate and installs, not just keyword position.
        </li>
        <li>
          <strong>Can I see a sample competitive analysis?</strong> Redacted is
          fine. Refusal is not.
        </li>
        <li>
          <strong>What do I keep if I leave?</strong> The keyword research, the
          creative source files and the test history should be yours. Get it in
          writing.
        </li>
      </ol>

      <h2>What to do this week either way</h2>
      <p>
        Whether you hire someone or not, the same three things move first, and
        doing them yourself first makes any later agency engagement cheaper
        because you arrive with a baseline instead of a blank page.
      </p>
      <ol>
        <li>
          Fix the metadata fields you already control. The field-by-field
          differences between the stores are in our{" "}
          <Link href="/blog/app-store-vs-google-play-metadata">
            metadata comparison
          </Link>
          .
        </li>
        <li>
          Rewrite the first two screenshots, which carry most of your conversion.
        </li>
        <li>
          Start replying to reviews, which is unglamorous, measurable, and
          something agencies charge for. Our{" "}
          <Link href="/blog/respond-to-app-reviews">
            review reply system
          </Link>{" "}
          takes about an hour a week.
        </li>
      </ol>
      <p>
        Then run one experiment and wait the full four to eight weeks for
        significance. If after a quarter of that you have no keyword movement and
        no conversion change, you have a real reason to buy help, and you have
        the baseline data to brief them with.
      </p>

      <h2>Frequently asked questions</h2>
      {FAQ.map((entry) => (
        <div key={entry.question}>
          <h3>{entry.question}</h3>
          <p>{entry.answer}</p>
        </div>
      ))}

      <p>
        If the do-it-yourself route is where you land, AppBoard handles the
        listing, screenshot and review side of it in one panel and is{" "}
        <Link href="/pricing">free while it is in beta</Link>.
      </p>
    </ArticleLayout>
  );
}
