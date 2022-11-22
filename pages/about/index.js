import Link from "next/link";
import styles from "./index.module.css";

export default function AboutPage () {
  return <div
    className={styles.root}
  >
    
    <h1
      className={styles.title}
    >About</h1>

    <div
      className={styles.content}
    >
      <p>
        <Link
          href="https://passwordpronto.com"
        >PasswordPronto.com
        </Link>{' '}
        is a free, easy-to-use online tool for generating secure passwords.
      </p>

      <p>
        This app aims to make online security more accessible to anyone who uses the web, from beginners to more advanced users.
      </p>

    </div>

  </div>
}