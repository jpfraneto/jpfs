import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@jpfraneto</title>
        <meta
          name='description'
          content='Jorge Pablo Franetovic Stocker - This is my home in the internet.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2>Welcome</h2>
        <p>My name is jp.</p>
        <p>
          I&apos;m shattering my reality as I know it, so that I can become
          unstoppable from within.
        </p>
        <p>Stay tuned, it will be worth your time.</p>
        <a
          href='https://calendly.com/jpfraneto/jpfs'
          target='_blank'
          rel='noreferrer'
          className={styles.letsTalkBtn}
        >
          Let&apos;s Talk
        </a>
      </main>
    </div>
  );
}
