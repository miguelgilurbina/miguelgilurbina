import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curiana Radio — publicación cultural y laboratorio multi-agente",
  description:
    "Curiana Radio y el Simulador Caquetío: 60 agentes LLM reconstruyendo una lengua arahuaca extinta, medido con grupo de control. Next.js 16, Python y Claude Haiku.",
  alternates: { canonical: "https://www.miguelgilurbina.com/curiana-radio" },
  openGraph: {
    title: "Curiana Radio — Miguel Gil",
    description: "Publicación cultural desde Abya Yala y laboratorio de simulación con 60 agentes LLM.",
    url: "https://www.miguelgilurbina.com/curiana-radio",
  },
};

export default function CurianaRadioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
