import type { Metadata } from 'next'
import { Roboto, Courier_Prime } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next';


const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700']})
const courier = Courier_Prime({ subsets: ['latin'], weight: '400', variable:'--font-courier' })

export const metadata: Metadata = {
  title: 'Renan Nobre',
  description: 'Portfolio de Renan Nobre',
  keywords: ['nextjs', 'react', 'typescript', 'nodejs'],
  authors: [{ name: 'Renan Nobre', url: 'https://github.com/nsRenan' }],
  icons:{
    icon: '/renan-logo-fundo-preto.svg',
    shortcut: '/renan-logo-fundo-preto.svg',
    apple: '/renan-logo-fundo-preto.svg',
  }
  

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${roboto.className} ${courier.variable}`}>
         <Navbar/>
         {children}
         <SpeedInsights />
         </body>
    </html>
  )
}
