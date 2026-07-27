import {
	ArrowRightIcon,
	DiscordIcon,
	RedditIcon,
	SectionHeading,
} from "@/components/ui";

import type { JSX } from "react";
import { DISCORD_URL, REDDIT_URL } from "@/lib/seo";

interface CommunityChannel {
	cta: string;
	description: string;
	href: string;
	icon: JSX.Element;
	name: string;
	points: string[];
}

const CHANNELS: CommunityChannel[] = [
	{
		cta: "Join the Discord",
		description:
			"The fastest way to reach us. Ask questions, report bugs, get help with self-hosting and see what's being built before it ships.",
		href: DISCORD_URL,
		icon: <DiscordIcon className="size-7" />,
		name: "Discord",
		points: [
			"Direct line to the maintainers",
			"Early previews of new features",
			"Self-hosting help from people who run it",
		],
	},
	{
		cta: "Join r/appboard",
		description:
			"Feature requests, ASO tips and longer discussions. Vote on what gets built next — the roadmap is shaped by the community.",
		href: REDDIT_URL,
		icon: <RedditIcon className="size-7" />,
		name: "Reddit",
		points: [
			"Vote on feature requests",
			"Share ASO wins and lessons",
			"Release notes and changelogs",
		],
	},
];

export function CommunitySection(): JSX.Element {
	return (
		<section className="scroll-mt-24 px-4 py-24 sm:px-6" id="community">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					description="AppBoard is open source and built in the open. The people using it decide where it goes — join in, say hi, and tell us what you need."
					eyebrow="Community"
					title="Built in the open, with you"
				/>
				<div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
					{CHANNELS.map((channel) => (
						<a
							className="group flex flex-col rounded-3xl border border-line bg-panel/40 p-8 transition-colors hover:border-accent/50"
							href={channel.href}
							key={channel.name}
							rel="noopener noreferrer"
							target="_blank"
						>
							<div className="flex items-center gap-3">
								<span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-bright">
									{channel.icon}
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
