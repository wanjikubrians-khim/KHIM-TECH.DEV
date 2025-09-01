import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KHIM-TECH - Data Science & Full-Stack Development',
  description: 'Professional data science, machine learning, and full-stack development services. Transform your data into actionable insights with cutting-edge AI solutions.',
  keywords: 'data science, machine learning, full-stack development, AI, statistical analysis, web development',
  authors: [{ name: 'KHIM-TECH' }],
  openGraph: {
    title: 'KHIM-TECH - Data Science & Full-Stack Development',
    description: 'Professional data science, machine learning, and full-stack development services.',
    type: 'website',
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
