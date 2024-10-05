import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import fotoPerfil from "../../public/fotoPerfil.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading">Miguel Gil</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#experiencia" className="hover:text-secondary">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="#formacion" className="hover:text-secondary">
                  Formación
                </Link>
              </li>
              <li>
                <Link href="#habilidades" className="hover:text-secondary">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="hover:text-secondary">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-secondary">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image
              src={fotoPerfil}
              alt="Miguel Gil"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-heading mb-4">Front End Developer</h2>
            <p className="text-lg mb-4">
              Desarrollador Front-End con sólida formación en tecnologías
              modernas especializado en Next.js, TypeScript y Tailwind CSS. Con
              un background en ingeniería ambiental y ventas, aporto una
              perspectiva única al desarrollo de software, combinando
              habilidades técnicas con un fuerte enfoque en la resolución de
              problemas y la comunicación efectiva.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="btn-accent">
                Contactar
              </a>
              <a
                href="/cv-miguel-gil.pdf"
                className="btn-secondary flex items-center"
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </a>
            </div>
          </div>
        </section>

        <section id="experiencia" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">
            Experiencia Profesional
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-xl">
                Full Stack Developer - Vemex Digital
              </h3>
              <p className="text-sm text-neutral-dark">Mayo 2024 - Presente</p>
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
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-xl">Ejecutivo Comercial</h3>
              <p className="text-sm text-neutral-dark">2017 - 2024 | Chile</p>
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

        <section id="formacion" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">Formación</h2>
          <div className="space-y-4">
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-xl">Certified Web Developer</h3>
              <p className="text-sm text-neutral-dark">
                Digital House Coding School | Oct 2022 - Jul 2024
              </p>
              <p className="mt-2">
                Curso interdisciplinario que cubre desarrollo Front End, Back
                End, Infraestructura y bases de datos. También se enfoca en
                habilidades blandas como agilidad de aprendizaje, trabajo en
                equipo y comunicación efectiva.
              </p>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-xl">
                Certificado Profesional de Scrum Master
              </h3>
              <p className="text-sm text-neutral-dark">
                Certiprof | Julio 2023
              </p>
              <p className="mt-2">
                Curso certificado de Scrum Master, basado en la guía oficial de
                Scrum (2020).
              </p>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-xl">Ingeniero Ambiental</h3>
              <p className="text-sm text-neutral-dark">
                Universidad de Falcón, Venezuela | 2009 - 2014
              </p>
              <p className="mt-2">
                Egresado con reconocimiento por trabajo de grado titulado
                -Evaluación del estado de la playa arenosa de Villa Marina -
                Punta Salina, Paraguaná, Venezuela, en base a la caracterización
                de los factores naturales y antropogénicos- con mención
                honorífica.
              </p>
            </div>
          </div>
        </section>

        <section id="habilidades" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-lg">Técnicas</h3>
              <ul className="mt-2 space-y-1">
                <li>React / Next.js</li>
                <li>Java Spring Boot</li>
                <li>MongoDB / MySQL</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-lg">Metodologías</h3>
              <ul className="mt-2 space-y-1">
                <li>Scrum</li>
                <li>Desarrollo Ágil</li>
                <li>Planificación Estratégica</li>
              </ul>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg">
              <h3 className="font-heading text-lg">Personales</h3>
              <ul className="mt-2 space-y-1">
                <li>Pensamiento lógico & crítico</li>
                <li>Proactividad</li>
                <li>Adaptabilidad</li>
                <li>Comunicación Asertiva</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-light p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Proyecto de IA"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading text-xl">Co-Working App</h3>
              <p className="mt-2">
                Desarrollé de una aplicación de reservas con administración de
                contenido y usuarios.
              </p>
              <Link
                href="/proyectos/asistente-virtual"
                className="inline-block mt-2 text-primary hover:underline"
              >
                Ver detalles
              </Link>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Proyecto Web"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading text-xl">Plataforma E-learning</h3>
              <p className="mt-2">
                Creé una plataforma de aprendizaje en línea con React y Node.js,
                incluyendo funcionalidades de video streaming y evaluaciones
                interactivas.
              </p>
              <Link
                href="/proyectos/elearning"
                className="inline-block mt-2 text-primary hover:underline"
              >
                Ver detalles
              </Link>
            </div>
          </div>
          <Link
            href="/proyectos"
            className="inline-block mt-4 text-primary hover:underline"
          >
            Ver todos los proyectos
          </Link>
        </section>

        <section id="proyectos" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">Proyectos Destacados</h2>
          <div className="bg-neutral-light p-4 rounded-lg">
            <h3 className="font-heading text-xl">
              CO-WORKING APP - Proyecto Integrador
            </h3>
            <p className="text-sm text-neutral-dark">
              Digital House | Mayo 2024 - Julio 2024
            </p>
            <p className="mt-2">
              Desarrollo de una aplicación de reservas con administración de
              contenido y usuarios.
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>Frontend: React con Javascript y Bootstrap</li>
              <li>Backend: Java con Spring Boot</li>
              <li>Base de datos: MySQL</li>
              <li>Despliegue: Servicios AWS</li>
              <li>
                Rol: Scrum Master, utilizando herramientas como Mural y Trello
              </li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="mt-12">
          <h2 className="text-2xl font-heading mb-4">Contacto</h2>
          <div className="bg-neutral-light p-6 rounded-lg">
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

      <footer className="bg-primary text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Miguel Gil. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
