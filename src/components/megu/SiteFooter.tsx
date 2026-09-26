"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { IconArrowRight, IconArrowNE, IconCode, IconMail } from "./icons";
import { LogoMark } from "./ui";

export const EMAIL = "miguel.gil.9210@gmail.com";
export const GITHUB_URL = "https://github.com/miguelgilurbina";
export const LINKEDIN_URL = "https://www.linkedin.com/in/miguelgilurbina/";
export const WHATSAPP_URL =
  "https://wa.me/56977221088?text=Hola%20Miguel!%20Vi%20tu%20portafolio%20y%20me%20interesa%20conversar.";

export type NextProject = { title: string; meta: string; href: string };

/** Bloque tinta a sangre que lleva al siguiente caso (handoff 5a); hover a verde. */
export function NextProjectLink({ project }: { project: NextProject }) {
  const { t } = useLanguage();
  return (
    <Link
      href={project.href}
      className="group block bg-ink text-paper transition-colors duration-200 ease-out hover:bg-accent hover:text-on-accent"
    >
      <div className="wrap flex items-center justify-between gap-8 py-11">
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] opacity-60">{t.footer.next}</span>
          <span className="font-display text-[34px] leading-[1.05] md:text-[44px]">{project.title}</span>
          <span className="font-mono text-[11.5px] opacity-60">{project.meta}</span>
        </div>
        <IconArrowRight size={56} strokeWidth={1} className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function SiteFooter({ next }: { next?: NextProject }) {
  const { t, lang } = useLanguage();
  const series = t.archive.series;

  const colLink = "font-sans text-[12.5px] leading-none text-ink transition-colors duration-[140ms] hover:text-accent";
  const monoLink =
    "inline-flex items-center gap-[7px] font-mono text-[11.5px] leading-none text-ink transition-colors duration-[140ms] hover:text-accent";

  return (
    <footer className="mt-auto">
      {next && <NextProjectLink project={next} />}

      <div className="border-t border-rule">
        <div className="wrap grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-[11px] text-ink">
              <LogoMark size={24} />
              <span className="font-sans text-[12px] font-extrabold tracking-[0.16em]">MEGU</span>
            </div>
            <p className="max-w-[34ch] text-[12.5px] leading-[1.55] text-ink/65">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-[11px]">
            <span className="mono-label !text-[9px]">{t.footer.sections}</span>
            <Link href="/#trabajo" className={colLink}>{t.nav.work}</Link>
            <Link href="/archivo" className={colLink}>{t.nav.archive}</Link>
            <Link href="/servicios" className={colLink}>{t.nav.services}</Link>
            <Link href="/#sobre" className={colLink}>{t.nav.about}</Link>
          </div>

          <div className="flex flex-col gap-[11px]">
            <span className="mono-label !text-[9px]">{t.footer.contact}</span>
            <a href={`mailto:${EMAIL}`} className={monoLink}>
              <IconMail size={16} />
              {EMAIL}
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={monoLink}>
              <IconCode size={16} />
              github/miguelgilurbina
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={monoLink}>
              <IconArrowNE size={16} />
              linkedin/in/miguelgilurbina
            </a>
          </div>

          <div className="flex flex-col gap-[11px]">
            <span className="mono-label !text-[9px]">{t.footer.archive}</span>
            {series.map((s) => (
              <Link key={s.id} href={`/archivo?serie=${s.id}`} className={colLink}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-rule">
          <div className="wrap flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9.5px] text-muted">© {new Date().getFullYear()} Miguel Gil Urbina</span>
            <span className="font-mono text-[9.5px] text-muted" lang={lang}>{t.footer.system}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
