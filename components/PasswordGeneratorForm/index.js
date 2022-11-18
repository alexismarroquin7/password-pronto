import { useEffect, useState } from "react";
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";
import styles from "./index.module.css";
import { ContentCopy, Refresh } from '@mui/icons-material';
import { SimpleTab } from "./SimpleTab";
import { AdvancedTab } from "./AdvancedTab";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const initialTab = 'advanced';

export const PasswordGeneratorForm = () => {
  const { password, setPassword, handleChange, make } = usePasswordGenerator();
  const [tab, setTab] = useState(initialTab);
  
  useEffect(() => {
    make();
  }, [
    password.lengthToUse,
    password.useLower,
    password.useUpper,
    password.useDigit,
    password.useSpecial,
    password.useGroup,
    password.useAmbig
  ]);

  const [copied, setCopied] = useState(false);

  // onClick handler function for the copy button
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <form
      className={styles.pg_form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      
      <label
        className={styles.text_input_label}
      >Your new password:
        <input
          type="text"
          name="password_generated"
          value={password.generated}
          readOnly
        />
      </label>

      <div
        className={styles.actions_container}
      >
        <CopyToClipboard text={password.generated}
          onCopy={handleCopy}
        >
          <button
            className={`${styles.button_primary} ${copied ? '' : styles.button_secondary}`}
          >
            <ContentCopy/>
            {copied ? 'copied!' : 'copy'}
          </button>
        
        </CopyToClipboard>
        
        <button
          className={styles.button_primary}
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            make();
          }}
        >
            <Refresh />
            refresh
          </button>
      </div>
      
      <label
        className={styles.length_label}
      >Length:
        
        <div
          className={styles.length_number_input_container}
        >
          <button
            className={`${styles.password_length_button} ${styles.password_length_button_dec}`}
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
            className={styles.length_number_input}
            type="number"
            name="lengthToUse"
            readOnly
            value={password.lengthToUse}
          />  
          <button
            className={`${styles.password_length_button} ${styles.password_length_button_inc}`}
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
      </label>
      
      <input
        className={styles.slider}
        type="range"
        min="1"
        max="40"
        step="1"
        name="lengthToUse"
        value={password.lengthToUse}
        onChange={handleChange}
      ></input>

      <div
        className={styles.tab_section}
      >
        <label
          className={styles.tab_list_label}
        >Settings:</label>
        <div
          className={styles.tab_buttons}
        >
          <button
            className={`${styles.tab_button} ${tab === 'simple' && styles.tab_button_selected}`}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTab('simple');
              setPassword({
                ...password,
                useLower: true,
                useUpper: true,
                useDigit: true,
                useSpecial: true,
                useGroup: false,
                useAmbig: false
              });
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
        
      </div>

      {tab === 'simple' && <SimpleTab
        password={password}
        setPassword={setPassword}

      />}
      {tab === 'advanced' && <AdvancedTab
        password={password}
        handleChange={handleChange}
      />}

      

    </form>
  );
}