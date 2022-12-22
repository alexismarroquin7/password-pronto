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
        <meta name="keywords" content="password pronto, password generator" />
        <meta name="description" content="Password Pronto is a easy and free to use password generator" />
        <meta name="author" content="Alexis Marroquin" />
        <link rel="icon" href="/logo.svg" />
      </Head>
        <h1
          className={styles.home_title}
        >Password Generator</h1>
        <PasswordGeneratorForm />
    </div>
  )
}
