"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, staggerItem, slideUp } from "@/lib/animations";

const CATEGORY_ICONS = [Brain, Code, Users];

export function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const sk = t.skills;

  return (
    <section id="habilidades" className="mt-16 mb-16" ref={ref}>
      <motion.div variants={slideUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{sk.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{sk.sectionSubtitle}</p>
        </div>

        {/* Categories */}
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {sk.categories.map((category, catIdx) => {
            const Icon = CATEGORY_ICONS[catIdx] ?? Brain;

            return (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className={[
                  "rounded-2xl p-6 md:p-8 border",
                  category.highlight
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card border-border",
                ].join(" ")}
              >
                {/* Category header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={[
                        "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                        category.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary",
                      ].join(" ")}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  {category.highlight && (
                    <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {sk.specialization}
                    </span>
                  )}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-start gap-3 p-3.5 bg-background border border-border rounded-lg hover:border-primary/20 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">{skill.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{skill.context}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg text-sm font-medium">
            <CheckCircle className="w-4 h-4 text-primary" />
            {sk.verifiedNote}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
