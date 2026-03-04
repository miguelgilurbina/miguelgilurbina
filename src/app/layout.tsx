import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
    "Portfolio de Miguel Gil Urbina, Full Stack Developer & Implementation Specialist con 8+ años combinando estrategia comercial con desarrollo de IA empresarial. Especialista en Next.js, TypeScript, PostgreSQL e integración de modelos de lenguaje.",
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Prompt Engineering",
    "Santiago Chile",
    "Miguel Gil",
    "Portfolio",
    "Web Developer Chile",
  ],
  authors: [{ name: "Miguel Gil Urbina", url: "https://miguelgilurbina.com" }],
  creator: "Miguel Gil Urbina",
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: "https://miguelgilurbina.com",
    siteName: "Miguel Gil — Portfolio",
    title: "Miguel Gil — AI First Full Stack Developer",
    description:
      "Especialista en soluciones de IA y desarrollo full-stack. 8+ años combinando estrategia comercial con tecnología avanzada.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miguel Gil — AI First Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Gil — AI First Full Stack Developer",
    description:
      "Portfolio de Miguel Gil Urbina — Full Stack Developer & AI Implementation Specialist",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://miguelgilurbina.com",
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
              "@type": "Person",
              name: "Miguel Gil Urbina",
              url: "https://miguelgilurbina.com",
              jobTitle: "Full Stack Developer & AI Implementation Specialist",
              worksFor: { "@type": "Organization", name: "Cargo Eléctric" },
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
              sameAs: [
                "https://github.com/miguelgilurbina",
                "https://www.linkedin.com/in/miguelgilurbina/",
              ],
              knowsAbout: ["Next.js", "TypeScript", "AI Development", "Prompt Engineering", "Full Stack Development"],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
