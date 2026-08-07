"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  textReveal,
} from "@/lib/animations";
import { useLanguage } from "@/context/LanguageContext";

// ── Placeholder image component — replace with <Image> once assets are ready ──
function ImageSlot({
  label,
  aspect = "aspect-square",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} rounded-xl bg-amber-950/20 dark:bg-amber-900/10 border border-amber-800/20 flex flex-col items-center justify-center gap-2 text-center p-4`}
    >
      <span className="text-2xl">🖼️</span>
      <span className="text-xs text-amber-700/70 dark:text-amber-400/50 leading-snug max-w-[180px]">
        {label}
      </span>
    </div>
  );
}

// ── Tool chip ──────────────────────────────────────────────────────────────────
function ToolChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-700/40">
      {label}
    </span>
  );
}

// ── Section header ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function DireccionCreativaPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  const copy = {
    hero: {
      badge: isEs ? "Dirección Creativa & Producción Audiovisual" : "Creative Direction & Audiovisual Production",
      title: isEs
        ? "Mundos visuales consistentes, construidos con IA"
        : "Consistent visual worlds, built with AI",
      subtitle: isEs
        ? "Diseño identidades visuales con Midjourney, Runway y Kling — de la idea a la pieza terminada, con criterio curatorial en cada etapa."
        : "I design visual identities with Midjourney, Runway, and Kling — from concept to finished piece, with curatorial judgment at every stage.",
    },
    curiana: {
      label: isEs ? "Proyecto Ancla" : "Anchor Project",
      title: "Curiana Radio",
      subtitle: isEs
        ? "Identidad editorial de marca con estética afro-caribeña-futurista — no solo imágenes, sino un universo visual coherente con personaje, tipografía y paleta propios."
        : "Editorial brand identity with an Afro-Caribbean-futurist aesthetic — not just images, but a coherent visual universe with its own character, typography, and palette.",
      what: isEs
        ? "¿Qué es Curiana Radio? Una marca editorial ficticia que funciona como campo de pruebas para dirección de arte completa: diseño de personaje recurrente, portadas de álbum/revista, composición tipográfica y narrativa visual sostenida en el tiempo."
        : "What is Curiana Radio? A fictional editorial brand that serves as a test bed for full art direction: recurring character design, album/magazine covers, typographic composition, and visual narrative sustained over time.",
      chips: [
        "Midjourney V7/V8",
        isEs ? "Consistencia de personaje" : "Character consistency",
        isEs ? "Prompting de estilo" : "Style prompting",
        isEs ? "Diseño editorial" : "Editorial design",
      ],
    },
    moodboards: {
      label: isEs ? "Research Visual" : "Visual Research",
      title: isEs ? "Exploraciones & Moodboards" : "Explorations & Moodboards",
      subtitle: isEs
        ? "Tres líneas de investigación visual — cada una con criterio de dirección de arte, no solo volumen de outputs."
        : "Three visual research lines — each with art direction judgment, not just output volume.",
      boards: [
        {
          name: "La Curiana",
          description: isEs
            ? "Mundo costero e indígena. Luz natural, paleta terrosa, narrativa de personaje en entornos familiares. Punto de origen de toda la identidad de marca."
            : "Coastal and indigenous world. Natural light, earthy palette, character narrative in familiar environments. Origin point of the entire brand identity.",
          images: [
            isEs ? "Retrato La Curiana · escena costera" : "La Curiana portrait · coastal scene",
            isEs ? "La Curiana · luz natural" : "La Curiana · natural light",
            isEs ? "La Curiana · entorno familiar" : "La Curiana · familiar setting",
            isEs ? "La Curiana · paleta terrosa" : "La Curiana · earthy palette",
          ],
        },
        {
          name: "Spacebound",
          description: isEs
            ? "Figuras sintéticas, arquitectura futurista, ciencia ficción. Contraste de paleta desierto/espacio con tocados dorados y materialidades reflectivas."
            : "Synthetic figures, futuristic architecture, science fiction. Desert/space palette contrast with golden headdresses and reflective materials.",
          images: [
            isEs ? "Figura spacebound · desierto" : "Spacebound figure · desert",
            isEs ? "Arquitectura futurista" : "Futuristic architecture",
            isEs ? "Retrato sci-fi · tocado dorado" : "Sci-fi portrait · golden headdress",
            isEs ? "Paisaje espacial" : "Space landscape",
          ],
        },
        {
          name: "Weird Patterns",
          description: isEs
            ? "Textura, patrón y referencia folklórica/textil como lenguaje gráfico. El ornamento como estructura narrativa, no como decoración."
            : "Texture, pattern, and folkloric/textile reference as graphic language. Ornament as narrative structure, not decoration.",
          images: [
            isEs ? "Patrón folklórico · textil" : "Folkloric pattern · textile",
            isEs ? "Textura ornamental" : "Ornamental texture",
            isEs ? "Patrón geométrico" : "Geometric pattern",
            isEs ? "Textura cultural" : "Cultural texture",
          ],
        },
      ],
    },
    nda: {
      label: isEs ? "Proyectos por Encargo" : "Commissioned Projects",
      title: isEs ? "Trabajo con Clientes" : "Client Work",
      subtitle: isEs
        ? "He desarrollado piezas bajo NDA para clientes institucionales y de banca, incluyendo campañas con múltiples personajes recurrentes y series de contenido con estrictos requisitos de consistencia visual. Las piezas no se muestran por acuerdo de confidencialidad, pero la habilidad está demostrada en los proyectos abiertos de este portfolio."
        : "I have developed pieces under NDA for institutional and banking clients, including campaigns with multiple recurring characters and content series with strict visual consistency requirements. The pieces are not shown due to confidentiality agreements, but the capability is demonstrated in the open projects in this portfolio.",
      skills: [
        isEs ? "Character consistency" : "Character consistency",
        isEs ? "Style lock multi-escena" : "Multi-scene style lock",
        isEs ? "Series de contenido" : "Content series",
        isEs ? "Brief institucional" : "Institutional brief",
      ],
    },
    process: {
      label: isEs ? "Forma de Trabajo" : "How I Work",
      title: isEs ? "Proceso & Herramientas" : "Process & Tools",
      steps: [
        {
          icon: "💡",
          title: isEs ? "Ideación & Moodboarding" : "Ideation & Moodboarding",
          desc: isEs
            ? "Definición de paleta, referencias visuales y narrativa de personaje antes de generar una sola imagen."
            : "Defining palette, visual references, and character narrative before generating a single image.",
          tool: "Midjourney",
        },
        {
          icon: "🎨",
          title: isEs ? "Generación & Consistencia" : "Generation & Consistency",
          desc: isEs
            ? "Prompting avanzado con referencias de estilo, character seeds y técnicas de lock para mantener identidad entre piezas."
            : "Advanced prompting with style references, character seeds, and lock techniques to maintain identity across pieces.",
          tool: isEs ? "Midjourney V7/V8 · Prompting avanzado" : "Midjourney V7/V8 · Advanced prompting",
        },
        {
          icon: "🎬",
          title: isEs ? "Animación & Video" : "Animation & Video",
          desc: isEs
            ? "Motion a partir de estáticos: loops cortos, transiciones de escena y piezas audiovisuales con coherencia de estilo."
            : "Motion from stills: short loops, scene transitions, and audiovisual pieces with style coherence.",
          tool: "Runway · Kling",
        },
        {
          icon: "✂️",
          title: isEs ? "Postproducción & Entrega" : "Post-production & Delivery",
          desc: isEs
            ? "Montaje final, ajuste de color, composición tipográfica y exportación lista para uso editorial o digital."
            : "Final cut, color grading, typographic composition, and export ready for editorial or digital use.",
          tool: isEs ? "Edición & Composición" : "Editing & Composition",
        },
      ],
    },
    cta: {
      title: isEs ? "¿Tienes un proyecto visual?" : "Have a visual project?",
      subtitle: isEs
        ? "Trabajo con marcas, creativos y equipos que necesitan identidad visual consistente con IA. Cuéntame qué estás construyendo."
        : "I work with brands, creatives, and teams who need consistent AI-powered visual identity. Tell me what you're building.",
      email: isEs ? "Escribir por Email" : "Send an Email",
      whatsapp: "WhatsApp",
    },
  };

  // ── Hero ────────────────────────────────────────────────────────────────────
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [curianaRef, curianaInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [moodRef, moodInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [ndaRef, ndaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-8">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative mt-8 mb-20 overflow-hidden rounded-2xl">
          {/* Background gradient — amber/gold palette */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-stone-900/95 to-yellow-950/90 dark:from-amber-950 dark:via-stone-950 dark:to-yellow-950" />
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 py-20 px-8 md:px-16">
            <motion.div
              ref={heroRef}
              variants={staggerContainer}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="max-w-3xl"
            >
              <motion.span
                variants={staggerItem}
                className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30"
              >
                {copy.hero.badge}
              </motion.span>

              <motion.h1
                variants={textReveal}
                className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              >
                {copy.hero.title}
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-lg md:text-xl text-amber-100/80 max-w-2xl leading-relaxed"
              >
                {copy.hero.subtitle}
              </motion.p>

              {/* Hero image grid — replace with real Midjourney exports */}
              <motion.div
                variants={staggerItem}
                className="mt-10 grid grid-cols-3 gap-3 max-w-md"
              >
                {[
                  isEs ? "Retrato desierto · paleta dorada" : "Desert portrait · golden palette",
                  isEs ? "Figura tribal · tocado" : "Tribal figure · headdress",
                  isEs ? "Spacebound · azul/dorado" : "Spacebound · blue/gold",
                ].map((label) => (
                  <ImageSlot key={label} label={label} aspect="aspect-[3/4]" />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CURIANA RADIO ─────────────────────────────────────────────────── */}
        <section ref={curianaRef} className="mb-24">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={curianaInView ? "visible" : "hidden"}
          >
            <SectionHeader
              label={copy.curiana.label}
              title={copy.curiana.title}
              subtitle={copy.curiana.subtitle}
            />

            <div className="max-w-4xl mx-auto">
              {/* What it is */}
              <div className="mb-8 p-6 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30">
                <p className="text-muted-foreground leading-relaxed">{copy.curiana.what}</p>
              </div>

              {/* Image grid — 6 slots for Curiana Radio covers */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={curianaInView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              >
                {[
                  "Curiana Radio · portada 1",
                  "Curiana Radio · portada 2",
                  "Curiana Radio · portada 3",
                  "Curiana Radio · portada 4",
                  "Curiana Radio · portada 5",
                  "Curiana Radio · portada 6",
                ].map((label) => (
                  <motion.div key={label} variants={staggerItem}>
                    <ImageSlot label={label} aspect="aspect-square" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Video placeholder */}
              <div className="mb-8 rounded-xl bg-amber-950/20 dark:bg-amber-900/10 border border-amber-800/20 border-dashed p-10 flex flex-col items-center gap-3 text-center">
                <span className="text-3xl">🎬</span>
                <p className="text-sm text-muted-foreground">
                  {isEs
                    ? "Video / motion de Curiana Radio — agregar aquí (mp4, autoplay muted, loop, <5MB)"
                    : "Curiana Radio video / motion — add here (mp4, autoplay muted, loop, <5MB)"}
                </p>
                <p className="text-xs text-amber-700/50 dark:text-amber-500/40">
                  {isEs
                    ? 'Ejemplo: <video autoPlay muted loop playsInline className="w-full rounded-xl" src="/curiana-radio-reel.mp4" />'
                    : 'Example: <video autoPlay muted loop playsInline className="w-full rounded-xl" src="/curiana-radio-reel.mp4" />'}
                </p>
              </div>

              {/* Tool chips */}
              <div className="flex flex-wrap gap-2">
                {copy.curiana.chips.map((chip) => (
                  <ToolChip key={chip} label={chip} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── MOODBOARDS ────────────────────────────────────────────────────── */}
        <section ref={moodRef} className="mb-24">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={moodInView ? "visible" : "hidden"}
          >
            <SectionHeader
              label={copy.moodboards.label}
              title={copy.moodboards.title}
              subtitle={copy.moodboards.subtitle}
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={moodInView ? "visible" : "hidden"}
              className="space-y-16 max-w-5xl mx-auto"
            >
              {copy.moodboards.boards.map((board, i) => (
                <motion.div key={board.name} variants={staggerItem}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="md:w-64 shrink-0">
                      <h3 className="text-xl font-bold mb-2 text-amber-700 dark:text-amber-400">
                        {board.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {board.description}
                      </p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {board.images.map((label) => (
                        <ImageSlot
                          key={label}
                          label={label}
                          aspect={i === 2 ? "aspect-square" : "aspect-[3/4]"}
                        />
                      ))}
                    </div>
                  </div>
                  {i < copy.moodboards.boards.length - 1 && (
                    <div className="border-t border-amber-200/30 dark:border-amber-800/20 mt-6" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── NDA / CLIENT WORK ─────────────────────────────────────────────── */}
        <section ref={ndaRef} className="mb-24">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={ndaInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <SectionHeader
              label={copy.nda.label}
              title={copy.nda.title}
            />

            <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30 p-8">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-2xl mt-0.5">🔒</span>
                <p className="text-muted-foreground leading-relaxed">{copy.nda.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {copy.nda.skills.map((skill) => (
                  <ToolChip key={skill} label={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────────────────── */}
        <section ref={processRef} className="mb-24">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            <SectionHeader
              label={copy.process.label}
              title={copy.process.title}
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {copy.process.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={staggerItem}
                  className="relative bg-card border border-border rounded-xl p-6 hover:border-amber-400/40 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                  <div className="inline-block px-2 py-1 rounded-md text-xs bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium">
                    {step.tool}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section ref={ctaRef} className="mb-16">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center rounded-2xl bg-gradient-to-br from-amber-950/80 via-stone-900/90 to-yellow-950/80 dark:from-amber-950 dark:via-stone-950 dark:to-yellow-950 p-12 border border-amber-800/30"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.cta.title}
            </h2>
            <p className="text-amber-100/70 mb-8 leading-relaxed">{copy.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:miguel.gil.9210@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold text-sm transition-colors duration-200"
              >
                ✉️ {copy.cta.email}
              </Link>
              <Link
                href="https://wa.me/56999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors duration-200"
              >
                💬 {copy.cta.whatsapp}
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
