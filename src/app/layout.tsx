import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Sidebar from '@/components/navigation/Sidebar'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Candlelight',
  description: 'Candlelight: Your accounting companion. Effortlessly manage finances, expenses, and gain insights in one user-friendly platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Sidebar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  )
}
