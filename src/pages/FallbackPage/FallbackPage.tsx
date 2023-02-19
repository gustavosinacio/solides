import styles from "./FallbackPage.module.css";

export function FallbackPage() {
  return (
    <div className={styles["fallback-wrapper"]}>
      <h1>Página não encontrada</h1>
      <h2>404</h2>
    </div>
  );
}
