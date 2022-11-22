import styles from "./index.module.css";
import Link from "next/link";

export default function ContactPage (){
  return <div
    className={styles.root}
  >
    <h1
      className={styles.title}
    >Contact</h1>

    <div
      className={styles.content}
    >
      <p>This web app was created by Alexis Marroquin.</p>
      <p>Go to {' '}
        <Link
          href="https://alexismarroquin.com"
          target="_blank"
        >
          alexismarroquin.com
        </Link>{' '}
        to learn more.
      </p>
    </div>

  </div>
}