"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Calendar,
  MapPin,
} from "lucide-react";
import { DownloadButton } from "../ui/DownloadButton";

interface ContactMethod {
  id: string;
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  description: string;
  primary?: boolean;
  cta: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "miguelgilurbina",
    href: "https://www.linkedin.com/in/miguelgilurbina/",
    description: "Conectemos profesionalmente",
    cta: "Ver perfil",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "miguelgilurbina",
    href: "https://github.com/miguelgilurbina",
    description: "Explora mi código y repositorios",
    cta: "Ver código",
  },
];

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contacto" className="mt-16 mb-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Disponible para nuevas oportunidades
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Trabajemos Juntos!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Buscas un desarrollador que combine experiencia empresarial con
            expertise en IA? Conversemos sobre cómo puedo aportar valor a tu
            equipo.
          </p>
        </div>

        {/* Main CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/10 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Estoy buscando oportunidades en tech para aplicar mi experiencia
              en IA y desarrollo. ¡Hablemos de cómo puedo contribuir a tu
              visión!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:miguel.gil.9210@gmail.com?subject=Oportunidad%20Laboral%20-%20Desarrollador%20IA&body=Hola%20Miguel,%0D%0A%0D%0AHe%20visto%20tu%20portafolio%20y%20me%20interesa%20conversar%20sobre..."
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contactar por Email
              </a>

              <a
                href="https://wa.me/56977221088?text=Hola%20Miguel!%20Vi%20tu%20portafolio%20y%20me%20interesa%20conversar%20sobre%20oportunidades%20laborales."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-border font-semibold py-3 px-8 rounded-lg hover:bg-accent transition-colors group"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.div
                key={method.id}
                className={`group ${
                  method.primary
                    ? "bg-primary/5 border-2 border-primary/20"
                    : "bg-card border border-border"
                } rounded-xl p-6 hover:border-primary/40 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      method.primary
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="font-semibold text-foreground mb-2">
                    {method.label}
                  </h4>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {method.description}
                  </p>

                  <a
                    href={method.href}
                    target={
                      method.id === "linkedin" || method.id === "github"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      method.id === "linkedin" || method.id === "github"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn"
                  >
                    {method.cta}
                    <motion.div
                      className="ml-1"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-4">
            <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Ubicación</h4>
            <p className="text-sm text-muted-foreground">Santiago, Chile</p>
            <p className="text-xs text-muted-foreground mt-1">
              Modalidad híbrida preferida
            </p>
          </div>

          <div className="text-center p-4">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Disponibilidad</h4>
            <p className="text-sm text-muted-foreground">Inmediata</p>
            <p className="text-xs text-muted-foreground mt-1">
              Tiempo completo o part-time
            </p>
          </div>

          <div className="text-center p-4">
            <div className="w-6 h-6 text-primary mx-auto mb-2 flex items-center justify-center">
              📄
            </div>
            <h4 className="font-medium mb-1">CV Actualizado</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Descarga mi CV completo
            </p>
            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-12 p-6 bg-card border border-border rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="text-lg font-medium text-foreground mb-2">
            🚀 ¿Listo para construir algo increíble juntos?
          </p>
          <p className="text-sm text-muted-foreground">
            Respondo todos los emails en menos de 24 horas
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
