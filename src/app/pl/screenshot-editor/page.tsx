import { redirect } from "next/navigation";

import { APP_URL } from "@/lib/seo";

// The free editor now lives inside the AppBoard app (no account needed,
// nothing stored server-side) - this route only forwards old links there.
export default function ScreenshotEditorRedirectPl() {
	redirect(`${APP_URL}/editor`);
}
