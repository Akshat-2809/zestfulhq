import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Zestful — A private space to process your thoughts.";

/** Shared by opengraph-image and twitter-image. */
export function renderOgImage() {
  // Sync read keeps the image prerendered at build time (async fs would make it dynamic).
  const poppins = readFileSync(join(process.cwd(), "assets/Poppins-SemiBold.ttf"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#F7FAF8", fontFamily: "Poppins", color: "#1E4A47", overflow: "hidden" }}>
        {/* the room's soft blobs */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, background: "radial-gradient(circle at 12% 8%, #CBE6E2 0%, rgba(203,230,226,0) 55%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, background: "radial-gradient(circle at 92% 70%, #F6F0DC 0%, rgba(246,240,220,0) 50%)" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 80px", width: "100%" }}>
          <div style={{ display: "flex" }}>
            <span style={{ fontSize: 38, letterSpacing: "-0.01em", color: "#5DB1AB", background: "#FFFFFF", borderRadius: 18, padding: "12px 26px", lineHeight: 1 }}>Zestful</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 1, letterSpacing: "-0.035em" }}>
            <span>A private space to</span>
            <span style={{ color: "#3E8F89" }}>process your</span>
            <span style={{ color: "#3E8F89" }}>thoughts.</span>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Poppins", data: poppins, style: "normal", weight: 600 }] },
  );
}

export function renderAppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#5DB1AB" }}>
        <svg width="180" height="180" viewBox="0 0 40 40">
          <path d="M12.5 12.5 H27.5 L12.5 27.5 H27.5" fill="none" stroke="#FFFFFF" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
