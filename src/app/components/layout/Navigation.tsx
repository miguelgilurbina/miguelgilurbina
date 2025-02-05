"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

export const NAV_ITEMS = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#formacion", label: "Formación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Navigation({ mobile, onClose }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            px-3 py-2 rounded-md transition-colors
            ${
              mobile
                ? "text-foreground hover:bg-primary/10"
                : "hover:bg-primary hover:text-primary-foreground"
            }
            ${activeSection === item.href.slice(1) ? "bg-primary/10" : ""}
          `}
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
