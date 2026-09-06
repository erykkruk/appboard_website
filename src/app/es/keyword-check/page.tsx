import { redirect } from "next/navigation";

import { APP_URL } from "@/lib/seo";

// The free keyword check lives inside the AppBoard app (no account needed, computed
// in the visitor's browser) - this route forwards there, mirroring the
// /screenshot-editor pattern.
export default function KeywordCheckRedirectEs() {
	redirect(`${APP_URL}/keyword-check`);
}
