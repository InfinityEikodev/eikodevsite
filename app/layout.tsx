import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({weight: ['400','700','500','300'], style: 'normal', subsets: ['latin']})

export const metadata = {
  title: 'Samuel Silva (a.k.a Eiko)',
  description: 'Software Engineer and Backend Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} flex flex-col bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
