import styles from "./Sidebar.module.css";
import {
  List as ListIcon,
  Buildings as BuildingsIcon,
  UsersThree as UsersThreeIcon,
  Scroll as ScrollIcon,
  Gear as GearIcon,
  UserSquare as UserSquareIcon,
} from "phosphor-react";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <header>
        <ListIcon />
        <h1>Áreas</h1>
      </header>

      <menu>
        <nav>
          <BuildingsIcon />
          <a href="#">Departamentos</a>
        </nav>
        <nav>
          <UsersThreeIcon />
          <a href="#">Colaboradores</a>
        </nav>
        <nav>
          <ScrollIcon />
          <a href="#">Relatórios</a>
        </nav>
        <nav>
          <GearIcon />
          <a href="#">Configurações</a>
        </nav>
        <nav>
          <UserSquareIcon />
          <a href="#">Conta</a>
        </nav>
      </menu>
    </div>
  );
}
