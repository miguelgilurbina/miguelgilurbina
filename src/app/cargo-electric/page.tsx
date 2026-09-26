import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/megu/SiteHeader"
import { SiteFooter } from "@/components/megu/SiteFooter"
import { IconCheck, IconClose } from "@/components/megu/icons"
import {
  CaseBody,
  CaseHero,
  CaseMeta,
  CaseQuote,
  CaseSection,
  CaseStats,
  Figure,
  NumberedList,
} from "@/components/megu/case"
import { ShowcaseImage } from "@/components/historia/showcase-image"
import { ArchitectureDiagram } from "@/components/historia/architecture-diagram"
import { AdminTabs } from "@/components/historia/admin-tabs"

export const metadata: Metadata = {
  title: "Cargo Electric — Historia de la Plataforma",
  description:
    "Cómo reemplazamos múltiples Google Sheets —y el Excel de nómina de conductores— por una plataforma centralizada de gestión de flota eléctrica.",
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "14", label: "camiones eléctricos" },
  { value: "5", label: "módulos en producción" },
  { value: "619", label: "commits propios" },
  { value: "102", label: "PRs mergeados" },
  { value: "8", label: "meses de web app" },
]

const meta = [
  { label: "Rol", value: "Product Owner · Full-Stack Engineer" },
  { label: "Alcance", value: "Producto, arquitectura y entrega" },
  { label: "Periodo", value: "Sep 2025 — hoy" },
  { label: "Stack", value: "Next 16 · Firebase · Recharts" },
]

const sections = [
  { id: "contexto", label: "Contexto" },
  { id: "plataforma", label: "La app hoy" },
  { id: "administracion", label: "Administración" },
  { id: "historia", label: "Historia" },
  { id: "arquitectura", label: "Arquitectura" },
]

const problems = [
  "Sheets sin conexión entre sí — datos duplicados y desincronizados",
  "Sin visibilidad del estado de la flota en tiempo real",
  "Facturación manual propensa a errores por período",
  "Imposible escalar sin multiplicar la carga operativa",
]

const before = [
  "Múltiples Google Sheets sin conexión entre sí",
  "Actualización manual, propensa a errores y duplicados",
  "Sin visibilidad en tiempo real del estado de la flota",
  "Facturación calculada a mano por período",
  "Imposible escalar sin multiplicar la carga operativa",
]

const after = [
  "Una sola plataforma para toda la operación",
  "Datos en tiempo real desde Firestore",
  "Analítica operacional con KPIs y tendencias históricas",
  "Facturación y bonos de conductores calculados con tarifarios vigentes",
  "Arquitectura escalable lista para nuevos clientes",
]

const milestones = [
  {
    date: "14 Enero 2026",
    title: "Dashboard de Analítica",
    description:
      "Primer dashboard analytics con KPIs, gráficos Recharts y drill-down por camión, junto con el rebrand inicial a la identidad de Cargo Electric.",
    highlight: true,
  },
  {
    date: "23 Enero – 4 Febrero 2026",
    title: "Sistema de Facturación / Proformas",
    description:
      "Primer módulo de billing: cálculo de proformas con el modelo de precios del cliente, filtros por fecha y exportación a Excel.",
    highlight: true,
  },
  {
    date: "Marzo 2026",
    title: "Refinamiento de Rutas y exportación a Excel",
    description:
      "Ordenamiento multinivel, formato de montos, actualización de tarifas 2026, exportación de proformas a Excel y segunda versión del heatmap de operación por camión.",
    highlight: false,
  },
  {
    date: "13–20 Marzo 2026",
    title: "Administración: Locales, Camiones y Usuarios",
    description:
      "Páginas CRUD dedicadas para gestionar los puntos de destino, la flota de 14 camiones y los conductores/administradores del sistema.",
    highlight: true,
  },
  {
    date: "16 Abril 2026",
    title: "Resumen Diario dinámico",
    description:
      "Nueva vista de Resumen Diario con matriz camiones × días, vista móvil dedicada y chart de desviación vs presupuesto configurable por período.",
    highlight: false,
  },
  {
    date: "21–29 Abril 2026",
    title: "Identidad de marca, uplift visual y seguridad",
    description:
      "Implementación de la identidad visual de Cargo Electric en toda la app, rediseño de navegación, y parches de seguridad CRITICAL/HIGH sobre producción.",
    highlight: false,
  },
  {
    date: "13 Mayo 2026",
    title: "Diseño del modelo operacional",
    description:
      "Diseño del siguiente modelo de datos operacional (journeys), documentado como schema para una etapa posterior, y corrección de la búsqueda histórica.",
    highlight: false,
  },
  {
    date: "24 Julio – Agosto 2026",
    title: "Motor de bonos de conductores",
    description:
      "Reemplazo del Excel de nómina: cálculo por camión-día, tarifario con vigencia, tripulación manual, exportación a Excel y un snapshot que consume la app móvil. Reconciliado mes a mes contra la planilla real.",
    highlight: true,
  },
  {
    date: "Agosto 2026",
    title: "Seguridad por roles y limpieza de deuda",
    description:
      "Autorización con acceso denegado por defecto en todas las Server Actions y matriz de roles centralizada (admin, board, client). Retiro del kit de migración y del ciclo de proformas que el producto no usaba, ESLint de 87 errores a 0 y telemetría con Vercel Analytics.",
    highlight: false,
  },
]

const featureBlocks = [
  {
    tag: "Analítica",
    title: "Resumen Diario — operación completa en tiempo real",
    description:
      "Consolida toda la actividad mensual de la flota conectado directamente a Firestore. Muestra en tiempo real el estado de cada camión, las rutas del día y los KPIs del período.",
    bullets: [
      "5 vistas: General, Día, Flota (heatmap), Camión y Semana",
      "KPIs mensuales: monto total, presupuesto, desviación y rutas",
      "Gráfico de tendencia diaria vs presupuesto configurable",
      "Selector de período histórico sin recargar la página",
    ],
    image: { src: "/images/now-resumen-diario.webm", alt: "Resumen Diario" },
  },
  {
    tag: "Analítica",
    title: "Dashboard Operacional — tiempos y cuellos de botella",
    description:
      "Panel de métricas con filtros por período, camión y conductor. Identifica automáticamente el segmento operativo de mayor impacto y entrega una recomendación.",
    bullets: [
      "6 KPIs: rutas, destinos, ciclo promedio, km, CO₂ y costo/km",
      "Gráfico de barras por segmento operativo con comparativa UULL",
      "Drill-down por waypoint al hacer clic en cualquier segmento",
      "Exportación a PDF ejecutivo con gráfico y drill-down incluidos",
    ],
    image: { src: "/images/now-analytics-ops.webm", alt: "Dashboard Operacional" },
  },
  {
    tag: "Rutas",
    title: "Gestión de Rutas — registro del movimiento diario",
    description:
      "Tabla completa con todas las columnas operativas: guía, estado, turno, tipo de carga, origen, destino, conductor, camión, hora y tarifa.",
    bullets: [
      "Creación, edición inline y eliminación con confirmación",
      "Cambio de estado y turno directamente desde la tabla",
      "Filtros por rango de fechas y columnas configurables",
      "Formato es-CL en montos, fechas y exportaciones",
    ],
    image: { src: "/images/now-routes.webm", alt: "Gestión de Rutas" },
  },
  {
    tag: "Facturación",
    title: "Facturación — del registro de ruta al Excel del cliente",
    description:
      "Toma las rutas completadas desde Firestore, las agrupa por camión y calcula montos según el tarifario vigente del cliente para el período.",
    bullets: [
      "Agrupación automática por camión con IVA 19% calculado",
      "Tarifarios con fecha de vigencia, editables desde la app",
      "Excel fiel al formato de referencia del cliente con fórmulas incluidas",
      "Sin estados intermedios: lo que se descarga refleja las rutas registradas",
    ],
    image: { src: "/images/now-billing.webm", alt: "Módulo de Facturación" },
  },
]

const adminCards = [
  {
    tag: "Locales",
    title: "Puntos de destino",
    description:
      "Puntos de destino con código, nombre y estado. Un local inactivo desaparece de la asignación de rutas sin perder historial.",
    image: { src: "/images/now-locales.webm", alt: "Gestión de Locales" },
  },
  {
    tag: "Camiones",
    title: "Flota eléctrica",
    description:
      "14 unidades con patente y estado operativo. Un camión fuera de servicio no aparece disponible en el resumen diario ni en rutas.",
    image: { src: "/images/now-camiones.webm", alt: "Gestión de Camiones" },
  },
  {
    tag: "Usuarios",
    title: "Conductores y admins",
    description:
      "Roles, vinculación a camión y activación/desactivación. Tres roles con acceso denegado por defecto: admin, board y client.",
    image: { src: "/images/now-usuarios.webm", alt: "Gestión de Usuarios" },
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CargoElectricPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main id="contenido" className="flex-1">
        <CaseHero
          eyebrow="Caso 01 / 04 — Logística · Startup de flota eléctrica · Chile"
          title="Cargo Electric"
          lead={
            <>
              Plataforma operacional desde cero. Asumí el rol de Product Owner y Full-Stack Engineer: definí el
              producto, diseñé la arquitectura y escribí 619 de los 632 commits de la web app en producción.
            </>
          }
        />

        <CaseMeta items={meta} />
        <CaseStats items={stats} />

        <CaseBody sections={sections}>
          {/* ── Contexto ─────────────────────────────────────────────── */}
          <CaseSection
            id="contexto"
            first
            title="El problema que resolvemos"
            lead={
              <p>
                Cargo Electric opera una flota de camiones eléctricos de reparto urbano, y lo gestionaba todo con
                Google Sheets dispersos, sin visibilidad en tiempo real y con facturación calculada a mano cada período.
              </p>
            }
          >
            <NumberedList items={problems} />

            <div className="mt-10 grid gap-px border border-rule bg-rule md:grid-cols-2">
              <div className="bg-paper p-6">
                <span className="mono-label mb-4 block">Antes</span>
                <ul className="flex flex-col gap-2.5">
                  {before.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink/75">
                      <IconClose size={16} className="mt-1 shrink-0 text-danger" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper p-6">
                <span className="mono-label mb-4 block !text-accent">Ahora</span>
                <ul className="flex flex-col gap-2.5">
                  {after.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink">
                      <IconCheck size={16} className="mt-1 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CaseSection>

          {/* ── La app hoy ──────────────────────────────────────────── */}
          <CaseSection
            id="plataforma"
            title="La app hoy"
            lead={
              <p>
                Los módulos que cubren el ciclo completo: desde el registro del movimiento diario hasta la analítica y
                la facturación. El quinto, el motor de bonos de conductores, está en la historia del desarrollo.
              </p>
            }
            wide
          >
            <div className="flex flex-col gap-14">
              {featureBlocks.map((block, i) => (
                <div key={block.title} className="grid items-start gap-8 xl:grid-cols-[1fr_1.25fr]">
                  <div className={cn(i % 2 === 1 && "xl:order-2")}>
                    <span className="mono-label mb-3 block !text-accent">{block.tag}</span>
                    <h3 className="mb-3 font-display text-[24px] leading-[1.15] text-ink">{block.title}</h3>
                    <p className="mb-4 text-[15px] leading-[1.7] text-ink/80">{block.description}</p>
                    <ul className="flex flex-col gap-2">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-ink/80">
                          <IconCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Figure caption={`fig. 0${i + 1} — ${block.image.alt}, captura de producción`}>
                    <ShowcaseImage src={block.image.src} alt={block.image.alt} aspectClassName="aspect-video" />
                  </Figure>
                </div>
              ))}
            </div>
          </CaseSection>

          {/* ── Administración ──────────────────────────────────────── */}
          <CaseSection
            id="administracion"
            title="Gestión de la flota y los actores"
            lead={
              <p>
                Páginas dedicadas para crear y editar cada entidad del sistema. Los cambios de estado se propagan en
                tiempo real a los módulos de operación y analítica.
              </p>
            }
            wide
          >
            <AdminTabs cards={adminCards} />
          </CaseSection>

          {/* ── Historia ────────────────────────────────────────────── */}
          <CaseSection
            id="historia"
            title="Hitos del desarrollo"
            lead={
              <p>
                Desde el primer commit hasta el estado actual, cada fase incorporó nuevas capacidades sobre una base
                sólida y real.
              </p>
            }
          >
            <ol className="max-w-[70ch] border-l border-rule">
              {milestones.map((m) => (
                <li key={m.title} className="relative pb-8 pl-7 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[5px] top-1.5 h-[9px] w-[9px] border",
                      m.highlight ? "border-accent bg-accent" : "border-ink bg-paper"
                    )}
                  />
                  <span className="mono-label mb-1.5 block !text-[9.5px]">{m.date}</span>
                  <h3 className="mb-1.5 text-[16px] font-semibold text-ink">{m.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-ink/75">{m.description}</p>
                </li>
              ))}
            </ol>
          </CaseSection>

          {/* ── Arquitectura ────────────────────────────────────────── */}
          <CaseSection
            id="arquitectura"
            title="Stack y arquitectura"
            lead={
              <p>
                Stack técnico en producción: capas de usuario, aplicación Next.js con App Router, base de datos
                Firestore en tiempo real y exportaciones generadas en el cliente.
              </p>
            }
            wide
          >
            <div className="border border-ink bg-paper-3 p-5 md:p-7">
              <ArchitectureDiagram />
            </div>
          </CaseSection>

          <CaseQuote>
            Diseñé y construí esta plataforma de principio a fin: arquitectura, base de datos, interfaz y lógica de
            negocio.
          </CaseQuote>
        </CaseBody>
      </main>

      <SiteFooter
        next={{ title: "Curiana Radio", meta: "Next 16 · Python · Claude Haiku — 2025 →", href: "/archivo#curiana" }}
      />
    </div>
  )
}
