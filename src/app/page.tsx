"use client";

// src/app/page.tsx
import { Hero } from "./components/sections/Hero";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

import { Contact } from "./components/sections/Contact";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Imports de imágenes
import fotoPerfil from "../../public/fotoPerfil.png";
import templianceGif from "../../public/Templiance Second Iteration.gif";

// Definición de proyectos
const additionalProjectsList = [
  {
    id: "templiance",
    title: "Templiance",
    description:
      "Frontend desarrollado para marketplace de templates corporativos. Implementación completa de interfaz con React y Next.js, integración con Prismic como headless CMS para gestión de contenido.",
    image: templianceGif,
    liveUrl: "https://templiance-front.vercel.app/",
    githubUrl: "https://github.com/miguelgilurbina/templiance_front", // Agregar si tienes
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prismic CMS"],
    status: "live" as const,
    category: "Marketplace",
  },
  // Eliminar Co-Working y Curiana por ahora
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero image={fotoPerfil} />
        <FeaturedProject />
        <Experience />
        <Projects projects={additionalProjectsList} />
        <Skills />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
