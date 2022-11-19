import { Menu, MenuOpen } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(()=> {
    
    setOpen(false);
    
  }, [router.asPath]);
  
  return <div
    className={styles.root}
  >
    
    <nav
      className={styles.nav}
    >
  
      <h3>Password Pronto</h3>
      
      <button
        className={styles.menu_button}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {open 
          ? <MenuOpen
            fontSize="inherit"
          />

          : <Menu
            fontSize="inherit"
          />
        }
      </button>
    
    </nav>

    {/* links hidden by default */}
    <div
      className={`${styles.nav_links} ${open ? styles.nav_links_open : ''}`}
    >
      <Link
        className={`${styles.link}`}
        href="/"
      >Password Generator
      </Link>
      
      <Link
        className={`${styles.link}`}
        href="/guide"
      >Guide
      </Link>
      
      <Link
        className={`${styles.link}`}
        href="/about"
      >About
      </Link>
      
      <Link
        className={`${styles.link}`}
        href="/contact"
      >Contact
      </Link>
    </div>
  
  </div>
}