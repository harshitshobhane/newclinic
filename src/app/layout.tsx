import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import OurTopClinicNav from '@/components/OurTopClinicNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OurTopClinic - North Palm Beach Primary Care & Wellness',
  description: 'Affordable Primary Care, IV Hydration, Weight Loss, and Aesthetics in North Palm Beach. Join our waitlist for a FREE consultation at our grand opening!',
  keywords: 'primary care, North Palm Beach, IV hydration, weight loss, aesthetics, Botox, fillers, wellness clinic',
  authors: [{ name: 'OurTopClinic' }],
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
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
      </body>
    </html>
  )
}
