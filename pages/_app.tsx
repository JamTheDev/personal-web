import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Head from 'next/head'
import SiteConfig from './config'

// inspiration site: https://www.carlrippon.com/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteConfig />

      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
