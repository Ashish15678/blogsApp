import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "PortFolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "contact",
    url: "/contacts",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AppName</div>
      <div className={styles.links}>
        {Links.map((link) => {
          return (
            <Link key={link.id} className={styles.logo} href={link.url}>
              {link.title}
            </Link>
          );
        })}
      </div>
      <button type="button" className={styles.logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
