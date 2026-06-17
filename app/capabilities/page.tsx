'use client'

import { ArrowRight, Layers } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

export default function CapabilitiesPage() {
  const { t } = useI18n()
  const c = t.capabilitiesPage

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
        title={c.title}
        subtitle={c.subtitle}
      />

      {/* Process flow */}
      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-12">{c.processTitle}</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {c.processSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4">
                <div className="rounded-lg border border-themed bg-card-themed px-5 py-4 text-center min-w-[120px]">
                  <span className="text-sm font-semibold text-themed">{step}</span>
                </div>
                {i < c.processSteps.length - 1 && <ArrowRight size={20} className="text-accent-themed shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage-gate */}
      <section className="py-16 lg:py-20 bg-elevated-themed">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-5">{c.stageGateTitle}</h2>
          <p className="text-muted-themed leading-relaxed text-base sm:text-lg">{c.stageGateBody}</p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-10">{c.materialsTitle}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {c.materials.map((m, i) => (
              <span key={i} className="rounded-full bg-card-themed border border-themed px-4 py-2 text-sm font-medium text-themed">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Die capacity */}
      <section className="py-16 lg:py-20 bg-primary-themed">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Layers size={32} className="text-white mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{c.dieTitle}</h2>
          <p className="text-white/85 text-base sm:text-lg">{c.dieBody}</p>
        </div>
      </section>
    </div>
  )
}
