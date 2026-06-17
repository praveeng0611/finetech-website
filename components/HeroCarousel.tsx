'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const SLIDE_IMAGES = [
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2400&q=80',
]

export default function HeroCarousel() {
  const { t } = useI18n()
  const slides = t.home.heroSlides
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [slides.length])

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#0c1117]">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === index ? 'active' : ''}`}>
          <img
            src={SLIDE_IMAGES[i % SLIDE_IMAGES.length]}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-8xl w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {i === index && (
                  <>
                    <p className="animate-fade-up text-sm sm:text-base font-semibold tracking-wider text-orange-300 uppercase mb-4" style={{ animationDelay: '0.1s' }}>
                      {slide.kicker}
                    </p>
                    <h1 className="animate-fade-up text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6" style={{ animationDelay: '0.25s' }}>
                      {slide.title}
                    </h1>
                    <p className="animate-fade-up text-base sm:text-lg text-white/85 max-w-2xl mb-8" style={{ animationDelay: '0.4s' }}>
                      {slide.subtitle}
                    </p>
                    <div className="animate-fade-up flex flex-wrap gap-3" style={{ animationDelay: '0.55s' }}>
                      <Link href="/contact" className="rounded-md bg-orange-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-orange-700 transition-colors">
                        {t.home.ctaButton}
                      </Link>
                      <Link href="/capabilities" className="rounded-md border border-white/40 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-colors">
                        {t.nav.capabilities}
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-orange-500' : 'w-2 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
