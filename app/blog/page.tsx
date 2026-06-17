'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'
import { posts } from '@/lib/posts'

export default function BlogPage() {
  const { t } = useI18n()
  const b = t.blogPage

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000&q=80"
        title={b.title}
        subtitle={b.subtitle}
      />

      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-muted-themed">More insights coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl overflow-hidden bg-card-themed border border-themed group hover:shadow-xl transition-shadow"
                >
                  <div className="h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-themed">{p.category}</span>
                    <h3 className="text-base font-bold text-themed mt-2 mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-muted-themed line-clamp-3">{p.excerpt}</p>
                    <p className="text-xs text-muted-themed mt-3">{p.date} · {p.minutesRead} {t.common.minutesRead}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
