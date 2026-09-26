import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archivo visual — dirección de imagen con IA",
  description:
    "Series generadas con IA sobre memoria, territorio y calle en el Caribe, más Curiana Radio y el Simulador Caquetío: 60 agentes reconstruyendo una lengua arahuaca, medido con grupo de control.",
  alternates: { canonical: "https://www.miguelgilurbina.com/archivo" },
  openGraph: {
    title: "Archivo visual — Miguel Gil",
    description: "Memoria · Territorio · Calle · Identidad. Dirección de imagen con IA y Curiana Radio.",
    url: "https://www.miguelgilurbina.com/archivo",
  },
};

export default function ArchivoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
