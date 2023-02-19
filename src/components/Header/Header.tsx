import { useContext } from "react";
import { SignOut } from "phosphor-react";

import { useLogin } from "../../hooks/useLogin";

import styles from "./Header.module.css";

export function Header() {
  const { logout } = useLogin();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={`${styles.header} ${styles["colored-header-section"]}`}>
      <div className={styles["colored-header-section"]}>
        <h1>Sólides</h1>
      </div>
      <div className={styles["colored-header-section"]} />
      <div className={styles["colored-header-section"]} />
      <div className={styles["colored-header-section"]}>
        <button title="Sair da conta" onClick={handleLogout}>
          <SignOut />
        </button>
      </div>
    </header>
  );
}
