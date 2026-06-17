'use client'

import { useState, FormEvent } from 'react'
import { MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import PageHero from '@/components/PageHero'

export default function ContactPage() {
  const { t } = useI18n()
  const c = t.contactPage
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setForm({ name: '', company: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHero
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
        title={c.title}
        subtitle={c.subtitle}
      />

      <section className="py-16 lg:py-20 bg-themed">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-accent-themed shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-themed text-sm">{c.locationTitle}</h3>
                <p className="text-sm text-muted-themed">{c.locationBody}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-accent-themed shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-themed text-sm">Email</h3>
                <a href="mailto:info@finetech.gnosisolabs.com" className="text-sm text-muted-themed hover:text-accent-themed">
                  info@finetech.gnosisolabs.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-accent-themed shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-themed text-sm">Phone</h3>
                <span className="text-sm text-muted-themed">+91 44 0000 0000</span>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder={c.formName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md border border-themed bg-card-themed px-4 py-2.5 text-sm text-themed outline-none focus:border-accent-themed"
              />
              <input
                placeholder={c.formCompany}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="rounded-md border border-themed bg-card-themed px-4 py-2.5 text-sm text-themed outline-none focus:border-accent-themed"
              />
              <input
                required
                type="email"
                placeholder={c.formEmail}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-md border border-themed bg-card-themed px-4 py-2.5 text-sm text-themed outline-none focus:border-accent-themed"
              />
              <input
                placeholder={c.formPhone}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-md border border-themed bg-card-themed px-4 py-2.5 text-sm text-themed outline-none focus:border-accent-themed"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder={c.formMessage}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-themed bg-card-themed px-4 py-2.5 text-sm text-themed outline-none focus:border-accent-themed"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-md bg-accent-themed px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === 'sending' ? '...' : c.formSubmit}
            </button>
            {status === 'sent' && (
              <p className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 size={16} /> Message sent — we&apos;ll be in touch.
              </p>
            )}
            {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
