
import './globals.css'  // إذا كان لديك ملف CSS عالمي

export const metadata = {
  title: 'My Project',
  description: 'Description of my project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
