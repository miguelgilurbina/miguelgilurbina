"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/megu/SiteHeader";
import { SiteFooter, EMAIL } from "@/components/megu/SiteFooter";
import { IconArrowRight, IconCheck, IconExternal, IconPlus } from "@/components/megu/icons";
import { Display, buttonClass, textLinkClass } from "@/components/megu/ui";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL =
  "https://wa.me/56977221088?text=Hola%20Miguel!%20Vi%20tus%20servicios%20y%20quiero%20conversar%20un%20proyecto.";
const EMAIL_URL = `mailto:${EMAIL}?subject=Consulta%20de%20proyecto`;

export default function ServiciosPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main id="contenido" className="flex-1">
        {/* ── Encabezado ───────────────────────────────────────────── */}
        <section className="wrap pb-12 pt-12 md:pt-16">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-rule px-3.5 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {s.badge}
          </span>
          <Display as="h1" className="reveal mb-5 mt-7 max-w-[18ch] text-[46px] leading-[0.98] md:text-[72px]" style={{ ["--i" as string]: 1 }}>
            {s.title}
          </Display>
          <p className="reveal max-w-[56ch] text-[15px] leading-[1.65] text-ink/75 md:text-[17px]" style={{ ["--i" as string]: 2 }}>
            {s.subtitle}
          </p>
        </section>

        {/* ── Áreas de trabajo ─────────────────────────────────────── */}
        <section className="wrap pb-16">
          <ol className="border-t border-ink">
            {s.areas.map((area, i) => {
              const external = area.url.startsWith("http");
              return (
                <li key={area.id} id={area.id} className="grid scroll-mt-20 gap-6 border-b border-rule py-10 lg:grid-cols-[300px_1fr] lg:gap-12">
                  <div>
                    <span className="mb-3 block font-mono text-[11px] font-medium text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mb-2 font-display text-[28px] leading-[1.1] text-ink md:text-[32px]">{area.name}</h2>
                    <p className="text-[14px] leading-[1.5] text-muted">{area.tagline}</p>
                  </div>

                  <div className="min-w-0">
                    <p className="mb-6 max-w-[64ch] text-[15px] leading-[1.7] text-ink/80">{area.description}</p>

                    <span className="mono-label mb-3 block">{s.deliverLabel}</span>
                    <ul className="mb-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {area.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-[14px] leading-[1.45] text-ink">
                          <IconCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="border border-rule bg-paper-2 p-5">
                      <span className="mono-label mb-2 block">{s.evidenceLabel}</span>
                      <p className="text-[14px] leading-[1.6] text-ink/80">{area.evidence}</p>
                      {area.url &&
                        (external ? (
                          <a href={area.url} target="_blank" rel="noopener noreferrer" className={textLinkClass("mt-4 text-[13px]")}>
                            {s.seeProject}
                            <IconExternal size={16} />
                          </a>
                        ) : (
                          <Link href={area.url} className={textLinkClass("mt-4 text-[13px]")}>
                            {s.seeProject}
                            <IconArrowRight size={16} />
                          </Link>
                        ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* ── Vía de precio fijo ───────────────────────────────────── */}
        <section className="wrap pb-20">
          <div className="flex flex-col gap-6 border border-accent bg-accent/[0.06] p-7 md:flex-row md:items-center md:p-8">
            <div className="flex-1">
              <span className="mono-label mb-3 block !text-accent">{s.productized.label}</span>
              <h2 className="mb-2 font-display text-[26px] leading-[1.15] text-ink">{s.productized.title}</h2>
              <p className="max-w-[60ch] text-[14px] leading-[1.6] text-ink/75">{s.productized.description}</p>
            </div>
            <a href={s.productized.url} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "lg", "shrink-0")}>
              {s.productized.cta}
              <IconExternal size={16} />
            </a>
          </div>
        </section>

        {/* ── Proceso ──────────────────────────────────────────────── */}
        <section className="border-t border-ink">
          <div className="wrap py-14">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <Display className="text-[32px] leading-none md:text-[40px]">{s.processTitle}</Display>
              <span className="text-[14px] text-muted">{s.processSubtitle}</span>
            </div>
            <ol className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
              {s.process.map((p) => (
                <li key={p.step} className="bg-paper p-6">
                  <span className="mb-4 block font-display text-[40px] leading-none text-ink">{p.step}</span>
                  <h3 className="mb-2 text-[14px] font-semibold text-ink">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-ink/70">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="border-t border-rule">
          <div className="wrap grid gap-8 py-14 lg:grid-cols-[300px_1fr] lg:gap-12">
            <Display className="text-[32px] leading-none md:text-[40px]">{s.faqTitle}</Display>
            <div className="border-t border-ink">
              {s.faq.map((item) => (
                <details key={item.q} className="group border-b border-rule [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-medium text-ink">
                    {item.q}
                    <IconPlus size={18} className="shrink-0 text-ink transition-transform duration-200 ease-out group-open:rotate-45" />
                  </summary>
                  <p className="max-w-[68ch] pb-6 text-[14.5px] leading-[1.7] text-ink/75">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ────────────────────────────────────────────── */}
        <section className="bg-ink text-paper">
          <div className="wrap flex flex-col gap-8 py-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mb-4 font-display text-[40px] leading-none md:text-[52px]">{s.finalTitle}</h2>
              <p className="max-w-[56ch] text-[15px] leading-[1.65] text-paper/75">{s.finalSubtitle}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/60">{s.responseNote}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "lg")}>
                {s.ctaPrimary}
                <IconArrowRight size={16} />
              </a>
              <a href={EMAIL_URL} className={buttonClass("inverse", "lg")}>
                {s.ctaSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
