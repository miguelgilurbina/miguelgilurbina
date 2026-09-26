import { ImageResponse } from "next/og";

export const alt = "Miguel Gil — Desarrollo Web & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Sistema MEGU v1: tinta sobre papel, filete de 1px y un único acento verde.
const PAPER = "#F1ECE2";
const INK = "#12100C";
const MUTED = "#6B6250";
const RULE = "#CFC7B6";
const ACCENT = "#0F5132";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${INK}`,
            paddingBottom: 24,
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 3,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex", color: INK, fontWeight: 700, letterSpacing: 6 }}>MEGU</div>
          <div style={{ display: "flex" }}>MIGUELGILURBINA.COM</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: INK, fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>
            De la idea a
          </div>
          <div style={{ display: "flex", fontSize: 96, lineHeight: 1.05, letterSpacing: -2 }}>
            <span style={{ color: ACCENT, fontStyle: "italic" }}>producción</span>
            <span style={{ color: INK, marginLeft: 24 }}>en cualquier stack.</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontFamily: "monospace" }}>
          {["Miguel Gil Urbina", "Full Stack · IA", "Next.js", "Agentes Claude", "Santiago, CL"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                border: `1px solid ${RULE}`,
                padding: "10px 18px",
                color: INK,
                fontSize: 20,
                letterSpacing: 1,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
