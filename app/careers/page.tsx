'use client'

import Link from 'next/link'
import { Sparkles, Briefcase } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

export default function CareersPage() {
  const { t } = useI18n()
  const c = t.careersPage

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1581091870627-3ab1f1f5dbd5?auto=format&fit=crop&w=2000&q=80"
        title={c.title}
        subtitle={c.subtitle}
      />

      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles size={28} className="text-accent-themed mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-5">{c.whyTitle}</h2>
          <p className="text-muted-themed text-base sm:text-lg leading-relaxed">{c.whyBody}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary-themed">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase size={28} className="text-white mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">{c.openRolesTitle}</h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">{c.openRolesBody}</p>
          <Link href="/contact" className="inline-block rounded-md bg-accent-themed px-8 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-opacity">
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  )
}
