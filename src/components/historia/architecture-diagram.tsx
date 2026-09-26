import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandFirebase,
  IconCloud,
  IconFileSpreadsheet,
  IconFileTypePdf,
  IconChartBar,
  IconRoute,
  IconReceipt,
  IconSettings,
  IconCoin,
} from "@tabler/icons-react"

type StackItem = {
  label: string
  sub?: string
  icon?: React.ElementType
  accent?: boolean
}

type Layer = {
  label: string
  items: StackItem[]
  cols?: string
}

const layers: Layer[] = [
  {
    label: "Frontend",
    cols: "grid-cols-2 sm:grid-cols-4",
    items: [
      { icon: IconBrandNextjs,    label: "Next.js 16",     sub: "App Router" },
      { icon: IconBrandReact,     label: "React 19",       sub: "Server + Client" },
      { icon: IconBrandTypescript,label: "TypeScript",      sub: "strict mode" },
      { icon: IconChartBar,       label: "shadcn/ui + Tailwind v4" },
    ],
  },
  {
    label: "Módulos de la app",
    cols: "grid-cols-2 sm:grid-cols-5",
    items: [
      { icon: IconChartBar,  label: "Analítica",      sub: "KPIs · heatmap · tendencias", accent: true },
      { icon: IconRoute,     label: "Rutas",          sub: "CRUD · filtros · estados",    accent: true },
      { icon: IconReceipt,   label: "Facturación",    sub: "Tarifarios · Excel",          accent: true },
      { icon: IconCoin,      label: "Bonos",          sub: "Conductores · conciliación",  accent: true },
      { icon: IconSettings,  label: "Administración", sub: "Flota · locales · usuarios",  accent: true },
    ],
  },
  {
    label: "Backend & datos",
    cols: "grid-cols-1 sm:grid-cols-3",
    items: [
      { icon: IconBrandFirebase, label: "Firebase Auth",    sub: "roles admin · board · client" },
      { icon: IconBrandFirebase, label: "Firestore",        sub: "base de datos en tiempo real" },
      { icon: IconCloud,         label: "Vercel",           sub: "deploy + hosting" },
    ],
  },
  {
    label: "Exportaciones",
    cols: "grid-cols-1 sm:grid-cols-3",
    items: [
      { icon: IconFileSpreadsheet, label: "ExcelJS",  sub: "facturación y bonos" },
      { icon: IconFileTypePdf,     label: "jsPDF",    sub: "reportes ejecutivos" },
      { icon: IconChartBar,        label: "Recharts", sub: "gráficos interactivos" },
    ],
  },
]

function StackChip({ icon: Icon, label, sub, accent }: StackItem) {
  return (
    <div
      className={`flex items-start gap-2.5 border p-3.5 ${
        accent ? "border-ink bg-paper text-ink" : "border-rule bg-paper-2 text-ink"
      }`}
    >
      {Icon && (
        <Icon
          className={`mt-0.5 size-4 shrink-0 ${accent ? "text-accent" : "text-muted"}`}
          stroke={1.5}
        />
      )}
      <div>
        <p className="text-[13px] font-semibold leading-tight">{label}</p>
        {sub && <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.06em] text-muted">{sub}</p>}
      </div>
    </div>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="space-y-8">
      {layers.map((layer) => (
        <div key={layer.label}>
          <p className="mb-3 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
            {layer.label}
          </p>
          <div className={`grid gap-2.5 ${layer.cols ?? "grid-cols-2 sm:grid-cols-4"}`}>
            {layer.items.map((item) => (
              <StackChip key={item.label} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
