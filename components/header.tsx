import styles from '../styles/Index.module.css';
import Image from 'next/image';
import Link from 'next/link';

export type Language = 'en' | 'ca';

interface HeaderProps {
  handleLanguageChange?: (lang: Language) => void;
  language?: Language;
  showHomeLink?: boolean;
}

export const Header = ({ handleLanguageChange, language, showHomeLink }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Ricard Gascons
        </h1>
        {showHomeLink && (
          <Link href="/">
            <a className={styles.homeLink}>
              ← Home
            </a>
          </Link>
        )}
      </div>      
      <nav className={styles.icons}>
        <div className={styles.languageIcons}>
            <button
              onClick={() => handleLanguageChange?.('en')}
              className={styles.icon}
              data-active={language === 'en'}
            >
              en
            </button>
            <button
              onClick={() => handleLanguageChange?.('ca')}
              className={styles.icon}
              data-active={language === 'ca'}
            >
              ca
            </button>
        </div>
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
  )
}