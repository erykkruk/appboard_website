import type { SceneData } from "@/lib/scene-types";

// Client-only persistence for the free screenshot editor. Scenes live entirely
// in localStorage — no cookies, no backend. Each saved scene keeps the display
// type it was authored for so reopening restores the exact canvas dimensions.

const STORAGE_KEY = "appboard-free-editor-scenes";

export interface SavedScene {
	id: string;
	name: string;
	displayType: string;
	scene: SceneData;
	/** Epoch millis of the last save, for sorting most-recent-first. */
	updatedAt: number;
}

function isBrowser(): boolean {
	return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

/** All saved scenes, newest first. Returns an empty list on any parse error. */
export function loadSavedScenes(): SavedScene[] {
	if (!isBrowser()) return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw) as SavedScene[];
		if (!Array.isArray(parsed)) return [];
		return parsed
			.filter((s) => s && typeof s.id === "string" && s.scene)
			.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
	} catch {
		return [];
	}
}

function writeAll(scenes: SavedScene[]): void {
	if (!isBrowser()) return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(scenes));
}

/** Create a reasonably-unique id for a new saved scene. */
export function createSceneId(): string {
	return `scene-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Insert or update a scene by id and return the full, freshly-sorted list.
 * Called on every explicit save (there is no autosave-to-server here).
 */
export function upsertSavedScene(entry: SavedScene): SavedScene[] {
	const scenes = loadSavedScenes().filter((s) => s.id !== entry.id);
	scenes.push(entry);
	scenes.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
	writeAll(scenes);
	return scenes;
}

/** Remove a scene by id and return the remaining list. */
export function deleteSavedScene(id: string): SavedScene[] {
	const scenes = loadSavedScenes().filter((s) => s.id !== id);
	writeAll(scenes);
	return scenes;
}
