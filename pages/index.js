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
        <h1>Hello. My name is jp.</h1>
        <p>
          If you are here, it may be because you were curious. Who is this guy,
          you may have thought. I have struggled answering that question all my
          life. How can I define who I am if it is always changing? Of course it
          is changing. Life changes. But there is a fundamental aspect of being
          alive, having a soul inside. When you realize that you have a soul,
          you start making efforts to deepen your connection to it. You crave
          living from there. How could you not. Your soul also wants to meet
          you. You just dont know it yet. so when that happens, you will shine.
          and i want you to shine. i want all of us to shine. how would the
          world look like if we all were shining? i think it would be quite
          nice. so here i am, inviting you to that. we will have fun. im sure
          about that.
        </p>
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
