import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CV, CV_LINKS, type CvLang } from "@/lib/cv";
import { LogoMark } from "@/components/megu/ui";
import { IconArrowLeft, IconDownload } from "@/components/megu/icons";

/* CV imprimible con el sistema MEGU. Los PDF de /public se generan
   imprimiendo estas páginas (A4, sin encabezados del navegador):
   msedge --headless --no-pdf-header-footer --print-to-pdf=... /cv/es */

const LANGS: CvLang[] = ["es", "en"];
const UPDATED: Record<CvLang, string> = { es: "Actualizado en septiembre de 2026", en: "Updated September 2026" };

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };

function resolve(lang: string): CvLang {
  if (lang !== "es" && lang !== "en") notFound();
  return lang;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolve((await params).lang);
  return {
    title: { absolute: CV[lang].meta.title },
    description: CV[lang].meta.description,
    // El CV vive como PDF; la versión HTML no compite en buscadores con la home.
    robots: { index: false, follow: true },
    alternates: { canonical: `https://www.miguelgilurbina.com/cv/${lang}` },
  };
}

function SectionTitle({ n, children }: { n: number; children: ReactNode }) {
  return (
    <h2 className="mb-3 mt-6 flex items-center gap-3 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-muted print:mt-5">
      <span className="text-accent">{String(n).padStart(2, "0")}</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-rule" aria-hidden="true" />
    </h2>
  );
}

function Row({ left, children }: { left: ReactNode; children: ReactNode }) {
  return (
    <div className="cv-keep grid gap-1 sm:grid-cols-[30mm_1fr] sm:gap-4">
      <div className="font-mono text-[9.5px] font-medium leading-[1.6] text-muted">{left}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export default async function CvPage({ params }: Props) {
  const lang = resolve((await params).lang);
  const cv = CV[lang];
  const other: CvLang = lang === "es" ? "en" : "es";
  const pdf = `/Miguel_Gil_CV_${lang.toUpperCase()}.pdf`;

  const contact = [
    { label: cv.location },
    { label: CV_LINKS.email, href: `mailto:${CV_LINKS.email}` },
    { label: CV_LINKS.web, href: `https://www.${CV_LINKS.web}` },
    { label: CV_LINKS.linkedin, href: `https://www.${CV_LINKS.linkedin}` },
    { label: CV_LINKS.github, href: `https://${CV_LINKS.github}` },
  ];

  return (
    <div className="cv-doc min-h-screen bg-paper-3 px-3 py-6 text-ink sm:py-10 print:bg-white print:p-0" lang={lang}>
      {/* Barra solo de pantalla */}
      <nav className="cv-toolbar mx-auto mb-4 flex w-[210mm] max-w-full flex-wrap items-center justify-between gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.1em]">
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-ink">
          <IconArrowLeft size={16} />
          {cv.labels.back}
        </Link>
        <div className="flex items-center gap-5">
          <Link href={`/cv/${other}`} className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-ink">
            {cv.labels.other}
          </Link>
          <a
            href={pdf}
            download
            className="inline-flex h-10 items-center gap-2 rounded-sys border border-accent bg-accent px-4 text-on-accent transition-colors hover:bg-accent-press"
          >
            <IconDownload size={16} />
            {cv.labels.download}
          </a>
        </div>
      </nav>

      <article className="cv-sheet mx-auto w-[210mm] max-w-full border border-rule bg-paper-2 px-5 py-8 text-[12px] leading-[1.5] sm:px-[16mm] sm:py-[14mm]">
        {/* ── Encabezado ─────────────────────────────────────────── */}
        <header className="cv-keep grid gap-5 border-b border-ink pb-5 sm:grid-cols-[1fr_auto]">
          <div>
            {/* Solo el monograma: los ATS deben leer el nombre como primera línea. */}
            <div className="mb-3 text-ink">
              <LogoMark size={22} />
            </div>
            <h1 className="font-display text-[38px] font-normal leading-[0.98] tracking-[-0.02em] text-ink">{cv.name}</h1>
            <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink">{cv.role}</p>
          </div>
          <ul className="flex flex-col gap-1 font-mono text-[9.5px] leading-[1.45] sm:items-end sm:text-right">
            {contact.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="text-ink underline decoration-rule underline-offset-2 hover:text-accent">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </li>
            ))}
            <li className="mt-1 inline-flex items-center gap-1.5 text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {cv.availability}
            </li>
          </ul>
        </header>

        {/* ── Perfil ─────────────────────────────────────────────── */}
        <section>
          <SectionTitle n={1}>{cv.labels.profile}</SectionTitle>
          <p className="max-w-[75ch] text-[12.5px] leading-[1.6] text-ink">{cv.profile}</p>
        </section>

        {/* ── Experiencia ────────────────────────────────────────── */}
        <section>
          <SectionTitle n={2}>{cv.labels.experience}</SectionTitle>
          <div className="flex flex-col gap-4">
            {cv.experience.map((e) => (
              <Row key={e.title + e.org} left={e.period}>
                <h3 className="text-[12.5px] font-semibold leading-[1.35] text-ink">
                  {e.title} <span className="font-normal text-muted">· {e.org}</span>
                </h3>
                {e.note && <p className="text-[11px] italic leading-[1.4] text-muted">{e.note}</p>}
                <ul className="mt-1.5 flex flex-col gap-1">
                  {e.bullets.map((b) => (
                    <li key={b} className="grid grid-cols-[10px_1fr] text-[11.5px] leading-[1.5] text-ink/85">
                      <span className="mt-[7px] h-[3px] w-[3px] bg-accent" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {e.stack && (
                  <p className="mt-1.5 font-mono text-[8.5px] uppercase leading-[1.5] tracking-[0.06em] text-muted">{e.stack}</p>
                )}
              </Row>
            ))}
          </div>
        </section>

        {/* ── Proyectos ──────────────────────────────────────────── */}
        <section>
          <SectionTitle n={3}>{cv.labels.projects}</SectionTitle>
          <div className="flex flex-col gap-3.5">
            {cv.projects.map((p) => (
              <Row key={p.title} left={p.period}>
                <h3 className="text-[12.5px] font-semibold leading-[1.35] text-ink">
                  {p.title}
                  {p.url && (
                    <>
                      {" "}
                      <a href={p.url} className="font-mono text-[9.5px] font-normal text-accent underline decoration-accent/40 underline-offset-2">
                        {p.urlLabel}
                      </a>
                    </>
                  )}
                </h3>
                <p className="text-[11px] italic leading-[1.4] text-muted">{p.role}</p>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-ink/85">{p.body}</p>
                <p className="mt-1 font-mono text-[8.5px] uppercase leading-[1.5] tracking-[0.06em] text-muted">{p.stack}</p>
              </Row>
            ))}
          </div>
        </section>

        {/* ── Stack ──────────────────────────────────────────────── */}
        <section className="cv-keep">
          <SectionTitle n={4}>{cv.labels.skills}</SectionTitle>
          <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {cv.skills.map((s) => (
              <div key={s.group} className="grid grid-cols-[28mm_1fr] gap-3">
                <dt className="font-mono text-[8.5px] font-medium uppercase leading-[1.7] tracking-[0.08em] text-muted">{s.group}</dt>
                <dd className="text-[11px] leading-[1.5] text-ink">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Formación ──────────────────────────────────────────── */}
        <section>
          <SectionTitle n={5}>{cv.labels.education}</SectionTitle>
          <div className="flex flex-col gap-2">
            {cv.education.map((ed) => (
              <Row key={ed.title} left={ed.period}>
                <p className="text-[11.5px] leading-[1.45] text-ink">
                  <span className="font-semibold">{ed.title}</span> <span className="text-muted">· {ed.org}</span>
                  {ed.note && <span className="text-muted"> · {ed.note}</span>}
                </p>
              </Row>
            ))}
          </div>
        </section>

        <footer className="mt-6 flex flex-wrap justify-between gap-2 border-t border-rule pt-3 font-mono text-[8.5px] uppercase tracking-[0.1em] text-muted">
          <span>Miguel Gil Urbina · {CV_LINKS.web}</span>
          <span>{UPDATED[lang]}</span>
        </footer>
      </article>
    </div>
  );
}
