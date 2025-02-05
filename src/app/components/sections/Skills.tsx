"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Desarrollo",
    skills: [
      "Prompt Engineering (LLMs & Midjourney)",
      "Integración de Soluciones AI",
      "Next.js 14 & React",
      "TypeScript/JavaScript",
      "Tailwind CSS & UI Systems",
      "API Integration & Backend",
    ],
  },
  {
    title: "Herramientas & Cloud",
    skills: [
      "Vercel & AWS",
      "Git & GitHub",
      "CI/CD",
      "Testing (Jest, RTL)",
      "Performance Optimization",
      "Framer Motion",
    ],
  },
  {
    title: "Profesionales",
    skills: [
      "Desarrollo de Soluciones AI",
      "Arquitectura de Software",
      "Metodologías Ágiles",
      "Comunicación Técnica",
      "Problem Solving",
      "Trabajo en Equipo",
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="habilidades" className="mt-12" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-background p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-bold text-lg">{category.title}</h3>
            <ul className="mt-2 space-y-1">
              {category.skills.map((skill) => (
                <li key={skill} className="text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
