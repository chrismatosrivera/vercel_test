import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import FrontPageTitle from './front-page-title';
import Image from 'next/image'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://catfact.ninja/fact`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-cols-2 gap-8">
          <div className='flex h-screen'>
            <FrontPageTitle fact={ data.fact }></FrontPageTitle>
          </div>
          <div className='m-auto'>
            <Image src='images/cat-friend.svg' width={500} height={500}></Image>
          </div>
        </div>
      </main>
    </div>
  )
}
