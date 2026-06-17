'use client'

import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-themed mb-8">{c.oemNote}</h2>
          <div className="space-y-4">
            {c.oemMix
              .slice()
              .sort((a, b) => b.pct - a.pct)
              .map((o, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-themed">{o.name}</span>
                    <span className="text-muted-themed">{o.pct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-elevated-themed overflow-hidden">
                    <div className="h-full rounded-full bg-accent-themed" style={{ width: `${o.pct}%` }} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-elevated-themed">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-8">{c.tier1Note}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {h.tier1List.map((name, i) => (
              <span key={i} className="rounded-md bg-card-themed border border-themed px-5 py-2.5 text-sm font-medium text-themed">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
