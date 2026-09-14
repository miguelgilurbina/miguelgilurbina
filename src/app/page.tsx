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
    id: "cargo-electric",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Firebase",
      "Recharts",
      "Tailwind v4",
      "Vitest",
      "Ionic 8",
      "Angular 19",
      "Vercel",
    ],
    internalUrl: "/cargo-electric",
  },
  {
    id: "curiana-radio",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "MDX",
      "Python",
      "Claude Haiku 4.5",
      "Supabase",
      "Vercel Blob",
    ],
    internalUrl: "/direccion-creativa",
    liveUrl: "https://curiana-radio.vercel.app",
    githubUrl: "https://github.com/miguelgilurbina/curiana-radio",
  },
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
    id: "portokali",
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Supabase",
      "Resend",
      "Zod",
      "GitHub Actions",
      "Vercel",
    ],
    liveUrl: "https://portokali.cl",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero image={fotoPerfil} />
        <FeaturedWork items={featuredWorkList} />
        {/* Prompt Maker queda fuera del home: repo independiente sin actividad
            desde abril de 2026. */}
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
