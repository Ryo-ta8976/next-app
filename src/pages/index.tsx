import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PrefectureProvider } from '../context/PrefectureContext'
import Graph from '@/atoms/Graph'
import CheckboxList from '@/molecules/CheckboxList'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <PrefectureProvider>
      <div className={styles.container}>
        <Head>
          <title>都道府県別人口数の推移</title>
          <meta name='description' content='都道府県別人口数の推移' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h2>都道府県別人口数の推移</h2>
          <CheckboxList />
          <Graph />
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </PrefectureProvider>
  )
}

export default Home
