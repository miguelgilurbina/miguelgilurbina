// Contenido del CV (ES/EN). La fuente de verdad es el portafolio: cada cifra
// aquí es la misma que muestran la home y los casos de estudio. Si cambia una,
// cambia en los dos lados y se regeneran los PDF (ver src/app/cv/[lang]).

export type CvLang = "es" | "en";

type Entry = {
  period: string;
  title: string;
  org: string;
  note?: string;
  bullets: string[];
  stack?: string;
};

type Project = {
  title: string;
  url?: string;
  urlLabel?: string;
  role: string;
  period: string;
  body: string;
  stack: string;
};

export type CvContent = {
  meta: { title: string; description: string };
  name: string;
  role: string;
  location: string;
  availability: string;
  labels: {
    profile: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    back: string;
    download: string;
    other: string;
  };
  profile: string;
  stats: { value: string; label: string }[];
  experience: Entry[];
  projects: Project[];
  skills: { group: string; items: string }[];
  education: { period: string; title: string; org: string; note?: string }[];
};

const LINKS = {
  email: "miguel.gil.9210@gmail.com",
  web: "miguelgilurbina.com",
  linkedin: "linkedin.com/in/miguelgilurbina",
  github: "github.com/miguelgilurbina",
};
export const CV_LINKS = LINKS;

export const CV: Record<CvLang, CvContent> = {
  es: {
    meta: {
      title: "CV — Miguel Gil Urbina",
      description: "Currículum de Miguel Gil Urbina: Full Stack Developer con foco en sistemas agénticos. Santiago, Chile.",
    },
    name: "Miguel Eduardo Gil Urbina",
    role: "Full Stack Developer · AI Implementation",
    location: "Santiago, Chile",
    availability: "Disponible · remoto o híbrido",
    labels: {
      profile: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Stack y competencias",
      education: "Formación",
      back: "Volver al portafolio",
      download: "Descargar PDF",
      other: "English version",
    },
    profile:
      "Full stack con foco en sistemas agénticos: diseño, construyo y pongo en producción plataformas donde el modelo hace parte del trabajo y la persona mantiene la decisión. Antes de programar pasé seis años en gestión comercial y canales en el sector tecnológico; por eso construyo productos que resuelven problemas de negocio, no solo problemas técnicos.",
    stats: [
      { value: "9+", label: "Años entre negocio y tecnología" },
      { value: "4", label: "Proyectos con usuarios reales" },
      { value: "3.277", label: "Evaluaciones operadas con agentes Claude" },
      { value: "619", label: "Commits propios en Cargo Electric" },
    ],
    experience: [
      {
        period: "Sep 2025 — hoy",
        title: "Full Stack Developer & Product Owner",
        org: "Cargo Electric Blue SpA",
        note: "Logística de última milla con flota eléctrica",
        bullets: [
          "Back office en Next.js 16 que reemplazó planillas y el Excel de nómina por una sola plataforma de operación: autor de 619 de los 632 commits de la web app y de 102 PRs mergeados.",
          "Motor de bonos de conductores: cálculo por camión-día, tarifario con vigencia y conciliación mensual contra la planilla real.",
          "Analítica con Recharts (resumen diario, dashboard operacional con drill-down y PDF ejecutivo) y facturación con tarifarios exportada a Excel en el formato del cliente.",
          "Modelo de datos en Firebase/Firestore con autorización por rol en todas las Server Actions, tests en Vitest y ESLint llevado de 87 errores a 0.",
          "Contribuciones a la app móvil de conductores (Ionic 8, Angular 19 y Capacitor) para el registro de rutas en terreno.",
        ],
        stack: "Next.js 16 · React 19 · TypeScript · Firebase · Recharts · Vitest · Ionic 8 · Angular 19",
      },
      {
        period: "Abr — Ago 2026",
        title: "Lead Frontend & AI Agent Developer",
        org: "Bendita IA · Claude Impact Lab Chile",
        note: "Programa de Anthropic en Chile, con Anthropic como Technical Partner",
        bullets: [
          "Plataforma que operó las dos verticales del programa, Fintech y Longevidad: 1.656 postulaciones, 100 equipos en competencia y 3.277 evaluaciones registradas.",
          "Portal de evaluadores integrado con agentes Claude (Haiku y Sonnet 4.5) que pre-evalúan 10 sub-checks por equipo con evidencia; la decisión final queda en el evaluador humano.",
          "Leaderboard en vivo con Supabase Realtime y ceremonias de premiación ante 250 y ~200 asistentes.",
          "Motor de rúbrica configurable sin deploy, abstracción multi-tenant por vertical y motor de certificados con verificación pública.",
          "166 commits en un repo con ~970 casos de test: Vitest, Playwright E2E y suites de guardrails para los agentes.",
        ],
        stack: "Next.js 14 · TypeScript · Supabase · Claude API · Anthropic SDK · Vitest · Playwright",
      },
      {
        period: "Nov 2024 — Ago 2025",
        title: "AI Research Contributor",
        org: "Outlier",
        bullets: [
          "Evaluación directa de modelos GPT-4, Claude y Gemini para casos de uso empresariales.",
          "Metodologías de benchmarking y estándares de calidad para prompt engineering, en colaboración con equipos internacionales.",
        ],
      },
      {
        period: "May — Dic 2024",
        title: "Full Stack Developer & QA",
        org: "Vemex Digital",
        bullets: [
          "Aplicaciones web con React y Next.js bajo estándares de calidad empresarial.",
          "Estrategias de testing y optimización de performance.",
        ],
      },
      {
        period: "2017 — 2023",
        title: "Gestión comercial y canales de distribución",
        org: "Hikvision · Dahua · SSTT · Orama · Wetland",
        bullets: [
          "Seis años gestionando redes de subdistribuidores a nivel nacional en el sector tecnológico.",
          "Licitaciones públicas (Mercado Público) y proyectos de implementación con múltiples stakeholders.",
        ],
      },
    ],
    projects: [
      {
        title: "Curiana Radio",
        url: "https://curiana-radio.vercel.app",
        urlLabel: "curiana-radio.vercel.app",
        role: "Proyecto propio · investigación en curso",
        period: "Nov 2025 — hoy",
        body: "Publicación cultural y laboratorio de simulación: 60 agentes LLM hablan caquetío, una lengua arahuaca reconstruida con método comparativo. Experimento con grupo de control (2,7× más convergencia que el control), 269 tests del motor y 9 invariantes ejecutables.",
        stack: "Next.js 16 · Python · Claude Haiku 4.5 · Supabase · Vercel Blob",
      },
      {
        title: "Portokali Café",
        url: "https://portokali.cl",
        urlLabel: "portokali.cl",
        role: "Desarrollador principal · cliente, con Poweredia",
        period: "Mar — Sep 2026",
        body: "Café de especialidad en Vitacura: de WordPress a Next.js 15 con MVP en siete días. Formularios en Supabase con aviso por Resend, integración con Toteat y Justo, y una auditoría que detectó un formulario que perdía postulaciones hacía cinco meses.",
        stack: "Next.js 15 · TypeScript · Supabase · Resend · GitHub Actions",
      },
      {
        title: "Chatbot médico multiagente",
        role: "Proyecto final · Diplomado IA Generativa, U. de Chile",
        period: "Ene 2026",
        body: "Arquitectura multiagente con LangGraph, integración de APIs externas, estado en PostgreSQL y RAG sobre documentación médica, desplegado con Docker y LangServe.",
        stack: "LangChain · LangGraph · RAG · PostgreSQL · Docker",
      },
    ],
    skills: [
      { group: "IA y agentes", items: "Claude API · Anthropic SDK · tool use · evaluación asistida · LangChain · LangGraph · RAG · Claude Code" },
      { group: "Frontend", items: "Next.js 14–16 · React 18/19 · TypeScript · Tailwind CSS · Angular 19 · Ionic 8" },
      { group: "Datos y backend", items: "Supabase / PostgreSQL · Firebase / Firestore · Node.js · Python · REST APIs" },
      { group: "Calidad y entrega", items: "Vitest · Playwright · GitHub Actions · Vercel · Docker · Git" },
      { group: "Producto", items: "Product ownership · Scrum · gestión de stakeholders · licitaciones públicas" },
      { group: "Idiomas", items: "Español nativo · inglés profesional" },
    ],
    education: [
      { period: "Oct 2025 — Ene 2026", title: "Diplomado en IA Generativa en Organizaciones", org: "Universidad de Chile, FEN" },
      { period: "Jun — Jul 2025", title: "Prompt Engineering e IA Generativa", org: "The Prompt Academy" },
      { period: "Oct 2022 — Jul 2024", title: "Certified Web Developer", org: "Digital House Coding School" },
      { period: "Jul 2023", title: "Certificado Profesional de Scrum Master", org: "Certiprof" },
      { period: "2009 — 2014", title: "Ingeniero Ambiental", org: "Universidad de Falcón, Venezuela", note: "Mención honorífica en el trabajo de grado." },
    ],
  },

  en: {
    meta: {
      title: "CV — Miguel Gil Urbina",
      description: "Résumé of Miguel Gil Urbina: Full Stack Developer focused on agentic systems. Santiago, Chile.",
    },
    name: "Miguel Eduardo Gil Urbina",
    role: "Full Stack Developer · AI Implementation",
    location: "Santiago, Chile",
    availability: "Available · remote or hybrid",
    labels: {
      profile: "Profile",
      experience: "Experience",
      projects: "Projects",
      skills: "Stack and skills",
      education: "Education",
      back: "Back to portfolio",
      download: "Download PDF",
      other: "Versión en español",
    },
    profile:
      "Full stack developer focused on agentic systems: I design, build and ship platforms where the model does part of the work and the human keeps the decision. Before programming I spent six years in commercial and channel management in the tech sector, which is why I build products that solve business problems, not just technical ones.",
    stats: [
      { value: "9+", label: "Years between business and engineering" },
      { value: "4", label: "Projects with real users" },
      { value: "3,277", label: "Evaluations run with Claude agents" },
      { value: "619", label: "Of my commits at Cargo Electric" },
    ],
    experience: [
      {
        period: "Sep 2025 — today",
        title: "Full Stack Developer & Product Owner",
        org: "Cargo Electric Blue SpA",
        note: "Last-mile logistics with an electric fleet",
        bullets: [
          "Next.js 16 back office that replaced spreadsheets and the payroll workbook with a single operations platform: author of 619 of the web app's 632 commits and 102 merged PRs.",
          "Driver bonus engine: per truck-day calculation, rate cards with effective dates, and monthly reconciliation against the real payroll sheet.",
          "Recharts analytics (daily summary, operations dashboard with drill-down and an executive PDF) and rate-card invoicing exported to Excel in the client's format.",
          "Firebase/Firestore data model with role-based authorization on every Server Action, Vitest tests, and ESLint taken from 87 errors to 0.",
          "Contributions to the drivers' mobile app (Ionic 8, Angular 19 and Capacitor) for route logging in the field.",
        ],
        stack: "Next.js 16 · React 19 · TypeScript · Firebase · Recharts · Vitest · Ionic 8 · Angular 19",
      },
      {
        period: "Apr — Aug 2026",
        title: "Lead Frontend & AI Agent Developer",
        org: "Bendita IA · Claude Impact Lab Chile",
        note: "Anthropic's programme in Chile, with Anthropic as Technical Partner",
        bullets: [
          "Platform that ran both verticals of the programme, Fintech and Longevity: 1,656 applications, 100 competing teams and 3,277 evaluations recorded.",
          "Evaluator portal integrated with Claude agents (Haiku and Sonnet 4.5) that pre-score 10 sub-checks per team with evidence; the final call stays with the human evaluator.",
          "Live leaderboard on Supabase Realtime and awards ceremonies in front of 250 and ~200 attendees.",
          "Rubric engine configurable without a deploy, per-vertical multi-tenant abstraction, and a certificate engine with public verification.",
          "166 commits in a repo with ~970 test cases: Vitest, Playwright E2E and guardrail suites for the agents.",
        ],
        stack: "Next.js 14 · TypeScript · Supabase · Claude API · Anthropic SDK · Vitest · Playwright",
      },
      {
        period: "Nov 2024 — Aug 2025",
        title: "AI Research Contributor",
        org: "Outlier",
        bullets: [
          "Direct evaluation of GPT-4, Claude and Gemini models for enterprise use cases.",
          "Benchmarking methodologies and quality standards for prompt engineering, with international teams.",
        ],
      },
      {
        period: "May — Dec 2024",
        title: "Full Stack Developer & QA",
        org: "Vemex Digital",
        bullets: [
          "Web applications with React and Next.js to enterprise quality standards.",
          "Testing strategy and performance optimisation.",
        ],
      },
      {
        period: "2017 — 2023",
        title: "Commercial & channel management",
        org: "Hikvision · Dahua · SSTT · Orama · Wetland",
        bullets: [
          "Six years managing national sub-distributor networks in the tech sector.",
          "Public tenders (Mercado Público) and implementation projects with multiple stakeholders.",
        ],
      },
    ],
    projects: [
      {
        title: "Curiana Radio",
        url: "https://curiana-radio.vercel.app",
        urlLabel: "curiana-radio.vercel.app",
        role: "Personal project · ongoing research",
        period: "Nov 2025 — today",
        body: "Cultural publication and simulation lab: 60 LLM agents speak Caquetío, an Arawakan language reconstructed through the comparative method. Controlled experiment (2.7× more convergence than the control), 269 engine tests and 9 executable invariants.",
        stack: "Next.js 16 · Python · Claude Haiku 4.5 · Supabase · Vercel Blob",
      },
      {
        title: "Portokali Café",
        url: "https://portokali.cl",
        urlLabel: "portokali.cl",
        role: "Lead developer · client, with Poweredia",
        period: "Mar — Sep 2026",
        body: "Specialty café in Vitacura: from WordPress to Next.js 15 with an MVP in seven days. Forms stored in Supabase with Resend notifications, Toteat and Justo integrations, and an audit that caught a form silently losing job applications for five months.",
        stack: "Next.js 15 · TypeScript · Supabase · Resend · GitHub Actions",
      },
      {
        title: "Multi-agent medical chatbot",
        role: "Capstone · Generative AI diploma, U. de Chile",
        period: "Jan 2026",
        body: "Multi-agent architecture with LangGraph, external API integration, PostgreSQL state and RAG over medical documentation, deployed with Docker and LangServe.",
        stack: "LangChain · LangGraph · RAG · PostgreSQL · Docker",
      },
    ],
    skills: [
      { group: "AI and agents", items: "Claude API · Anthropic SDK · tool use · AI-assisted evaluation · LangChain · LangGraph · RAG · Claude Code" },
      { group: "Frontend", items: "Next.js 14–16 · React 18/19 · TypeScript · Tailwind CSS · Angular 19 · Ionic 8" },
      { group: "Data and backend", items: "Supabase / PostgreSQL · Firebase / Firestore · Node.js · Python · REST APIs" },
      { group: "Quality and delivery", items: "Vitest · Playwright · GitHub Actions · Vercel · Docker · Git" },
      { group: "Product", items: "Product ownership · Scrum · stakeholder management · public tenders" },
      { group: "Languages", items: "Spanish (native) · English (professional)" },
    ],
    education: [
      { period: "Oct 2025 — Jan 2026", title: "Diploma in Generative AI in Organizations", org: "Universidad de Chile, FEN" },
      { period: "Jun — Jul 2025", title: "Prompt Engineering and Generative AI", org: "The Prompt Academy" },
      { period: "Oct 2022 — Jul 2024", title: "Certified Web Developer", org: "Digital House Coding School" },
      { period: "Jul 2023", title: "Scrum Master Professional Certificate", org: "Certiprof" },
      { period: "2009 — 2014", title: "Environmental Engineer", org: "Universidad de Falcón, Venezuela", note: "Honourable mention for the thesis." },
    ],
  },
};
