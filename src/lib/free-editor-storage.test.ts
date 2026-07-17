import { beforeEach, describe, expect, it } from "bun:test";

import type { SceneData } from "./scene-types";

// Minimal localStorage + window shim so the browser-guarded module runs under
// bun:test (Node has neither by default).
class MemoryStorage {
	private store = new Map<string, string>();
	getItem(key: string): string | null {
		return this.store.has(key) ? (this.store.get(key) as string) : null;
	}
	setItem(key: string, value: string): void {
		this.store.set(key, value);
	}
	removeItem(key: string): void {
		this.store.delete(key);
	}
	clear(): void {
		this.store.clear();
	}
}

const globalRef = globalThis as unknown as {
	window?: unknown;
	localStorage?: MemoryStorage;
};
globalRef.window = globalRef.window ?? {};
globalRef.localStorage = new MemoryStorage();

import {
	createSceneId,
	deleteSavedScene,
	loadSavedScenes,
	type SavedScene,
	upsertSavedScene,
} from "./free-editor-storage";

function makeScene(): SceneData {
	return {
		background: { type: "color", value: "#000000" },
		height: 2796,
		textLayers: [],
		width: 1290,
	};
}

function makeSaved(id: string, name: string, updatedAt: number): SavedScene {
	return { displayType: "APP_IPHONE_67", id, name, scene: makeScene(), updatedAt };
}

describe("free-editor storage", () => {
	beforeEach(() => {
		globalRef.localStorage?.clear();
	});

	it("returns an empty list when nothing is stored", () => {
		expect(loadSavedScenes()).toEqual([]);
	});

	it("upserts a new scene and reads it back", () => {
		const list = upsertSavedScene(makeSaved("a", "First", 1000));
		expect(list).toHaveLength(1);
		expect(loadSavedScenes()[0]?.name).toBe("First");
	});

	it("updates an existing scene in place (no duplicate)", () => {
		upsertSavedScene(makeSaved("a", "First", 1000));
		const list = upsertSavedScene(makeSaved("a", "Renamed", 2000));
		expect(list).toHaveLength(1);
		expect(list[0]?.name).toBe("Renamed");
	});

	it("sorts scenes most-recent-first", () => {
		upsertSavedScene(makeSaved("old", "Old", 1000));
		upsertSavedScene(makeSaved("new", "New", 5000));
		upsertSavedScene(makeSaved("mid", "Mid", 3000));
		expect(loadSavedScenes().map((s) => s.id)).toEqual(["new", "mid", "old"]);
	});

	it("deletes a scene by id", () => {
		upsertSavedScene(makeSaved("a", "A", 1000));
		upsertSavedScene(makeSaved("b", "B", 2000));
		const remaining = deleteSavedScene("a");
		expect(remaining.map((s) => s.id)).toEqual(["b"]);
	});

	it("survives corrupt storage without throwing", () => {
		globalRef.localStorage?.setItem("appboard-free-editor-scenes", "{not json");
		expect(loadSavedScenes()).toEqual([]);
	});

	it("mints unique scene ids", () => {
		const ids = new Set(Array.from({ length: 50 }, () => createSceneId()));
		expect(ids.size).toBe(50);
	});
});
