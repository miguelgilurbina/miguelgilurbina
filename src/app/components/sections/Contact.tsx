"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface ContactLink {
  icon: typeof Mail;
  label: string;
  href: string;
  username?: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:miguel.gil.9210@gmail.com",
    username: "miguel.gil.9210@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    href: "tel:+56977221088",
    username: "+56 9 77221088",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/miguelgilurbina/",
    username: "miguelgilurbina",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/miguelgilurbina",
    username: "miguelgilurbina",
  },
];

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contacto" className="mt-12" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <motion.div
        className="bg-background p-4 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="w-6 h-6 mr-2 text-primary" />
                <a
                  href={contact.href}
                  target={
                    contact.label !== "Email" && contact.label !== "Teléfono"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.label !== "Email" && contact.label !== "Teléfono"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hover:underline"
                >
                  {contact.username || contact.label}
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
