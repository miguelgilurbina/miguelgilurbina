"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { DownloadButton } from "../ui/DownloadButton";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

interface HeroProps {
  image: StaticImageData;
}

export function Hero({ image }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto md:mx-0 ring-4 ring-primary/20">
        <Image
          src={image}
          alt="Miguel Gil"
          width={192}
          height={192}
          className="object-cover"
          priority
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Disponible para nuevas oportunidades
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text leading-tight">
          AI First Full Stack Developer & Implementation Specialist
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
          8+ años combinando estrategia comercial con desarrollo de IA
          empresarial
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-8 leading-relaxed">
          Especialista en crear soluciones de IA que resuelven problemas
          empresariales reales. Combino mi experiencia gestionando redes de
          distribución con expertise técnico en modelos de lenguaje y desarrollo
          full-stack para democratizar el acceso a tecnologías avanzadas.
        </p>

        {/* Featured Project Highlight */}
        <div className="bg-card border border-border rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1">
                🚀 Proyecto Destacado: Prompt Maker
              </h3>
              <p className="text-sm text-muted-foreground">
                Plataforma live que democratiza el acceso a herramientas de IA
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://prompt-maker-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Ver Live
              </a>
              <a
                href="https://github.com/miguelgilurbina/prompt-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 border border-border rounded-md text-sm hover:bg-accent transition-colors"
              >
                <Github className="w-4 h-4 mr-1" />
                Código
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Contactar
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <DownloadButton />

          <a
            href="#proyectos"
            className="inline-flex items-center justify-center border border-border font-semibold py-3 px-6 rounded-lg hover:bg-accent transition-colors"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
