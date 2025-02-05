"use client";

// src/app/page.tsx
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Imports de imágenes
import fotoPerfil from "../../public/fotoPerfil.png";
import coWorkGif from "../../public/coWorkingGif.gif";
import loadingGif from "../../public/loadingif.gif";
import templianceGif from "../../public/Templiance Second Iteration.gif";

// Definición de proyectos
const projectsList = [
  {
    title: "Co-Working App",
    description:
      "Colaboré en el desarrollo de una aplicación de reservas, centrándome en el Front End. Utilicé Vite como entorno de desarrollo, construí la interfaz con componentes React en JavaScript, y apliqué estilos con Bootstrap para lograr un diseño responsivo.",
    image: coWorkGif,
    link: "https://coworking-project-gold.vercel.app/home",
  },
  {
    title: "Templiance",
    description:
      "Templiance es una plataforma web moderna que funciona como un marketplace de templates corporativos, enfocados en ayudar a profesionales y empresas a superar auditorías y certificaciones en áreas cruciales como calidad y seguridad.",
    image: templianceGif,
    link: "https://templiance-front.vercel.app/",
  },
  {
    title: "Prompt Maker",
    description:
      "Plataforma para la creación y gestión de prompts de IA. Desarrollada con Next.js 14, TypeScript y Tailwind CSS. Implementa funcionalidades de búsqueda avanzada y organización de prompts.",
    image: loadingGif,
    link: "link-al-proyecto",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
  },
  {
    title: "Curiana Radio",
    description:
      "Plataforma cultural innovadora que fusiona tecnología y patrimonio cultural. Integra contenido multimedia dinámico y storytelling interactivo.",
    image: loadingGif,
    link: "link-al-proyecto",
    technologies: ["Next.js", "Framer Motion", "AI Integration"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero image={fotoPerfil} />
        <Experience />
        <Projects projects={projectsList} />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
