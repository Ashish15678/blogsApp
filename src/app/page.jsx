import styles from "./home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className={styles.container}></div>
      <div className = {styles.mainTitle}>
        <h1>Our Works</h1>
      </div>
      <div className={styles.selectTitle}>Choose a Gallery</div>
      <div className={styles.items}></div>
      <Link href="portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>Illustrations</span>
      </Link>
      <Link href="portfolio/Works" className={styles.item}>
        <span className={styles.title}>Works</span>
      </Link>
      <Link href="portfolio/Fibonacci" className={styles.item}>
        <span className={styles.title}>Fibonacci</span>
      </Link>
    </div>
  );
}
