import type { Metadata } from 'next'
import './globals.css'  // أزل هذا إذا لم يكن لديك ملف globals.css

export const metadata: Metadata = {
  title: 'My Project V0',
  description: 'A Next.js project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
