import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={`${styles.header} ${styles["colored-header-section"]}`}>
      <div className={styles["colored-header-section"]}>
        <h1>Sólides</h1>
      </div>
      <div className={styles["colored-header-section"]} />
      <div className={styles["colored-header-section"]} />
      <div className={styles["colored-header-section"]} />
    </header>
  );
}
