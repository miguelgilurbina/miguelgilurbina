"use client"

import { useState, useEffect } from "react"
import { IconArrowLeft } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

const sections = [
  { label: "La app", href: "#plataforma" },
  { label: "Admin", href: "#administracion" },
  { label: "Historia", href: "#historia" },
  { label: "Stack", href: "#arquitectura" },
]

export function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)

      const current = sections
        .map(({ href }) => {
          const el = document.querySelector(href)
          return el ? { href, top: el.getBoundingClientRect().top } : null
        })
        .filter(Boolean)
        .filter((s) => s!.top <= 120)
        .at(-1)

      setActive(current?.href ?? "")
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0f172a]/80 px-2 py-1.5 shadow-xl backdrop-blur-md">
        <a
          href="/"
          className="mr-1 flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-medium text-slate-400 transition-colors hover:text-white"
        >
          <IconArrowLeft className="size-3" />
          <span className="hidden sm:inline">Portafolio</span>
        </a>
        <div className="h-3.5 w-px bg-white/10" />
        {sections.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={cn(
              "rounded-full px-3 py-1 text-[12px] font-medium transition-colors sm:px-3.5",
              active === href
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:text-white"
            )}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
