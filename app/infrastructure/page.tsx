'use client'

import { CheckCircle2, GraduationCap } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

export default function InfrastructurePage() {
  const { t } = useI18n()
  const i18nfra = t.infrastructurePage

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=80"
        title={i18nfra.title}
        subtitle={i18nfra.subtitle}
      />

      {/* Tool room */}
      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-6 text-center">{i18nfra.toolRoomTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {i18nfra.toolRoomItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-lg border border-themed bg-card-themed px-4 py-3">
                <CheckCircle2 size={18} className="text-accent-themed shrink-0" />
                <span className="text-sm font-medium text-themed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Molding units */}
      <section className="py-16 lg:py-20 bg-elevated-themed">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-5">{i18nfra.moldingTitle}</h2>
          <p className="text-muted-themed text-base sm:text-lg leading-relaxed">{i18nfra.moldingBody}</p>
        </div>
      </section>

      {/* Testing equipment */}
      <section className="py-16 lg:py-20 bg-elevated-themed">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-themed mb-10 text-center">{i18nfra.testingTitle}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {i18nfra.testingItems.map((item, idx) => (
              <span key={idx} className="rounded-full bg-card-themed border border-themed px-4 py-2 text-sm font-medium text-themed">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Training room */}
      <section className="py-16 lg:py-20 bg-primary-themed">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap size={32} className="text-white mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{i18nfra.trainingTitle}</h2>
          <p className="text-white/85 text-base sm:text-lg">{i18nfra.trainingBody}</p>
        </div>
      </section>
    </div>
  )
}
