'use client'

import { Target, BookOpen, Linkedin, Factory, Cog, Award, Users, Wrench, CalendarDays } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

function getMilestoneIcon(text: string) {
  if (/certified|IATF|SQ Mark|ISO|ZED/i.test(text)) return Award
  if (/machine|injection|VMC|EDM|wire-cut|double-column/i.test(text)) return Cog
  if (/plant|unit|sq\.ft|facility|relocation|layout/i.test(text)) return Factory
  if (/customer/i.test(text)) return Users
  if (/CMM|inspection|instrument/i.test(text)) return Wrench
  return CalendarDays
}

function getInitials(name: string) {
  const letters = name
    .split(' ')
    .map((w) => w.replace(/[^A-Za-z]/g, ''))
    .filter(Boolean)
    .map((w) => w[0])
  return letters.slice(0, 2).join('').toUpperCase()
}

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

      {/* Milestones — manufacturing journey timeline */}
      <section className="py-16 lg:py-24 bg-elevated-themed overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-3">{a.milestonesTitle}</h2>
          <p className="text-center text-muted-themed text-sm sm:text-base mb-12 max-w-2xl mx-auto">
            From a 100 sq.ft EDM job-work unit to a three-unit manufacturing group — our journey, year by year.
          </p>

          <div className="relative">
            {/* Center line (desktop) */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-themed/30 -translate-x-1/2" />
            {/* Left line (mobile) */}
            <div className="sm:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-accent-themed/30" />

            <div className="space-y-6 sm:space-y-0">
              {a.milestones.map((m, i) => {
                const Icon = getMilestoneIcon(m.text)
                const isLeft = i % 2 === 0
                return (
                  <div key={i} className="relative sm:py-5">
                    {/* Mobile layout */}
                    <div className="sm:hidden flex gap-4 pl-0">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-themed text-white shadow-md">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 rounded-xl border border-themed bg-card-themed p-4 shadow-sm">
                        <div className="text-sm font-bold text-accent-themed mb-1">{m.year}</div>
                        <p className="text-themed text-sm leading-relaxed">{m.text}</p>
                      </div>
                    </div>

                    {/* Desktop alternating layout */}
                    <div className="hidden sm:flex sm:items-center">
                      <div className={`sm:w-[46%] ${isLeft ? 'sm:pr-8' : 'sm:order-3 sm:pl-8'}`}>
                        <div
                          className={`rounded-xl border border-themed bg-card-themed p-5 shadow-sm hover:shadow-md transition-shadow ${
                            isLeft ? 'text-right' : 'text-left'
                          }`}
                        >
                          <div className="text-sm font-bold text-accent-themed mb-1">{m.year}</div>
                          <p className="text-themed text-sm leading-relaxed">{m.text}</p>
                        </div>
                      </div>
                      <div className="sm:order-2 sm:w-[8%] flex justify-center">
                        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent-themed text-white border-4 border-elevated-themed shadow-md">
                          <Icon size={18} />
                        </div>
                      </div>
                      <div className={`sm:w-[46%] ${isLeft ? 'sm:order-3' : 'sm:pr-8'}`} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-themed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-12">{a.leadershipTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.leadership.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-themed bg-card-themed p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-xl font-bold text-primary-themed">
                  {getInitials(p.name)}
                </div>
                <h3 className="font-bold text-themed text-sm">{p.name}</h3>
                <p className="text-xs text-muted-themed mt-1 mb-3">{p.title}</p>
                <a
                  href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(
                    `${p.name} Finetech Enterprises`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on LinkedIn`}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary-soft text-primary-themed hover:bg-accent-themed hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
