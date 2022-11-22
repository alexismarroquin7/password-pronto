import Head from 'next/head';
import { PasswordGeneratorForm } from '../components';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      className={styles.home}
    >
      <Head>
        <title>Password Pronto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        className={styles.home_title}
      >Password Generator</h1>
      <PasswordGeneratorForm />
    </div>
  )
}
