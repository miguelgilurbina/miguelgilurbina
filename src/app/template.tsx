"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/megu/ui";

/* Transición entre rutas (handoff 5c): una cortina verde de 340ms cubre la
   vista y sale hacia arriba al montar la ruta nueva. No corre en la carga
   inicial ni con prefers-reduced-motion. */

let hasMounted = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [curtain, setCurtain] = useState<"idle" | "covering" | "leaving">(() => (hasMounted ? "covering" : "idle"));

  useEffect(() => {
    hasMounted = true;
    if (curtain !== "covering") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurtain("idle");
      return;
    }
    const frame = requestAnimationFrame(() => setCurtain("leaving"));
    return () => cancelAnimationFrame(frame);
  }, [curtain]);

  return (
    <>
      {children}
      {curtain !== "idle" && (
        <div
          aria-hidden="true"
          onTransitionEnd={() => setCurtain("idle")}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-accent text-on-accent"
          style={{
            transform: curtain === "covering" ? "translateY(0)" : "translateY(-100%)",
            transition: "transform var(--dur-curtain) var(--ease-curtain)",
          }}
        >
          <LogoMark size={34} />
        </div>
      )}
    </>
  );
}
