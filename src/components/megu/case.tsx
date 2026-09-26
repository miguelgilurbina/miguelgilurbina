"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Display } from "./ui";

/* Piezas del caso de estudio (handoff 1d): encabezado editorial, franja de
   metadatos, cifras, índice lateral fijo y secciones numeradas. */

export function CaseHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="wrap pb-10 pt-12 md:pb-10 md:pt-16">
      <span className="mono-label reveal mb-6 block">{eyebrow}</span>
      <Display
        as="h1"
        className="reveal mb-6 text-[52px] leading-[0.94] tracking-[-0.03em] md:text-[80px] lg:text-[104px] lg:leading-[0.92]"
        style={{ ["--i" as string]: 1 }}
      >
        {title}
      </Display>
      <p
        className="reveal max-w-[56ch] text-[17px] leading-[1.5] text-ink/80 md:text-[22px]"
        style={{ ["--i" as string]: 2 }}
      >
        {lead}
      </p>
      {children}
    </section>
  );
}

export function CaseMeta({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <div className="border-y border-ink">
      <div className="wrap !px-0 md:!px-10">
        <dl className="grid grid-cols-2 gap-px bg-rule lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="bg-paper px-5 py-5 md:px-6">
              <dt className="mono-label mb-2.5 !text-[9.5px]">{item.label}</dt>
              <dd className="text-[15px] leading-[1.35] text-ink md:text-[17px]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function CaseStats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="border-b border-ink">
      <div className="wrap !px-0 md:!px-10">
        <dl className={cn("grid grid-cols-2 gap-px bg-rule", items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4")}>
          {items.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-5 md:px-6">
              <dd className="font-display text-[34px] leading-none text-ink md:text-[42px]">{s.value}</dd>
              <dt className="mono-label mt-2 !text-[9.5px] !leading-[1.5] !tracking-[0.08em]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export type CaseSectionRef = { id: string; label: string };

/** Índice lateral fijo: marca la sección visible y lleva a cada una. */
function CaseIndex({ sections, note }: { sections: CaseSectionRef[]; note?: string }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Índice del caso" className="sticky top-20 hidden self-start lg:block">
      <ol className="flex flex-col gap-0.5 border-l border-rule">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "-ml-px block border-l py-[9px] pl-3.5 font-mono text-[9.5px] font-medium uppercase leading-[1.3] tracking-[0.1em] transition-colors duration-[140ms]",
                active === s.id ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
              )}
            >
              {String(i + 1).padStart(2, "0")} — {s.label}
            </a>
          </li>
        ))}
      </ol>
      {note && <p className="mt-5 px-3.5 text-[11px] leading-[1.5] text-muted">{note}</p>}
    </nav>
  );
}

export function CaseBody({ sections, children, note }: { sections: CaseSectionRef[]; children: ReactNode; note?: string }) {
  return (
    <div className="wrap grid gap-12 py-14 lg:grid-cols-[220px_1fr] lg:py-16">
      <CaseIndex sections={sections} note={note} />
      <div className="flex min-w-0 flex-col">{children}</div>
    </div>
  );
}

export function CaseSection({
  id,
  title,
  lead,
  children,
  wide,
  first,
}: {
  id: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  wide?: boolean;
  first?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", first ? "" : "mt-12 border-t border-rule pt-10")}>
      <div className={wide ? undefined : "max-w-[70ch]"}>
        <Display className="mb-4 text-[28px] leading-[1.1] md:text-[34px]">{title}</Display>
        {lead && <div className="mb-6 text-[16px] leading-[1.7] text-ink/80 md:text-[17px]">{lead}</div>}
      </div>
      {children}
    </section>
  );
}

/** Lista numerada con el número en mono verde (01, 02…). */
export function NumberedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="flex max-w-[70ch] flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[28px_1fr] items-baseline gap-3.5">
          <span className="font-mono text-[10px] font-medium leading-[1.6] text-accent">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-[15px] leading-[1.6] text-ink md:text-[16px]">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function CaseQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-12 max-w-[38ch] border-l-2 border-accent pl-6 font-display text-[26px] leading-[1.4] text-ink md:text-[32px]">
      {children}
    </blockquote>
  );
}

/** Figura con filete de 1px y caption en mono abajo a la izquierda (reglas 01 y 02). */
export function Figure({ children, caption, className }: { children: ReactNode; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden border border-ink">{children}</div>
      {caption && <figcaption className="mono-label mt-2 !text-[9px] !tracking-[0.08em]">{caption}</figcaption>}
    </figure>
  );
}
