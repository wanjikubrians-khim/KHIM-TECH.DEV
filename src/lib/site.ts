/** Canonical site origin, override with NEXT_PUBLIC_SITE_URL at build time. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://khim-tech-dev.vercel.app'
).replace(/\/$/, '')

export const SITE_NAME = 'KHIM-TECH'
export const SITE_DESCRIPTION =
  'Data science, machine learning, and full-stack development. Insights and case studies from the KHIM-TECH team.'
