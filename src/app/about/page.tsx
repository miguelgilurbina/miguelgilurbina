import { Metadata } from "next";
import Experience from "@/app/components/sections/Experience";
import Education from "@/app/components/sections/Education";
import Skills from "@/app/components/sections/Skills";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Conoce mi trayectoria profesional: de la gestión comercial al desarrollo AI-First. Experiencia, formación y habilidades técnicas.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mi Historia Profesional
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Una transición estratégica desde la gestión comercial hacia el
            desarrollo AI-First, combinando visión empresarial con expertise
            técnico para crear soluciones que realmente importan.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Download className="mr-2 w-4 h-4" />
              Descargar CV
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/consulting">
                Ver Servicios de Consultoría
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Mi Transición Estratégica
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Gestión Comercial</h3>
                <p className="text-sm text-muted-foreground">
                  6 años optimizando redes de distribución y liderando equipos
                  comerciales en el sector tecnológico
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Transición Tech</h3>
                <p className="text-sm text-muted-foreground">
                  Formación intensiva en desarrollo full-stack mientras mantenía
                  mi perspectiva empresarial
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">AI-First Developer</h3>
                <p className="text-sm text-muted-foreground">
                  Especialización en IA y creación de soluciones que combinan
                  tecnología con valor empresarial
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <Experience />
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <Skills />
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <Education />
        </div>

        {/* What Makes Me Different */}
        <div className="max-w-4xl mx-auto bg-muted/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ¿Qué me hace diferente?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-primary">
                🎯 Visión Empresarial
              </h3>
              <p className="text-muted-foreground mb-4">
                6 años gestionando redes de distribución me enseñaron a pensar
                en términos de ROI, stakeholders y procesos empresariales
                reales.
              </p>

              <h3 className="font-semibold mb-3 text-primary">
                🔧 Expertise Técnico
              </h3>
              <p className="text-muted-foreground">
                Desarrollo full-stack moderno con especialización en integración
                de IA, desde prompt engineering hasta arquitecturas escalables.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-primary">
                🚀 Mentalidad Emprendedora
              </h3>
              <p className="text-muted-foreground mb-4">
                TuWebEn7Dias demuestra mi capacidad de identificar oportunidades
                de mercado y ejecutar soluciones completas.
              </p>

              <h3 className="font-semibold mb-3 text-primary">
                🤝 Enfoque Colaborativo
              </h3>
              <p className="text-muted-foreground">
                Experiencia trabajando con equipos internacionales y
                stakeholders diversos, traduciendo necesidades de negocio en
                soluciones técnicas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Trabajamos juntos?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si buscas un desarrollador que entienda tanto la tecnología como el
            negocio, que pueda crear soluciones AI-powered que realmente
            agreguen valor, conversemos.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Iniciemos una Conversación</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
