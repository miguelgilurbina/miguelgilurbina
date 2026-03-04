"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const NAV_HREFS = [
  { href: "#experiencia", key: "experience" },
  { href: "#formacion",   key: "education"  },
  { href: "#habilidades", key: "skills"     },
  { href: "#proyectos",   key: "projects"   },
  { href: "#contacto",    key: "contact"    },
] as const;

export function Navigation({ mobile, onClose }: NavigationProps) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {NAV_HREFS.map(({ href, key }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={[
              "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
              mobile
                ? "text-foreground hover:bg-primary/10 hover:text-primary"
                : "hover:bg-primary/10 hover:text-primary",
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground",
            ].join(" ")}
          >
            {t.nav[key as keyof typeof t.nav]}
          </Link>
        );
      })}
    </>
  );
}
