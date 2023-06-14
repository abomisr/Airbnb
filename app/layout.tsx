import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from "./components/modals/LoginModal"

import ToasterProvider from './provider/ToasterProvider'
import Provider from './components/Provider'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'

const nunito = Nunito({subsets:["latin"]}) 

export const metadata = {
  title: 'Airbnb',
  description: "It's an awesome airbnb clone.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <ClientOnly> */}
        <Provider>
          <>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
            <Navbar currentUser={currentUser} />
          </>
        </Provider>
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  )
}
