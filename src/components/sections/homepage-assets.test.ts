import { describe, expect, it } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const SECTIONS_DIR = import.meta.dir;
const PUBLIC_DIR = join(import.meta.dir, "..", "..", "..", "public");

function referencedImages(): Map<string, string[]> {
  const refs = new Map<string, string[]>();
  for (const file of readdirSync(SECTIONS_DIR)) {
    if (!file.endsWith(".tsx")) continue;
    const source = readFileSync(join(SECTIONS_DIR, file), "utf8");
    const matches = [...source.matchAll(/["'](\/images\/[^"']+)["']/g)].map(
      (match) => match[1],
    );
    if (matches.length > 0) refs.set(file, matches);
  }
  return refs;
}

describe("homepage section assets", () => {
  it("references at least the panel and editor image sets", () => {
    const all = [...referencedImages().values()].flat();
    expect(all.some((path) => path.startsWith("/images/panel/"))).toBe(true);
    expect(all.some((path) => path.startsWith("/images/editor/"))).toBe(true);
  });

  it("has a file on disk for every referenced image", () => {
    for (const [file, paths] of referencedImages()) {
      for (const imagePath of paths) {
        const fullPath = join(PUBLIC_DIR, imagePath);
        expect(existsSync(fullPath), `${file} -> ${imagePath}`).toBe(true);
      }
    }
  });
});
