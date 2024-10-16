"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import fotoPerfil from "../../public/fotoPerfil.png";
import coWorkGif from "../../public/coWorkingGif.gif";
import templianceGif from "../../public/Templiance Second Iteration.gif";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { href: "#experiencia", label: "Experiencia" },
    { href: "#formacion", label: "Formación" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER NAVBAR */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Miguel Gil</h1>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-secondary-foreground"
              >
                {item.label}
              </Link>
            ))}
            {/* Theme Toggle for Desktop */}
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
              className="ml-4"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[240px] sm:w-[300px] bg-background"
            >
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Theme Toggle for Mobile */}
              <div className="mt-4">
                <Button
                  onClick={toggleDarkMode}
                  variant="ghost"
                  size="icon"
                  className="ml-4"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* FOTO DE PERFIL Y ABSTRACTO */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto md:mx-0">
            <Image
              src={fotoPerfil}
              alt="Miguel Gil"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Front End Developer
            </h2>
            <p className="text-base md:text-lg mb-4">
              Desarrollador Front-End con sólida formación en tecnologías
              modernas especializado en Next.js, TypeScript y Tailwind CSS.
              Experiencia sólida en el despliegue de aplicaciones en Vercel y
              trabajando con AWS Cloud Services. Con un background en ingeniería
              ambiental y ventas, aporto una perspectiva única al desarrollo de
              software, combinando habilidades técnicas con un fuerte enfoque en
              la resolución de problemas y la comunicación efectiva.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contacto"
                className="bg-accent text-accent-foreground font-bold py-2 px-4 rounded w-full md:w-auto text-center"
              >
                Contactar
              </a>
              <a
                href="/cv-miguel-gil.pdf"
                className="bg-secondary text-secondary-foreground font-bold py-2 px-4 rounded flex items-center justify-center w-full md:w-auto"
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}

        <section id="experiencia" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Experiencia Profesional</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-xl">
                Full Stack Developer - Vemex Digital
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mayo 2024 - Presente
              </p>
              <ul className="mt-2 list-disc list-inside">
                <li>
                  Desarrollo de aplicaciones web responsivas con React y Next.js
                </li>
                <li>
                  Integración de bases de datos MongoDB y despliegue en AWS
                </li>
                <li>
                  Mantenimiento y optimización de aplicaciones web existentes
                </li>
                <li>
                  Realización de pruebas manuales y de usuario, documentación y
                  resolución de bugs
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-xl">Ejecutivo Comercial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2017 - 2024 | Chile
              </p>
              <p className="mt-2">
                Trabajé en cargos comerciales (KAM, BDM) para empresas líderes
                en la manufactura y desarrollo de tecnologías de seguridad como
                Dahua Technologies e Hikvision. Esta experiencia me introdujo al
                mundo de la tecnología, mejoró mis habilidades blandas y me
                enseñó sobre negocios.
              </p>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}

        <section id="proyectos" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-4 rounded-lg">
              <Image
                src={coWorkGif}
                alt="Proyecto de IA"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-xl">Co-Working App</h3>
              <p className="mt-2">
                Desarrollé de una aplicación de reservas con administración de
                contenido y usuarios.
              </p>
              <Link
                href="https://coworking-project-gold.vercel.app/home"
                className="inline-block mt-2 text-primary hover:underline"
              >
                Ver detalles
              </Link>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <Image
                src={templianceGif}
                alt="Proyecto Web"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-xl">Plataforma E-learning</h3>
              <p className="mt-2">
                Creé una plataforma de aprendizaje en línea con React y Node.js,
                incluyendo funcionalidades de video streaming y evaluaciones
                interactivas.
              </p>
              <Link
                href="https://templiance-front.vercel.app/"
                className="inline-block mt-2 text-primary hover:underline"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        </section>

        {/* FORMACIÓN */}

        <section id="formacion" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">Formación</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-heading text-xl">Certified Web Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Digital House Coding School | Oct 2022 - Jul 2024
              </p>
              <p className="mt-2">
                Curso interdisciplinario que cubre desarrollo Front End, Back
                End, Infraestructura y bases de datos. También se enfoca en
                habilidades blandas como agilidad de aprendizaje, trabajo en
                equipo y comunicación efectiva.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-heading text-xl">
                Certificado Profesional de Scrum Master
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Certiprof | Julio 2023
              </p>
              <p className="mt-2">
                Curso certificado de Scrum Master, basado en la guía oficial de
                Scrum (2020).
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-heading text-xl">Ingeniero Ambiental</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Universidad de Falcón, Venezuela | 2009 - 2014
              </p>
              <p className="mt-2">
                Egresado con reconocimiento por trabajo de grado titulado:
                Evaluación del estado de la playa arenosa de Villa Marina -
                Punta Salina, Paraguaná, Venezuela, en base a la caracterización
                de los factores naturales y antropogénicos con mención
                honorífica.
              </p>
            </div>
          </div>
        </section>

        {/* HABILIDADES */}

        <section id="habilidades" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-bold text-lg">Técnicas</h3>
              <ul className="mt-2 space-y-1">
                <li>Lenguajes: JavaScript (ES6+), TypeScript</li>
                <li>Frameworks y Librerías: React, Next.js</li>
                <li>Estilos: Tailwind CSS, Bootstrap, Styled-Components</li>
                <li>
                  Herramientas de Desarrollo: V0 by Vercel, Git, Webpack, Babel
                </li>
                <li>Cloud y Despliegue: Vercel, AWS (EC2, S3, RDS)</li>
                <li>Testing: Jest, React Testing Library</li>
                <li>Performance: Lighthouse, Web Vitals</li>
                <li>CI/CD: GitHub Actions</li>
              </ul>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-bold text-lg">Metodologías</h3>
              <ul className="mt-2 space-y-1">
                <li>Scrum</li>
                <li>Desarrollo Ágil</li>
                <li>Planificación Estratégica</li>
              </ul>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-bold text-lg">Personales</h3>
              <ul className="mt-2 space-y-1">
                <li>Pensamiento lógico & crítico</li>
                <li>Proactividad</li>
                <li>Adaptabilidad</li>
                <li>Comunicación Asertiva</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACTO */}

        <section id="contacto" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="bg-background p-4 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-primary" />
                <a
                  href="mailto:miguel.gil.9210@gmail.com"
                  className="hover:underline"
                >
                  miguel.gil.9210@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-primary" />
                <a href="tel:+56977221088" className="hover:underline">
                  +56 9 77221088
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 mr-2 text-primary" />
                <a
                  href="https://www.linkedin.com/in/miguelgilurbina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-2 text-primary" />
                <a
                  href="https://github.com/miguelgilurbina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-sm md:text-base">
          <p>&copy; 2024 Miguel Gil. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
