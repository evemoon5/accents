import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-nunito'
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-nunito-sans'
})

export const viewport: Viewport = {
  themeColor: '#f6f1e7',
}

export const metadata: Metadata = {
  title: 'Accents | Украшения ручной работы из натуральных камней',
  description: 'Украшения из натурального камня — нефрит, агат, кварц, перламутр — с элементами металла и декоративных бусин. Ручная работа на заказ.',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${nunito.variable} ${nunitoSans.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
