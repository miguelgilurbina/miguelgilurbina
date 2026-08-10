import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Impact Lab Chile 2026 — Agentes de IA operando un evento real",
  description:
    "Lead Frontend de la plataforma que corrió el primer Claude Impact Lab de América Latina: 899 postulaciones, 48 equipos y 1.834 evaluaciones en 48 horas, con cuatro agentes Claude en producción.",
  alternates: { canonical: "https://miguelgilurbina.com/claude-impact-lab" },
  openGraph: {
    title: "Claude Impact Lab Chile 2026 — Case study",
    description:
      "Cuatro agentes Claude en producción, 899 postulaciones y una auditoría de divergencia entre humano e IA sobre 1.834 evaluaciones.",
    url: "https://miguelgilurbina.com/claude-impact-lab",
  },
};

export default function ClaudeImpactLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
