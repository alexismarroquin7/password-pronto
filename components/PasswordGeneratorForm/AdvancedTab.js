import { charTypeOption } from "../../hooks/usePasswordGenerator";
import { CheckBox } from "../Checkbox";
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

        <CheckBox
          on={password.useLower}
        >
          <input 
            type="checkbox"
            name="useLower"
            checked={password.useLower}
            onChange={handleChange}
            disabled={
              password.useLower === true &&
              password.useUpper === false &&
              password.useDigit === false &&
              password.useSpecial === false &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </CheckBox>
        
        <span
          className={styles.helper_text}
        >{charTypeOption.lower}</span>
      
      </label>
      
      <label
        className={styles.checkbox_label}
      >Uppercase

        <CheckBox
          on={password.useUpper}
        >
          <input 
            type="checkbox"
            name="useUpper"
            checked={password.useUpper}
            onChange={handleChange}
            disabled={
              password.useLower === false &&
              password.useUpper === true &&
              password.useDigit === false &&
              password.useSpecial === false &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </CheckBox>

        <span
          className={styles.helper_text}
        >{charTypeOption.upper}</span>
      </label>
      
      <label
        className={styles.checkbox_label}
      >Digits
        <CheckBox
          on={password.useDigit}
        >
          <input 
            type="checkbox"
            name="useDigit"
            checked={password.useDigit}
            onChange={handleChange}
            disabled={
              password.useLower === false &&
              password.useUpper === false &&
              password.useDigit === true &&
              password.useSpecial === false &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </CheckBox>

        <span
          className={styles.helper_text}
        >{charTypeOption.digit}</span>
      
      </label>
      
      <label
        className={styles.checkbox_label}
      >Special
        <CheckBox
          on={password.useSpecial}
        >
          <input 
            type="checkbox"
            name="useSpecial"
            checked={password.useSpecial}
            onChange={handleChange}
            disabled={
              password.useLower === false &&
              password.useUpper === false &&
              password.useDigit === false &&
              password.useSpecial === true &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </CheckBox>
        
        <span
          className={styles.helper_text}
        >{charTypeOption.special}</span>

      </label>
      
      <label
        className={styles.checkbox_label}
      >Group
        <CheckBox
          on={password.useGroup}
        >
          <input 
            type="checkbox"
            name="useGroup"
            checked={password.useGroup}
            onChange={handleChange}
            disabled={
              password.useLower === false &&
              password.useUpper === false &&
              password.useDigit === false &&
              password.useSpecial === false &&
              password.useGroup === true &&
              password.useAmbig === false
            }
          />
        </CheckBox>
        
        <span
          className={styles.helper_text}
        >{charTypeOption.group}</span>

      </label>
      
      <label
        className={styles.checkbox_label}
      >Ambiguous
        <CheckBox
          on={password.useAmbig}
        >
          <input 
            type="checkbox"
            name="useAmbig"
            checked={password.useAmbig}
            onChange={handleChange}
            disabled={
              password.useLower === false &&
              password.useUpper === false &&
              password.useDigit === false &&
              password.useSpecial === false &&
              password.useGroup === false &&
              password.useAmbig === true
            }
          />
        </CheckBox>

        <span
          className={styles.helper_text}
        >{charTypeOption.ambig}</span>
        
      </label>
    </div>
  )
}