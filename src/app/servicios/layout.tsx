import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Desarrollo web y soluciones de IA",
  description:
    "Landing pages en 7 días desde $250.000 CLP, sistemas a medida y automatización con IA. Precios publicados y plazos comprometidos. Santiago, Chile.",
  alternates: { canonical: "https://miguelgilurbina.com/servicios" },
  openGraph: {
    title: "Servicios — Miguel Gil",
    description:
      "Landing pages en 7 días desde $250.000 CLP, sistemas a medida y automatización con IA.",
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
