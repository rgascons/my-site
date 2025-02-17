import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import translations from './translations.json';
import { Header, type Language } from '../components/header';

const Home: NextPage = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [translation, setTranslation] = useState<typeof translations['en']>(translations[language]);
    
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setTranslation(translations[lang]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ricard Gascons</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header handleLanguageChange={handleLanguageChange} language={language} />
        <section>
          <h2 className={styles.subtitle}>{translation.about}</h2>
          <ul className={styles.list}>
            <li>{translation.location}</li>
            <li>{translation.pets}</li>
            <li>{translation.hobbies}</li>
          </ul>
        </section>
        <section>
          <h2 className={styles.subtitle}>{translation.work}</h2>
          <ul className={styles.list}>
            <li>{translation.role}</li>
            <li>{translation.experience}</li>
            <li>{translation.systems}</li>
          </ul>
        </section>
        <section>
          <h2 className={styles.subtitle}>{translation.projects}</h2>
          <div className={styles.grid}>
            <div className={styles.cardWrapper}>
              <a href="https://github.com/rgascons/galore"
                className={styles.card}>
                <h2>Galore &rarr;</h2>
                <p>Horde survival game with some roguelite elements. Based on Phaser, with a thin React layer on top.</p>
              </a>
              <Link href="/play-galore">
                <a className={styles.playButton}>
                  Play
                </a>
              </Link>
            </div>
            <div className={styles.cardWrapper}>
              <a href="https://github.com/rgascons/symphony"
                className={styles.card}>
                <h2>Symphony &rarr;</h2>
                <p>Simple music player app written in React, Tailwind, and tRPC.</p>
              </a>
            </div>
            <div className={styles.cardWrapper}>
              <a href="https://github.com/rgascons/MiniBlockchain"
                className={styles.card}>
                <h2>MiniBlockchain &rarr;</h2>
                <p>Blockchain written in .NET Core that can mine/send/receive currency.</p>
              </a>
            </div>
            <div className={styles.cardWrapper}>
              <a href="https://github.com/jutge-org/cmm"
                className={styles.card}>
                <h2>Cmm &rarr;</h2>
                <p>Cmm is a C++ interpreter that can be embedded in the browser.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
