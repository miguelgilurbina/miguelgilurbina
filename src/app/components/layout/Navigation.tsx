"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const SECTION_HREFS = [
  { href: "#destacados",  key: "featured"   },
  { href: "#experiencia", key: "experience" },
  { href: "#formacion",   key: "education"  },
  { href: "#habilidades", key: "skills"     },
] as const;

const PAGE_HREFS = [
  { href: "/direccion-creativa", key: "creativeDirection" },
] as const;

export function Navigation({ mobile, onClose }: NavigationProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
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
  }, [isHome]);

  const linkClass = (active: boolean) =>
    [
      "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
      mobile
        ? "text-foreground hover:bg-primary/10 hover:text-primary"
        : "hover:bg-primary/10 hover:text-primary",
      active ? "bg-primary/10 text-primary" : "text-muted-foreground",
    ].join(" ");

  return (
    <>
      {SECTION_HREFS.map(({ href, key }) => (
        <Link
          key={href}
          href={isHome ? href : `/${href}`}
          onClick={onClose}
          className={linkClass(isHome && activeSection === href.slice(1))}
        >
          {t.nav[key as keyof typeof t.nav]}
        </Link>
      ))}

      {PAGE_HREFS.map(({ href, key }) => (
        <Link
          key={href}
          href={href}
          onClick={onClose}
          className={linkClass(pathname === href)}
        >
          {t.nav[key as keyof typeof t.nav]}
        </Link>
      ))}

      {/* Servicios es la ruta de conversión: va destacada, no como un link más. */}
      <Link
        href="/servicios"
        onClick={onClose}
        className={[
          "px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-200",
          mobile ? "text-center" : "",
          pathname === "/servicios"
            ? "bg-primary text-primary-foreground"
            : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
        ].join(" ")}
      >
        {t.nav.services}
      </Link>
    </>
  );
}
