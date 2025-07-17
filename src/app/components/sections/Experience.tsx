"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, TrendingUp, Code, Brain, Building } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  type: "current" | "recent" | "consolidated";
  icon: typeof Briefcase;
  description: string[];
  skills?: string[];
  highlight?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "outlier",
    title: "AI Research Contributor",
    company: "Outlier",
    period: "Nov 2024 - Presente",
    type: "current",
    icon: Brain,
    highlight: "Evaluando modelos de IA líderes del mercado",
    description: [
      "Evaluación directa de modelos de IA como GPT-4, Claude y Gemini para uso empresarial",
      "Desarrollo de metodologías para medir rendimiento y establecer estándares de calidad",
      "Colaboración con equipos internacionales para mejores prácticas en prompt engineering",
      "Creación de casos de prueba especializados para validación empresarial",
      "Optimización de instrucciones para maximizar efectividad en contextos de negocio",
    ],
    skills: [
      "Model Evaluation",
      "Prompt Engineering",
      "Quality Assurance",
      "International Collaboration",
    ],
  },
  {
    id: "vemex",
    title: "Full Stack Developer & QA Specialist",
    company: "Vemex Digital",
    period: "Mayo - Dic 2024",
    type: "recent",
    icon: Code,
    highlight: "Desarrollo web moderno con enfoque en calidad",
    description: [
      "Desarrollo de aplicaciones web responsivas con React y Next.js siguiendo estándares empresariales",
      "Implementación de estrategias de testing y quality assurance comprehensivas",
      "Optimización de aplicaciones para máxima velocidad y escalabilidad",
      "Participación en revisiones de código y mejora de estándares de desarrollo",
      "Gestión completa del ciclo de vida de errores y resolución de issues",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Testing",
      "Performance Optimization",
    ],
  },
  {
    id: "commercial",
    title: "Gestión Comercial y Desarrollo de Canales",
    company: "Hikvision, Dahua, SSTT, Orama, Wetland",
    period: "2017 - 2023",
    type: "consolidated",
    icon: TrendingUp,
    highlight: "6 años optimizando redes de distribución y canales comerciales",
    description: [
      "Gestión directa de redes de subdistribuidores a nivel nacional en sector tecnológico",
      "Análisis de datos de ventas y comportamiento de canales para optimización de rendimiento",
      "Implementación de procesos estandarizados en ecosistemas de distribución complejos",
      "Liderazgo de proyectos comerciales incluyendo licitaciones públicas (Mercado Público)",
      "Diseño y ejecución de programas de capacitación técnica para equipos y socios de canal",
      "Gestión de logística internacional y coordinación entre múltiples stakeholders",
    ],
    skills: [
      "Channel Management",
      "Data Analysis",
      "Process Optimization",
      "Project Leadership",
      "Stakeholder Management",
    ],
  },
];

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experiencia" className="mt-16 mb-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8+ años combinando estrategia comercial con desarrollo tecnológico
            especializado en IA
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-4 w-8 h-8 rounded-full border-4 flex items-center justify-center z-10 ${
                      exp.type === "current"
                        ? "bg-primary border-primary text-primary-foreground"
                        : exp.type === "recent"
                        ? "bg-secondary border-secondary text-secondary-foreground"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-20">
                    <div
                      className={`bg-card border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                        exp.type === "current"
                          ? "border-primary/20 hover:border-primary/40"
                          : exp.type === "recent"
                          ? "border-secondary/20 hover:border-secondary/40"
                          : "border-border hover:border-border"
                      }`}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-base font-medium text-primary mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period}
                          </p>
                        </div>

                        {exp.type === "current" && (
                          <div className="mt-2 md:mt-0">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                              Actual
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Highlight */}
                      {exp.highlight && (
                        <div className="mb-4 p-3 bg-primary/5 border border-primary/10 rounded-lg">
                          <p className="text-sm font-medium text-primary">
                            💡 {exp.highlight}
                          </p>
                        </div>
                      )}

                      {/* Description */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm leading-relaxed"
                          >
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      {exp.skills && (
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Competencias clave:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-background border border-border text-xs rounded-md text-muted-foreground"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career Transition Callout */}
        <motion.div
          className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Transición Estratégica hacia la Tecnología
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Después de 6 años liderando procesos comerciales y optimizando
                redes de distribución, decidí aplicar este conocimiento
                empresarial al desarrollo de soluciones tecnológicas. Mi
                experiencia en canales y stakeholder management me permite crear
                herramientas de IA que realmente resuelven problemas de negocio
                reales.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
