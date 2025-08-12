import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jinrix Labs - Where logic meets intuition',
  description: 'AI tools for self-being. Build calm, think clearly, grow wiser.',
  keywords: ['AI', 'wellness', 'mindfulness', 'productivity', 'mental health'],
  authors: [{ name: 'Jinrix Labs' }],
  creator: 'Jinrix Labs',
  openGraph: {
    title: 'Jinrix Labs - Where logic meets intuition',
    description: 'AI tools for self-being. Build calm, think clearly, grow wiser.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jinrix Labs - Where logic meets intuition',
    description: 'AI tools for self-being. Build calm, think clearly, grow wiser.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
