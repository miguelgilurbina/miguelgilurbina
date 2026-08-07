import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Desarrollo, IA y dirección creativa",
  description:
    "Sitios web, sistemas a medida, agentes con IA, dirección creativa y product ownership. Cinco frentes de trabajo, cada uno respaldado por proyectos en producción. Santiago, Chile.",
  alternates: { canonical: "https://miguelgilurbina.com/servicios" },
  openGraph: {
    title: "Servicios — Miguel Gil",
    description:
      "Sitios web, sistemas a medida, agentes con IA y dirección creativa. Cada área respaldada por proyectos reales.",
    url: "https://miguelgilurbina.com/servicios",
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
