import styles from "./AdvancedTab.module.css";

export const AdvancedTab = ({
  password,
  handleChange
}) => {
  return (
    <div
      className={styles.advanced_tab}
    >
      <label
        className={styles.checkbox_label}
      >Lowercase
        <input 
          type="checkbox"
          name="useLower"
          checked={password.useLower}
          onChange={handleChange}
        />
      </label>
      
      <label
        className={styles.checkbox_label}
      >Uppercase
        <input 
          type="checkbox"
          name="useUpper"
          checked={password.useUpper}
          onChange={handleChange}
        />
      </label>
      
      <label
        className={styles.checkbox_label}
      >Digits
        <input 
          type="checkbox"
          name="useDigit"
          checked={password.useDigit}
          onChange={handleChange}
        />
      </label>
      
      <label
        className={styles.checkbox_label}
      >Special
        <input 
          type="checkbox"
          name="useSpecial"
          checked={password.useSpecial}
          onChange={handleChange}
        />
      </label>
      
      <label
        className={styles.checkbox_label}
      >Ambiguous
        <input 
          type="checkbox"
          name="useAmbig"
          checked={password.useAmbig}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}