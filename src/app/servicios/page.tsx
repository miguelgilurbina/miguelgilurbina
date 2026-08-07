"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, ArrowRight, Clock, Mail, MessageCircle } from "lucide-react";
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
  "https://wa.me/56977221088?text=Hola%20Miguel!%20Vi%20tus%20servicios%20y%20quiero%20cotizar%20un%20proyecto.";
const EMAIL_URL =
  "mailto:miguel.gil.9210@gmail.com?subject=Cotizaci%C3%B3n%20de%20proyecto";

export default function ServiciosPage() {
  const { t } = useLanguage();
  const s = t.services;

  const [pkgRef, pkgInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [procRef, procInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-10 pb-16 text-center max-w-3xl mx-auto">
          <motion.div variants={badgeEntrance} initial="hidden" animate="visible" className="mb-5 inline-flex">
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

        {/* ── Paquetes ──────────────────────────────────────────────────── */}
        <section ref={pkgRef} className="mb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={pkgInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
          >
            {s.packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={staggerItem}
                className={[
                  "relative flex flex-col h-full rounded-2xl border p-7 bg-card transition-shadow duration-200",
                  pkg.popular
                    ? "border-primary/40 shadow-indigo-md lg:-mt-3 lg:pb-10"
                    : "border-border hover:border-primary/25",
                ].join(" ")}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground whitespace-nowrap">
                    {s.popular}
                  </span>
                )}

                <h2 className="text-lg font-bold mb-2">{pkg.name}</h2>

                <div className="mb-1 flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{pkg.priceNote}</p>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-5">
                  <Clock className="w-3.5 h-3.5" />
                  {pkg.timeline}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 rounded-lg font-semibold text-sm transition-colors group",
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-accent hover:border-primary/30",
                  ].join(" ")}
                >
                  {s.ctaPrimary}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Mantención */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={pkgInView ? "visible" : "hidden"}
            className="mt-6 rounded-2xl border border-border bg-accent/40 p-7 flex flex-col md:flex-row md:items-center gap-6"
          >
            <div className="md:w-72 flex-shrink-0">
              <h3 className="font-bold mb-1.5">{s.maintenance.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-bold text-primary">{s.maintenance.price}</span>
                <span className="text-sm text-muted-foreground">{s.perMonth}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.maintenance.description}
              </p>
            </div>
            <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {s.maintenance.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ── Proceso ───────────────────────────────────────────────────── */}
        <section ref={procRef} className="mb-20">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={procInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">{s.processTitle}</h2>
            <p className="text-muted-foreground">{s.processSubtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={procInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
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
            animate={faqInView ? "visible" : "hidden"}
            className="text-3xl font-bold mb-10 text-center"
          >
            {s.faqTitle}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
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
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        {/* ── CTA final ─────────────────────────────────────────────────── */}
        <section ref={ctaRef} className="mb-16">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
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
