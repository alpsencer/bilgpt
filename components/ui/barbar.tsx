import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const barbar = () => {
  return (
    <>
      <Head>
        <title>BilGPT</title>
        <meta name="description" content="Powered by Bilkent AI Society" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topnav}>
        <div className={styles.navlogo}>
          <a href="https://www.bilkentai.com">BilGPT</a>
        </div>
        <div className={styles.navlinks}>
        <a href="https://form.bilkentai.com/" target="_blank">
            Whatsapp
          </a>
          <a href="https://www.linkedin.com/in/bilkentai/" target="_blank">
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default barbar;
