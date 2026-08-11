"use client";

// src/app/page.tsx
import { Hero } from "./components/sections/Hero";
// import { FeaturedProject } from "./components/sections/FeaturedProject";
import { FeaturedWork, type FeaturedWorkItem } from "./components/sections/FeaturedWork";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Imports de imágenes
import fotoPerfil from "../../public/fotoPerfil.png";

// Proyectos destacados (los textos viven en src/lib/i18n)
const featuredWorkList: FeaturedWorkItem[] = [
  {
    id: "claude-impact-lab",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Claude API",
      "Anthropic SDK",
      "next-intl",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    internalUrl: "/claude-impact-lab",
    liveUrl: "https://fintech.benditaia.cl/es/claude-impact-lab",
    secondaryUrl: "https://fintech.benditaia.cl/es/claude-impact-lab-kpi",
  },
  {
    id: "cargo-electric",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Ionic 7",
      "Angular 17",
      "Chart.js",
      "Vercel",
    ],
    internalUrl: "/cargo-electric",
  },
  // Curiana Radio queda fuera mientras el proyecto siga en construcción.
  // Para reactivarlo: descomentar aquí, devolver el enlace a Navigation y la
  // entrada a sitemap.ts, quitar el noindex de direccion-creativa/layout.tsx
  // y reponer la evidencia en las áreas "ia" y "creativa" de /servicios.
  // {
  //   id: "curiana-radio",
  //   technologies: [
  //     "Next.js 16",
  //     "React 19",
  //     "TypeScript",
  //     "Tailwind v4",
  //     "Python",
  //     "Anthropic SDK",
  //     "Supabase",
  //     "Vercel Blob",
  //   ],
  //   internalUrl: "/direccion-creativa",
  //   liveUrl: "https://curiana-radio.vercel.app",
  //   githubUrl: "https://github.com/miguelgilurbina/curiana-radio",
  // },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero image={fotoPerfil} />
        <FeaturedWork items={featuredWorkList} />
        {/* Prompt Maker dejó de ser un proyecto aparte: hoy es la galería dentro
            de Curiana Radio, que está en construcción y fuera del sitio. */}
        {/* <FeaturedProject /> */}
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
