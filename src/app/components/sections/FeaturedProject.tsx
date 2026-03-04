"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap, Users, Shield, Code } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { slideUp, staggerContainer, staggerItem } from "@/lib/animations";
import promptMakerImage from "../../../../public/prompt-maker-image.png";

const FEATURE_ICONS = [Zap, Users, Shield, Code];
const TECH_STACK = ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Next-Auth"];

export function FeaturedProject() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const fp = t.featuredProject;

  return (
    <section id="proyecto-destacado" className="mt-16 mb-16" ref={ref}>
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            {fp.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{fp.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {fp.description}
          </p>
        </div>

        {/* Main Project Card */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-warm-sm card-hover-glow mb-8">
          {/* Image area */}
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/30 p-4 md:p-8">
            <div className="relative aspect-video bg-background rounded-xl border border-border overflow-hidden">
              <Image
                src={promptMakerImage}
                alt={`${fp.title} preview`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Live badge */}
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {fp.liveStatus}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Problem */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{fp.problemTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{fp.problemDesc}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-5">{fp.featuresTitle}</h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {fp.features.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i];
                  return (
                    <motion.div
                      key={feature.title}
                      variants={staggerItem}
                      className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/25 transition-colors card-hover-glow"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-0.5">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{fp.stackTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full border border-primary/15 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.a
                href="https://prompt-maker-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors group flex-1 shadow-indigo-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {fp.ctaLive}
              </motion.a>
              <motion.a
                href="https://github.com/miguelgilurbina/prompt-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-border font-semibold py-3 px-6 rounded-lg hover:bg-accent hover:border-primary/25 transition-colors group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                {fp.ctaCode}
              </motion.a>
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/15 rounded-xl">
              <p className="text-sm font-medium text-primary mb-1">{fp.impactTitle}</p>
              <p className="text-sm text-muted-foreground">{fp.impactDesc}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
