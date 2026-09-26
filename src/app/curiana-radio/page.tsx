"use client";

// Caso de estudio de Curiana Radio: la publicación y el Simulador Caquetío.
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/megu/SiteHeader";
import { SiteFooter } from "@/components/megu/SiteFooter";
import { IconArrowRight, IconExternal } from "@/components/megu/icons";
import { Tag, buttonClass, textLinkClass } from "@/components/megu/ui";
import {
  CaseBody,
  CaseHero,
  CaseMeta,
  CaseQuote,
  CaseSection,
  CaseStats,
  Figure,
} from "@/components/megu/case";
import { useLanguage } from "@/context/LanguageContext";

const CURIANA_URL = "https://curiana-radio.vercel.app";
const EXPERIMENT_URL = "https://curiana-radio.vercel.app/kaketiana/experimento";
const SECTION_IDS = ["publicacion", "simulador", "resultados", "rigor", "estado"];

export default function CurianaRadioPage() {
  const { t } = useLanguage();
  const c = t.curiana;
  const p = c.publication;
  const s = c.sim;
  const sections = SECTION_IDS.map((id, i) => ({ id, label: c.sections[i] }));

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main id="contenido" className="flex-1">
        <CaseHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
        <CaseMeta items={c.meta} />
        <CaseStats items={c.stats} />

        <CaseBody sections={sections}>
          {/* ── La publicación ───────────────────────────────────────── */}
          <CaseSection id="publicacion" first title={p.title} wide>
            <div className="grid items-start gap-8 xl:grid-cols-[1fr_320px]">
              <div className="flex max-w-[64ch] flex-col gap-5">
                <p className="text-[17px] leading-[1.6] text-ink">{p.lead}</p>
                <p className="text-[16px] leading-[1.7] text-ink/80">{p.body}</p>
                <div className="mt-2 flex flex-wrap items-center gap-5">
                  <a href={CURIANA_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
                    {p.cta}
                    <IconExternal size={16} />
                  </a>
                  <Link href="/archivo?serie=identidad" className={textLinkClass("text-[13px]")}>
                    {p.archive}
                    <IconArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <Figure caption={p.figCaption} className="w-full max-w-[320px]">
                <div className="relative aspect-square bg-paper-3">
                  <Image src="/images/archivo/curiana.webp" alt={p.figAlt} fill sizes="320px" className="object-cover" />
                </div>
              </Figure>
            </div>
          </CaseSection>

          {/* ── Simulador Caquetío ───────────────────────────────────── */}
          <CaseSection id="simulador" title={s.title} lead={<p>{s.lead}</p>}>
            <div className="flex max-w-[70ch] flex-col gap-4 text-[16px] leading-[1.7] text-ink/80">
              <p>{s.body1}</p>
              <p>{s.body2}</p>
            </div>
          </CaseSection>

          {/* ── Resultados ───────────────────────────────────────────── */}
          <CaseSection id="resultados" title={s.statsTitle} wide>
            <dl className="grid grid-cols-2 gap-px border border-rule bg-rule xl:grid-cols-4">
              {s.stats.map((st) => (
                <div key={st.label} className="bg-paper px-5 py-5">
                  <dd className="font-display text-[34px] leading-none text-ink md:text-[42px]">{st.value}</dd>
                  <dt className="mono-label mt-2 !text-[9.5px] !leading-[1.5] !tracking-[0.08em]">{st.label}</dt>
                </div>
              ))}
            </dl>
          </CaseSection>

          <CaseQuote>{c.quote}</CaseQuote>

          {/* ── Rigor ────────────────────────────────────────────────── */}
          <CaseSection id="rigor" title={s.rigorTitle}>
            <ol className="flex max-w-[70ch] flex-col gap-7">
              {s.rigor.map((item, i) => (
                <li key={item.t} className="grid grid-cols-[28px_1fr] items-baseline gap-3.5">
                  <span className="font-mono text-[10px] font-medium leading-[1.6] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[16px] font-semibold text-ink">{item.t}</h3>
                    <p className="text-[15px] leading-[1.7] text-ink/75">{item.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CaseSection>

          {/* ── Estado ───────────────────────────────────────────────── */}
          <CaseSection id="estado" title={c.status.title} lead={<p>{c.status.body}</p>}>
            <div className="mb-8 flex flex-wrap gap-2.5">
              {s.chips.map((chip) => (
                <Tag key={chip}>{chip}</Tag>
              ))}
            </div>
            <a href={EXPERIMENT_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
              {s.cta}
              <IconExternal size={16} />
            </a>
          </CaseSection>
        </CaseBody>
      </main>

      <SiteFooter
        next={{ title: "Claude Impact Lab Chile", meta: "Next 14 · Supabase · Claude API — 2026", href: "/claude-impact-lab" }}
      />
    </div>
  );
}
