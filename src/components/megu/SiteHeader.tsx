"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { IconClose, IconDownload, IconMenu, IconTheme } from "./icons";
import { LogoMark, buttonClass } from "./ui";
import { useCvDownload } from "./useCvDownload";

/* Header sticky (handoff 5a/5b): 88px que se comprime a 56px al pasar 24px
   de scroll, enlaces visibles desde 768px y hamburguesa solo por debajo. */

const LINKS = [
  { key: "work",     href: "/#trabajo", match: ["/cargo-electric", "/claude-impact-lab"] },
  { key: "archive",  href: "/archivo",  match: ["/archivo"] },
  { key: "services", href: "/servicios", match: ["/servicios"] },
  { key: "about",    href: "/#sobre",   match: [] as string[] },
] as const;

export function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isExp = mounted && resolvedTheme === "experimental";
  return { isExp, mounted, toggle: () => setTheme(isExp ? "profesional" : "experimental") };
}

function LangSwitch({ className }: { className?: string }) {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.nav.langSwitch}
      className={cn(
        "inline-flex h-11 items-center rounded-sys px-1 font-mono text-[10px] font-medium tracking-[0.1em] text-muted transition-colors duration-[140ms] hover:text-ink",
        className
      )}
    >
      <span className={lang === "es" ? "text-ink" : undefined}>ES</span>
      <span className="px-1">/</span>
      <span className={lang === "en" ? "text-ink" : undefined}>EN</span>
    </button>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useThemeToggle();
  const cv = useCvDownload();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El menú móvil se cierra al navegar y con Escape, y bloquea el scroll del fondo.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const themeLabel = theme.isExp ? t.nav.themeToPro : t.nav.themeToExp;

  return (
    <>
      <a
        href="#contenido"
        className="fixed left-5 top-2 z-[70] -translate-y-20 rounded-sys bg-accent px-3 py-2 font-mono text-[10px] font-medium text-on-accent transition-transform focus:translate-y-0"
      >
        {t.nav.skip}
      </a>

      <header
        className={cn(
          "sticky top-0 z-50 bg-paper/90 backdrop-blur-[8px] transition-[height,box-shadow] duration-200 ease-out",
          "h-14",
          compact ? "shadow-sticky md:h-14" : "border-b border-rule md:h-[88px]"
        )}
      >
        <div className="wrap flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-[11px] text-ink hover:text-ink" aria-label="MEGU — inicio">
            <LogoMark size={compact ? 22 : 28} className="max-md:!h-5 max-md:!w-5" />
            <span className="font-sans text-[12px] font-extrabold tracking-[0.16em]">MEGU</span>
          </Link>

          {/* Escritorio */}
          <nav className="hidden items-center gap-[30px] md:flex" aria-label="Principal">
            {LINKS.map(({ key, href, match }) => {
              const active = match.some((m) => pathname.startsWith(m));
              return (
                <Link
                  key={key}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b pb-[3px] font-sans text-[12.5px] leading-none transition-colors duration-[140ms] ease-out",
                    active
                      ? "border-accent font-medium text-ink"
                      : "border-transparent text-muted hover:border-ink hover:text-ink"
                  )}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
            <span className="h-[18px] w-px bg-rule" aria-hidden="true" />
            <LangSwitch />
            <button
              type="button"
              onClick={theme.toggle}
              aria-label={themeLabel}
              title={themeLabel}
              className="-mx-2 inline-flex h-11 w-11 items-center justify-center rounded-sys text-ink transition-colors duration-[140ms] hover:text-accent"
            >
              <IconTheme size={18} />
            </button>
            <button
              type="button"
              onClick={cv.download}
              disabled={cv.busy}
              className={buttonClass("secondary", "sm", "hover:border-accent hover:bg-accent hover:text-on-accent")}
            >
              <IconDownload size={16} />
              {t.nav.cv}
            </button>
          </nav>

          {/* Móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          >
            {open ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          id="menu-movil"
          className="reveal fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col bg-ink px-5 py-7 text-paper md:hidden"
          style={{ animationDuration: "340ms" }}
        >
          <nav className="flex flex-col gap-0.5" aria-label="Principal">
            {LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-paper/15 py-2 font-display text-[38px] leading-[1.25] text-paper hover:text-paper/80"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <LangSwitch className="h-11 border border-paper/40 px-3 text-paper/70 hover:text-paper [&_.text-ink]:text-paper" />
              <button
                type="button"
                onClick={theme.toggle}
                aria-label={themeLabel}
                className="inline-flex h-11 items-center gap-2 rounded-sys border border-paper/40 px-3 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-paper/80"
              >
                <IconTheme size={16} />
                {theme.isExp ? "PRO" : "EXP"}
              </button>
              <button
                type="button"
                onClick={cv.download}
                className="inline-flex h-11 items-center gap-2 rounded-sys border border-paper/40 px-3 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-paper/80"
              >
                <IconDownload size={16} />
                {t.nav.cv}
              </button>
            </div>
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className={buttonClass("primary", "lg", "w-full")}
            >
              {t.nav.talk}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
