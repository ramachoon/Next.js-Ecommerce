import './globals.css'
import { Nunito } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js E-commerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
