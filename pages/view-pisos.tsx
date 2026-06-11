import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import { Header } from '../components/header';

const Pisos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pisos Barcelona - Ricard Gascons</title>
        <meta name="description" content="Barcelona apartment price tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header showHomeLink/>
        <iframe
          src="/pisos/index.html"
          className={styles.gameFrame}
        />
      </main>
    </div>
  );
};

export default Pisos;
