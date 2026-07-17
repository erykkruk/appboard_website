import { Footer, Header } from "@/components/layout";
import { FreeScreenshotEditor } from "@/components/screenshot-editor/free-editor";
import { JsonLd } from "@/components/ui";
import {
	buildFaqSchema,
	buildScreenshotEditorSchema,
	type FaqEntry,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const EDITOR_DESCRIPTION =
	"Free browser-based App Store and Google Play screenshot editor. Device mockups, gradients, text, shapes, panoramas, and templates. No sign-up. Export PNGs.";

export const metadata: Metadata = buildPageMetadata({
	description: EDITOR_DESCRIPTION,
	path: "/screenshot-editor",
	title: "Free ASO Screenshot Editor for App Store & Google Play",
});

const EDITOR_FAQ: FaqEntry[] = [
	{
		answer:
			"Yes. The AppBoard Screenshot Editor is completely free and runs entirely in your browser. There is no sign-up, no watermark, and no upload limit.",
		question: "Is the screenshot editor free?",
	},
	{
		answer:
			"No account is required. The editor is client-only: your screenshots, backgrounds, and fonts never leave your device, and designs are saved in your browser's local storage.",
		question: "Do I need an account to use it?",
	},
	{
		answer:
			"Your scenes are saved in this browser's localStorage under the name you choose. Open the “My scenes” dialog to load or delete them. Clearing your browser data removes them, so download important PNGs.",
		question: "Where are my designs saved?",
	},
	{
		answer:
			"The editor exports PNGs at the exact target size of the store display type you pick — for example 1290×2796 for the iPhone 6.7\" or 1080×1920 for Android phones — so uploads pass App Store Connect and Google Play validation.",
		question: "What image sizes does it export?",
	},
	{
		answer:
			"Yes. Choose a panorama layout of 2–5 panels and design one continuous scene; on export it is automatically sliced into that many individual store screenshots at the correct size.",
		question: "Can I create panorama screenshots?",
	},
];

export default function ScreenshotEditorPage(): JSX.Element {
	return (
		<>
			<JsonLd data={buildScreenshotEditorSchema()} />
			<JsonLd data={buildFaqSchema("/screenshot-editor", EDITOR_FAQ)} />
			<Header />
			<main className="relative w-full flex-1">
				<section className="px-4 pb-6 pt-16 text-center sm:px-6 sm:pt-20">
					<div className="mx-auto max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
							Free tool
						</p>
						<h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							Free ASO Screenshot Editor
						</h1>
						<p className="mt-5 text-lg leading-relaxed text-muted">
							Design App Store and Google Play screenshots right in your browser.
							Device mockups, gradients, decorative text, shapes, templates, and
							panoramas — then export print-ready PNGs. No sign-up, and every
							pixel stays on your device.
						</p>
					</div>
				</section>

				<section aria-label="Screenshot editor" className="px-2 sm:px-4">
					<div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
						<FreeScreenshotEditor />
					</div>
				</section>

				<section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">
						What is the AppBoard Screenshot Editor?
					</h2>
					<p className="mt-4 prose">
						The AppBoard Screenshot Editor is a free, client-side design tool for
						creating App Store Optimization (ASO) screenshots. It renders your
						app inside realistic device frames — iPhone, iPad, Android, Apple
						Watch, or a laptop, including real Apple product bezels — over
						gradient, mesh, or patterned backgrounds, with headline text, shapes,
						badges, and callouts on top. Everything is drawn on an HTML canvas in
						your browser and exported as a PNG at the exact size each store
						expects.
					</p>

					<h2 className="mt-12 text-2xl font-semibold tracking-tight text-foreground">
						Features
					</h2>
					<ul className="mt-4 grid gap-2 prose sm:grid-cols-2">
						<li>Device mockups for iPhone, iPad, Android, Watch, and laptop</li>
						<li>Real Apple product bezels (Photo style)</li>
						<li>Gradient, mesh, radial, and patterned backgrounds</li>
						<li>Decorative text with strokes, shadows, gradients, and curves</li>
						<li>Shapes, badges, callouts, and emoji stickers</li>
						<li>One-click templates and 3D device tilt</li>
						<li>Panorama layouts split into several store screenshots</li>
						<li>Undo/redo, snap guides, and in-browser autosave</li>
					</ul>

					<h2 className="mt-12 text-2xl font-semibold tracking-tight text-foreground">
						How to make App Store screenshots
					</h2>
					<ol className="mt-4 prose">
						<li>Pick a store size (e.g. iPhone 6.7&quot; or an Android phone).</li>
						<li>Choose a background preset or upload your own image.</li>
						<li>Upload your app screenshot into the device frame.</li>
						<li>Add a headline, shapes, or a callout to sell the feature.</li>
						<li>Press Download PNG to export at the exact store dimensions.</li>
					</ol>

					<h2 className="mt-12 text-2xl font-semibold tracking-tight text-foreground">
						Frequently asked questions
					</h2>
					<div className="mt-4 flex flex-col gap-6">
						{EDITOR_FAQ.map((item) => (
							<div key={item.question}>
								<h3 className="text-lg font-semibold text-foreground">
									{item.question}
								</h3>
								<p className="mt-2 prose">{item.answer}</p>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
