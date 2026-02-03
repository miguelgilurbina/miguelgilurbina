"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

const educationList: Education[] = [
  {
    title: "Diplomado en IA Generativa en Organizaciones",
    institution: "Universidad de Chile, Facultad de Economía y Negocios",
    period: "Oct 2025 - Ene 2026",
    description:
      "Diplomado especializado en implementación de soluciones de IA generativa en contextos empresariales. Desarrollo de proyectos con LangChain, sistemas RAG (Retrieval Augmented Generation), LangGraph para orquestación de agentes, LangServe, y despliegue con Docker. Proyecto final: chatbot médico conversacional con arquitectura multi-agente, integración de APIs externas, y gestión de estado con PostgreSQL.",
  },
  {
    title: "Certified Web Developer",
    institution: "Digital House Coding School",
    period: "Oct 2022 - Jul 2024",
    description:
      "Curso interdisciplinario que cubre desarrollo Front End, Back End, Infraestructura y bases de datos. También se enfoca en habilidades blandas como agilidad de aprendizaje, trabajo en equipo y comunicación efectiva.",
  },
  {
    title: "Certificado Profesional de Scrum Master",
    institution: "Certiprof",
    period: "Julio 2023",
    description:
      "Curso certificado de Scrum Master, basado en la guía oficial de Scrum (2020).",
  },
  {
    title: "Ingeniero Ambiental",
    institution: "Universidad de Falcón, Venezuela",
    period: "2009 - 2014",
    description:
      "Egresado con reconocimiento por trabajo de grado titulado: Evaluación del estado de la playa arenosa de Villa Marina - Punta Salina, Paraguaná, Venezuela, en base a la caracterización de los factores naturales y antropogénicos con mención honorífica.",
  },
];

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="formacion" className="mt-12" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">Formación</h2>
      <div className="space-y-4">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.title}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-heading text-xl">{edu.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {edu.institution} | {edu.period}
            </p>
            <p className="mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
