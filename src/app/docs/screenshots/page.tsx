import { DocsLayout } from "@/components/layout/docs-layout";
import { ScreenshotFrame } from "@/components/ui";
import { getDocPage } from "@/lib/docs";
import { buildAlternates } from "@/lib/i18n/routes";
import { buildPageMetadata } from "@/lib/seo";

import type { Metadata } from "next";
import type { JSX } from "react";

const SLUG = "screenshots";
const page = getDocPage(SLUG);

export const metadata: Metadata = buildPageMetadata({
  description: page?.description ?? "",
  languages: buildAlternates(`/docs/${SLUG}`),
  path: `/docs/${SLUG}`,
  title: page?.title,
});

export default function ScreenshotsPage(): JSX.Element {
  return (
    <DocsLayout slug={SLUG}>
      <p>
        Store screenshots are organized by device type and language, and each
        store is strict about exact pixel dimensions. AppBoard shows the
        requirements inline and includes an editor that exports at the right
        size.
      </p>

      <ScreenshotFrame
        alt="AppBoard screenshot manager grouped by device type and language with a built-in editor"
        src="/images/panel/app-screenshots-en.png"
      />

      <h2>Device types and languages</h2>
      <p>
        Screenshots are grouped per device and per language. On Google Play that
        means phone plus 7-inch and 10-inch tablet sets; on the App Store it
        means the iPhone and iPad display sizes Apple requires, such as the 6.7-
        inch iPhone. Switch language to manage localized screenshot sets
        independently.
      </p>

      <h2>Size requirements</h2>
      <p>
        Each slot shows the exact pixel dimensions it expects. A few fixed
        graphics you&apos;ll come across:
      </p>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Dimensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>App icon</td>
            <td>512 × 512</td>
          </tr>
          <tr>
            <td>Google Play feature graphic</td>
            <td>1024 × 500</td>
          </tr>
          <tr>
            <td>Device screenshots</td>
            <td>Per-device pixel sizes shown in each slot</td>
          </tr>
        </tbody>
      </table>

      <h2>The built-in editor</h2>
      <p>
        The screenshot editor composes full store graphics in the browser: pick a
        background (solid or gradient), drop your app screenshot into a device
        frame — iPhone or Android — position and rotate it, and add headline
        text on top. Scenes are saved per language and device, and export
        happens at the exact canonical dimensions for the selected device type,
        so the store won&apos;t bounce your upload for a size mismatch.
      </p>

      <ScreenshotFrame
        alt="AppBoard screenshot editor with a layered scene: gradient background, Android device frame, headline text, and export at exact dimensions"
        src="/images/panel/editor.png"
      />

      <h3>Language variants</h3>
      <p>
        A scene isn&apos;t tied to one locale. Use language variants to
        regenerate the same composition for every language you ship — same
        layout, translated headline — without redesigning anything.
      </p>

      <h2>Panorama splitting</h2>
      <p>
        For the panoramic listing effect, upload one wide image and AppBoard
        slices it vertically into 2–10 equal parts, uploading each part as a
        consecutive screenshot. Frame the crop and zoom first, pick the number
        of parts, and the split preview shows exactly where the cuts land.
      </p>

      <ScreenshotFrame
        alt="Split Panorama dialog slicing one wide image into three consecutive store screenshots with dashed cut lines"
        src="/images/panel/panorama.png"
      />

      <h2>Pixel-perfect crop</h2>
      <p>
        Upload an image that doesn&apos;t match the slot and the crop tool opens
        automatically, locked to the target device&apos;s aspect ratio in
        portrait or landscape. Zoom and position, and the export lands at the
        exact pixel target — for example 1242 × 2688 for a 6.5-inch iPhone —
        across every preset from the 3.5-inch iPhone to the 12.9-inch iPad Pro
        and Android tablets.
      </p>

      <ScreenshotFrame
        alt="Crop Screenshot dialog with portrait and landscape presets and an exact 1242 × 2688 pixel target"
        src="/images/panel/crop.png"
      />

      <blockquote>
        <p>
          <strong>Heads up:</strong> stores reject screenshot sets that
          don&apos;t match the required dimensions exactly. Use the shown size for
          each slot, or export from the editor or crop tool — both already
          target the exact pixels.
        </p>
      </blockquote>

      <h2>Publishing screenshots</h2>
      <p>
        Screenshots follow the same draft-then-publish flow as text. Prepare your
        sets per device and language, then push them from the{" "}
        <a href="/docs/publishing">publish page</a> when they&apos;re ready.
      </p>
    </DocsLayout>
  );
}
