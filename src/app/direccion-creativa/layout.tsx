import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dirección Creativa — Proyectos culturales con IA",
  description:
    "Curiana Radio y el Simulador Caquetío: dirección de arte y sistemas multi-agente. Reconstrucción de una lengua arahuaca con 60 agentes, medida con grupo de control.",
  // Fuera de buscadores mientras Curiana Radio siga en construcción. La ruta
  // sigue viva para compartirla por enlace directo; quitar al reactivarla.
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.miguelgilurbina.com/direccion-creativa" },
  openGraph: {
    title: "Dirección Creativa — Miguel Gil",
    description:
      "Curiana Radio y el Simulador Caquetío: dirección de arte y sistemas multi-agente con IA.",
    url: "https://www.miguelgilurbina.com/direccion-creativa",
  },
};

export default function DireccionCreativaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
