'use client'

import { getCustomerLogo } from '@/lib/customers'

export default function CustomerLogoCard({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' }) {
  const c = getCustomerLogo(name)
  const boxClass = size === 'sm' ? 'h-20 sm:h-24' : 'h-24 sm:h-28'

  return (
    <a
      href={c.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`Visit ${name}'s website`}
      className={`group flex ${boxClass} w-full items-center justify-center rounded-lg bg-white border border-themed p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5`}
    >
      {c.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={c.logo}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-center text-sm sm:text-base font-bold tracking-wide text-gray-800">
          {name}
        </span>
      )}
    </a>
  )
}
