import Image from "next/image";

import {
	ArrowRightIcon,
	ButtonLink,
	CheckIcon,
	SectionHeading,
} from "@/components/ui";

import type { JSX } from "react";
import { APP_URL } from "@/lib/seo";

const TOOL_POINTS = [
	"Real 3D device models — rotate an iPhone or Galaxy in true WebGL, plus drawn and clay styles",
	"20+ scene templates: hero shots, panoramas, social proof, award laurels, dark mode",
	"Gradients, mesh, patterns, decorative text, shapes — and language variants per locale",
	"Panorama layouts that export as several consecutive store screenshots",
	"100% in your browser — no sign-up, nothing uploaded to a server",
];

interface GalleryItem {
	alt: string;
	label: string;
	src: string;
}

const GALLERY: GalleryItem[] = [
	{
		alt: "Hero screenshot template: 3D-tilted iPhone on a magenta-violet gradient with a bold headline",
		label: "Hero 3D",
		src: "/images/editor/tpl-hero.webp",
	},
	{
		alt: "Dark mode screenshot template with dotted background and a light app UI in an iPhone frame",
		label: "Minimal dark",
		src: "/images/editor/tpl-minimal-dark.webp",
	},
	{
		alt: "Award laurel screenshot template: App of the Day laurels above a device mockup on deep violet",
		label: "Award laurel",
		src: "/images/editor/tpl-award-laurel.webp",
	},
	{
		alt: "Sahara screenshot template: warm dune gradient with a tilted device and handwritten headline",
		label: "Sahara",
		src: "/images/editor/tpl-sahara.webp",
	},
	{
		alt: "Social proof screenshot template with a five-star review quote above the device",
		label: "Social proof",
		src: "/images/editor/tpl-social-proof.webp",
	},
	{
		alt: "Midnight screenshot template: elegant dark scene with After hours, in style headline",
		label: "Midnight",
		src: "/images/editor/tpl-midnight.webp",
	},
	{
		alt: "Curved promo screenshot template: orange gradient with arched Start your journey text",
		label: "Curved promo",
		src: "/images/editor/tpl-curved-promo.webp",
	},
	{
		alt: "Feature callout screenshot template with a speech-bubble annotation pointing at the app UI",
		label: "Feature callout",
		src: "/images/editor/tpl-feature-callout.webp",
	},
	{
		alt: "Clay showcase screenshot template: teal wave background with a clay-style device mockup",
		label: "Clay showcase",
		src: "/images/editor/tpl-clay-showcase.webp",
	},
	{
		alt: "Bold statement screenshot template: Loved by 1M+ users headline underlined in yellow",
		label: "Bold statement",
		src: "/images/editor/tpl-bold-statement.webp",
	},
	{
		alt: "Minimal light screenshot template: clean white scene with Simple. Fast. Yours. headline",
		label: "Minimal light",
		src: "/images/editor/tpl-minimal-light.webp",
	},
];

export function FreeToolSection(): JSX.Element {
	return (
		<section className="scroll-mt-24 px-4 py-24 sm:px-6" id="free-tool">
			<div className="mx-auto max-w-6xl">
				<div className="rounded-3xl border border-line bg-panel/40 p-8 sm:p-12">
					<div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
						<div>
							<SectionHeading
								align="left"
								description="Design App Store and Google Play screenshots for free — right in your browser. Pick a template, drop in your screenshot, rotate a real 3D device, export at exact store dimensions. No account needed."
								eyebrow="Free tool"
								title="Free ASO Screenshot Editor"
							/>
							<ul className="mt-8 space-y-4">
								{TOOL_POINTS.map((point) => (
									<li className="flex gap-3" key={point}>
										<span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
											<CheckIcon className="size-3.5" />
										</span>
										<span className="text-sm leading-relaxed text-muted">
											{point}
										</span>
									</li>
								))}
							</ul>
							<div className="mt-9 flex flex-wrap items-center gap-4">
								<ButtonLink href={`${APP_URL}/editor`} size="lg" variant="primary">
									Open the editor
									<ArrowRightIcon className="size-4" />
								</ButtonLink>
								<span className="text-sm text-muted">
									Free forever · no login
								</span>
							</div>
						</div>
						<div className="relative mx-auto hidden h-80 w-full max-w-sm lg:block">
							<div className="absolute left-0 top-6 w-36 -rotate-6 overflow-hidden rounded-2xl border border-line shadow-2xl">
								<Image
									alt={GALLERY[1].alt}
									height={312}
									src={GALLERY[1].src}
									width={144}
								/>
							</div>
							<div className="absolute left-1/2 top-0 z-10 w-40 -translate-x-1/2 overflow-hidden rounded-2xl border border-accent/40 shadow-[0_24px_60px_rgba(91,94,232,0.35)]">
								<Image
									alt={GALLERY[0].alt}
									height={347}
									src={GALLERY[0].src}
									width={160}
								/>
							</div>
							<div className="absolute right-0 top-6 w-36 rotate-6 overflow-hidden rounded-2xl border border-line shadow-2xl">
								<Image
									alt={GALLERY[3].alt}
									height={312}
									src={GALLERY[3].src}
									width={144}
								/>
							</div>
						</div>
					</div>

					<div className="mt-12">
						<p className="text-sm font-medium text-muted">
							Every one of these took under a minute — pick a template, your
							screenshot stays, the scene changes:
						</p>
						<div className="mt-5 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
							{GALLERY.map((item) => (
								<figure className="shrink-0" key={item.src}>
									<div className="w-36 overflow-hidden rounded-xl border border-line transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50 sm:w-40">
										<Image
											alt={item.alt}
											height={347}
											src={item.src}
											width={160}
										/>
									</div>
									<figcaption className="mt-2 text-center text-xs text-muted">
										{item.label}
									</figcaption>
								</figure>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
