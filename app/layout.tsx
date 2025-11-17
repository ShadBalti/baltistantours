import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { DocsLayout } from '@/components/docs-layout'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Sonner } from 'sonner'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: 'Baltistan Travel Guide',
    template: '%s | Baltistan Tourism'
  },
  description: 'Complete travel guide to Baltistan - explore destinations, culture, food, and travel essentials for the Roof of the World',
  generator: 'v0.app',
  applicationName: 'Baltistan Tourism',
  keywords: ['Baltistan', 'K2', 'Skardu', 'travel guide', 'tourism', 'Karakoram'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baltistantours.vercel.app',
    siteName: 'Baltistan Tourism Guide',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@baltistantours',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  width: 'device-width',
}

export const revalidate = 3600; // Revalidate every hour for dynamic content

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <TooltipProvider>
          <DocsLayout>
            {children}
          </DocsLayout>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  )
}
