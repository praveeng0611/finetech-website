'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '@/messages/en'
import de from '@/messages/de'
import ko from '@/messages/ko'
import fr from '@/messages/fr'
import type { Messages } from '@/messages/en'

export type Lang = 'en' | 'de' | 'ko' | 'fr'

export const LANGUAGES: { id: Lang; label: string; flag: string }[] = [
  { id: 'en', label: 'English', flag: '🇬🇧' },
  { id: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { id: 'ko', label: '한국어', flag: '🇰🇷' },
  { id: 'fr', label: 'Français', flag: '🇫🇷' },
]

const ALL: Record<Lang, Messages> = { en, de, ko, fr }

interface I18nCtx {
  t: Messages
  lang: Lang
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nCtx>({
  t: en,
  lang: 'en',
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('finetech_lang') as Lang | null
    if (stored && ALL[stored]) setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('finetech_lang', l)
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }

  const t = ALL[lang] || en

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
