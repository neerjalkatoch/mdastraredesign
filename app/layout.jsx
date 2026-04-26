import { Newsreader, Public_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ScrollToTop from '../src/components/ScrollToTop'
import '../src/index.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-label',
  display: 'swap',
})

export const metadata = {
  title: 'MD Astra — SEO & Digital Marketing',
  description: 'MD Astra helps businesses grow with expert SEO, web development, and digital marketing services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-primary">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
