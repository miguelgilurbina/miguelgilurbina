"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, staggerItem, slideUp } from "@/lib/animations";

export function Education() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="formacion" className="mt-16 mb-16" ref={ref}>
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.education.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.education.sectionSubtitle}
          </p>
        </div>

        {/* Education Items */}
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t.education.items.map((edu) => (
            <motion.div
              key={edu.title}
              variants={staggerItem}
              className="bg-card border border-border rounded-xl p-6 card-hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-lg leading-snug">{edu.title}</h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
