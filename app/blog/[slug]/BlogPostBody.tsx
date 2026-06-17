'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { BlogPost } from '@/lib/posts'

export default function BlogPostBody({ post }: { post: BlogPost }) {
  const { t } = useI18n()

  return (
    <article>
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-[#0c1117]">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-8 pb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">{post.category}</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">{post.title}</h1>
            <p className="text-sm text-white/75 mt-3">{post.date} · {post.minutesRead} {t.common.minutesRead}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-5">
          {post.body.map((para, i) => (
            <p key={i} className="text-base sm:text-lg leading-relaxed text-themed">
              {para}
            </p>
          ))}
        </div>

        <Link href="/blog" className="mt-12 inline-flex items-center gap-2 text-accent-themed font-semibold hover:gap-3 transition-all">
          <ArrowLeft size={18} /> {t.common.viewAll}
        </Link>
      </div>
    </article>
  )
}
