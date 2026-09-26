import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archivo visual — dirección de imagen con IA",
  description:
    "Series generadas con IA y dirigidas como cine: memoria, territorio, calle e identidad en el Caribe. Cada pieza declara que es imagen generada.",
  alternates: { canonical: "https://www.miguelgilurbina.com/archivo" },
  openGraph: {
    title: "Archivo visual — Miguel Gil",
    description: "Memoria · Territorio · Calle · Identidad. Dirección de imagen con IA.",
    url: "https://www.miguelgilurbina.com/archivo",
  },
};

export default function ArchivoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
