import Image from "next/image";

import {
	ArrowRightIcon,
	ButtonLink,
	CheckIcon,
	SectionHeading,
} from "@/components/ui";
import { HOME_CONTENT } from "@/lib/i18n/content/home";
import { DEFAULT_LOCALE, type SiteLocale } from "@/lib/i18n/locales";

import type { JSX } from "react";
import { APP_URL } from "@/lib/seo";

const GALLERY_SOURCES = [
	"/images/editor/tpl-hero.webp",
	"/images/editor/tpl-minimal-dark.webp",
	"/images/editor/tpl-award-laurel.webp",
	"/images/editor/tpl-sahara.webp",
	"/images/editor/tpl-social-proof.webp",
	"/images/editor/tpl-midnight.webp",
	"/images/editor/tpl-curved-promo.webp",
	"/images/editor/tpl-feature-callout.webp",
	"/images/editor/tpl-clay-showcase.webp",
	"/images/editor/tpl-bold-statement.webp",
	"/images/editor/tpl-minimal-light.webp",
];

export function FreeToolSection({
	locale = DEFAULT_LOCALE,
}: {
	locale?: SiteLocale;
}): JSX.Element {
	const copy = HOME_CONTENT[locale].freeTool;
	const gallery = copy.gallery.map((item, index) => ({
		...item,
		src: GALLERY_SOURCES[index],
	}));

	return (
		<section className="scroll-mt-24 px-4 py-24 sm:px-6" id="free-tool">
			<div className="mx-auto max-w-6xl">
				<div className="rounded-3xl border border-line bg-panel/40 p-8 sm:p-12">
					<div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
						<div>
							<SectionHeading
								align="left"
								description={copy.description}
								eyebrow={copy.eyebrow}
								title={copy.title}
							/>
							<ul className="mt-8 space-y-4">
								{copy.points.map((point) => (
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
									{copy.ctaLabel}
									<ArrowRightIcon className="size-4" />
								</ButtonLink>
								<span className="text-sm text-muted">{copy.ctaNote}</span>
							</div>
						</div>
						<div className="relative mx-auto hidden h-80 w-full max-w-sm lg:block">
							<div className="absolute left-0 top-6 w-36 -rotate-6 overflow-hidden rounded-2xl border border-line shadow-2xl">
								<Image
									alt={gallery[1].alt}
									height={312}
									src={gallery[1].src}
									width={144}
								/>
							</div>
							<div className="absolute left-1/2 top-0 z-10 w-40 -translate-x-1/2 overflow-hidden rounded-2xl border border-accent/40 shadow-[0_24px_60px_rgba(91,94,232,0.35)]">
								<Image
									alt={gallery[0].alt}
									height={347}
									src={gallery[0].src}
									width={160}
								/>
							</div>
							<div className="absolute right-0 top-6 w-36 rotate-6 overflow-hidden rounded-2xl border border-line shadow-2xl">
								<Image
									alt={gallery[3].alt}
									height={312}
									src={gallery[3].src}
									width={144}
								/>
							</div>
						</div>
					</div>

					<div className="mt-12">
						<p className="text-sm font-medium text-muted">{copy.galleryLead}</p>
						<div className="mt-5 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
							{gallery.map((item) => (
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
