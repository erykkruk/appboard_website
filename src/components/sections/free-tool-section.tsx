import {
	ArrowRightIcon,
	ButtonLink,
	CheckIcon,
	ImageIcon,
	SectionHeading,
} from "@/components/ui";

import type { JSX } from "react";

const TOOL_POINTS = [
	"Device mockups: iPhone, iPad, Android, Watch, laptop — plus real Apple bezels",
	"Gradients, mesh, patterns, decorative text, shapes, and templates",
	"Panorama layouts that export as several store screenshots",
	"100% in your browser — no sign-up, nothing uploaded to a server",
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
								description="Design App Store and Google Play screenshots for free — right in your browser. A client-only version of AppBoard's screenshot studio, no account needed."
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
								<ButtonLink href="/screenshot-editor" size="lg" variant="primary">
									Open the editor
									<ArrowRightIcon className="size-4" />
								</ButtonLink>
								<span className="text-sm text-muted">
									Free forever · no login
								</span>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="flex size-40 items-center justify-center rounded-3xl border border-line bg-surface text-accent-bright shadow-2xl sm:size-52">
								<ImageIcon className="size-20 sm:size-24" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
