import { Gear, Envelope } from "phosphor-react";
import { FormEvent } from "react";

import { InputWithIcon } from "../../../components/InputWithIcon";
import styles from "./Login.module.css";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export function Login() {
  const handleLogin = (event: FormEvent<LoginForm>) => {
    event.preventDefault();
  };

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

        <form onSubmit={handleLogin}>
          <h3>Email</h3>
          <InputWithIcon
            icon={Envelope}
            id="email"
            required
            placeholder="Digite seu email"
            type="email"
          />

          <h3>Senha</h3>
          <InputWithIcon
            icon={Gear}
            id="password"
            required
            placeholder="Digite sua senha"
            type="password"
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
