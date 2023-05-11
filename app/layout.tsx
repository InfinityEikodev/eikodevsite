import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ weight: ['400', '700', '500', '300'], style: 'normal', subsets: ['latin'] })

export const metadata = {
  title: 'Eiko',
  description: 'Software Engineer and Backend Developer.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Samuel Eiko (a.k.a Eiko)" />
        <meta
          property="og:description"
          content="Software Engineer and Backend Developer."
        />
      </head>
      <body className={`${ubuntu.className} flex flex-col bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}