import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layouts/core/navbar'
import SiteConfig from '../components/config'

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
