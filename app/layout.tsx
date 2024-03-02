import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from "next/font/google"
 


const montserrat= Montserrat({
  weight:['300','400', '500','600', '700', '800'],
  style: "normal",
  subsets: ['latin']
})


const fontClasses = `${montserrat.className} font-sans`;

export const metadata: Metadata = {
  title: 'BlueFit',
  description: 'Uma página sobre a rede de academias BlueFit e sobre como podemos ajudar a transformar vidas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontClasses}>
        {children}
        </body>
    </html>
  )
}
