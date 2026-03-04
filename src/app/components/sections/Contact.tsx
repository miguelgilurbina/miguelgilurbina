"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, MessageSquare, Calendar, MapPin } from "lucide-react";
import { DownloadButton } from "../ui/DownloadButton";
import { useLanguage } from "@/context/LanguageContext";
import { slideUp, staggerContainer, staggerItem } from "@/lib/animations";

export function Contact() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const c = t.contact;

  const contactMethods = [
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "miguelgilurbina",
      href: "https://www.linkedin.com/in/miguelgilurbina/",
      description: c.linkedin,
      cta: c.viewProfile,
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      value: "miguelgilurbina",
      href: "https://github.com/miguelgilurbina",
      description: c.github,
      cta: c.viewCode,
    },
  ];

  return (
    <section id="contacto" className="mt-16 mb-8" ref={ref}>
      <motion.div variants={slideUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium border border-green-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {c.availableBadge}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.sectionSubtitle}</p>
        </div>

        {/* CTA card */}
        <motion.div
          className="bg-primary/5 border border-primary/15 rounded-2xl p-8 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">{c.projectTitle}</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{c.projectDesc}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="mailto:miguel.gil.9210@gmail.com?subject=Oportunidad%20Laboral%20-%20Desarrollador%20IA"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-7 rounded-lg hover:bg-primary/90 transition-colors shadow-indigo-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                {c.emailCta}
              </motion.a>

              <motion.a
                href="https://web.whatsapp.com/send?phone=56977221088&text=Hola%20Miguel!%20Vi%20tu%20portafolio%20y%20me%20interesa%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-border font-semibold py-3 px-7 rounded-lg hover:bg-accent hover:border-primary/25 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {c.whatsappCta}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Social cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.id}
                variants={staggerItem}
                className="bg-card border border-border rounded-xl p-6 card-hover-glow text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{method.label}</h4>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {method.cta} →
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-center p-4">
            <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-0.5 text-sm">{c.location}</h4>
            <p className="text-sm text-muted-foreground">{c.locationValue}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{c.locationNote}</p>
          </div>
          <div className="text-center p-4">
            <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-0.5 text-sm">{c.availability}</h4>
            <p className="text-sm text-muted-foreground">{c.availabilityVal}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{c.availabilityNote}</p>
          </div>
          <div className="text-center p-4">
            <span className="text-xl block mb-2">📄</span>
            <h4 className="font-medium mb-0.5 text-sm">{c.cvTitle}</h4>
            <p className="text-xs text-muted-foreground mb-2">{c.cvDesc}</p>
            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-10 p-5 bg-card border border-border rounded-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="font-medium text-base mb-1">{c.finalCta}</p>
          <p className="text-sm text-muted-foreground">{c.responseTime}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
