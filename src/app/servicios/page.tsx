"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  badgeEntrance,
} from "@/lib/animations";

const WHATSAPP_URL =
  "https://wa.me/56977221088?text=Hola%20Miguel!%20Vi%20tus%20servicios%20y%20quiero%20conversar%20un%20proyecto.";
const EMAIL_URL =
  "mailto:miguel.gil.9210@gmail.com?subject=Consulta%20de%20proyecto";

export default function ServiciosPage() {
  const { t } = useLanguage();
  const s = t.services;

  const [areasRef, areasIn] = useInView({ threshold: 0.03, triggerOnce: true });
  const [prodRef, prodIn] = useInView({ threshold: 0.1, triggerOnce: true });
  const [procRef, procIn] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqIn] = useInView({ threshold: 0.08, triggerOnce: true });
  const [ctaRef, ctaIn] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-10 pb-16 text-center max-w-3xl mx-auto">
          <motion.div
            variants={badgeEntrance}
            initial="hidden"
            animate="visible"
            className="mb-5 inline-flex"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {s.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
          >
            <span className="text-gradient">{s.title}</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {s.subtitle}
          </motion.p>
        </section>

        {/* ── Áreas de trabajo ──────────────────────────────────────────── */}
        <section ref={areasRef} className="mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={areasIn ? "visible" : "hidden"}
            className="space-y-5 max-w-4xl mx-auto"
          >
            {s.areas.map((area, i) => {
              const isExternal = area.url.startsWith("http");
              return (
                <motion.article
                  key={area.id}
                  variants={staggerItem}
                  className="rounded-2xl border border-border bg-card p-7 md:p-8 hover:border-primary/25 transition-colors duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Encabezado del área */}
                    <div className="md:w-64 flex-shrink-0">
                      <span className="text-xs font-bold text-primary/30 tabular-nums block mb-2">
                        0{i + 1}
                      </span>
                      <h2 className="text-lg font-bold mb-2 leading-snug">{area.name}</h2>
                      <p className="text-sm text-primary font-medium leading-snug">
                        {area.tagline}
                      </p>
                    </div>

                    {/* Cuerpo */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {area.description}
                      </p>

                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">
                        {s.deliverLabel}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                        {area.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/85">{d}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Respaldo: lo que hace creíble el área */}
                      <div className="rounded-xl bg-accent/50 border border-border/60 p-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-2">
                          {s.evidenceLabel}
                        </h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {area.evidence}
                        </p>
                        {area.url &&
                          (isExternal ? (
                            <a
                              href={area.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline"
                            >
                              {s.seeProject}
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link
                              href={area.url}
                              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline"
                            >
                              {s.seeProject}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* ── Vía de precio fijo ────────────────────────────────────────── */}
        <section ref={prodRef} className="mb-20">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={prodIn ? "visible" : "hidden"}
            className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
          >
            <div className="flex-1">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary">
                {s.productized.label}
              </span>
              <h2 className="text-lg font-bold mb-2">{s.productized.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.productized.description}
              </p>
            </div>
            <a
              href={s.productized.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors flex-shrink-0 group"
            >
              {s.productized.cta}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* ── Proceso ───────────────────────────────────────────────────── */}
        <section ref={procRef} className="mb-20">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={procIn ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">{s.processTitle}</h2>
            <p className="text-muted-foreground">{s.processSubtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={procIn ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
          >
            {s.process.map((p) => (
              <motion.div
                key={p.step}
                variants={staggerItem}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="text-2xl font-bold text-primary/25 block mb-3">{p.step}</span>
                <h3 className="font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section ref={faqRef} className="mb-20 max-w-3xl mx-auto">
          <motion.h2
            variants={slideUp}
            initial="hidden"
            animate={faqIn ? "visible" : "hidden"}
            className="text-3xl font-bold mb-10 text-center"
          >
            {s.faqTitle}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={faqIn ? "visible" : "hidden"}
            className="space-y-3"
          >
            {s.faq.map((item) => (
              <motion.details
                key={item.q}
                variants={staggerItem}
                className="group rounded-xl border border-border bg-card px-6 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-medium text-sm list-none">
                  {item.q}
                  <span className="text-primary text-xl leading-none flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        {/* ── CTA final ─────────────────────────────────────────────────── */}
        <section ref={ctaRef} className="mb-16">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={ctaIn ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center rounded-2xl border border-primary/20 bg-accent/50 p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{s.finalTitle}</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">{s.finalSubtitle}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {s.ctaPrimary}
              </a>
              <a
                href={EMAIL_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border font-semibold text-sm hover:bg-accent hover:border-primary/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {s.ctaSecondary}
              </a>
            </div>

            <p className="text-xs text-muted-foreground">{s.responseNote}</p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
