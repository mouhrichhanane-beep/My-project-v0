import './globals.css'

export const metadata = {
  title: 'My Project',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
