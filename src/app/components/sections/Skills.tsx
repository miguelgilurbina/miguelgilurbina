"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code, Users, CheckCircle } from "lucide-react";

interface SkillItem {
  name: string;
  context: string;
  verified: boolean;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: typeof Brain;
  skills: SkillItem[];
  highlight?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-development",
    title: "Desarrollo de Productos con IA",
    description:
      "Experiencia práctica desarrollando e integrando soluciones de IA",
    icon: Brain,
    highlight: true,
    skills: [
      {
        name: "Prompt Engineering Especializado",
        context: "The Prompt Academy + experiencia en Outlier",
        verified: true,
      },
      {
        name: "Stack React/Next.js/TypeScript",
        context: "Prompt Maker + experiencia en Vemex Digital",
        verified: true,
      },
      {
        name: "Gestión de Datos con PostgreSQL/Prisma",
        context: "Arquitectura implementada en Prompt Maker",
        verified: true,
      },
      {
        name: "Integración de IA",
        context: "Workflows con ChatGPT, Claude y Gemini",
        verified: true,
      },
    ],
  },
  {
    id: "technical-stack",
    title: "Stack Técnico",
    description: "Tecnologías con las que tengo experiencia demostrable",
    icon: Code,
    skills: [
      {
        name: "Next.js 15 & React 19",
        context: "Prompt Maker + proyectos profesionales",
        verified: true,
      },
      {
        name: "TypeScript/JavaScript",
        context: "Todos los proyectos recientes",
        verified: true,
      },
      {
        name: "PostgreSQL & Prisma ORM",
        context: "Base de datos de Prompt Maker",
        verified: true,
      },
      {
        name: "Tailwind CSS & UI Systems",
        context: "Styling en todos los proyectos",
        verified: true,
      },
      {
        name: "Git/GitHub & Vercel",
        context: "Control de versiones y deployment",
        verified: true,
      },
      {
        name: "Testing (Jest, React Testing Library)",
        context: "Experiencia en Vemex Digital",
        verified: true,
      },
    ],
  },
  {
    id: "leadership-management",
    title: "Liderazgo y Gestión",
    description: "Competencias empresariales y de gestión desarrolladas",
    icon: Users,
    skills: [
      {
        name: "Scrum Master Certificado",
        context: "Metodologías ágiles para equipos tecnológicos",
        verified: true,
      },
      {
        name: "Gestión de Canales Comerciales",
        context: "6 años liderando redes de distribución",
        verified: true,
      },
      {
        name: "Desarrollo de Equipos",
        context: "Programas de capacitación y adopción tecnológica",
        verified: true,
      },
      {
        name: "Análisis de Datos Comerciales",
        context: "Optimización de performance en canales",
        verified: true,
      },
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="habilidades" className="mt-16 mb-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Competencias Técnicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Habilidades verificables desarrolladas a través de experiencia
            práctica y proyectos reales
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                className={`relative ${
                  category.highlight
                    ? "bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/10"
                    : "bg-card border border-border"
                } rounded-2xl p-6 md:p-8`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-start mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 ${
                      category.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {category.highlight && (
                    <div className="hidden md:block">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        🎯 Especialización
                      </span>
                    </div>
                  )}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-start space-x-3 p-4 bg-background border border-border rounded-lg hover:border-primary/20 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      {/* Verification Badge */}
                      <div className="flex-shrink-0 mt-0.5">
                        {skill.verified ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-border"></div>
                        )}
                      </div>

                      {/* Skill Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className="text-sm font-medium text-foreground">
              Todas las competencias verificables con proyectos reales
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
