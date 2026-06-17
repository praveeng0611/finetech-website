'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Sun, Moon, Palette, Globe } from 'lucide-react'
import { useI18n, LANGUAGES, Lang } from '@/lib/i18n'
import { useTheme, COLOR_THEMES, ColorTheme } from '@/lib/themes'

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { color, mode, setColor, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems: { href: string; label: string }[] = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/capabilities', label: t.nav.capabilities },
    { href: '/infrastructure', label: t.nav.infrastructure },
    { href: '/quality', label: t.nav.quality },
    { href: '/customers', label: t.nav.customers },
    { href: '/blog', label: t.nav.blog },
    { href: '/careers', label: t.nav.careers },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-card-themed shadow-md' : 'bg-card-themed border-b border-themed'
      }`}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/images/brand/icon.svg" alt="Finetech" className="h-9 w-9 lg:h-10 lg:w-10" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-base lg:text-lg font-bold tracking-tight text-themed">FINETECH</span>
              <span className="text-[10px] lg:text-xs tracking-widest text-muted-themed">ENTERPRISES</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-themed hover:text-accent-themed transition-colors rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => { setLangOpen(!langOpen); setThemeOpen(false) }}
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-themed hover:text-accent-themed rounded-md border border-themed"
                aria-label="Change language"
              >
                <Globe size={16} />
                <span>{LANGUAGES.find((l) => l.id === lang)?.flag}</span>
                <ChevronDown size={14} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg border border-themed bg-card-themed shadow-lg overflow-hidden">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => { setLang(l.id as Lang); setLangOpen(false) }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-sm text-left hover:bg-elevated-themed ${
                        lang === l.id ? 'font-semibold text-accent-themed' : 'text-themed'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme switcher */}
            <div className="relative">
              <button
                onClick={() => { setThemeOpen(!themeOpen); setLangOpen(false) }}
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-themed hover:text-accent-themed rounded-md border border-themed"
                aria-label="Change theme"
              >
                <Palette size={16} />
                <ChevronDown size={14} />
              </button>
              {themeOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-themed bg-card-themed shadow-lg overflow-hidden p-2">
                  <div className="flex gap-2 px-1 pb-2">
                    {COLOR_THEMES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setColor(c.id as ColorTheme)}
                        title={c.label}
                        className={`h-7 w-7 rounded-full border-2 ${color === c.id ? 'border-accent-themed' : 'border-transparent'}`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className="flex w-full items-center gap-2 px-2 py-2 text-sm rounded-md hover:bg-elevated-themed text-themed"
                  >
                    {mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                    {mode === 'light' ? 'Dark mode' : 'Light mode'}
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-1 rounded-md bg-accent-themed px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              {t.nav.getQuote}
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-themed"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-themed bg-card-themed">
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-themed border-b border-themed last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-accent-themed px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t.nav.getQuote}
            </Link>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLang(l.id as Lang)}
                    className={`px-2 py-1 text-sm rounded-md border border-themed ${lang === l.id ? 'bg-accent-themed text-white border-transparent' : 'text-themed'}`}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-md border border-themed text-themed"
              >
                {mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
