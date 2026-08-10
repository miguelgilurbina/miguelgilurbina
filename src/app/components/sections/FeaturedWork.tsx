"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  BookOpen,
  Bot,
  Radio,
  Truck,
  FileBarChart,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, staggerItem, slideUp } from "@/lib/animations";

export interface FeaturedWorkItem {
  id: string;
  technologies: string[];
  liveUrl?: string;
  internalUrl?: string;
  githubUrl?: string;
  secondaryUrl?: string;
}

interface FeaturedWorkProps {
  items: FeaturedWorkItem[];
}

const ICONS: Record<string, LucideIcon> = {
  "claude-impact-lab": Bot,
  "cargo-electric": Truck,
  "curiana-radio": Radio,
};

export function FeaturedWork({ items }: FeaturedWorkProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const fw = t.featuredWork;

  const enriched = items
    .map((item) => {
      const copy = fw.items.find((i) => i.id === item.id);
      return copy ? { ...item, ...copy } : null;
    })
    .filter((item): item is FeaturedWorkItem & (typeof fw.items)[number] => item !== null);

  return (
    <section id="destacados" className="mt-8 mb-16 scroll-mt-24" ref={ref}>
      <motion.div variants={slideUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{fw.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{fw.sectionSubtitle}</p>
        </div>

        {/* Cards */}
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {enriched.map((project) => {
            const Icon = ICONS[project.id] ?? Bot;

            return (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden card-hover-glow"
              >
                {/* Accent bar */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary/20" />

                <div className="p-6 md:p-8 pl-7 md:pl-10">
                  {/* Top row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                            {project.badge}
                          </span>
                          <span className="text-xs text-muted-foreground">{project.period}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span className="font-medium text-foreground/80">{project.role}</span>
                          {project.org ? ` · ${project.org}` : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-base md:text-lg leading-relaxed text-foreground/85 mb-6 max-w-3xl">
                    {project.tagline}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-border bg-background px-4 py-3"
                      >
                        <p className="text-xl md:text-2xl font-bold text-primary leading-none">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1.5 leading-snug">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
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
                  <div className="flex flex-wrap gap-2">
                    {project.internalUrl && (
                      <Link
                        href={project.internalUrl}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {fw.viewCaseStudy}
                      </Link>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={[
                          "inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                          project.internalUrl
                            ? "border border-border hover:bg-accent hover:border-primary/25"
                            : "bg-primary text-primary-foreground hover:bg-primary/90",
                        ].join(" ")}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {fw.viewLive}
                      </a>
                    )}
                    {project.secondaryUrl && project.secondaryLabel && (
                      <a
                        href={project.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border text-sm font-medium rounded-lg hover:bg-accent hover:border-primary/25 transition-colors"
                      >
                        <FileBarChart className="w-3.5 h-3.5" />
                        {project.secondaryLabel}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border text-sm font-medium rounded-lg hover:bg-accent hover:border-primary/25 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        {fw.viewCode}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
