"use client";

import Link from "next/link"
import { IconRobot, IconGavel, IconUsersGroup, IconWorld } from "@tabler/icons-react"
import { useLanguage } from "@/context/LanguageContext"
import { SiteHeader } from "@/components/megu/SiteHeader"
import { SiteFooter } from "@/components/megu/SiteFooter"
import { IconArrowLeft, IconCheck, IconClose, IconExternal } from "@/components/megu/icons"
import { buttonClass, textLinkClass } from "@/components/megu/ui"
import {
  CaseBody,
  CaseHero,
  CaseMeta,
  CaseQuote,
  CaseSection,
  CaseStats,
  NumberedList,
} from "@/components/megu/case"

// ─── Copy ─────────────────────────────────────────────────────────────────────

const AGENT_ICONS = [IconRobot, IconGavel, IconUsersGroup, IconWorld]

// Rótulos del layout editorial (1d) que no estaban en COPY.
const LAYOUT = {
  es: {
    eyebrow: "Caso 03 / 04 — Bendita IA × Anthropic · 2026",
    meta: [
      { label: "Rol", value: "Lead Frontend · integración de agentes" },
      { label: "Alcance", value: "Plataforma de dos verticales" },
      { label: "Periodo", value: "Abr — Ago 2026" },
      { label: "Stack", value: "Next 14 · Supabase · Claude API" },
    ],
    sections: ["Problema", "Decisión", "Arquitectura", "Auditoría", "Mi trabajo", "Aprendizajes", "Stack"],
    indexNote: "Las cifras salen del reporte de impacto y de los resultados publicados por el programa.",
  },
  en: {
    eyebrow: "Case 03 / 04 — Bendita IA × Anthropic · 2026",
    meta: [
      { label: "Role", value: "Lead Frontend · agent integration" },
      { label: "Scope", value: "Platform for two verticals" },
      { label: "Period", value: "Apr — Aug 2026" },
      { label: "Stack", value: "Next 14 · Supabase · Claude API" },
    ],
    sections: ["Problem", "Decision", "Architecture", "Audit", "My work", "Lessons", "Stack"],
    indexNote: "Figures come from the impact report and the results published by the programme.",
  },
} as const

const SECTION_IDS = ["problema", "decision", "arquitectura", "auditoria", "trabajo", "aprendizajes", "stack"]

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
    // Suma Fintech (899 / 48 / 1.834) + Longevidad (757 / 52 / 1.443).
    stats: [
      { value: "2", label: "verticales: Fintech y Longevidad" },
      { value: "1.656", label: "postulaciones procesadas" },
      { value: "100", label: "equipos en competencia" },
      { value: "3.277", label: "evaluaciones registradas" },
      { value: "4", label: "agentes Claude en producción" },
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
      "Jueces en doble ciego con agregación robusta, no promedio simple",
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
    scoreJudges: "Fase jueces (doble ciego, agregación robusta)",
    scoreNote: "La ponderación es un parámetro del evento, no una constante del código: se edita desde el panel de administración. En Fintech, con tres jueces por equipo, se usó la mediana; en Longevidad, con dieciséis jueces, una media truncada que descarta el voto más alto y el más bajo.",
    workLabel: "Mi trabajo en el proyecto",
    workTitle: "Qué construí",
    workBody: "Trabajé como Lead Frontend en un equipo de tres, con un backend dedicado y un CAIO definiendo producto. Estas son las piezas de las que fui responsable, a lo largo de 166 commits en cinco meses.",
    contributions: [
      { title: "Leaderboard en vivo y ceremonia de premiación",
        body: "Construí el ranking público sobre Supabase Realtime y la ceremonia con reveal por track y podio animado, proyectada ante 250 personas. Sin recargas, sin latencia visible, y con la lógica de quién queda fuera de competencia por no entregar a tiempo resuelta en el mismo lugar donde se calcula el puntaje." },
      { title: "Portal de evaluadores",
        body: "La interfaz donde veinte mentores y jueces revisaron 48 equipos en dos días: dossier por equipo, formulario de evaluación conectado al asistente, y una vista que le muestra al juez lo que ya había marcado el mentor en la fase anterior." },
      { title: "Motor de puntaje y rúbrica configurable",
        body: "Después del evento cerré los vacíos de scoring que la auditoría dejó al descubierto: mediana de los tres jueces en lugar de promedio, tope real en 100, y ponderación mentor/juez editable por evento desde el panel de administración sin necesidad de un deploy. Uno de esos ajustes cambiaba el primer lugar. Esa base es la que después se extendió a media truncada cuando Longevidad llegó con dieciséis jueces." },
      { title: "Abstracción multi-tenant",
        body: "Junto al equipo, moví la configuración de evento —tracks, reglas, rúbrica, marca, fechas— a una capa de resolución por vertical, y en agosto cerré los lugares donde Bendi y la rúbrica seguían leyendo la vertical original. Eso permitió lanzar Longevidad sobre la misma base de código en lugar de duplicar el proyecto." },
      { title: "Tour guiado por rol y motor de certificados",
        body: "Un recorrido con spotlight diferenciado para participante, mentor y juez, porque en un evento de 48 horas nadie lee documentación. Y, al cierre, el motor de certificados de punta a punta: parametrizable por evento, con verificación pública por QR, botón para agregarlo a LinkedIn y menciones especiales." },
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
    ctaBody: "El programa publicó un reporte de impacto de la edición Fintech y los resultados de Longevidad, con cifras verificadas desde la base de datos de producción. Los números de esta página salen de ahí.",
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
      { value: "2", label: "verticals: Fintech and Longevity" },
      { value: "1,656", label: "applications processed" },
      { value: "100", label: "teams competing" },
      { value: "3,277", label: "evaluations recorded" },
      { value: "4", label: "Claude agents in production" },
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
      "Blind judges with robust aggregation, not a simple mean",
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
    scoreJudges: "Judge phase (double blind, robust aggregation)",
    scoreNote: "The weighting is a parameter of the event, not a constant in the code: it's edited from the admin panel. At Fintech, with three judges per team, it used the median; at Longevity, with sixteen judges, a trimmed mean that drops the highest and lowest vote.",
    workLabel: "My work on the project",
    workTitle: "What I built",
    workBody: "I worked as Lead Frontend on a team of three, alongside a dedicated backend engineer and a CAIO defining product. These are the pieces I owned, across 166 commits over five months.",
    contributions: [
      { title: "Live leaderboard and awards ceremony",
        body: "I built the public ranking on Supabase Realtime and the ceremony with per-track reveal and animated podium, projected to 250 people. No reloads, no visible latency, and with the logic for which teams fall out of competition for missing the deadline resolved in the same place the score is computed." },
      { title: "Evaluator portal",
        body: "The interface where twenty mentors and judges reviewed 48 teams in two days: a per-team dossier, an evaluation form wired to the assistant, and a view that shows the judge what the mentor already marked in the earlier phase." },
      { title: "Scoring engine and configurable rubric",
        body: "After the event I closed the scoring gaps the audit exposed: median of the three judges instead of the mean, a real cap at 100, and mentor/judge weighting editable per event from the admin panel with no deploy. One of those adjustments changed first place. That foundation was later extended to a trimmed mean when Longevity arrived with sixteen judges." },
      { title: "Multi-tenant abstraction",
        body: "With the team, I moved event configuration — tracks, rules, rubric, branding, dates — into a per-vertical resolution layer, and in August closed the places where Bendi and the rubric were still reading the original vertical. That let the programme launch Longevity on the same codebase instead of forking the project." },
      { title: "Role-aware guided tour and certificate engine",
        body: "A spotlight walkthrough differentiated for participant, mentor and judge, because nobody reads documentation during a 48-hour event. And, at the close, the end-to-end certificate engine: per-event parameters, public QR verification, an add-to-LinkedIn button and special mentions." },
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
    ctaBody: "The programme published an impact report for the Fintech edition and the Longevity results, with figures verified against the production database. The numbers on this page come from there.",
    ctaLive: "View the platform",
    ctaReport: "Impact report",
  },
} as const

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ClaudeImpactLabPage() {
  const { lang } = useLanguage()
  const key = lang === "en" ? "en" : "es"
  const c = COPY[key]
  const l = LAYOUT[key]
  const sections = SECTION_IDS.map((id, i) => ({ id, label: l.sections[i] }))

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main id="contenido" className="flex-1">
        <CaseHero eyebrow={l.eyebrow} title="Claude Impact Lab" lead={c.intro}>
          <p className="reveal mt-6 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted" style={{ ["--i" as string]: 3 }}>
            {c.partners}
          </p>
        </CaseHero>

        <CaseMeta items={[...l.meta]} />
        <CaseStats items={[...c.stats]} />

        <CaseBody sections={sections} note={l.indexNote}>
          {/* ── Problema ─────────────────────────────────────────────── */}
          <CaseSection id="problema" first title={c.problemLabel} lead={<p>{c.problemLead}</p>}>
            <NumberedList items={[...c.problems]} />
          </CaseSection>

          <CaseQuote>
            {c.titleA}
            <em className="text-accent">{c.titleB}</em>
          </CaseQuote>

          {/* ── Decisión de diseño ───────────────────────────────────── */}
          <CaseSection id="decision" title={c.designTitle} lead={<p>{c.designBody}</p>} wide>
            <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
              <div className="bg-paper p-6">
                <span className="mono-label mb-4 block">{c.notLabel}</span>
                <ul className="flex flex-col gap-2.5">
                  {c.notDid.map((x) => (
                    <li key={x} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink/75">
                      <IconClose size={16} className="mt-1 shrink-0 text-danger" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper p-6">
                <span className="mono-label mb-4 block !text-accent">{c.didLabel}</span>
                <ul className="flex flex-col gap-2.5">
                  {c.did.map((x) => (
                    <li key={x} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink">
                      <IconCheck size={16} className="mt-1 shrink-0 text-accent" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CaseSection>

          {/* ── Arquitectura: cuatro agentes ─────────────────────────── */}
          <CaseSection id="arquitectura" title={c.archTitle} lead={<p>{c.archBody}</p>} wide>
            <div className="grid gap-px border border-ink bg-ink md:grid-cols-2">
              {c.agents.map((a, i) => {
                const Icon = AGENT_ICONS[i]
                return (
                  <div key={a.name} className="bg-paper p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center border border-rule text-accent">
                        <Icon className="size-5" stroke={1.5} />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold leading-tight text-ink">{a.name}</h3>
                        <p className="mt-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.08em] text-muted">Claude {a.model}</p>
                      </div>
                    </div>
                    <p className="mb-3 text-[14.5px] leading-[1.6] text-ink/80">{a.desc}</p>
                    <p className="border-l-2 border-accent/40 pl-3 text-[13.5px] italic leading-[1.6] text-ink/65">{a.note}</p>
                  </div>
                )
              })}
            </div>
          </CaseSection>

          {/* ── Auditoría y puntaje ──────────────────────────────────── */}
          <CaseSection id="auditoria" title={c.auditTitle} wide>
            <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
              <div className="flex max-w-[70ch] flex-col gap-5 text-[16px] leading-[1.7] text-ink/80 md:text-[17px]">
                <p>{c.auditP1}</p>
                <p>{c.auditP2}</p>
              </div>
              <div className="self-start border border-ink bg-paper-2 p-6">
                <span className="mono-label mb-4 block">{c.scoreLabel}</span>
                <dl className="flex flex-col text-[15px]">
                  <div className="flex items-baseline justify-between gap-3 border-b border-rule pb-3">
                    <dt className="text-ink/75">{c.scoreMentor}</dt>
                    <dd className="font-display text-[28px] leading-none text-ink">40%</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-rule py-3">
                    <dt className="text-ink/75">{c.scoreJudges}</dt>
                    <dd className="font-display text-[28px] leading-none text-ink">60%</dd>
                  </div>
                </dl>
                <p className="pt-4 text-[13px] leading-[1.6] text-muted">{c.scoreNote}</p>
              </div>
            </div>
          </CaseSection>

          {/* ── Mi trabajo ───────────────────────────────────────────── */}
          <CaseSection id="trabajo" title={c.workTitle} lead={<p>{c.workBody}</p>}>
            <ol className="flex max-w-[70ch] flex-col border-t border-ink">
              {c.contributions.map((x, i) => (
                <li key={x.title} className="grid grid-cols-[28px_1fr] gap-3.5 border-b border-rule py-6">
                  <span className="font-mono text-[10px] font-medium leading-[1.9] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="mb-1.5 text-[16px] font-semibold text-ink">{x.title}</h3>
                    <p className="text-[15px] leading-[1.7] text-ink/75">{x.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CaseSection>

          {/* ── Aprendizajes ─────────────────────────────────────────── */}
          <CaseSection id="aprendizajes" title={c.learnTitle}>
            <div className="flex max-w-[70ch] flex-col gap-7">
              {c.lessons.map((x) => (
                <div key={x.t} className="border-l-2 border-accent pl-5">
                  <h3 className="mb-1.5 font-display text-[22px] leading-[1.2] text-ink">{x.t}</h3>
                  <p className="text-[15px] leading-[1.7] text-ink/75">{x.d}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          {/* ── Stack ────────────────────────────────────────────────── */}
          <CaseSection id="stack" title={c.stackTitle} wide>
            <dl className="divide-y divide-rule border border-ink">
              {c.stack.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-4 md:px-6">
                  <dt className="mono-label !text-accent">{k}</dt>
                  <dd className="text-[14.5px] leading-[1.6] text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </CaseSection>

          {/* ── Cierre ───────────────────────────────────────────────── */}
          <div className="mt-12 border-t border-rule pt-10">
            <h2 className="mb-3 font-display text-[28px] leading-[1.1] text-ink md:text-[34px]">{c.ctaTitle}</h2>
            <p className="mb-7 max-w-[62ch] text-[16px] leading-[1.7] text-ink/80">{c.ctaBody}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://fintech.benditaia.cl/es/claude-impact-lab"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("primary")}
              >
                {c.ctaLive}
                <IconExternal size={16} />
              </a>
              <a
                href="https://fintech.benditaia.cl/es/claude-impact-lab-kpi"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("secondary")}
              >
                {c.ctaReport}
                <IconExternal size={16} />
              </a>
              <Link href="/#trabajo" className={textLinkClass("text-[13px]")}>
                <IconArrowLeft size={16} />
                {c.back}
              </Link>
            </div>
          </div>
        </CaseBody>
      </main>

      <SiteFooter
        next={{ title: "Portokali Café", meta: "Next 15 · Supabase · Resend — 2026", href: "https://portokali.cl" }}
      />
    </div>
  )
}
