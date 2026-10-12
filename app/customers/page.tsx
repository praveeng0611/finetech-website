'use client'

import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'
import CustomerLogoCard from '@/components/CustomerLogoCard'

export default function CustomersPage() {
  const { t } = useI18n()
  const c = t.customersPage
  const h = t.home

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80"
        title={c.title}
        subtitle={c.subtitle}
      />

      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-themed mb-8 text-center">{c.oemNote}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {c.oemMix.map((o, i) => (
              <CustomerLogoCard key={i} name={o.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-elevated-themed">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-8">{c.tier1Note}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {h.tier1List.map((name, i) => (
              <CustomerLogoCard key={i} name={name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
