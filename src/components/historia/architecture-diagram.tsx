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
    cols: "grid-cols-2 sm:grid-cols-4",
    items: [
      { icon: IconChartBar,  label: "Analítica",      sub: "KPIs · heatmap · tendencias", accent: true },
      { icon: IconRoute,     label: "Rutas",          sub: "CRUD · filtros · estados",    accent: true },
      { icon: IconReceipt,   label: "Facturación",    sub: "Proformas · billing",         accent: true },
      { icon: IconSettings,  label: "Administración", sub: "Flota · conductores",         accent: true },
    ],
  },
  {
    label: "Backend & datos",
    cols: "grid-cols-1 sm:grid-cols-3",
    items: [
      { icon: IconBrandFirebase, label: "Firebase Auth",    sub: "autenticación + roles" },
      { icon: IconBrandFirebase, label: "Firestore",        sub: "base de datos en tiempo real" },
      { icon: IconCloud,         label: "Vercel",           sub: "deploy + hosting" },
    ],
  },
  {
    label: "Exportaciones",
    cols: "grid-cols-1 sm:grid-cols-3",
    items: [
      { icon: IconFileSpreadsheet, label: "ExcelJS",  sub: "proformas y rutas" },
      { icon: IconFileTypePdf,     label: "jsPDF",    sub: "reportes ejecutivos" },
      { icon: IconChartBar,        label: "Recharts", sub: "gráficos interactivos" },
    ],
  },
]

function StackChip({ icon: Icon, label, sub, accent }: StackItem) {
  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border p-3.5 ${
        accent
          ? "border-blue-500/30 bg-blue-600/10 text-blue-300"
          : "border-border bg-card text-foreground"
      }`}
    >
      {Icon && (
        <Icon
          className={`mt-0.5 size-4 shrink-0 ${accent ? "text-blue-400" : "text-muted-foreground"}`}
          stroke={1.75}
        />
      )}
      <div>
        <p className="text-[13px] font-semibold leading-tight">{label}</p>
        {sub && <p className="mt-0.5 text-[11px] text-muted-foreground">{sub}</p>}
      </div>
    </div>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="space-y-8">
      {layers.map((layer) => (
        <div key={layer.label}>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
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
