import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import OurTopClinicNav from '@/components/OurTopClinicNav'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OurTopClinic - North Palm Beach Primary Care & Wellness',
  description: 'Affordable Primary Care, IV Hydration, Weight Loss, and Aesthetics in North Palm Beach. Join our waitlist for a FREE consultation at our grand opening!',
  keywords: 'primary care, North Palm Beach, IV hydration, weight loss, aesthetics, Botox, fillers, wellness clinic',
  authors: [{ name: 'OurTopClinic' }],
  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },
  openGraph: {
    title: 'OurTopClinic - North Palm Beach Primary Care & Wellness',
    description: 'Affordable Primary Care, IV Hydration, Weight Loss, and Aesthetics in North Palm Beach. Join our waitlist for a FREE consultation!',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OurTopClinic - North Palm Beach Primary Care & Wellness',
    description: 'Affordable Primary Care, IV Hydration, Weight Loss, and Aesthetics in North Palm Beach. Join our waitlist for a FREE consultation!',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <OurTopClinicNav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
