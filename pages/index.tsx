import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets  */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home
