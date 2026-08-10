import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.miguelgilurbina.com"),
  title: {
    default: "Miguel Gil — AI First Full Stack Developer",
    template: "%s | Miguel Gil",
  },
  description:
    "Desarrollo web y soluciones de IA para negocios en Chile: sitios, sistemas a medida, agentes con LLM y dirección creativa. Full Stack Developer con 8+ años combinando estrategia comercial y tecnología.",
  keywords: [
    "Desarrollo web Chile",
    "Landing page Santiago",
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Prompt Engineering",
    "Agentes IA",
    "Santiago Chile",
    "Miguel Gil",
    "Freelance developer Chile",
  ],
  authors: [{ name: "Miguel Gil Urbina", url: "https://www.miguelgilurbina.com" }],
  creator: "Miguel Gil Urbina",
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: "https://www.miguelgilurbina.com",
    siteName: "Miguel Gil — Portfolio",
    title: "Miguel Gil — Desarrollo Web & Soluciones de IA",
    description:
      "Landing pages en 7 días, sistemas a medida y agentes con LLM. Full Stack Developer en Santiago, Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Gil — Desarrollo Web & Soluciones de IA",
    description:
      "Landing pages en 7 días, sistemas a medida y agentes con LLM. Santiago, Chile.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.miguelgilurbina.com",
    languages: {
      "es-CL": "https://www.miguelgilurbina.com",
      "en-US": "https://www.miguelgilurbina.com",
      "x-default": "https://www.miguelgilurbina.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.miguelgilurbina.com/#person",
                  name: "Miguel Gil Urbina",
                  url: "https://www.miguelgilurbina.com",
                  jobTitle: "Full Stack Developer & AI Implementation Specialist",
                  worksFor: { "@type": "Organization", name: "Cargo Eléctric" },
                  address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
                  email: "miguel.gil.9210@gmail.com",
                  sameAs: [
                    "https://github.com/miguelgilurbina",
                    "https://www.linkedin.com/in/miguelgilurbina/",
                  ],
                  knowsAbout: [
                    "Next.js", "TypeScript", "AI Development", "Prompt Engineering",
                    "Full Stack Development", "Multi-agent systems", "LangChain",
                  ],
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.miguelgilurbina.com/#service",
                  name: "Miguel Gil — Desarrollo Web & IA",
                  url: "https://www.miguelgilurbina.com/servicios",
                  provider: { "@id": "https://www.miguelgilurbina.com/#person" },
                  areaServed: { "@type": "Country", name: "Chile" },
                  availableLanguage: ["es", "en"],
                  makesOffer: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo de sitios web y landing pages" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicaciones y sistemas a medida" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "IA aplicada y agentes con modelos de lenguaje" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dirección creativa y producción audiovisual con IA" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product ownership y consultoría técnica" } },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
