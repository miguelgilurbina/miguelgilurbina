"use client";

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
import { useLanguage } from "@/context/LanguageContext"

// ─── Copy ─────────────────────────────────────────────────────────────────────

const AGENT_ICONS = [IconRobot, IconGavel, IconUsersGroup, IconWorld]

const COPY = {
  es: {
    back: "Volver al portafolio",
    kicker: "Claude Impact Lab Chile",
    partners: "Bendita IA · Anthropic como Technical Partner",
    titleA: "Agentes que no deciden,",
    titleB: " pero hacen posible decidir",
    intro: "La plataforma que operó el primer Claude Impact Lab de América Latina —la edición Fintech, en el Chile Fintech Forum de mayo— y después su segunda vertical, Longevidad, sobre la misma base de código. Fui Lead Frontend del proyecto: el leaderboard en vivo, el portal de evaluadores y el motor de puntaje.",
    pills: ["Lead Frontend", "Integración de agentes", "Abr – Ago 2026"],
    problemLabel: "El problema real",
    problemLead: "Un evento nacional con 899 postulaciones, 48 equipos compitiendo y veinte evaluadores voluntarios con dos días para revisarlo todo. La aritmética no cierra.",
    problems: [
      "Sin automatización, no alcanza el tiempo para evaluar con seriedad",
      "Con automatización ciega, el resultado pierde legitimidad ante quien compite",
      "Los criterios cambian entre tracks y no pueden quedar congelados en el código",
      "Todo tiene que sostenerse en vivo, con público mirando la pantalla",
    ],
    stats: [
      { value: "899", label: "postulaciones procesadas" },
      { value: "48", label: "equipos en competencia" },
      { value: "1.834", label: "evaluaciones registradas" },
      { value: "4", label: "agentes Claude en producción" },
      { value: "48h", label: "de evento" },
    ],
    designLabel: "La decisión de diseño",
    designTitle: "El agente no evalúa. Pre-evalúa.",
    designBody: "Esa distinción es todo el proyecto. Un modelo que emite un puntaje de 1 a 10 sobre el trabajo de un equipo produce un número que nadie puede discutir ni defender. En su lugar, el asistente revisa diez sub-checks binarios y por cada uno entrega su veredicto junto con la cita textual que lo sustenta. El evaluador humano confirma o corrige con un click, y su decisión es la que cuenta.",
    notLabel: "Lo que no hicimos",
    notDid: [
      "Pedirle al modelo un puntaje global y confiar en él",
      "Rúbricas escritas en el código, imposibles de ajustar durante el evento",
      "Un solo juez decidiendo por equipo",
      "Tratar la evaluación asistida como una caja negra",
    ],
    didLabel: "Lo que sí",
    did: [
      "Sub-checks binarios con evidencia textual obligatoria",
      "Rúbrica editable por evento, sin deploy",
      "Tres jueces en doble ciego, y la mediana en vez del promedio",
      "Registro de cada divergencia entre humano e IA",
    ],
    archLabel: "Arquitectura",
    archTitle: "Cuatro agentes, cuatro alcances de permiso",
    archBody: "No es un chatbot con cuatro personalidades: son cuatro superficies distintas, cada una con su propio conjunto de herramientas, su propio nivel de autenticación y su propio modelo elegido según la tarea.",
    agents: [
      { name: "Copiloto de administración", model: "Sonnet 4.5",
        desc: "Asiste al equipo organizador. Las herramientas de lectura corren solas; las de escritura —aprobar equipos, cerrar evaluaciones, guardar rúbrica— quedan detrás de aprobación humana explícita.",
        note: "Sonnet y no Haiku por una razón concreta: el loop de aprobar veinte equipos en una sola conversación es largo y con muchas herramientas, y ahí un modelo más liviano se pierde a mitad de camino." },
      { name: "Asistente de evaluación", model: "Haiku 4.5",
        desc: "Pre-evalúa cada entregable en diez sub-checks binarios y entrega, junto al veredicto, la evidencia textual que lo sustenta. El mentor o juez confirma o corrige con un click.",
        note: "Las diez pre-evaluaciones corren en paralelo: es clasificación acotada, no razonamiento largo. Ahí Haiku es la elección correcta y la barata." },
      { name: "Asistente de participantes", model: "Haiku 4.5",
        desc: "Solo lectura. Responde sobre las bases, el progreso del equipo y los recursos disponibles, con acceso limitado a los datos del propio usuario.",
        note: "El alcance de permisos es parte del diseño del agente, no una capa que se agrega después." },
      { name: "Asistente público", model: "Haiku 4.5",
        desc: "Sin login. Dos herramientas y nada más: preguntas frecuentes curadas por el equipo y búsqueda de recursos públicos. Cero acceso a datos de usuarios.",
        note: "Rate limiting persistido en base de datos, no en memoria —en serverless la memoria miente—, más protección contra inyección de prompt y tope de iteraciones." },
    ],
    auditLabel: "Lo que medimos",
    auditTitle: "Auditoría de divergencia entre humano e IA",
    auditP1: "Cada vez que un mentor o un juez se apartó de lo que sugería el modelo, quedó registrado: qué criterio, en qué dirección y por qué. No es telemetría. Es la materia prima para saber en qué tipo de juicio el modelo se desalinea del criterio humano, y ajustar la instrucción en vez de adivinar.",
    auditP2: "Es, además, lo que permite defender el resultado ante quien no ganó: la traza existe y se puede revisar criterio por criterio.",
    scoreLabel: "Cómo se compone el puntaje",
    scoreMentor: "Fase mentor",
    scoreJudges: "Fase jueces (mediana de 3, doble ciego)",
    scoreNote: "La ponderación es un parámetro del evento, no una constante del código: se edita desde el panel de administración.",
    workLabel: "Mi trabajo en el proyecto",
    workTitle: "Qué construí",
    workBody: "Trabajé como Lead Frontend en un equipo de tres, con un backend dedicado y un CAIO definiendo producto. Estas son las piezas de las que fui responsable, a lo largo de 148 commits en cinco meses.",
    contributions: [
      { title: "Leaderboard en vivo y ceremonia de premiación",
        body: "Construí el ranking público sobre Supabase Realtime y la ceremonia con reveal por track y podio animado, proyectada ante 250 personas. Sin recargas, sin latencia visible, y con la lógica de quién queda fuera de competencia por no entregar a tiempo resuelta en el mismo lugar donde se calcula el puntaje." },
      { title: "Portal de evaluadores",
        body: "La interfaz donde veinte mentores y jueces revisaron 48 equipos en dos días: dossier por equipo, formulario de evaluación conectado al asistente, y una vista que le muestra al juez lo que ya había marcado el mentor en la fase anterior." },
      { title: "Motor de puntaje y rúbrica configurable",
        body: "Después del evento cerré los vacíos de scoring que la auditoría dejó al descubierto: mediana de los tres jueces en lugar de promedio, tope real en 100, y ponderación mentor/juez editable por evento desde el panel de administración sin necesidad de un deploy. Uno de esos ajustes cambiaba el primer lugar." },
      { title: "Abstracción multi-tenant",
        body: "Moví la configuración de evento —tracks, reglas, rúbrica, marca, fechas— a una capa de resolución por vertical. Eso permitió lanzar la segunda edición del programa sobre la misma base de código en lugar de duplicar el proyecto." },
      { title: "Tour guiado por rol y motor de certificados",
        body: "Un recorrido con spotlight diferenciado para participante, mentor y juez, porque en un evento de 48 horas nadie lee documentación. Y, al cierre, el generador de certificados parametrizable por evento." },
    ],
    learnLabel: "Lo que aprendimos",
    learnTitle: "Tres cosas que solo se descubren en producción",
    lessons: [
      { t: "Un evento en vivo no perdona el estado mal guardado",
        d: "El bug más caro de los dos días no estuvo en ningún agente: estuvo en el guardado automático de los entregables. Cuando el usuario y el sistema escriben sobre lo mismo, quien pierde siempre es el usuario. Lo arreglamos en caliente, y desde entonces trato el autosave como un problema de concurrencia, no de conveniencia." },
      { t: "La configuración por vertical se filtra por donde no la buscas",
        d: "Al abrir una segunda vertical, aparecieron lugares donde el sistema seguía resolviendo la rúbrica del evento original. El aprendizaje fue estructural: la vertical activa tiene que ser una única fuente de verdad consultada en el borde, no un parámetro que cada módulo hereda por su cuenta." },
      { t: "La auditoría posterior vale tanto como el evento",
        d: "Al revisar el cálculo de puntajes después del cierre encontramos diferencias de criterio —promedio contra mediana, topes, ponderaciones— que en un caso movían el primer lugar. Cerrarlas con tests fue más valioso que cualquier feature nueva, y es la razón por la que la segunda edición partió sobre terreno firme." },
    ],
    stackLabel: "Stack",
    stackTitle: "Con qué está construido",
    stack: [
      ["Frontend", "Next.js 14 (App Router) · React 18 · TypeScript estricto · Tailwind CSS · next-intl"],
      ["Datos y tiempo real", "Supabase — PostgreSQL, RLS por rol, Realtime, Storage"],
      ["IA", "Claude API vía Anthropic SDK — Haiku 4.5 y Sonnet 4.5, tool use, base de conocimiento por vertical"],
      ["Calidad", "Vitest · Playwright E2E, incluyendo suites de guardrails para los agentes"],
      ["Operación", "GitHub Actions (lint → tipos → tests → build) · conventional commits · Vercel · Resend"],
    ],
    ctaTitle: "La plataforma sigue en línea",
    ctaBody: "El programa publicó un reporte de impacto con las cifras verificadas desde la base de datos de producción. Los números de esta página salen de ahí.",
    ctaLive: "Ver la plataforma",
    ctaReport: "Reporte de impacto",
  },
  en: {
    back: "Back to portfolio",
    kicker: "Claude Impact Lab Chile",
    partners: "Bendita IA · Anthropic as Technical Partner",
    titleA: "Agents that don't decide,",
    titleB: " but make deciding possible",
    intro: "The platform that ran the first Claude Impact Lab in Latin America — the Fintech edition, at May's Chile Fintech Forum — and then its second vertical, Longevity, on the same codebase. I was Lead Frontend on the project: the live leaderboard, the evaluator portal and the scoring engine.",
    pills: ["Lead Frontend", "Agent integration", "Apr – Aug 2026"],
    problemLabel: "The real problem",
    problemLead: "A national event with 899 applications, 48 competing teams and twenty volunteer evaluators with two days to review all of it. The arithmetic doesn't work.",
    problems: [
      "Without automation, there isn't enough time to evaluate seriously",
      "With blind automation, the result loses legitimacy with the people competing",
      "Criteria change between tracks and can't be frozen into the code",
      "All of it has to hold up live, with an audience watching the screen",
    ],
    stats: [
      { value: "899", label: "applications processed" },
      { value: "48", label: "teams competing" },
      { value: "1,834", label: "evaluations recorded" },
      { value: "4", label: "Claude agents in production" },
      { value: "48h", label: "of live event" },
    ],
    designLabel: "The design decision",
    designTitle: "The agent doesn't score. It pre-scores.",
    designBody: "That distinction is the whole project. A model that emits a 1-to-10 score on a team's work produces a number nobody can argue with or defend. Instead, the assistant reviews ten binary sub-checks and returns, for each one, its verdict together with the verbatim evidence behind it. The human evaluator confirms or corrects with a click, and their decision is the one that counts.",
    notLabel: "What we didn't do",
    notDid: [
      "Ask the model for a global score and trust it",
      "Hard-code rubrics, impossible to adjust mid-event",
      "Let a single judge decide per team",
      "Treat AI-assisted evaluation as a black box",
    ],
    didLabel: "What we did",
    did: [
      "Binary sub-checks with mandatory verbatim evidence",
      "A rubric editable per event, with no deploy",
      "Three blind judges, and the median rather than the mean",
      "A record of every human-vs-AI divergence",
    ],
    archLabel: "Architecture",
    archTitle: "Four agents, four permission scopes",
    archBody: "This isn't one chatbot with four personalities: they're four distinct surfaces, each with its own tool set, its own authentication level, and its own model chosen to fit the task.",
    agents: [
      { name: "Admin copilot", model: "Sonnet 4.5",
        desc: "Assists the organising team. Read tools run on their own; write tools — approving teams, closing evaluations, saving the rubric — sit behind explicit human approval.",
        note: "Sonnet rather than Haiku for a concrete reason: approving twenty teams in a single conversation is a long, tool-heavy loop, and a lighter model loses the thread halfway through." },
      { name: "Evaluation assistant", model: "Haiku 4.5",
        desc: "Pre-scores every submission across ten binary sub-checks and returns, alongside the verdict, the verbatim evidence that supports it. The mentor or judge confirms or corrects with a click.",
        note: "The ten pre-evaluations run in parallel: this is bounded classification, not long reasoning. Haiku is both the correct and the cheap choice there." },
      { name: "Participant assistant", model: "Haiku 4.5",
        desc: "Read-only. Answers about the rules, the team's progress and available resources, with access limited to the user's own data.",
        note: "Permission scope is part of the agent's design, not a layer bolted on afterwards." },
      { name: "Public assistant", model: "Haiku 4.5",
        desc: "No login. Two tools and nothing else: curated FAQs and public resource search. Zero access to user data.",
        note: "Rate limiting persisted in the database rather than in memory — in serverless, in-memory limits lie — plus prompt-injection protection and an iteration cap." },
    ],
    auditLabel: "What we measured",
    auditTitle: "Auditing human-vs-AI divergence",
    auditP1: "Every time a mentor or judge departed from what the model suggested, it was logged: which criterion, in which direction, and why. This isn't telemetry. It's the raw material for learning where the model drifts from human judgement, so the instruction can be adjusted instead of guessed at.",
    auditP2: "It's also what makes the result defensible to the teams that didn't win: the trail exists and can be reviewed criterion by criterion.",
    scoreLabel: "How the score is composed",
    scoreMentor: "Mentor phase",
    scoreJudges: "Judge phase (median of 3, double blind)",
    scoreNote: "The weighting is a parameter of the event, not a constant in the code: it's edited from the admin panel.",
    workLabel: "My work on the project",
    workTitle: "What I built",
    workBody: "I worked as Lead Frontend on a team of three, alongside a dedicated backend engineer and a CAIO defining product. These are the pieces I owned, across 148 commits over five months.",
    contributions: [
      { title: "Live leaderboard and awards ceremony",
        body: "I built the public ranking on Supabase Realtime and the ceremony with per-track reveal and animated podium, projected to 250 people. No reloads, no visible latency, and with the logic for which teams fall out of competition for missing the deadline resolved in the same place the score is computed." },
      { title: "Evaluator portal",
        body: "The interface where twenty mentors and judges reviewed 48 teams in two days: a per-team dossier, an evaluation form wired to the assistant, and a view that shows the judge what the mentor already marked in the earlier phase." },
      { title: "Scoring engine and configurable rubric",
        body: "After the event I closed the scoring gaps the audit exposed: median of the three judges instead of the mean, a real cap at 100, and mentor/judge weighting editable per event from the admin panel with no deploy. One of those adjustments changed first place." },
      { title: "Multi-tenant abstraction",
        body: "I moved event configuration — tracks, rules, rubric, branding, dates — into a per-vertical resolution layer. That let the programme launch its second edition on the same codebase instead of forking the project." },
      { title: "Role-aware guided tour and certificate engine",
        body: "A spotlight walkthrough differentiated for participant, mentor and judge, because nobody reads documentation during a 48-hour event. And, at the close, the per-event parameterisable certificate generator." },
    ],
    learnLabel: "What we learned",
    learnTitle: "Three things you only discover in production",
    lessons: [
      { t: "A live event doesn't forgive badly saved state",
        d: "The most expensive bug of those two days wasn't in any agent: it was in the autosave for team submissions. When the user and the system write to the same thing, the user is always the one who loses. We fixed it live, and I've treated autosave as a concurrency problem ever since, not a convenience feature." },
      { t: "Per-vertical config leaks in places you don't look",
        d: "When we opened a second vertical, places surfaced where the system was still resolving the original event's rubric. The lesson was structural: the active vertical has to be a single source of truth consulted at the edge, not a parameter each module inherits on its own." },
      { t: "The post-event audit is worth as much as the event",
        d: "Reviewing the score computation after the close, we found criteria differences — mean versus median, caps, weightings — that in one case moved first place. Closing them with tests was worth more than any new feature, and it's why the second edition started on solid ground." },
    ],
    stackLabel: "Stack",
    stackTitle: "What it's built with",
    stack: [
      ["Frontend", "Next.js 14 (App Router) · React 18 · strict TypeScript · Tailwind CSS · next-intl"],
      ["Data & realtime", "Supabase — PostgreSQL, role-based RLS, Realtime, Storage"],
      ["AI", "Claude API via the Anthropic SDK — Haiku 4.5 and Sonnet 4.5, tool use, per-vertical knowledge base"],
      ["Quality", "Vitest · Playwright E2E, including guardrail suites for the agents"],
      ["Operations", "GitHub Actions (lint → types → tests → build) · conventional commits · Vercel · Resend"],
    ],
    ctaTitle: "The platform is still online",
    ctaBody: "The programme published an impact report with figures verified against the production database. The numbers on this page come from there.",
    ctaLive: "View the platform",
    ctaReport: "Impact report",
  },
} as const

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
  const { lang } = useLanguage()
  const c = COPY[lang === "en" ? "en" : "es"]
  const pillIcons = [IconCode, IconRobot, IconCalendarStats]

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
            {c.back}
          </Link>

          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] font-semibold tracking-[0.12em] text-[#e8916b] uppercase">
                {c.kicker}
              </p>
              <p className="mb-6 text-[13px] text-slate-400">{c.partners}</p>

              <h1 className="mb-4 text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-[1.15] tracking-tight">
                {c.titleA}
                <span className="text-[#e8916b]">{c.titleB}</span>
              </h1>

              <p className="mb-6 text-[1rem] leading-7 text-slate-400">{c.intro}</p>

              <div className="flex flex-wrap gap-2">
                {c.pills.map((label, i) => (
                  <RolePill key={label} icon={pillIcons[i]} label={label} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                {c.problemLabel}
              </p>
              <p className="mb-5 text-[1rem] leading-7 text-slate-300">{c.problemLead}</p>
              <ul className="space-y-2.5">
                {c.problems.map((item) => (
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
          {c.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[2rem] font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-0.5 text-[12px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DECISIÓN DE DISEÑO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{c.designLabel}</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            {c.designTitle}
          </h2>
          <p className="mb-8 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
            {c.designBody}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/20">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-red-500 uppercase">
                {c.notLabel}
              </p>
              <ul className="space-y-2 text-[0.9375rem] text-muted-foreground">
                {c.notDid.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-red-400">✕</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-emerald-600 uppercase">
                {c.didLabel}
              </p>
              <ul className="space-y-2 text-[0.9375rem] text-muted-foreground">
                {c.did.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-emerald-500">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AGENTES */}
      <section className="border-t border-border bg-muted/20 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{c.archLabel}</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            {c.archTitle}
          </h2>
          <p className="mb-9 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
            {c.archBody}
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {c.agents.map((a, i) => {
              const Icon = AGENT_ICONS[i]
              return (
                <div key={a.name} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#c2410c]/10 text-[#c2410c] dark:text-[#e8916b]">
                      <Icon className="size-5" stroke={1.75} />
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
              )
            })}
          </div>
        </div>
      </section>

      {/* AUDITORÍA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{c.auditLabel}</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            {c.auditTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-5 text-[1.0625rem] leading-8 text-muted-foreground">{c.auditP1}</p>
              <p className="text-[1.0625rem] leading-8 text-muted-foreground">{c.auditP2}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                {c.scoreLabel}
              </p>
              <div className="space-y-3 text-[0.9375rem]">
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">{c.scoreMentor}</span>
                  <span className="font-bold text-foreground">40%</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">{c.scoreJudges}</span>
                  <span className="font-bold text-foreground">60%</span>
                </div>
                <p className="pt-1 text-[0.8125rem] leading-6 text-muted-foreground">{c.scoreNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUCIÓN */}
      <section className="border-t border-border bg-muted/20 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{c.workLabel}</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            {c.workTitle}
          </h2>
          <p className="mb-9 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
            {c.workBody}
          </p>

          <div className="space-y-4">
            {c.contributions.map((x, i) => (
              <div key={x.title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#c2410c]/10 text-[13px] font-bold text-[#c2410c] dark:text-[#e8916b]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1.5 text-[1.0625rem] font-bold">{x.title}</h3>
                  <p className="text-[0.9375rem] leading-7 text-muted-foreground">{x.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LECCIONES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{c.learnLabel}</SectionLabel>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            {c.learnTitle}
          </h2>
          <div className="space-y-6">
            {c.lessons.map((x) => (
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
          <SectionLabel>{c.stackLabel}</SectionLabel>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            {c.stackTitle}
          </h2>
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {c.stack.map(([k, v]) => (
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
            {c.ctaTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[1.0625rem] leading-8 text-muted-foreground">
            {c.ctaBody}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://fintech.benditaia.cl/es/claude-impact-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <IconExternalLink className="size-4" />
              {c.ctaLive}
            </a>
            <a
              href="https://fintech.benditaia.cl/es/claude-impact-lab-kpi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:border-primary/25"
            >
              <IconChartBar className="size-4" />
              {c.ctaReport}
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:border-primary/25"
            >
              <IconArrowLeft className="size-4" />
              {c.back}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
