import Link from "next/link";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";

const footer = {
  links: [
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
    },
  ],
  bottom: [
    {
      id: uuid(),
      text: "Developed and designed by",
      link: false
    },
    {
      id: uuid(),
      text: "Alexis Marroquin",
      link: true,
      href: "https://alexismarroquin.com",
      target: "_blank"
    },
  ]
}

export const Footer = () => {
  return (
  <footer
    className={styles.root}
  >
    <section
      className={styles.footer_section}
    >
      {footer.links.map(link => (
        <Link
          key={link.id}
          href={link.href}
          className={styles.link}
        >
          {link.text}
        </Link>
      ))}
    </section>

    <section
      className={styles.footer_section}
    >
      {footer.bottom.map(p => {

        return p.link 
        ? (
          <Link
            key={p.id}
            href={p.href}
            target={p.target}
            className={styles.link}
          >
            {p.text}
          </Link>
        ) : (
        <p
          key={p.id}
        >
          {p.text}
        </p>
      )})}
    </section>
  </footer>
  );
}