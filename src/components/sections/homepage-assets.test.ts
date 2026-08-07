import { describe, expect, it } from "bun:test";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SECTIONS_DIR = import.meta.dir;
const PUBLIC_DIR = join(import.meta.dir, "..", "..", "..", "public");

function referencedAssets(pattern: RegExp): Map<string, string[]> {
  const refs = new Map<string, string[]>();
  for (const file of readdirSync(SECTIONS_DIR)) {
    if (!file.endsWith(".tsx")) continue;
    const source = readFileSync(join(SECTIONS_DIR, file), "utf8");
    const matches = [...source.matchAll(pattern)].map((match) => match[1]);
    if (matches.length > 0) refs.set(file, matches);
  }
  return refs;
}

function referencedImages(): Map<string, string[]> {
  return referencedAssets(/["'](\/images\/[^"']+)["']/g);
}

function referencedMedia(): Map<string, string[]> {
  return referencedAssets(/["'](\/(?:images|videos)\/[^"']+)["']/g);
}

describe("homepage section assets", () => {
  it("references at least the panel and editor image sets", () => {
    const all = [...referencedImages().values()].flat();
    expect(all.some((path) => path.startsWith("/images/panel/"))).toBe(true);
    expect(all.some((path) => path.startsWith("/images/editor/"))).toBe(true);
  });

  it("has a file on disk for every referenced image or video", () => {
    for (const [file, paths] of referencedMedia()) {
      for (const assetPath of paths) {
        const fullPath = join(PUBLIC_DIR, assetPath);
        expect(existsSync(fullPath), `${file} -> ${assetPath}`).toBe(true);
      }
    }
  });

  it("ships a poster next to every referenced video, and keeps videos small", () => {
    const videos = [...referencedMedia().values()]
      .flat()
      .filter((path) => path.endsWith(".mp4"));

    expect(videos.length).toBeGreaterThan(0);

    for (const videoPath of videos) {
      const posterPath = videoPath.replace(/\.mp4$/, "-poster.jpg");
      expect(existsSync(join(PUBLIC_DIR, posterPath)), posterPath).toBe(true);

      const bytes = statSync(join(PUBLIC_DIR, videoPath)).size;
      expect(bytes, `${videoPath} is ${bytes} bytes`).toBeLessThan(1_500_000);
    }
  });
});
