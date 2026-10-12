'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone, Linkedin, Facebook, Youtube } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-themed text-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/brand/icon.svg" alt="Finetech" className="h-9 w-9" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">FINETECH</span>
                <span className="text-[10px] tracking-widest text-white/70">ENTERPRISES</span>
              </div>
            </div>
            <p className="text-sm text-white/70">{t.meta.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/85 hover:text-white">{t.nav.about}</Link></li>
              <li><Link href="/capabilities" className="text-white/85 hover:text-white">{t.nav.capabilities}</Link></li>
              <li><Link href="/infrastructure" className="text-white/85 hover:text-white">{t.nav.infrastructure}</Link></li>
              <li><Link href="/quality" className="text-white/85 hover:text-white">{t.nav.quality}</Link></li>
              <li><Link href="/customers" className="text-white/85 hover:text-white">{t.nav.customers}</Link></li>
              <li><Link href="/blog" className="text-white/85 hover:text-white">{t.nav.blog}</Link></li>
              <li><Link href="/careers" className="text-white/85 hover:text-white">{t.nav.careers}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">{t.footer.addressTitle}</h4>
            <div className="flex items-start gap-2 text-sm text-white/85">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">{t.footer.getInTouch}</h4>
            <div className="space-y-2 text-sm text-white/85">
              <Link href="/contact" className="flex items-center gap-2 hover:text-white">
                <Mail size={16} /> info@finetech.gnosisolabs.com
              </Link>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +91 44 0000 0000
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Linkedin size={16} /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook size={16} /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Youtube size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <span>© {year} {t.footer.domainNote}. {t.footer.rights}</span>
          <span>Chennai, Tamil Nadu 600058</span>
        </div>
      </div>
    </footer>
  )
}
