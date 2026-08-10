import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Impact Lab Chile — Agentes de IA operando eventos reales",
  description:
    "Lead Frontend de la plataforma que corrió el primer Claude Impact Lab de América Latina y su segunda vertical: 899 postulaciones y 1.834 evaluaciones solo en la edición Fintech, con cuatro agentes Claude en producción.",
  alternates: { canonical: "https://miguelgilurbina.com/claude-impact-lab" },
  openGraph: {
    title: "Claude Impact Lab Chile — Case study",
    description:
      "Una plataforma multi-tenant que corrió dos verticales del programa de Anthropic en Chile, con cuatro agentes Claude en producción.",
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
