import { Menu, MenuOpen } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { v4 as uuid } from "uuid";
import { PasswordProntoIcon } from "../PasswordProntoIcon";

const links = [
  {
    id: uuid(),
    text: "Password Generator",
    href: "/"
  },
  {
    id: uuid(),
    text: "Guide",
    href: "/guide"
  },
  {
    id: uuid(),
    text: "About",
    href: "/about"
  },
  {
    id: uuid(),
    text: "Contact",
    href: "/contact"
  }
]

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
      <div
        className={styles.logo_container}
      >
        <PasswordProntoIcon/>
        <h3>Password Pronto</h3>
      </div>
      
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
      {links.map(link => {        
        return <Link
          key={link.id}
          className={`${styles.link} ${link.href === router.asPath ? styles.link_active : ''}`}
          href={link.href}
        >{link.text}
        </Link>
      })}
    </div>
  
  </div>
}