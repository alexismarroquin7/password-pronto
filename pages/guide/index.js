import Link from "next/link";
import styles from "./index.module.css";

export default function GuidePage (){
  return <div
    className={styles.root}
  
  >

    <h1
      className={styles.title}
    >Guide</h1>

    <div
      className={styles.content}
    >
      <section
        className={styles.content_section}
      >
        <h3>{"What's the point of using a secure password?"}</h3>
        <p>
          Now that the world relies on the internet and is more connected than ever,
          it is paramount that you take safety measures to protect yourself online from malicious actors.
        </p>
        <p>          
          There are many types of hacking that are practiced in order to take advatange of unsuspecting victims,
          a few examples include: phishing, malware, social engineering, or even password cracking
          (<Link href="https://www.geeksforgeeks.org/types-of-hacking/" target="_blank">more here</Link>).
        </p>
        <p>
          One of the most effective ways to prevent hackers from hijacking your social media, banking, or any online account is by setting secure passwords.
        </p>
        <p>
          You can never be {'"100% safe,"'} but the key is to <span>make it as difficult as possible for the potential hacker</span> to succeed in gaining access to your account.
          By following a few basic guidelines, {"you'll"} be ready to start securing your accounts.
        </p>
      </section>
      
      <section
        className={styles.content_section}
      >
        <h3>{"What's a secure password?"}</h3>
        <h5>Secure password{' '}
          <span
            className={styles.text_good}
          >{'DO'}</span>{'\'s'}:
        </h5>
        <ul>
          <li>
            <span
              className={`${styles.text_good} ${styles.text_bold}`}
            >DO</span>{' '}
            use a minimum of 12 characters or more</li>
          <li>
            <span
              className={`${styles.text_good} ${styles.text_bold}`}
            >DO</span>{' '}
            use a combination of 4 different character types: 
            <ul>
              <li>uppercase</li>
              <li>lowercase</li>
              <li>digits</li>
              <li>special</li>
            </ul>
          </li>
          
          <li>
            <span
              className={`${styles.text_good} ${styles.text_bold}`}
            >DO</span>{' '}
            use a UNIQUE password for every account to prevent other accounts from being breeched</li>
          <li>
            <span
              className={`${styles.text_good} ${styles.text_bold}`}
            >DO</span>{' '}
            use a password manager to easily manage your UNIQUE passwords</li>
        </ul>
        
        <h5>Secure password{' '} 
          <span
            className={styles.text_bad}
          >DO NOT</span>{'\'s'}:</h5>
        <ul>
          <li>
            <span
              className={`${styles.text_bad} ${styles.text_bold}`}
            >DO NOT</span>{' '}
            use any personal, identifiable information:</li>
          <ul>
            <li>your name</li>
            <li>your SSN</li>
            <li>your {'mother\'s'} maiden name</li>
            <li>your {'dog\'s'} name</li>
            <li>your birthday / anniversary</li>
          </ul>
          <li>
            <span
              className={`${styles.text_bad} ${styles.text_bold}`}
            >DO NOT</span>{' '}
            reuse the same password for every account</li>
        </ul>

        <h5>Examples of <span className={styles.text_good}>SECURE</span> passwords:</h5>
        <ul>
          <li className={styles.text_code}>Gq*#aC981n.?</li>
          <li className={styles.text_code}>a+pn63#5qfw9m5#VJl7b4yae%7</li>
          <li className={styles.text_code}>yS7CysDeOX6i+6wh*8</li>
        </ul>

        <h5>Examples of <span className={styles.text_bad}>NOT SECURE</span> passwords:</h5>
        <ul>
          <li className={styles.text_code}>superSecurePassword123</li>
          <li className={styles.text_code}>lastn4meF1rstname1996</li>
          <li className={styles.text_code}>cookieM0nster</li>
        </ul>
        
      </section>
      
    </div>
        
  </div>
}