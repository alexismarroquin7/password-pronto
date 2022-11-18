import styles from "./index.module.css";

export const Radio = ({ children, on = false }) => {
  return (
  <div
    className={`${styles.radio_container} ${on ? styles.radio_container_on : ''}`}
  >
    {children}
    <span
      className={`${on ? styles.radio_dot_on : styles.radio_dot}`}
    ></span>
  </div>
  )
}

