"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" >
        <div className="h-4 w-4" />
        <span className="sr-only">Toggle theme </span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        if (theme === 'light') {
          setTheme('dark')
        } else if (theme === 'dark') {
          setTheme('system')
        } else {
          setTheme('light')
        }
      }}
      className="hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {theme === 'light' && <Sun className="h-4 w-4" />}
      {theme === 'dark' && <Moon className="h-4 w-4" />}
      {theme === 'system' && <Monitor className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}