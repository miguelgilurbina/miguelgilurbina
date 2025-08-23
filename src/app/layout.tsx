import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Miguel Gil Urbina - AI-First Full Stack Developer & Digital Entrepreneur",
    template: "%s | Miguel Gil Urbina",
  },
  description:
    "AI-First Full Stack Developer especializado en Prompt Engineering y emprendimiento digital. Fundador de TuWebEn7Dias. Transformo organizaciones combinando desarrollo tecnológico con implementación estratégica de IA.",
  keywords: [
    "AI Developer",
    "Full Stack Developer",
    "Prompt Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Emprendimiento Digital",
    "TuWebEn7Dias",
    "Atlas Assessment",
    "Consultoría IA",
  ],
  authors: [{ name: "Miguel Gil Urbina", url: "https://miguelgilurbina.com" }],
  creator: "Miguel Gil Urbina",
  publisher: "Miguel Gil Urbina",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://miguelgilurbina.com",
    title: "Miguel Gil Urbina - AI-First Full Stack Developer",
    description:
      "Especialista en desarrollo AI-First y emprendimiento digital. Fundador de TuWebEn7Dias.",
    siteName: "Miguel Gil Urbina Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miguel Gil Urbina - AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Gil Urbina - AI Developer & Entrepreneur",
    description:
      "AI-First Full Stack Developer, Prompt Engineering Specialist & Founder de TuWebEn7Dias",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://miguelgilurbina.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body
        className={`${inter.className} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="miguel-gil-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
