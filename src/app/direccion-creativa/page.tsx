"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  textReveal,
} from "@/lib/animations";
import { useLanguage } from "@/context/LanguageContext";

const CURIANA_URL = "https://curiana-radio.vercel.app";
const SIMULADOR_URL = "https://curiana-radio.vercel.app/simulador";

// Marcador de imagen. Se reemplaza por <Image> al exportar los assets de Midjourney.
function ImageSlot({
  label,
  aspect = "aspect-square",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} rounded-xl bg-amber-950/20 dark:bg-amber-900/10 border border-amber-800/20 flex flex-col items-center justify-center gap-2 text-center p-4`}
    >
      <span className="text-2xl">🖼️</span>
      <span className="text-xs text-amber-700/70 dark:text-amber-400/50 leading-snug max-w-[180px]">
        {label}
      </span>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-700/40">
      {label}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400 tabular-nums">
        {value}
      </span>
      <span className="text-xs text-muted-foreground leading-snug mt-1">{label}</span>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      {label && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/40">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function DireccionCreativaPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  const [heroRef, heroIn] = useInView({ threshold: 0.1, triggerOnce: true });
  const [curianaRef, curianaIn] = useInView({ threshold: 0.05, triggerOnce: true });
  const [simRef, simIn] = useInView({ threshold: 0.05, triggerOnce: true });
  const [visualRef, visualIn] = useInView({ threshold: 0.05, triggerOnce: true });
  const [ndaRef, ndaIn] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaIn] = useInView({ threshold: 0.1, triggerOnce: true });

  const c = {
    heroBadge: isEs ? "Proyectos culturales con IA" : "Cultural projects with AI",
    heroTitle: isEs
      ? "Dirigir un mundo, y construir la máquina que lo habita"
      : "Directing a world, and building the machine that inhabits it",
    heroSub: isEs
      ? "Trabajo en el cruce entre dirección de arte y sistemas de IA: identidad visual, narrativa y los agentes que la sostienen. Curiana Radio es donde las tres cosas se encuentran."
      : "I work where art direction meets AI systems: visual identity, narrative, and the agents that sustain them. Curiana Radio is where the three meet.",

    curianaLabel: isEs ? "Proyecto insignia" : "Flagship project",
    curianaTitle: "Curiana Radio · 88.8 FM",
    curianaSub: isEs
      ? "Una transmisión cultural desde Abya Yala: newsletter presentado como páginas web inmersivas, con música curada, narrativa experimental y visuales generados con IA."
      : "A cultural broadcast from Abya Yala: a newsletter presented as immersive web pages, with curated music, experimental narrative, and AI-generated visuals.",
    curianaBody: isEs
      ? "No es un portafolio de imágenes: es una publicación con identidad propia, ediciones mensuales y un laboratorio de investigación adentro. Está en línea y se sigue desarrollando."
      : "It is not an image portfolio: it is a publication with its own identity, monthly editions, and a research lab inside it. It is live and still in development.",
    visitSite: isEs ? "Visitar Curiana Radio" : "Visit Curiana Radio",

    simLabel: isEs ? "Laboratorio lingüístico" : "Linguistic laboratory",
    simTitle: isEs ? "Simulador Caquetío" : "Caquetío Simulator",
    simSub: isEs
      ? "Una lengua arahuaca que dejó de hablarse hace cuatro siglos, reconstruida y entregada a una comunidad de agentes para medir si vuelve a converger en una norma común."
      : "An Arawak language that fell silent four centuries ago, reconstructed and handed to a community of agents to measure whether it converges again into a shared norm.",
    simBody1: isEs
      ? "El caquetío sobrevive en topónimos, crónicas coloniales y unas decenas de palabras registradas. El proyecto lo reconstruye parcialmente con el método comparativo de la lingüística histórica —inferir la forma probable comparando el wayuunaiki y el lokono vivos con el taíno documentado— y lo entrega a sesenta personajes del siglo XV, cada uno un agente con rol, edad, red social y manera propia de hablar."
      : "Caquetío survives in place names, colonial chronicles, and a few dozen recorded words. The project partially reconstructs it using the comparative method of historical linguistics — inferring the probable form by comparing living Wayuunaiki and Lokono against documented Taíno — and hands it to sixty 15th-century characters, each an agent with a role, age, social network, and its own way of speaking.",
    simBody2: isEs
      ? "Los agentes conversan día a día. Inventan palabras cuando el mundo lo exige, adoptan las de otros, y un observador mide cada turno: cuánto caquetío hay en el habla, qué formas nacen y mueren, y si las maneras de hablar se acercan entre sí."
      : "The agents converse day by day. They invent words when the world demands it, adopt each other's, and an observer scores every turn: how much Caquetío is in the speech, which forms are born and die, and whether ways of speaking draw closer together.",

    statsTitle: isEs ? "Lo que se midió" : "What was measured",
    stats: [
      { v: "1.262", l: isEs ? "palabras en el lexicón, 75 atestiguadas en crónicas" : "words in the lexicon, 75 attested in chronicles" },
      { v: "60",    l: isEs ? "agentes con rol, edad y red social propia" : "agents with their own role, age, and social network" },
      { v: "1.489", l: isEs ? "respuestas de agentes en 6 simulaciones curadas" : "agent responses across 6 curated simulations" },
      { v: "2,7×",  l: isEs ? "más convergencia que el grupo de control" : "more convergence than the control group" },
    ],

    rigorTitle: isEs ? "Por qué el resultado es defendible" : "Why the result holds up",
    rigorItems: [
      {
        t: isEs ? "Cada palabra lleva su fuente" : "Every word carries its source",
        d: isEs
          ? "De 1.262 formas, 75 están atestiguadas en crónicas (Oviedo, Las Casas, Galeotto Cey), 82 son reconstrucciones declaradas del proyecto y el resto viene de lenguas hermanas, marcado como tal. 441 formas hipotéticas fueron retiradas por no pasar validación."
          : "Of 1,262 forms, 75 are attested in chronicles (Oviedo, Las Casas, Galeotto Cey), 82 are declared project reconstructions, and the rest come from sister languages, marked as such. 441 hypothetical forms were withdrawn for failing validation.",
      },
      {
        t: isEs ? "Un experimento con grupo de control" : "An experiment with a control group",
        d: isEs
          ? "La misma simulación corrida dos veces: una con los mecanismos que favorecen la convergencia, otra con ellos apagados. La evidencia no es que la normal converja, sino la diferencia entre ambas: −17,9% contra −6,6%. Aun sin andamiaje, la comunidad fija cuatro conceptos por su cuenta."
          : "The same simulation run twice: once with the mechanisms that favor convergence, once with them switched off. The evidence is not that the normal run converges, but the gap between the two: −17.9% against −6.6%. Even unscaffolded, the community fixes four concepts on its own.",
      },
      {
        t: isEs ? "El error metodológico está publicado" : "The methodological error is published",
        d: isEs
          ? "La primera métrica convergía sola por acumulación del vocabulario compartido: un artefacto del instrumento, no koineización. Se corrigió, se pasó a una lectura que solo cuenta las formas nacidas dentro de la simulación, y las corridas anteriores quedaron marcadas en la bitácora en vez de borradas."
          : "The first metric converged on its own through accumulation of shared vocabulary: an artifact of the instrument, not koineization. It was corrected, replaced by a reading that counts only forms born inside the simulation, and the earlier runs were flagged in the log rather than deleted.",
      },
    ],
    simCta: isEs ? "Entrar al simulador" : "Enter the simulator",
    simChips: [
      isEs ? "Sistemas multi-agente" : "Multi-agent systems",
      isEs ? "Diseño de experimentos" : "Experiment design",
      isEs ? "Lingüística computacional" : "Computational linguistics",
      "Claude Haiku 4.5",
      isEs ? "Métricas y ablación" : "Metrics and ablation",
    ],

    visualLabel: isEs ? "Dirección de arte" : "Art direction",
    visualTitle: isEs ? "El mundo visual" : "The visual world",
    visualSub: isEs
      ? "La identidad gráfica de Curiana Radio y las líneas de exploración que la alimentan. La curaduría es parte del trabajo: se muestra una selección, no el feed completo."
      : "Curiana Radio's graphic identity and the exploration lines that feed it. Curation is part of the work: a selection is shown, not the full feed.",
    boards: [
      {
        n: "La Curiana",
        d: isEs
          ? "Mundo costero e indígena. Luz natural, paleta terrosa, narrativa de personaje. Punto de origen de toda la identidad."
          : "Coastal and indigenous world. Natural light, earthy palette, character narrative. Origin point of the whole identity.",
        imgs: isEs
          ? ["Retrato · escena costera", "Luz natural", "Entorno familiar", "Paleta terrosa"]
          : ["Portrait · coastal scene", "Natural light", "Familiar setting", "Earthy palette"],
      },
      {
        n: "Spacebound",
        d: isEs
          ? "Figuras sintéticas y arquitectura futurista. Contraste desierto/espacio con tocados dorados y materialidades reflectivas."
          : "Synthetic figures and futuristic architecture. Desert/space contrast with golden headdresses and reflective materials.",
        imgs: isEs
          ? ["Figura · desierto", "Arquitectura futurista", "Retrato · tocado dorado", "Paisaje espacial"]
          : ["Figure · desert", "Futuristic architecture", "Portrait · golden headdress", "Space landscape"],
      },
      {
        n: "Weird Patterns",
        d: isEs
          ? "Textura y referencia folklórica/textil como lenguaje gráfico. El ornamento como estructura narrativa, no como decoración."
          : "Texture and folkloric/textile reference as graphic language. Ornament as narrative structure, not decoration.",
        imgs: isEs
          ? ["Patrón folklórico", "Textura ornamental", "Patrón geométrico", "Textura cultural"]
          : ["Folkloric pattern", "Ornamental texture", "Geometric pattern", "Cultural texture"],
      },
    ],
    toolsTitle: isEs ? "Herramientas" : "Tools",
    tools: [
      "Midjourney V7/V8",
      isEs ? "Consistencia de personaje" : "Character consistency",
      isEs ? "Style lock" : "Style lock",
      "Runway",
      "Kling",
      isEs ? "Postproducción y montaje" : "Post-production and editing",
    ],

    ndaLabel: isEs ? "Trabajo con clientes" : "Client work",
    ndaTitle: isEs ? "Proyectos bajo NDA" : "Projects under NDA",
    ndaBody: isEs
      ? "He desarrollado piezas bajo acuerdo de confidencialidad para clientes institucionales y de banca, incluyendo campañas con múltiples personajes recurrentes y series de contenido con requisitos estrictos de consistencia visual. Las piezas no se muestran; la capacidad queda demostrada en los proyectos abiertos de esta página."
      : "I have developed pieces under confidentiality agreements for institutional and banking clients, including campaigns with multiple recurring characters and content series with strict visual consistency requirements. The pieces are not shown; the capability is demonstrated in the open projects on this page.",

    ctaTitle: isEs ? "¿Tienes un proyecto así?" : "Have a project like this?",
    ctaSub: isEs
      ? "Sistemas con agentes, contenido con identidad sostenida, o las dos cosas a la vez. Los precios y el proceso están publicados."
      : "Agent systems, content with sustained identity, or both at once. Pricing and process are published.",
    ctaServices: isEs ? "Ver servicios y precios" : "See services and pricing",
    ctaTalk: isEs ? "Conversemos" : "Let's talk",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative mt-8 mb-20 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-stone-900/95 to-yellow-950/90 dark:from-amber-950 dark:via-stone-950 dark:to-yellow-950" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroIn ? "visible" : "hidden"}
            className="relative z-10 py-20 px-8 md:px-16 max-w-3xl"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30"
            >
              {c.heroBadge}
            </motion.span>

            <motion.h1
              variants={textReveal}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              {c.heroTitle}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-amber-100/80 leading-relaxed"
            >
              {c.heroSub}
            </motion.p>
          </motion.div>
        </section>

        {/* ── CURIANA RADIO ────────────────────────────────────────────── */}
        <section ref={curianaRef} className="mb-24">
          <motion.div variants={slideUp} initial="hidden" animate={curianaIn ? "visible" : "hidden"}>
            <SectionHeader label={c.curianaLabel} title={c.curianaTitle} subtitle={c.curianaSub} />

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed mb-8">{c.curianaBody}</p>
              <a
                href={CURIANA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold text-sm transition-colors"
              >
                {c.visitSite}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── SIMULADOR ────────────────────────────────────────────────── */}
        <section ref={simRef} className="mb-24">
          <motion.div variants={slideUp} initial="hidden" animate={simIn ? "visible" : "hidden"}>
            <SectionHeader label={c.simLabel} title={c.simTitle} subtitle={c.simSub} />

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 mb-10 text-muted-foreground leading-relaxed">
                <p>{c.simBody1}</p>
                <p>{c.simBody2}</p>
              </div>

              {/* Cifras */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={simIn ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 p-7 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30 mb-10"
              >
                {c.stats.map((s) => (
                  <motion.div key={s.v} variants={staggerItem}>
                    <Stat value={s.v} label={s.l} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Rigor */}
              <h3 className="text-xl font-bold mb-6 text-amber-700 dark:text-amber-400">
                {c.rigorTitle}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={simIn ? "visible" : "hidden"}
                className="space-y-5 mb-10"
              >
                {c.rigorItems.map((item, i) => (
                  <motion.div
                    key={item.t}
                    variants={staggerItem}
                    className="flex gap-5 p-6 rounded-xl border border-border bg-card"
                  >
                    <span className="text-sm font-bold text-amber-600/40 dark:text-amber-400/30 tabular-nums flex-shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">{item.t}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-2 mb-8">
                {c.simChips.map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </div>

              <a
                href={SIMULADOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold text-sm transition-colors group"
              >
                {c.simCta}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── MUNDO VISUAL ─────────────────────────────────────────────── */}
        <section ref={visualRef} className="mb-24">
          <motion.div variants={slideUp} initial="hidden" animate={visualIn ? "visible" : "hidden"}>
            <SectionHeader label={c.visualLabel} title={c.visualTitle} subtitle={c.visualSub} />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={visualIn ? "visible" : "hidden"}
              className="space-y-14 max-w-5xl mx-auto mb-12"
            >
              {c.boards.map((b, i) => (
                <motion.div key={b.n} variants={staggerItem}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-60 shrink-0">
                      <h3 className="text-lg font-bold mb-2 text-amber-700 dark:text-amber-400">
                        {b.n}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {b.imgs.map((label) => (
                        <ImageSlot
                          key={label}
                          label={label}
                          aspect={i === 2 ? "aspect-square" : "aspect-[3/4]"}
                        />
                      ))}
                    </div>
                  </div>
                  {i < c.boards.length - 1 && (
                    <div className="border-t border-amber-200/30 dark:border-amber-800/20 mt-14" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                {c.toolsTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {c.tools.map((tool) => (
                  <Chip key={tool} label={tool} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── NDA ──────────────────────────────────────────────────────── */}
        <section ref={ndaRef} className="mb-24">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={ndaIn ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <SectionHeader label={c.ndaLabel} title={c.ndaTitle} />
            <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30 p-8 flex items-start gap-4">
              <span className="text-2xl mt-0.5">🔒</span>
              <p className="text-muted-foreground leading-relaxed">{c.ndaBody}</p>
            </div>
          </motion.div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section ref={ctaRef} className="mb-16">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={ctaIn ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center rounded-2xl bg-gradient-to-br from-amber-950/80 via-stone-900/90 to-yellow-950/80 dark:from-amber-950 dark:via-stone-950 dark:to-yellow-950 p-12 border border-amber-800/30"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.ctaTitle}</h2>
            <p className="text-amber-100/70 mb-8 leading-relaxed">{c.ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold text-sm transition-colors"
              >
                {c.ctaServices}
              </Link>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
              >
                {c.ctaTalk}
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
