import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import dynamic from 'next/dynamic'

const SidebarNoSSR = dynamic(
  () => import('../components/Sidebar'),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp Web 2</title>
        <meta name="description" content="Whatsapp Web 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarNoSSR style={{width : "30%"}}/>
    </div>
  )
}

