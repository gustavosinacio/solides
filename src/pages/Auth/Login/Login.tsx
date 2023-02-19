import { Gear, Envelope } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputWithIcon } from "../../../components/InputWithIcon";
import { useLogin } from "../../../hooks/useLogin";
import styles from "./Login.module.css";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export function Login() {
  const navigate = useNavigate();
  const { login, isFetching } = useLogin();
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (event: FormEvent<LoginForm>) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const loginSuccessful = await login(email, password);

    if (loginSuccessful) {
      navigate("/");
      setLoginError(false);
    } else {
      setLoginError(true);
    }
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

          {loginError && (
            <div className={styles["error-message-wrapper"]}>
              <span>Erro ao fazer login. Tente novamente.</span>
            </div>
          )}

          <button disabled={isFetching} type="submit">
            {isFetching ? "Carregando" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
