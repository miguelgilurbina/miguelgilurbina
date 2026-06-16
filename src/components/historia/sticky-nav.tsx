"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { label: "Historia", href: "#historia" },
  { label: "La plataforma", href: "#plataforma" },
  { label: "Administración", href: "#administracion" },
  { label: "Arquitectura", href: "#arquitectura" },
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
        {sections.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={cn(
              "rounded-full px-3.5 py-1 text-[12px] font-medium transition-colors",
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
