import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './provider/ToasterProvider'

const nunito = Nunito({subsets:["latin"]}) 

export const metadata = {
  title: 'Airbnb',
  description: "It's an awesome airbnb clone.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <RegisterModal />
          <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  )
}
