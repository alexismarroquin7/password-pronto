import { Radio } from "../Radio";
import styles from "./SimpleTab.module.css";

export const SimpleTab = ({
  password,
  setPassword
}) => {

  const handleChange = (e) => {
    const { name } = e.target;
    switch(name){
      case 'least_secure':
        setPassword({
          ...password,
          useLower: true,
          useUpper: true,
          useDigit: false,
          useSpecial: false,
          useGroup: false,
          useAmbig: false
        });
        break;
      case 'somewhat_secure':
        setPassword({
          ...password,
          useLower: true,
          useUpper: true,
          useDigit: true,
          useSpecial: false,
          useGroup: false,
          useAmbig: false
        });
        break;
      case 'secure':
        setPassword({
          ...password,
          useLower: true,
          useUpper: true,
          useDigit: true,
          useSpecial: true,
          useGroup: false,
          useAmbig: false
        });
        break;
      case 'most_secure':
        setPassword({
          ...password,
          useLower: true,
          useUpper: true,
          useDigit: true,
          useSpecial: true,
          useGroup: true,
          useAmbig: false
        });
        break;
      default: 
      throw Error(`unkown input name: ${name}`);
    }
  }

  return (
    <div
      className={styles.simple_tab}
    >
      <label
        className={styles.simple_tab_radio_label}
      ><p>Least Secure <span className={styles.simple_tab_radio_label_not}>{'(NOT recommended)'}</span></p>
        <Radio
          on={
            password.useLower === true &&
            password.useUpper === true &&
            password.useDigit === false &&
            password.useSpecial === false &&
            password.useGroup === false &&
            password.useAmbig === false
          }
        >
          <input
            type="radio"
            name="least_secure"
            onChange={handleChange}
            checked={
              password.useLower === true &&
              password.useUpper === true &&
              password.useDigit === false &&
              password.useSpecial === false &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </Radio>

        <span
          className={styles.helper_text}
        >
          Only letters
        </span>
      </label>


      <label
        className={styles.simple_tab_radio_label}
      >Somewhat Secure
        <Radio
          on={
            password.useLower === true &&
            password.useUpper === true &&
            password.useDigit === true &&
            password.useSpecial === false &&
            password.useGroup === false &&
            password.useAmbig === false
          }
        >
          <input
            type="radio"
            name="somewhat_secure"
            onChange={handleChange}
            checked={
              password.useLower === true &&
              password.useUpper === true &&
              password.useDigit === true &&
              password.useSpecial === false &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </Radio>
        
        <span
          className={styles.helper_text}
        >
          Letters and digits
        </span>
      
      </label>


      <label
        className={styles.simple_tab_radio_label}
      ><p>Secure <span>{'(recommended)'}</span></p>
        <Radio
          on={
            password.useLower === true &&
            password.useUpper === true &&
            password.useDigit === true &&
            password.useSpecial === true &&
            password.useGroup === false &&
            password.useAmbig === false
          }
        >
          <input
            type="radio"
            name="secure"
            onChange={handleChange}
            checked={
              password.useLower === true &&
              password.useUpper === true &&
              password.useDigit === true &&
              password.useSpecial === true &&
              password.useGroup === false &&
              password.useAmbig === false
            }
          />
        </Radio>
        
        <span
          className={styles.helper_text}
        >
          Letters, digits, and special
        </span>
      </label>

      <label
        className={styles.simple_tab_radio_label}
      >Most Secure
        <Radio
          on={
            password.useLower === true &&
            password.useUpper === true &&
            password.useDigit === true &&
            password.useSpecial === true &&
            password.useGroup === true &&
            password.useAmbig === false
          }
        >
          <input
            type="radio"
            name="most_secure"
            onChange={handleChange}
            checked={
              password.useLower === true &&
              password.useUpper === true &&
              password.useDigit === true &&
              password.useSpecial === true &&
              password.useGroup === true &&
              password.useAmbig === false
            }
          />
        </Radio>
        <span
          className={styles.helper_text}
        >
          Letters, digits, special, and groupings
        </span>
      </label>
    </div>
  )
}