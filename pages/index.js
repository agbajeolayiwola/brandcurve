import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeMain from './home'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>My Brand Curve</title>
        <meta name="description" content="My Brand Curve" />
        <link rel="icon" href="/" />
      </Head> */}
      <HomeMain/>
    </div>
  )
}
