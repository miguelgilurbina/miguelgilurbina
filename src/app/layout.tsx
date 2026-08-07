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
  metadataBase: new URL("https://miguelgilurbina.com"),
  title: {
    default: "Miguel Gil — AI First Full Stack Developer",
    template: "%s | Miguel Gil",
  },
  description:
    "Desarrollo web y soluciones de IA para negocios en Chile. Landing pages en 7 días desde $250.000, sistemas a medida y agentes con LLM. Full Stack Developer con 8+ años combinando estrategia comercial y tecnología.",
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
  authors: [{ name: "Miguel Gil Urbina", url: "https://miguelgilurbina.com" }],
  creator: "Miguel Gil Urbina",
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: "https://miguelgilurbina.com",
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
    canonical: "https://miguelgilurbina.com",
    languages: {
      "es-CL": "https://miguelgilurbina.com",
      "en-US": "https://miguelgilurbina.com",
      "x-default": "https://miguelgilurbina.com",
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
                  "@id": "https://miguelgilurbina.com/#person",
                  name: "Miguel Gil Urbina",
                  url: "https://miguelgilurbina.com",
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
                  "@id": "https://miguelgilurbina.com/#service",
                  name: "Miguel Gil — Desarrollo Web & IA",
                  url: "https://miguelgilurbina.com/servicios",
                  provider: { "@id": "https://miguelgilurbina.com/#person" },
                  areaServed: { "@type": "Country", name: "Chile" },
                  availableLanguage: ["es", "en"],
                  priceRange: "$$",
                  makesOffer: [
                    {
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name: "Landing page profesional en 7 días" },
                      price: "250000",
                      priceCurrency: "CLP",
                    },
                    {
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name: "Mantención web mensual" },
                      price: "25000",
                      priceCurrency: "CLP",
                    },
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
