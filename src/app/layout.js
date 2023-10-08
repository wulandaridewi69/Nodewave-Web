import './globals.css'
import { Inter } from 'next/font/google'

import Header from '../app/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nodewave',
  description: 'Create Mobile Applications and Websites for Companies or Your Business. Have a transparent pricing, easy and straightforward development process',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
