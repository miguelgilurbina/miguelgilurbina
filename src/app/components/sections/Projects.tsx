"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowUpRight, BookOpen } from "lucide-react";
import { StaticImageData } from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, staggerItem, slideUp } from "@/lib/animations";

interface AdditionalProject {
  id: string;
  title: string;
  description: string;
  image?: StaticImageData;
  liveUrl?: string;
  internalUrl?: string;
  githubUrl?: string;
  technologies: string[];
  status: string;
  category: string;
}

interface ProjectsProps {
  projects: AdditionalProject[];
}

export function Projects({ projects }: ProjectsProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const pr = t.projects;

  // Merge translated text into project data
  const enrichedProjects = projects
    .filter((p) => p.status === "live")
    .map((p) => {
      const translated = pr.items.find((item) => item.id === p.id);
      return {
        ...p,
        title: translated?.title ?? p.title,
        description: translated?.description ?? p.description,
        category: translated?.category ?? p.category,
      };
    });

  return (
    <section id="proyectos" className="mt-16 mb-16" ref={ref}>
      <motion.div variants={slideUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{pr.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{pr.sectionSubtitle}</p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {enrichedProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="group">
              <div className="bg-card border border-border rounded-xl overflow-hidden card-hover-glow">
                {/* Image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-accent/30 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20">
                      <span className="text-4xl font-bold text-primary/20 select-none">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium border border-border/50">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 backdrop-blur-sm text-green-600 text-xs font-medium border border-green-500/20">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      {pr.live}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    {project.internalUrl ? (
                      <Link
                        href={project.internalUrl}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                      >
                        <BookOpen className="w-4 h-4" />
                        {pr.viewCaseStudy ?? "Ver Case Study"}
                      </Link>
                    ) : project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {pr.viewLive}
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-md border border-primary/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.internalUrl ? (
                      <Link
                        href={project.internalUrl}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {pr.viewCaseStudy ?? "Ver Case Study"}
                      </Link>
                    ) : project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {pr.viewLive}
                      </a>
                    ) : null}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border text-sm font-medium rounded-lg hover:bg-accent hover:border-primary/25 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        {pr.viewCode}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://github.com/miguelgilurbina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg hover:border-primary/25 hover:bg-accent transition-colors group"
          >
            <Github className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">GitHub — miguelgilurbina</span>
            <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
