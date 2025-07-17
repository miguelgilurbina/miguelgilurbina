"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="proyectos" className="mt-12" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-background p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <Link
              href={project.link}
              className="inline-block mt-2 text-primary hover:underline"
            >
              Ver detalles
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
