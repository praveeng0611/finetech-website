// Non-i18n customer data: logos and official website links.
// Names here must match the strings used in messages/*.ts (home.tier1List, customersPage.oemMix)
// so the UI can look up the right logo/link for each translated label.

export type CustomerLogo = {
  name: string
  logo: string
  website: string
  /** Use a slightly larger box for wordmark-style logos that read small */
  wordmark?: boolean
}

export const customerLogos: CustomerLogo[] = [
  { name: 'Hyundai', logo: '/images/customers/hyundai.svg', website: 'https://www.hyundai.com' },
  { name: 'Mindarika', logo: '/images/customers/unominda.png', website: 'https://www.unominda.com' },
  { name: 'Kwangjin', logo: '/images/customers/kwangjin.svg', website: 'https://www.kwangjin.com' },
  { name: 'Kwangjin India', logo: '/images/customers/kwangjin.svg', website: 'https://www.kwangjin.com' },
  { name: 'Renault Nissan', logo: '/images/customers/renault.svg', website: 'https://www.renaultgroup.com' },
  { name: 'Woory', logo: '/images/customers/woory.png', website: 'http://www.woory.com' },
  { name: 'Toyota', logo: '/images/customers/toyota.svg', website: 'https://global.toyota' },
  { name: 'KIA', logo: '/images/customers/kia.svg', website: 'https://www.kia.com' },
  { name: 'Kwangsung Sundhar', logo: '/images/customers/sandhar.png', website: 'https://sandhargroup.com' },
  { name: 'KSASPL', logo: '/images/customers/sandhar.png', website: 'https://sandhargroup.com' },
  { name: 'DS Connectors', logo: '', website: 'http://ds-inc.in', wordmark: true },
  { name: 'Webasto', logo: '/images/customers/webasto.svg', website: 'https://www.webasto.com' },
  { name: 'Mahindra', logo: '/images/customers/mahindra.svg', website: 'https://www.mahindra.com' },
  { name: 'Tata', logo: '/images/customers/tata.svg', website: 'https://www.tatamotors.com' },
  { name: 'MG', logo: '/images/customers/mg.svg', website: 'https://www.mgmotor.co.in' },
  { name: 'ZF Rane', logo: '/images/customers/rane.jpeg', website: 'https://ranegroup.com' },
]

export function getCustomerLogo(name: string): CustomerLogo {
  const found = customerLogos.find((c) => c.name === name)
  if (found) return found
  return { name, logo: '', website: '#', wordmark: true }
}
