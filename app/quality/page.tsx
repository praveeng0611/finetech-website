'use client'

import { ShieldCheck, Target } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

export default function QualityPage() {
  const { t } = useI18n()
  const q = t.qualityPage

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80"
        title={q.title}
        subtitle={q.subtitle}
      />

      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {q.certifications.map((c, i) => (
              <div key={i} className="rounded-xl border border-themed bg-card-themed p-6">
                <ShieldCheck size={24} className="text-accent-themed mb-3" />
                <h3 className="font-bold text-themed mb-2">{c.name}</h3>
                <p className="text-sm text-muted-themed leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary-themed">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Target size={32} className="text-white mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{q.goalsTitle}</h2>
          <div className="space-y-4">
            {q.goals.map((g, i) => (
              <p key={i} className="text-white/85 text-base sm:text-lg">{g}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
