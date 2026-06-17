'use client'

import Link from 'next/link'
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import HeroCarousel from '@/components/HeroCarousel'
import CustomerLogoCard from '@/components/CustomerLogoCard'

const CAP_IMAGES = [
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1764185800646-f75f7e16e465?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
]

export default function Home() {
  const { t } = useI18n()
  const h = t.home

  return (
    <div>
      <HeroCarousel />

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-themed">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-themed mb-3">{h.introTitle}</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-themed">{h.introBody}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 lg:py-20 bg-primary-themed">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-12">{h.statsTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {h.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm text-white/75 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-elevated-themed">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-themed mb-4">{h.capabilitiesTitle}</h2>
            <p className="text-muted-themed text-base sm:text-lg">{h.capabilitiesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {h.capabilities.map((c, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-card-themed border border-themed group hover:shadow-xl transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src={CAP_IMAGES[i % CAP_IMAGES.length]}
                    alt={c.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-themed mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-themed leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/capabilities" className="inline-flex items-center gap-2 text-accent-themed font-semibold hover:gap-3 transition-all">
              {t.common.learnMore} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14 lg:py-20 bg-themed border-y border-themed">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-themed mb-10">{h.certTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {h.certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full border border-themed bg-card-themed px-5 py-3 shadow-sm">
                <ShieldCheck size={18} className="text-accent-themed shrink-0" />
                <span className="text-sm font-semibold text-themed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers / OEM */}
      <section className="py-16 lg:py-24 bg-elevated-themed">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-themed mb-4">{h.customersTitle}</h2>
            <p className="text-muted-themed text-base sm:text-lg">{h.customersSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-themed mb-4">{h.tier1Title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {h.tier1List.map((name, i) => (
                  <CustomerLogoCard key={i} name={name} size="sm" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-themed mb-4">{h.segmentsTitle}</h3>
              <div className="space-y-4">
                {h.segments.map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-accent-themed shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-themed">{s.name}</span>
                      <p className="text-sm text-muted-themed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/customers" className="inline-flex items-center gap-2 text-accent-themed font-semibold hover:gap-3 transition-all">
              {t.common.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-themed">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">{h.ctaTitle}</h2>
          <p className="text-white/80 text-base sm:text-lg mb-8">{h.ctaBody}</p>
          <Link href="/contact" className="inline-block rounded-md bg-accent-themed px-8 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-opacity">
            {h.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}
