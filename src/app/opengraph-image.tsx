import { ImageResponse } from "next/og";

export const alt = "Miguel Gil — Desarrollo Web & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #1F1D1A 0%, #2D2A24 55%, #312E4A 100%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#6366F1",
              display: "flex",
            }}
          />
          <div style={{ color: "#A5A29B", fontSize: 26, letterSpacing: 2 }}>
            MIGUELGILURBINA.COM
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#F5F0E8",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
            }}
          >
            Miguel Gil Urbina
          </div>
          <div
            style={{
              color: "#A5B4FC",
              fontSize: 40,
              marginTop: 20,
              lineHeight: 1.25,
              display: "flex",
            }}
          >
            Desarrollo web y soluciones de IA
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Next.js", "TypeScript", "Agentes IA", "Santiago, Chile"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                border: "1px solid #4B4842",
                borderRadius: 999,
                padding: "10px 24px",
                color: "#D4CFC6",
                fontSize: 24,
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
