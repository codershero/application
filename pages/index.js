import Head from 'next/head'
import Image from 'next/image'
import Vector from '../public/img/Frame.svg'
import Heart from '../public/img/Shape.svg'
import Ezgif from '../public/img/ezgif.svg'
import Day from '../public/img/day.svg'
import Bid from '../public/img/bid.svg'
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.topContentsBox}>
            <div className={styles.contents}>
              <Image src={Vector} height={40} width={100} alt='icon' />
            </div>
            <div className={styles.iconTop}>
              <Image src={Heart} height={40} width={100} alt='icon' />
              <p className={styles.heartText}>27</p>
            </div>
          </div>
          <div className={styles.imgBox}>
            <Image src={Ezgif} height={350} width={350} alt='icon' />
          </div>
          <div className={styles.bottomText}>
            <small>DenzeWashingto</small>
            <h3>Nike Air Jordan 1 OG</h3>
          </div>
          <div className={styles.bottomFlex}>
            <div>
              <Image src={Day} height={50} width={150} alt='icon' />
            </div>
            <div>
              <Image src={Bid} height={50} width={150} alt='icon' />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
