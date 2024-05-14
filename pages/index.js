import Head from 'next/head';
import styles from '../styles/Profile.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile Home</title>
        <meta name="description" content="Profile Home Page" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Profile</h1>
        <div className={styles.profile}>
          <img className={styles.avatar} src="/avatar.png" alt="Avatar" />
          <h2 className={styles.name}>John Doe</h2>
          <p className={styles.bio}>
            Hi! I'm John Doe, a web developer with a passion for creating interactive and dynamic user experiences.
          </p>
        </div>
      </main>
    </div>
  );
}