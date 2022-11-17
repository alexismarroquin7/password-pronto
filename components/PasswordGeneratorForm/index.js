import { useEffect, useState } from "react";
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";
import styles from "./index.module.css";
import { ContentCopy, Refresh } from '@mui/icons-material';
import { SimpleTab } from "./SimpleTab";
import { AdvancedTab } from "./AdvancedTab";

const initialTab = 'advanced';

export const PasswordGeneratorForm = () => {
  const { password, setPassword, handleChange, make } = usePasswordGenerator();
  const [tab, setTab] = useState(initialTab);
  
  useEffect(() => {
    make();
  }, [password.lengthToUse, password.useLower, password.useUpper, password.useDigits, password.useSpecial, password.useAmbig]);

  return (
    <form
      className={styles.pg_form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      
      <label
        className={styles.text_input_label}
      >Generated Password:
        <input
          type="text"
          value={password.generated}
          readOnly
        />
      </label>

      <div
        className={styles.actions_container}
      >
        <button
          className={`${styles.button_primary} ${styles.button_secondary}`}
        >
          <ContentCopy/>
          copy
        </button>
        <button
          className={styles.button_primary}
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            make();
          }}
          >
            <Refresh/>
            refresh
          </button>
      </div>
      
      <label
        className={styles.length_label}
      >Length 
        
        <div
          className={styles.length_number_input_container}
        >
          <button
            className={styles.password_length_button_dec}
            disabled={password.lengthToUse === 1}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if(password.lengthToUse == 1) return;
              setPassword({
                ...password,
                lengthToUse: Number(password.lengthToUse) - 1
              });
            }}
          >-</button>
          <input
            type="number"
            name="lengthToUse"
            readOnly
            value={password.lengthToUse}
          />  
          <button
            className={styles.password_length_button_inc}
            disabled={password.lengthToUse === 40}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if(password.lengthToUse == 40) return;
              setPassword({
                ...password,
                lengthToUse: Number(password.lengthToUse) + 1
              });
            }}
          >+</button>
        </div>
        
        <input
          type="range"
          min="1"
          max="40"
          step="1"
          name="lengthToUse"
          value={password.lengthToUse}
          onChange={handleChange}
        ></input>
      </label>

      <div
        className={styles.tab_list}
      >
        <button
          className={`${styles.tab_button} ${tab === 'simple' && styles.tab_button_selected}`}
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setTab('simple');
          }}
        >
          Simple
        </button>
        <button
          className={`${styles.tab_button} ${tab === 'advanced' && styles.tab_button_selected}`}
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setTab('advanced');
          }}
        >
          Advanced
        </button>
      </div>

      {tab === 'simple' && <SimpleTab/>}
      {tab === 'advanced' && <AdvancedTab
        password={password}
        handleChange={handleChange}
      />}

      

    </form>
  );
}