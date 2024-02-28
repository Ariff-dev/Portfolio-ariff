import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/ui/navbar/Navbar'
import { Footer } from '@/components/ui/footer/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AriffDev',
  description: 'Hola soy Ariff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${inter.className} mx-6  bg-color-bg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
