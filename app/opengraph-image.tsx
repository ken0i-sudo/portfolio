import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #171730 60%, #0f2a35 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            fontWeight: 700,
            color: "#a5b4fc",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
              color: "white",
              fontSize: 22,
            }}
          >
            A
          </div>
          Dhavan Chaudhari.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15 }}>{siteConfig.name}</div>
          <div
            style={{
              marginTop: 18,
              fontSize: 36,
              fontWeight: 600,
              background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {siteConfig.role}
          </div>
          <div style={{ marginTop: 26, fontSize: 24, color: "#94a3b8", maxWidth: 820 }}>{siteConfig.tagline}</div>
        </div>
      </div>
    ),
    size
  );
}
