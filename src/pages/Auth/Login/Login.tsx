import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles["login-page"]}>
      <div className={styles["form-wrapper"]}>
        <header>
          <h1>Digite suas credenciais</h1>
          <div className={styles["colored-borders"]}>
            <div />
            <div />
            <div />
            <div />
          </div>
        </header>

        <form>
          <h3>Email</h3>
          <input placeholder="Digite seu email" type="email" />

          <h3>Senha</h3>
          <input placeholder="Digite sua senha" type="password" />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
