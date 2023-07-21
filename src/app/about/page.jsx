import React from "react";
import styles from "./page.module.css";
import buttonCss from "../../components/Navbar/navbar.module.css";
export default function about() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="data:image/jpeg;base64,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"
          alt="image"
          fill={true}
          width={1200}
          height={250}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital story tellers</h1>
          <h2 className={styles.imgDesc}>We work for you everyday</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Why choose us ??</h1>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
            <br /> consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>Why not others ??</h1>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <button className={buttonCss.logout}> Contact Us</button>
        </div>
      </div>
    </div>
  );
}
