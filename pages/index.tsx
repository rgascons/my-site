import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ricard Gascons</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Ricard Gascons
          </h1>
          <nav className={styles.icons}>
            
            <a href='mailto:gascons1995@gmail.com' target='_blank' rel='noreferrer'>
              <Image src='/svgs/email.svg' height={20} width={20}/>
            </a>
            <a href='/resume.pdf' target='_blank' rel='noreferrer'>
              <Image src='/svgs/cv.svg' height={20} width={20}/>
            </a>
            <a href='https://github.com/rgascons' target='_blank' rel='noreferrer'>
              <Image src='/svgs/gh.svg' height={20} width={20}/>
            </a>
            <a href='https://www.linkedin.com/in/ricard-gascons/' target='_blank' rel='noreferrer'>
              <Image src='/svgs/ld.svg' height={20} width={20}/>
            </a>
          </nav>
        </header>
        

        <section>
          <h2 className={styles.subtitle}>About me</h2>
          <ul className={styles.list}>
            <li>Based out of Seattle, Washington, USA</li>
            <li>😺 and 🐶 lover</li>
          </ul>
        </section>
        <section>
          <h2 className={styles.subtitle}>What I do</h2>
          <ul className={styles.list}>
            <li>React Experiences</li>
            <li>Frontend arquitecture</li>
            <li>React, Redux and Typescript</li>
          </ul>
        </section>
        <section>
          <h2 className={styles.subtitle}>Side projects</h2>
          <div className={styles.grid}>
            <a href="https://github.com/rgascons/MiniBlockchain"
               className={styles.card}>
              <h2>MiniBlockchain &rarr;</h2>
              <p>Blockchain written in .NET Core that can mine/send/receive currency.</p>
            </a>

            <a href="https://github.com/jutge-org/cmm"
               className={styles.card}>
              <h2>Cmm &rarr;</h2>
              <p>Cmm is a C++ interpreter that can be embedded in the browser.</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
