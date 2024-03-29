import Navigation from "./components/navbar"
import 'tailwindcss/tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jack Bai',
  description: 'Jack Bai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>
      {children}
      </body>
    </html>
  )
}
