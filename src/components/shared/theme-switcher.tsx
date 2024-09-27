"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { CircleIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

export function ThemeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <CircleIcon className={cn("size-4.5", className)} />

  if (resolvedTheme === "dark") {
    return (
      <SunIcon
        className={cn(
          "size-4.5 transition-colors duration-300 hover:text-primary",
          className
        )}
        onClick={() => setTheme("light")}
      />
    )
  }

  if (resolvedTheme === "light") {
    return (
      <MoonIcon
        className={cn(
          "size-4.5 transition-colors duration-300 hover:text-primary",
          className
        )}
        onClick={() => setTheme("dark")}
      />
    )
  }
}
