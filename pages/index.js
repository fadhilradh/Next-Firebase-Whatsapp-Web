import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp Web 2</title>
        <meta name="description" content="Whatsapp Web 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      
    </div>
  )
}

