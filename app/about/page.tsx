'use client'

import { Target, BookOpen, User2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

export default function AboutPage() {
  const { t } = useI18n()
  const a = t.about

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2000&q=80"
        title={a.title}
        subtitle={a.subtitle}
      />

      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={22} className="text-accent-themed" />
              <h2 className="text-xl font-bold text-themed">{a.storyTitle}</h2>
            </div>
            <p className="text-muted-themed leading-relaxed">{a.storyBody}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target size={22} className="text-accent-themed" />
              <h2 className="text-xl font-bold text-themed">{a.missionTitle}</h2>
            </div>
            <p className="text-muted-themed leading-relaxed">{a.missionBody}</p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 lg:py-24 bg-elevated-themed">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-12">{a.milestonesTitle}</h2>
          <div className="relative pl-8 border-l-2 border-themed space-y-8">
            {a.milestones.map((m, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[37px] top-0 h-4 w-4 rounded-full bg-accent-themed border-4 border-elevated-themed" />
                <div className="text-sm font-bold text-accent-themed mb-1">{m.year}</div>
                <p className="text-themed leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-themed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-12">{a.leadershipTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.leadership.map((p, i) => (
              <div key={i} className="rounded-xl border border-themed bg-card-themed p-6 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                  <User2 size={24} className="text-primary-themed" />
                </div>
                <h3 className="font-bold text-themed text-sm">{p.name}</h3>
                <p className="text-xs text-muted-themed mt-1">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
