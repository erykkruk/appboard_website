import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { SITE_DESCRIPTION } from "@/lib/seo";

export const alt = "AppBoard - ASO for App Store and Google Play in one panel";
export const contentType = "image/png";
export const size = { height: 630, width: 1200 };

const logoDataUri = `data:image/svg+xml;base64,${readFileSync(
  join(process.cwd(), "public/images/brand/appboard-hex-a-violet.svg"),
).toString("base64")}`;

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "linear-gradient(135deg, #05070d 0%, #101637 60%, #143247 100%)",
        color: "#e8ecf4",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
        <img alt="" height={72} src={logoDataUri} width={63} />
        <div style={{ display: "flex", fontSize: "44px", fontWeight: 700 }}>AppBoard</div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: 1.15,
          marginTop: "48px",
          maxWidth: "980px",
        }}
      >
        One panel for your App Store and Google Play listings
      </div>
      <div
        style={{
          color: "#9aa5bb",
          display: "flex",
          fontSize: "28px",
          lineHeight: 1.4,
          marginTop: "32px",
          maxWidth: "900px",
        }}
      >
        {SITE_DESCRIPTION}
      </div>
    </div>,
    size,
  );
}
