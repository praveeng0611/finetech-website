'use client'

import { ReactNode } from 'react'
import { I18nProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/themes'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
