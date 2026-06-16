import {
  IconDatabase,
  IconCloud,
  IconFileSpreadsheet,
  IconUsersGroup,
  IconChartBar,
  IconRoute,
  IconReceipt,
  IconSettings,
  IconShieldLock,
  IconFileTypePdf,
  IconTable,
  IconArrowDown,
  type Icon as TablerIcon,
} from "@tabler/icons-react"

// ─── primitives ──────────────────────────────────────────────────────────────

function LayerLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 inline-block text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
      {children}
    </span>
  )
}

function Chip({
  icon: Icon,
  label,
  sub,
  accent,
}: {
  icon?: TablerIcon
  label: string
  sub?: string
  accent?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium ${
        accent
          ? "border-blue-500/40 bg-blue-600/15 text-blue-300"
          : "border-border bg-card text-foreground"
      }`}
    >
      {Icon && <Icon className="size-4 shrink-0 opacity-70" stroke={1.75} />}
      <span>
        {label}
        {sub && <span className="ml-1 text-[11px] font-normal text-muted-foreground">{sub}</span>}
      </span>
    </div>
  )
}

function Arrow() {
  return (
    <div className="flex justify-center py-1 text-muted-foreground/40">
      <IconArrowDown className="size-5" stroke={1.5} />
    </div>
  )
}

function Box({
  title,
  subtitle,
  children,
  dark,
  highlight,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  dark?: boolean
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        dark
          ? "border-slate-700 bg-[#0f172a]/80 text-white"
          : highlight
            ? "border-primary/30 bg-primary/5"
            : "border-border bg-card"
      }`}
    >
      <p
        className={`mb-0.5 text-[11px] font-semibold tracking-[0.1em] uppercase ${
          dark ? "text-slate-400" : highlight ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {title}
      </p>
      {subtitle && (
        <p className={`mb-4 text-xs ${dark ? "text-slate-500" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

function CollectionRow({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex items-baseline gap-2 py-1">
      <span className="shrink-0 font-mono text-[11px] font-semibold text-blue-400">{name}</span>
      <span className="text-[11px] text-slate-400">{description}</span>
    </div>
  )
}

// ─── main component ───────────────────────────────────────────────────────────

export function ArchitectureDiagram() {
  return (
    <div className="w-full space-y-0 font-sans">

      {/* 1 · USUARIOS */}
      <div>
        <LayerLabel>Usuarios</LayerLabel>
        <div className="flex flex-wrap gap-2">
          <Chip icon={IconShieldLock} label="Admin" sub="acceso total" accent />
          <Chip icon={IconChartBar}   label="Ejecutivo" sub="analytics + billing" />
          <Chip icon={IconChartBar}   label="Board" sub="analytics solo" />
          <Chip icon={IconUsersGroup} label="Viewer" sub="solo lectura" />
        </div>
      </div>

      <Arrow />

      {/* 2 · VERCEL / NEXT.JS */}
      <Box
        title="Vercel · Next.js 16 App Router"
        subtitle="React 19 · TypeScript · Tailwind CSS v4 · Firebase Auth"
        dark
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
            <IconChartBar className="mb-2 size-5 text-blue-400" stroke={1.75} />
            <p className="text-[12px] font-semibold text-white">Analítica</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
              Resumen diario · KPIs operacionales · Tendencias · Reporte mensual
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
            <IconRoute className="mb-2 size-5 text-emerald-400" stroke={1.75} />
            <p className="text-[12px] font-semibold text-white">Rutas</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
              CRUD de rutas diarias · filtros por camión y conductor · estados operativos
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
            <IconReceipt className="mb-2 size-5 text-yellow-400" stroke={1.75} />
            <p className="text-[12px] font-semibold text-white">Facturación</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
              Proformas · pricing SMU · aprobación · Excel · analytics de billing
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
            <IconSettings className="mb-2 size-5 text-slate-400" stroke={1.75} />
            <p className="text-[12px] font-semibold text-white">Administración</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
              Locales · camiones · usuarios · herramienta de migración
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-700 pt-3">
          <span className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-400">
            Server Actions (Firebase Admin SDK)
          </span>
          <span className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-400">
            Server + Client Components
          </span>
          <span className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-400">
            Firebase Auth (sesión por cookies)
          </span>
          <span className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-400">
            Roles: 4 niveles de acceso
          </span>
        </div>
      </Box>

      <Arrow />

      {/* 3 · CAPA DE DATOS */}
      <div className="grid gap-4 md:grid-cols-3">

        {/* Firestore */}
        <div className="md:col-span-2">
          <Box
            title="Firebase Firestore"
            subtitle="Base de datos operacional en tiempo real"
            dark
          >
            <div className="divide-y divide-slate-800">
              <CollectionRow name="routes"         description="Rutas diarias — estado, montos, camión, conductor (colección activa)" />
              <CollectionRow name="locales"         description="154 tiendas SMU con código y nombre" />
              <CollectionRow name="camiones"        description="14 unidades BYD, estado operativo y documentación" />
              <CollectionRow name="usuarios"        description="Conductores y admins con roles y estado activo/inactivo" />
              <CollectionRow name="proformas"       description="Proformas generadas con estado de aprobación" />
              <CollectionRow name="pricing_tables"  description="Historial de tablas de precios cargo×turno+IVA" />
              <CollectionRow name="clients"         description="Clientes (actualmente SMU)" />
            </div>
          </Box>
        </div>

        {/* Columna derecha: datos estáticos + exportaciones */}
        <div className="flex flex-col gap-4">
          <Box title="Datos Estáticos" subtitle="Reportes mensuales" highlight>
            <div className="space-y-1.5 text-[12px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <IconTable className="size-3.5 shrink-0 text-primary" stroke={1.75} />
                <span>CSV fuente (en <code className="text-[11px]">docs/</code>)</span>
              </div>
              <div className="pl-5 text-[11px] text-muted-foreground/60">↓ <code>npm run generate-data</code></div>
              <div className="flex items-center gap-2">
                <IconCloud className="size-3.5 shrink-0 text-primary" stroke={1.75} />
                <span><code className="text-[11px]">public/data/*.json</code></span>
              </div>
              <div className="pl-5 text-[11px] text-muted-foreground/60">CDN · caché en memoria</div>
            </div>
          </Box>

          <Box title="Exportaciones" subtitle="Generadas en el cliente">
            <div className="space-y-2 text-[12px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <IconFileSpreadsheet className="size-3.5 shrink-0 text-emerald-600" stroke={1.75} />
                <span>Excel de proformas <span className="text-[11px]">(ExcelJS)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <IconFileTypePdf className="size-3.5 shrink-0 text-red-500" stroke={1.75} />
                <span>PDF ejecutivo analytics <span className="text-[11px]">(jsPDF)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <IconFileSpreadsheet className="size-3.5 shrink-0 text-blue-500" stroke={1.75} />
                <span>Excel rutas <span className="text-[11px]">(SheetJS)</span></span>
              </div>
            </div>
          </Box>
        </div>

      </div>

      {/* Nota de stack */}
      <div className="mt-4 rounded-lg border border-dashed border-border px-4 py-3 text-[12px] text-muted-foreground">
        <span className="font-semibold text-foreground">Stack resumido: </span>
        Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Firebase Auth + Firestore · Recharts · TanStack Table · ExcelJS · jsPDF · dnd-kit · Zod · Vercel
      </div>

    </div>
  )
}
