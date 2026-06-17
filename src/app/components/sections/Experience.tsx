"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, TrendingUp, Code, Brain, Building, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, timelineItem, slideUp } from "@/lib/animations";

const ITEM_ICONS = [Code, Brain, Code, TrendingUp];

export function Experience() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const exp = t.experience;

  return (
    <section id="experiencia" className="mt-16 mb-16" ref={ref}>
      <motion.div variants={slideUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{exp.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{exp.sectionSubtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {exp.items.map((item, index) => {
              const Icon = ITEM_ICONS[index] ?? Briefcase;
              const isCurrent = index === 0;
              const isRecent = index === 1 || index === 2;

              return (
                <motion.div key={item.company + item.period} variants={timelineItem} className="relative">
                  {/* Dot */}
                  <div
                    className={[
                      "absolute left-0 md:left-4 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10",
                      isCurrent
                        ? "bg-primary border-primary text-primary-foreground shadow-indigo-sm"
                        : isRecent
                        ? "bg-accent border-primary/30 text-primary"
                        : "bg-background border-border text-muted-foreground",
                    ].join(" ")}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card */}
                  <div className="ml-12 md:ml-20">
                    <div
                      className={[
                        "bg-card border rounded-xl p-6 card-hover-glow",
                        isCurrent ? "border-primary/25" : "border-border",
                      ].join(" ")}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold mb-0.5">{item.title}</h3>
                          <p className="text-sm font-semibold text-primary">{item.company}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.period}</p>
                        </div>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20 self-start md:self-auto">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            {exp.current}
                          </span>
                        )}
                      </div>

                      {item.highlight && (
                        <div className="mb-4 p-3 bg-primary/5 border border-primary/15 rounded-lg">
                          <p className="text-sm font-medium text-primary">💡 {item.highlight}</p>
                        </div>
                      )}

                      <ul className="space-y-1.5 mb-5">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start text-sm leading-relaxed">
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {item.skills && (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                            {exp.keySkills}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 bg-accent text-accent-foreground text-xs rounded-md border border-primary/15 font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.caseStudyUrl && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <Link
                            href={item.caseStudyUrl}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                          >
                            {exp.caseStudyLabel ?? "Ver historia del proyecto"}
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          className="mt-12 p-6 bg-primary/5 border border-primary/15 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Building className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{exp.calloutTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{exp.calloutDesc}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
