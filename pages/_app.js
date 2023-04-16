import '@/styles/globals.css'
import Head from 'next/head'
import OrderProvider from '@/contexts/OrderContext'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
      </style>
    </Head>
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  </> 
}
