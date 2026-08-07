import type { Metadata } from "next";

// Propuesta comercial privada: contiene montos y datos del cliente.
// No debe indexarse ni aparecer en buscadores.
export const metadata: Metadata = {
  title: "Propuesta",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function PropuestaDobleCilindroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
