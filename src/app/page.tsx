"use client";

// src/app/page.tsx
import { Hero } from "./components/sections/Hero";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Imports de imágenes
import fotoPerfil from "../../public/fotoPerfil.png";
// import templianceGif from "../../public/Templiance Second Iteration.gif";
import tuwebenGif from "../../public/TuwebenGif.gif";
import gabrielWebsiteGif from "../../public/gabrielWebsiteGif.gif";

// Definición de proyectos
const additionalProjectsList = [
  // {
  //   id: "templiance",
  //   title: "Templiance",
  //   description:
  //     "Frontend desarrollado para marketplace de templates corporativos. Implementación completa de interfaz con React y Next.js, integración con Prismic como headless CMS para gestión de contenido.",
  //   image: templianceGif,
  //   liveUrl: "https://templiance-front.vercel.app/",
  //   githubUrl: "https://github.com/miguelgilurbina/templiance_front", // Agregar si tienes
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prismic CMS"],
  //   status: "live" as const,
  //   category: "Marketplace",
  // },
  {
    id: "tuweben7dias",
    title: "Tu Web En 7 Días",
    description:
      "Landing page optimizada para captura de leads de mi servicio de desarrollo web. Sistema completo con formularios funcionales, emails automáticos y navegación inteligente entre páginas. Primer producto comercial desarrollado y desplegado en tiempo récord.",
    image: tuwebenGif, // Necesitarías crear/importar este archivo
    liveUrl: "https://tuweben7dias.com/",
    // githubUrl: "https://github.com/tuusuario/tuweben7dias", // Si lo tienes público
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nodemailer",
      "Zoho Mail",
    ],
    status: "live" as const,
    category: "Landing Page", // o "Business Website"
  },
  {
    id: "gabriel-colmenares-website",
    title: "Gabriel Colmenares - Sitio Web Personal",
    description:
      "Sitio web personal para comediante desarrollado con enfoque narrativo y experiencia de usuario premium. Implementación completa con React, Next.js y Framer Motion, incluyendo sistema de componentes modulares, integración de redes sociales y diseño responsive optimizado para conversión.",
    image: gabrielWebsiteGif, // Necesitarás crear/capturar este GIF
    liveUrl: "https://gabrielcolmenares.com", // URL actual del sitio
    githubUrl: "https://github.com/miguelgilurbina/gabriel-colmenares-web", // Si es público
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Lucide Icons",
    ],
    status: "live" as const,
    category: "Portfolio Personal",
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
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
