import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'

import ToasterProvider from './provider/ToasterProvider'
import Provider from './components/Provider'
import getCurrentUser from './actions/getCurrentUser'

import ClientOnly from './components/ClientOnly'
import ModalsProvider from './provider/ModalProvider'

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
        <ClientOnly>
        <Provider>
          <>
          <ToasterProvider />
          <ModalsProvider />
            <Navbar currentUser={currentUser} />
          </>
        </Provider>
        </ClientOnly>
        <div className="pt-28 pb-20">
        {children}
        </div>
      </body>
    </html>
  )
}
