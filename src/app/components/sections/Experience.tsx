"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "AI Research Contributor",
    company: "Outlier",
    period: "2024 - Presente",
    description: [
      "Evaluación y mejora de modelos de IA líderes en el mercado",
      "Desarrollo de casos de prueba y escenarios para evaluar capacidades de IA",
      "Contribución al desarrollo de mejores prácticas en prompt engineering",
      "Colaboración con equipo global de expertos en IA",
      "Análisis y optimización de respuestas de modelos de IA",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Vemex Digital",
    period: "Mayo 2024 - Diciembre 2024",
    description: [
      "Desarrollo de aplicaciones web responsivas con React y Next.js",
      "Implementación de diseños UI/UX siguiendo estándares empresariales",
      "Optimización de aplicaciones para máxima velocidad y escalabilidad",
      "Participación en revisiones de código y mejora de estándares",
      "Testing y aseguramiento de calidad",
    ],
  },
  // Puedes agregar más experiencias aquí
];

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experiencia" className="mt-12" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">Experiencia Profesional</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-bold text-xl">
              {exp.title} - {exp.company}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.period}
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
