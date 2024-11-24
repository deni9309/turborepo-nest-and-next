import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navigation from '@/components/navigation'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Productivo | Web Catalog',
  description: 'A Web Catalog for products and goods by Productivo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-full h-screen`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
