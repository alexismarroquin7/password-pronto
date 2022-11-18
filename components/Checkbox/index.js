import styles from "./index.module.css";

export const CheckBox = ({ children, on = false }) => {
  
  return <div
    className={`${styles.checkbox_container} ${on ? styles.checkbox_container_on : ''}`}
  >
    {children}
    <span
      className={`${styles.checkbox_dot} ${on ? styles.checkbox_dot_on : ''}`}
    ></span>
  </div>
}