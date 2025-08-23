"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap, Users, Shield, Code } from "lucide-react";
import Image from "next/image";

import promptMakerImage from "../../../../public/prompt-maker-image.png"; // Agregar esta imagen

export function FeaturedProject() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Zap,
      title: "Variables Dinámicas",
      description: "Sistema de prompts parametrizables y reutilizables",
    },
    {
      icon: Users,
      title: "Colaboración Comunitaria",
      description: "Plataforma para compartir y descubrir prompts optimizados",
    },
    {
      icon: Shield,
      title: "Control de Acceso",
      description: "Gestión granular de visibilidad público/privado",
    },
    {
      icon: Code,
      title: "Preview en Tiempo Real",
      description: "Visualización inmediata antes de guardar o compartir",
    },
  ];

  const techStack = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Next-Auth",
  ];

  return (
    <section id="proyecto-destacado" className="mt-16 mb-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            🚀 Proyecto Destacado
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prompt Maker</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plataforma que democratiza el acceso a herramientas de IA mediante
            un repositorio colaborativo de prompts optimizados
          </p>
        </div>

        {/* Main Project Card */}
        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
          {/* Project Image/Video Area */}
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 p-4 md:p-8">
            <div className="relative aspect-video bg-background rounded-lg border border-border overflow-hidden">
              <Image
                src={promptMakerImage}
                alt="Vista previa de Prompt Maker"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />

              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Live/Status Badge */}
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Live en producción
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                ¿Qué problema resuelve?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Muchos usuarios encuentran barreras para aprovechar las
                capacidades de la IA generativa. Prompt Maker elimina esta
                fricción creando un ecosistema donde la comunidad puede
                contribuir, descubrir y optimizar prompts para diferentes casos
                de uso empresariales y personales.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">
                Características principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://prompt-maker-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors group flex-1"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Ver Aplicación Live
              </a>

              <a
                href="https://github.com/miguelgilurbina/prompt-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-border font-semibold py-3 px-6 rounded-lg hover:bg-accent transition-colors group flex-1"
              >
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Ver Código Fuente
              </a>
            </div>

            {/* Impact Statement */}
            <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-lg">
              <p className="text-sm font-medium text-primary mb-1">
                💡 Impacto del proyecto
              </p>
              <p className="text-sm text-muted-foreground">
                Democratiza el acceso a herramientas de IA avanzadas,
                permitiendo que usuarios sin conocimientos técnicos profundos
                aprovechen las mejores prácticas de la comunidad.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
