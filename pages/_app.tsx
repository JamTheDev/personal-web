import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// inspiration site: https://www.carlrippon.com/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
