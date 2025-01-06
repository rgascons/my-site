import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import { Header } from '../components/header';

const PlayGalore: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galore - Ricard Gascons</title>
        <meta name="description" content="Horde survival game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header showHomeLink/>
        <iframe 
          src="/galore/index.html"
          className={styles.gameFrame}
        />
      </main>
    </div>
  );
};

export default PlayGalore;