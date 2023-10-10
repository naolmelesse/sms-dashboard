import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/nav';
import StudentQuickTabs from "./components/student-quick-tabs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SWIFT University',
  description: 'Crafted with 🖤',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <StudentQuickTabs/>
        {children}
      </body>
    </html>
  )
}
