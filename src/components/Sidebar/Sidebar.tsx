import styles from "./Sidebar.module.css";
import {
  List,
  Buildings,
  UsersThree,
  Scroll,
  Gear,
  UserSquare,
} from "phosphor-react";

import { iconSmall } from "../../theme/sizes";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <header>
        <List />
        <h1>Áreas</h1>
      </header>

      <menu>
        <nav>
          <Buildings />
          <a href="#">Departamentos</a>
        </nav>
        <nav>
          <UsersThree />
          <a href="#">Colaboradores</a>
        </nav>
        <nav>
          <Scroll />
          <a href="#">Relatórios</a>
        </nav>
        <nav>
          <Gear />
          <a href="#">Configurações</a>
        </nav>
        <nav>
          <UserSquare />
          <a href="#">Conta</a>
        </nav>
      </menu>
    </div>
  );
}
