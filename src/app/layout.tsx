import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL, SITE_NAME } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

const title = 'KHIM-TECH - Data Science & Full-Stack Development'
const description =
  'Professional data science, machine learning, and full-stack development services. Transform your data into actionable insights with cutting-edge AI solutions.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords:
    'data science, machine learning, full-stack development, AI, statistical analysis, web development',
  authors: [{ name: 'KHIM-TECH' }],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
