import '@/styles/tailwind.css'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/coin.svg' />
        <title>Mines G</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
