import type { Metadata } from "next"
import {
  IconChartBar,
  IconReceipt,
  IconFileSpreadsheet,
  IconUsersGroup,
  IconCalendarStats,
  IconPalette,
  IconArrowsExchange,
  IconBrandLinkedin,
  IconExternalLink,
  IconBriefcase,
  IconCode,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { ShowcaseImage } from "@/components/historia/showcase-image"
import { ArchitectureDiagram } from "@/components/historia/architecture-diagram"
import { StickyNav } from "@/components/historia/sticky-nav"
import { AdminTabs } from "@/components/historia/admin-tabs"

export const metadata: Metadata = {
  title: "Cargo Electric — Historia de la Plataforma",
  description:
    "De cero a producción en 5 meses: cómo reemplazamos múltiples Google Sheets por una plataforma centralizada de gestión de flota eléctrica.",
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "14", label: "camiones BYD" },
  { value: "154", label: "locales SMU" },
  { value: "16", label: "conductores" },
  { value: "4", label: "módulos en producción" },
  { value: "5", label: "meses de desarrollo" },
]

const milestones = [
  {
    icon: IconChartBar,
    date: "14 Enero 2026",
    title: "Dashboard de Analítica",
    description:
      "Primer dashboard analytics con KPIs, gráficos Recharts y drill-down por camión, junto con el rebrand inicial a la identidad de Cargo Electric.",
    highlight: true,
  },
  {
    icon: IconReceipt,
    date: "23 Enero – 4 Febrero 2026",
    title: "Sistema de Facturación / Proformas",
    description:
      "Módulo completo de billing: generación de proformas con el modelo de precios de SMU, filtros por fecha, flujo de aprobación y exportación a Excel.",
    highlight: true,
  },
  {
    icon: IconFileSpreadsheet,
    date: "Marzo 2026",
    title: "Refinamiento de Rutas y exportación a Excel",
    description:
      "Ordenamiento multinivel, formato de montos, actualización de tarifas SMU 2026, exportación de proformas a Excel y segunda versión del heatmap de operación por camión.",
    highlight: false,
  },
  {
    icon: IconUsersGroup,
    date: "13–20 Marzo 2026",
    title: "Administración: Locales, Camiones y Usuarios",
    description:
      "Páginas CRUD dedicadas para gestionar los 154 locales SMU, la flota de 14 camiones BYD y los conductores/administradores del sistema.",
    highlight: true,
  },
  {
    icon: IconCalendarStats,
    date: "16 Abril 2026",
    title: "Resumen Diario dinámico",
    description:
      "Nueva vista de Resumen Diario con matriz camiones × días, vista móvil dedicada y chart de desviación vs presupuesto configurable por período.",
    highlight: false,
  },
  {
    icon: IconPalette,
    date: "21–29 Abril 2026",
    title: "Identidad de marca, uplift visual y seguridad",
    description:
      "Implementación de la identidad visual de Cargo Electric en toda la app, rediseño de navegación, y parches de seguridad CRITICAL/HIGH sobre producción.",
    highlight: false,
  },
  {
    icon: IconArrowsExchange,
    date: "13 Mayo 2026",
    title: "Nuevo modelo operacional",
    description:
      "Diseño e implementación del nuevo modelo de datos operacional, con wizard de migración de rutas legacy y corrección de búsqueda histórica.",
    highlight: true,
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
    reverse: true,
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
      "Carga masiva desde Excel para importar múltiples rutas",
    ],
    image: { src: "/images/now-routes.webm", alt: "Gestión de Rutas" },
  },
  {
    tag: "Facturación",
    title: "Proformas — del registro a la factura en un flujo",
    description:
      "Carga rutas completadas desde Firestore o desde Excel, las agrupa por camión y calcula montos según la matriz de precios activa de SMU.",
    bullets: [
      "Agrupación automática por camión con IVA 19% calculado",
      "Cards expandibles para revisar y corregir ruta a ruta",
      "Excel fiel al formato de referencia SMU con fórmulas incluidas",
      "Flujo completo: carga → revisión → descarga en una sola pantalla",
    ],
    image: { src: "/images/now-billing.webm", alt: "Módulo de Facturación" },
    reverse: true,
  },
]

const adminCards = [
  {
    tag: "Locales",
    title: "Puntos de destino",
    description:
      "154 locales SMU con código, nombre y estado. Un local inactivo desaparece de la asignación de rutas sin perder historial.",
    image: { src: "/images/now-locales.webm", alt: "Gestión de Locales" },
  },
  {
    tag: "Camiones",
    title: "Flota BYD",
    description:
      "14 unidades con patente y estado operativo. Un camión fuera de servicio no aparece disponible en el resumen diario ni en rutas.",
    image: { src: "/images/now-camiones.webm", alt: "Gestión de Camiones" },
  },
  {
    tag: "Usuarios",
    title: "Conductores y admins",
    description:
      "Roles, vinculación a camión y activación/desactivación. Cuatro niveles de acceso: admin, ejecutivo, board y viewer.",
    image: { src: "/images/now-usuarios.webm", alt: "Gestión de Usuarios" },
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-primary uppercase">
      <span className="block h-0.5 w-5 rounded-full bg-primary" />
      {children}
    </div>
  )
}

function RolePill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[12px] font-medium text-slate-300">
      <Icon className="size-3.5 text-blue-400" stroke={1.75} />
      {label}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HistoriaPage() {
  return (
    <div className="bg-background text-foreground">
      <StickyNav />

      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6 py-16 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.35) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Columna izquierda: identidad y rol */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <img
                  src="/cargo-electric-logo.png"
                  alt="Cargo Electric"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-blue-400 uppercase">
                    Cargo Electric
                  </p>
                  <p className="text-[13px] text-slate-400">Startup de logística eléctrica · Chile</p>
                </div>
              </div>

              <h1 className="mb-4 text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-[1.15] tracking-tight">
                Construí la plataforma operacional
                <span className="text-blue-400"> desde cero</span>
              </h1>

              <p className="mb-6 text-[1rem] leading-7 text-slate-400">
                Asumí el rol de <span className="text-white font-medium">Product Owner</span> y{" "}
                <span className="text-white font-medium">Full-Stack Engineer</span> — definí el producto,
                diseñé la arquitectura y escribí cada línea de código en producción.
              </p>

              <div className="flex flex-wrap gap-2">
                <RolePill icon={IconBriefcase} label="Product Owner" />
                <RolePill icon={IconCode} label="Full-Stack Engineer" />
                <RolePill icon={IconCalendarStats} label="Ene 2026 – hoy" />
              </div>
            </div>

            {/* Columna derecha: el problema */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                El problema que resolvemos
              </p>
              <p className="mb-5 text-[1rem] leading-7 text-slate-300">
                Cargo Electric opera una flota de 14 camiones eléctricos BYD que atienden 154 locales de SMU —
                y lo gestionaba todo con Google Sheets dispersos, sin visibilidad en tiempo real y con
                facturación calculada a mano cada período.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Sheets sin conexión entre sí — datos duplicados y desincronizados",
                  "Sin visibilidad del estado de la flota en tiempo real",
                  "Facturación manual propensa a errores por período",
                  "Imposible escalar sin multiplicar la carga operativa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-slate-400">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <div className="border-y border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[2rem] font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-0.5 text-[12px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SOLUCIÓN (antes "Problema") */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>La solución</SectionLabel>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            De Sheets dispersos a operación en tiempo real
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/20">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-red-500 uppercase">Antes</p>
              <ul className="space-y-2 text-[0.9375rem] text-muted-foreground">
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Múltiples Google Sheets sin conexión entre sí</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Actualización manual, propensa a errores y duplicados</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Sin visibilidad en tiempo real del estado de la flota</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Facturación calculada a mano por período</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Imposible escalar sin multiplicar la carga operativa</li>
              </ul>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900/40 dark:bg-green-950/20">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-green-600 uppercase">Ahora</p>
              <ul className="space-y-2 text-[0.9375rem] text-muted-foreground">
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-green-500">✓</span>Una sola plataforma para toda la operación</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-green-500">✓</span>Datos en tiempo real desde Firestore</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-green-500">✓</span>Analítica operacional con KPIs y tendencias históricas</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-green-500">✓</span>Facturación automatizada con modelo de precios SMU</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-green-500">✓</span>Arquitectura escalable lista para nuevos clientes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-6 border-border" />

      {/* PLATAFORMA HOY */}
      <section id="plataforma" className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Estado actual</SectionLabel>
          <h2 className="mb-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">La app hoy</h2>
          <p className="mb-14 max-w-2xl text-[1.0625rem] text-muted-foreground">
            Cuatro módulos que cubren el ciclo completo: desde el registro del movimiento diario hasta
            la analítica y la facturación automatizada.
          </p>

          <div className="space-y-16 sm:space-y-20">
            {featureBlocks.map((block) => (
              <div
                key={block.title}
                className={cn(
                  "grid items-center gap-8 md:grid-cols-2 md:gap-12",
                  block.reverse && "[&>*:first-child]:md:order-2"
                )}
              >
                <div>
                  <span className="mb-3.5 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-primary uppercase">
                    {block.tag}
                  </span>
                  <h3 className="mb-3 text-[1.25rem] font-bold tracking-tight sm:text-[1.375rem]">{block.title}</h3>
                  <p className="mb-4 text-[0.9375rem] leading-7 text-muted-foreground">{block.description}</p>
                  <ul className="space-y-2">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[0.9375rem] text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-xl border shadow-xl">
                  <ShowcaseImage src={block.image.src} alt={block.image.alt} aspectClassName="aspect-video" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-6 border-border" />

      {/* ADMINISTRACIÓN */}
      <section id="administracion" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Administración</SectionLabel>
          <h2 className="mb-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Gestión de la flota y los actores
          </h2>
          <p className="mb-10 max-w-2xl text-[1.0625rem] text-muted-foreground">
            Páginas dedicadas para crear y editar cada entidad del sistema. Los cambios de estado
            se propagan en tiempo real a los módulos de operación y analítica.
          </p>
          <AdminTabs cards={adminCards} />
        </div>
      </section>

      <hr className="mx-6 border-border" />

      {/* TIMELINE */}
      <section id="historia" className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Historia</SectionLabel>
          <h2 className="mb-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">Hitos del desarrollo</h2>
          <p className="mb-14 max-w-2xl text-[1.0625rem] text-muted-foreground">
            Desde el primer commit hasta el estado actual, cada fase incorporó nuevas capacidades sobre una base
            sólida y real.
          </p>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-primary to-border sm:block" />

            <div className="space-y-10 sm:space-y-12">
              {milestones.map((milestone) => {
                const Icon = milestone.icon
                return (
                  <div key={milestone.title} className="relative flex gap-5 sm:gap-7">
                    <div
                      className={cn(
                        "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 bg-background",
                        milestone.highlight
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
                          : "border-border text-muted-foreground"
                      )}
                    >
                      <Icon className="size-5" stroke={1.75} />
                    </div>
                    <div className="flex-1 pt-2.5">
                      <div className="mb-1 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
                        {milestone.date}
                      </div>
                      <h3 className="mb-1.5 text-[1rem] font-semibold sm:text-[1.0625rem]">{milestone.title}</h3>
                      <p className="max-w-xl text-[0.9375rem] text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-6 border-border" />

      {/* STACK Y ARQUITECTURA */}
      <section id="arquitectura" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Tecnología</SectionLabel>
          <h2 className="mb-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Stack y arquitectura
          </h2>
          <p className="mb-10 max-w-2xl text-[1.0625rem] text-muted-foreground">
            Stack técnico en producción: capas de usuario, aplicación Next.js con App Router, base de datos
            Firestore en tiempo real y exportaciones generadas en el cliente.
          </p>
          <ArchitectureDiagram />
        </div>
      </section>

      <hr className="mx-6 border-border" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            ¿Quieres saber más sobre este proyecto?
          </h2>
          <p className="mb-8 text-lg text-slate-400">
            Diseñé y construí esta plataforma de principio a fin — arquitectura, base de datos, UI y lógica de negocio.
            Si tienes un problema similar o quieres conversar sobre el proceso, escríbeme.
          </p>
          <a
            href="https://www.linkedin.com/in/miguelgilurbina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition hover:bg-blue-500"
          >
            <IconBrandLinkedin className="size-5" />
            Miguel Gil Urbina
            <IconExternalLink className="size-4 opacity-70" />
          </a>
        </div>
      </section>

      <footer className="bg-[#0f172a] px-6 py-8 text-center text-sm text-slate-500">
        <p>
          <strong className="text-slate-400">Cargo Electric</strong> · Plataforma de gestión de flota eléctrica ·
          2025–2026
        </p>
      </footer>
    </div>
  )
}
