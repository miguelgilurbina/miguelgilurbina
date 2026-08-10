import type { Metadata } from "next"
import Link from "next/link"
import {
  IconArrowLeft,
  IconExternalLink,
  IconRobot,
  IconGavel,
  IconUsersGroup,
  IconWorld,
  IconCalendarStats,
  IconCode,
  IconChartBar,
} from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "Claude Impact Lab Chile 2026 — Agentes de IA operando un evento real",
  description:
    "Lead Frontend de la plataforma que corrió el primer Claude Impact Lab de América Latina: 899 postulaciones, 48 equipos y 1.834 evaluaciones en 48 horas, con cuatro agentes Claude en producción.",
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "899", label: "postulaciones procesadas" },
  { value: "48", label: "equipos en competencia" },
  { value: "1.834", label: "evaluaciones registradas" },
  { value: "4", label: "agentes Claude en producción" },
  { value: "48h", label: "de evento" },
]

const agents = [
  {
    icon: IconRobot,
    name: "Copiloto de administración",
    model: "Sonnet 4.5",
    desc: "Asiste al equipo organizador. Las herramientas de lectura corren solas; las de escritura —aprobar equipos, cerrar evaluaciones, guardar rúbrica— quedan detrás de aprobación humana explícita.",
    note: "Sonnet y no Haiku por una razón concreta: el loop de aprobar veinte equipos en una sola conversación es largo y con muchas herramientas, y ahí un modelo más liviano se pierde a mitad de camino.",
  },
  {
    icon: IconGavel,
    name: "Asistente de evaluación",
    model: "Haiku 4.5",
    desc: "Pre-evalúa cada entregable en diez sub-checks binarios y entrega, junto al veredicto, la evidencia textual que lo sustenta. El mentor o juez confirma o corrige con un click.",
    note: "Las diez pre-evaluaciones corren en paralelo: es clasificación acotada, no razonamiento largo. Ahí Haiku es la elección correcta y la barata.",
  },
  {
    icon: IconUsersGroup,
    name: "Asistente de participantes",
    model: "Haiku 4.5",
    desc: "Solo lectura. Responde sobre las bases, el progreso del equipo y los recursos disponibles, con acceso limitado a los datos del propio usuario.",
    note: "El alcance de permisos es parte del diseño del agente, no una capa que se agrega después.",
  },
  {
    icon: IconWorld,
    name: "Asistente público",
    model: "Haiku 4.5",
    desc: "Sin login. Dos herramientas y nada más: preguntas frecuentes curadas por el equipo y búsqueda de recursos públicos. Cero acceso a datos de usuarios.",
    note: "Rate limiting persistido en base de datos, no en memoria —en serverless la memoria miente—, más protección contra inyección de prompt y tope de iteraciones.",
  },
]

const contributions = [
  {
    title: "Leaderboard en vivo y ceremonia de premiación",
    body: "Construí el ranking público sobre Supabase Realtime y la ceremonia con reveal por track y podio animado, proyectada ante 250 personas. Sin recargas, sin latencia visible, y con la lógica de quién queda fuera de competencia por no entregar a tiempo resuelta en el mismo lugar donde se calcula el puntaje.",
  },
  {
    title: "Portal de evaluadores",
    body: "La interfaz donde veinte mentores y jueces revisaron 48 equipos en dos días: dossier por equipo, formulario de evaluación conectado al asistente, y una vista que le muestra al juez lo que ya había marcado el mentor en la fase anterior.",
  },
  {
    title: "Motor de puntaje y rúbrica configurable",
    body: "Después del evento cerré los vacíos de scoring que la auditoría dejó al descubierto: mediana de los tres jueces en lugar de promedio, tope real en 100, y ponderación mentor/juez editable por evento desde el panel de administración sin necesidad de un deploy. Uno de esos ajustes cambiaba el primer lugar.",
  },
  {
    title: "Abstracción multi-tenant",
    body: "Moví la configuración de evento —tracks, reglas, rúbrica, marca, fechas— a una capa de resolución por vertical. Eso permitió lanzar la segunda edición del programa sobre la misma base de código en lugar de duplicar el proyecto.",
  },
  {
    title: "Tour guiado por rol y motor de certificados",
    body: "Un recorrido con spotlight diferenciado para participante, mentor y juez, porque en un evento de 48 horas nadie lee documentación. Y, al cierre, el generador de certificados parametrizable por evento.",
  },
]

const stack = [
  ["Frontend", "Next.js 14 (App Router) · React 18 · TypeScript estricto · Tailwind CSS · next-intl"],
  ["Datos y tiempo real", "Supabase — PostgreSQL, RLS por rol, Realtime, Storage"],
  ["IA", "Claude API vía Anthropic SDK — Haiku 4.5 y Sonnet 4.5, tool use, base de conocimiento por vertical"],
  ["Calidad", "Vitest · Playwright E2E, incluyendo suites de guardrails para los agentes"],
  ["Operación", "GitHub Actions (lint → tipos → tests → build) · conventional commits · Vercel · Resend"],
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#c2410c] uppercase dark:text-[#e8916b]">
      <span className="block h-0.5 w-5 rounded-full bg-[#c2410c] dark:bg-[#e8916b]" />
      {children}
    </div>
  )
}

function RolePill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[12px] font-medium text-slate-300">
      <Icon className="size-3.5 text-[#e8916b]" stroke={1.75} />
      {label}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ClaudeImpactLabPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#141210] to-[#241d18] px-6 py-16 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(217,119,87,0.30) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-slate-400 transition-colors hover:text-white"
          >
            <IconArrowLeft className="size-3.5" />
            Volver al portafolio
          </Link>

          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] font-semibold tracking-[0.12em] text-[#e8916b] uppercase">
                Claude Impact Lab Chile 2026
              </p>
              <p className="mb-6 text-[13px] text-slate-400">
                Bendita IA × FinteChile · Anthropic como Technical Partner
              </p>

              <h1 className="mb-4 text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-[1.15] tracking-tight">
                Agentes que no deciden,
                <span className="text-[#e8916b]"> pero hacen posible decidir</span>
              </h1>

              <p className="mb-6 text-[1rem] leading-7 text-slate-400">
                La plataforma que operó el primer Claude Impact Lab de América Latina, en el Chile
                Fintech Forum 2026. Fui{" "}
                <span className="font-medium text-white">Lead Frontend</span> del proyecto: el
                leaderboard en vivo, el portal de evaluadores y el motor de puntaje.
              </p>

              <div className="flex flex-wrap gap-2">
                <RolePill icon={IconCode} label="Lead Frontend" />
                <RolePill icon={IconRobot} label="Integración de agentes" />
                <RolePill icon={IconCalendarStats} label="Abr – Ago 2026" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                El problema real
              </p>
              <p className="mb-5 text-[1rem] leading-7 text-slate-300">
                Un evento nacional con 899 postulaciones, 48 equipos compitiendo y veinte
                evaluadores voluntarios con dos días para revisarlo todo. La aritmética no cierra.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Sin automatización, no alcanza el tiempo para evaluar con seriedad",
                  "Con automatización ciega, el resultado pierde legitimidad ante quien compite",
                  "Los criterios cambian entre tracks y no pueden quedar congelados en el código",
                  "Todo tiene que sostenerse en vivo, con público mirando la pantalla",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-slate-400">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#e8916b]" />
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

      {/* LA DECISIÓN DE DISEÑO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>La decisión de diseño</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            El agente no evalúa. Pre-evalúa.
          </h2>
          <p className="mb-8 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
            Esa distinción es todo el proyecto. Un modelo que emite un puntaje de 1 a 10 sobre el
            trabajo de un equipo produce un número que nadie puede discutir ni defender. En su
            lugar, el asistente revisa diez sub-checks binarios y por cada uno entrega su veredicto{" "}
            <span className="font-medium text-foreground">junto con la cita textual que lo sustenta</span>.
            El evaluador humano confirma o corrige con un click, y su decisión es la que cuenta.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/20">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-red-500 uppercase">
                Lo que no hicimos
              </p>
              <ul className="space-y-2 text-[0.9375rem] text-muted-foreground">
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Pedirle al modelo un puntaje global y confiar en él</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Rúbricas escritas en el código, imposibles de ajustar durante el evento</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Un solo juez decidiendo por equipo</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-red-400">✕</span>Tratar la evaluación asistida como una caja negra</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-emerald-600 uppercase">
                Lo que sí
              </p>
              <ul className="space-y-2 text-[0.9375rem] text-muted-foreground">
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-emerald-500">✓</span>Sub-checks binarios con evidencia textual obligatoria</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-emerald-500">✓</span>Rúbrica editable por evento, sin deploy</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-emerald-500">✓</span>Tres jueces en doble ciego, y la mediana en vez del promedio</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-emerald-500">✓</span>Registro de cada divergencia entre humano e IA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOS AGENTES */}
      <section className="border-t border-border bg-muted/20 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Arquitectura</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Cuatro agentes, cuatro alcances de permiso
          </h2>
          <p className="mb-9 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
            No es un chatbot con cuatro personalidades: son cuatro superficies distintas, cada una
            con su propio conjunto de herramientas, su propio nivel de autenticación y su propio
            modelo elegido según la tarea.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {agents.map((a) => (
              <div key={a.name} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#c2410c]/10 text-[#c2410c] dark:text-[#e8916b]">
                    <a.icon className="size-5" stroke={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-bold leading-tight">{a.name}</h3>
                    <p className="text-[12px] text-muted-foreground">Claude {a.model}</p>
                  </div>
                </div>
                <p className="mb-3 text-[0.9375rem] leading-6 text-muted-foreground">{a.desc}</p>
                <p className="border-l-2 border-[#c2410c]/30 pl-3 text-[0.875rem] leading-6 text-muted-foreground/85 italic">
                  {a.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDITORÍA DE DIVERGENCIA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Lo que medimos</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Auditoría de divergencia entre humano e IA
          </h2>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-5 text-[1.0625rem] leading-8 text-muted-foreground">
                Cada vez que un mentor o un juez se apartó de lo que sugería el modelo, quedó
                registrado: qué criterio, en qué dirección y por qué. No es telemetría. Es la
                materia prima para saber en qué tipo de juicio el modelo se desalinea del criterio
                humano, y ajustar la instrucción en vez de adivinar.
              </p>
              <p className="text-[1.0625rem] leading-8 text-muted-foreground">
                Es, además, lo que permite defender el resultado ante quien no ganó: la traza existe
                y se puede revisar criterio por criterio.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                Cómo se compone el puntaje
              </p>
              <div className="space-y-3 text-[0.9375rem]">
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">Fase mentor</span>
                  <span className="font-bold text-foreground">40%</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">Fase jueces (mediana de 3, doble ciego)</span>
                  <span className="font-bold text-foreground">60%</span>
                </div>
                <p className="pt-1 text-[0.8125rem] leading-6 text-muted-foreground">
                  La ponderación es un parámetro del evento, no una constante del código: se edita
                  desde el panel de administración.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MI CONTRIBUCIÓN */}
      <section className="border-t border-border bg-muted/20 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Mi trabajo en el proyecto</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Qué construí
          </h2>
          <p className="mb-9 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
            Trabajé como Lead Frontend en un equipo de tres, con un backend dedicado y un CAIO
            definiendo producto. Estas son las piezas de las que fui responsable, a lo largo de 148
            commits en cinco meses.
          </p>

          <div className="space-y-4">
            {contributions.map((c, i) => (
              <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#c2410c]/10 text-[13px] font-bold text-[#c2410c] dark:text-[#e8916b]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1.5 text-[1.0625rem] font-bold">{c.title}</h3>
                  <p className="text-[0.9375rem] leading-7 text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LO QUE APRENDIMOS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Lo que aprendimos</SectionLabel>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Tres cosas que solo se descubren en producción
          </h2>
          <div className="space-y-6">
            {[
              {
                t: "Un evento en vivo no perdona el estado mal guardado",
                d: "El bug más caro de los dos días no estuvo en ningún agente: estuvo en el guardado automático de los entregables. Cuando el usuario y el sistema escriben sobre lo mismo, quien pierde siempre es el usuario. Lo arreglamos en caliente, y desde entonces trato el autosave como un problema de concurrencia, no de conveniencia.",
              },
              {
                t: "La configuración por vertical se filtra por donde no la buscas",
                d: "Al abrir una segunda vertical, aparecieron lugares donde el sistema seguía resolviendo la rúbrica del evento original. El aprendizaje fue estructural: la vertical activa tiene que ser una única fuente de verdad consultada en el borde, no un parámetro que cada módulo hereda por su cuenta.",
              },
              {
                t: "La auditoría posterior vale tanto como el evento",
                d: "Al revisar el cálculo de puntajes después del cierre encontramos diferencias de criterio —promedio contra mediana, topes, ponderaciones— que en un caso movían el primer lugar. Cerrarlas con tests fue más valioso que cualquier feature nueva, y es la razón por la que la segunda edición partió sobre terreno firme.",
              },
            ].map((x) => (
              <div key={x.t} className="border-l-2 border-[#c2410c]/40 pl-5">
                <h3 className="mb-1.5 text-[1.0625rem] font-bold">{x.t}</h3>
                <p className="text-[0.9375rem] leading-7 text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-border bg-muted/20 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Stack</SectionLabel>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Con qué está construido
          </h2>
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {stack.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[190px_1fr] sm:gap-4">
                <div className="text-[0.875rem] font-bold text-[#c2410c] dark:text-[#e8916b]">{k}</div>
                <div className="text-[0.9375rem] leading-6 text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            La plataforma sigue en línea
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[1.0625rem] leading-8 text-muted-foreground">
            El programa publicó un reporte de impacto con las cifras verificadas desde la base de
            datos de producción. Los números de esta página salen de ahí.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://fintech.benditaia.cl/es/claude-impact-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <IconExternalLink className="size-4" />
              Ver la plataforma
            </a>
            <a
              href="https://fintech.benditaia.cl/es/claude-impact-lab-kpi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:border-primary/25"
            >
              <IconChartBar className="size-4" />
              Reporte de impacto
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:border-primary/25"
            >
              <IconArrowLeft className="size-4" />
              Volver al portafolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
