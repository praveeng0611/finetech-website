import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Finetech Enterprises — Precision Tooling & Injection Molding',
  description:
    'Finetech Enterprises provides single-shop solutions for automotive interior and exterior parts — mold design, injection molding and secondary processes on engineering plastic parts. IATF 16949, ISO 9001, ISO 14001, ISO 45001 certified. Chennai, India.',
  keywords: [
    'injection molding',
    'automotive tooling',
    'mold design',
    'engineering plastics',
    'IATF 16949',
    'Chennai manufacturing',
    'Tier 1 automotive supplier',
  ],
  metadataBase: new URL('https://finetech.gnosisolabs.com'),
  openGraph: {
    title: 'Finetech Enterprises — Precision Tooling & Injection Molding',
    description:
      'Single-shop solutions for automotive interior and exterior parts — mold design, injection molding, and secondary processes. Chennai, India.',
    url: 'https://finetech.gnosisolabs.com',
    siteName: 'Finetech Enterprises',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
