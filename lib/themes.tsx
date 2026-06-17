'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ColorTheme = 'industrial-blue' | 'graphite' | 'forge-orange'
export type DarkMode = 'light' | 'dark'

interface ThemeCtx {
  color: ColorTheme
  mode: DarkMode
  setColor: (c: ColorTheme) => void
  setMode: (m: DarkMode) => void
}

const ThemeContext = createContext<ThemeCtx>({
  color: 'industrial-blue',
  mode: 'light',
  setColor: () => {},
  setMode: () => {},
})

export const COLOR_THEMES: { id: ColorTheme; label: string; hex: string }[] = [
  { id: 'industrial-blue', label: 'Industrial Blue', hex: '#163358' },
  { id: 'graphite', label: 'Graphite', hex: '#2B2F36' },
  { id: 'forge-orange', label: 'Forge Orange', hex: '#C24A1E' },
]

function applyTheme(color: ColorTheme, mode: DarkMode) {
  const root = document.documentElement
  const colors = {
    'industrial-blue': { p: '#163358', pl: '#eef2f7', pd: '#0E2440', ps: '#d6dfeb', accent: '#E8541F' },
    graphite: { p: '#2B2F36', pl: '#eceef0', pd: '#16181C', ps: '#d4d8dd', accent: '#E8541F' },
    'forge-orange': { p: '#C24A1E', pl: '#fdeee6', pd: '#8C3414', ps: '#f7d9c8', accent: '#163358' },
  }[color]

  root.style.setProperty('--primary', colors.p)
  root.style.setProperty('--primary-light', colors.pl)
  root.style.setProperty('--primary-dark', colors.pd)
  root.style.setProperty('--primary-soft', colors.ps)
  root.style.setProperty('--accent', colors.accent)

  if (mode === 'dark') {
    root.classList.add('dark')
    root.style.setProperty('--bg', '#0c1117')
    root.style.setProperty('--bg-card', '#161c25')
    root.style.setProperty('--bg-elevated', '#1d2532')
    root.style.setProperty('--text', '#f1f4f8')
    root.style.setProperty('--text-muted', '#9aa7b8')
    root.style.setProperty('--border', '#2b3544')
  } else {
    root.classList.remove('dark')
    root.style.setProperty('--bg', '#ffffff')
    root.style.setProperty('--bg-card', '#ffffff')
    root.style.setProperty('--bg-elevated', '#f6f8fa')
    root.style.setProperty('--text', '#10243F')
    root.style.setProperty('--text-muted', '#5B6B7C')
    root.style.setProperty('--border', '#e2e8f0')
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColorState] = useState<ColorTheme>('industrial-blue')
  const [mode, setModeState] = useState<DarkMode>('light')

  useEffect(() => {
    const c = (localStorage.getItem('finetech_color') as ColorTheme) || 'industrial-blue'
    const m = (localStorage.getItem('finetech_mode') as DarkMode) || 'light'
    setColorState(c)
    setModeState(m)
    applyTheme(c, m)
  }, [])

  const setColor = (c: ColorTheme) => {
    setColorState(c)
    localStorage.setItem('finetech_color', c)
    applyTheme(c, mode)
  }

  const setMode = (m: DarkMode) => {
    setModeState(m)
    localStorage.setItem('finetech_mode', m)
    applyTheme(color, m)
  }

  return (
    <ThemeContext.Provider value={{ color, mode, setColor, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
