import {
	ArrowRightIcon,
	DiscordIcon,
	RedditIcon,
	SectionHeading,
} from "@/components/ui";
import { OPEN_SOURCE_CONTENT } from "@/lib/i18n/content/opensource";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

import type { SiteLocale } from "@/lib/i18n/locales";
import type { JSX } from "react";
import { DISCORD_URL, REDDIT_URL } from "@/lib/seo";

const CHANNEL_ICONS: JSX.Element[] = [
	<DiscordIcon className="size-7" key="discord" />,
	<RedditIcon className="size-7" key="reddit" />,
];

const CHANNEL_HREFS: string[] = [DISCORD_URL, REDDIT_URL];

export function CommunitySection({
	locale = DEFAULT_LOCALE,
}: {
	locale?: SiteLocale;
}): JSX.Element {
	const content = OPEN_SOURCE_CONTENT[locale].community;

	return (
		<section className="scroll-mt-24 px-4 py-24 sm:px-6" id="community">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					description={content.description}
					eyebrow={content.eyebrow}
					title={content.title}
				/>
				<div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
					{content.channels.map((channel, index) => (
						<a
							className="group flex flex-col rounded-3xl border border-line bg-panel/40 p-8 transition-colors hover:border-accent/50"
							href={CHANNEL_HREFS[index]}
							key={channel.name}
							rel="noopener noreferrer"
							target="_blank"
						>
							<div className="flex items-center gap-3">
								<span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-bright">
									{CHANNEL_ICONS[index]}
								</span>
								<span className="display text-2xl text-foreground">
									{channel.name}
								</span>
							</div>
							<p className="mt-4 text-sm leading-relaxed text-muted">
								{channel.description}
							</p>
							<ul className="mt-5 space-y-2">
								{channel.points.map((point) => (
									<li
										className="flex items-center gap-2 text-sm text-muted"
										key={point}
									>
										<span
											aria-hidden="true"
											className="size-1.5 rounded-full bg-accent-bright"
										/>
										{point}
									</li>
								))}
							</ul>
							<span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-bright">
								{channel.cta}
								<ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
