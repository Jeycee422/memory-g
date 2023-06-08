import '@/styles/tailwind.css'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/brain.svg' />
        <title>Memory G</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
