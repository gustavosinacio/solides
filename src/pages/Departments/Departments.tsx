import { MagnifyingGlass } from "phosphor-react";
import { InputWithIcon } from "../../components/InputWithIcon";
import { DepartmentsList } from "./Components/DepartmentsList";
import styles from "./Departments.module.css";

export function Departments() {
  return (
    <div className={styles["departments-wrapper"]}>
      <header>
        <h1>Departamentos</h1>
      </header>

      <section>
        <InputWithIcon
          wrapperClassName={styles["search-department"]}
          placeholder="Pesquise um departamento"
          type="text"
          icon={MagnifyingGlass}
        />

        <DepartmentsList />
      </section>
    </div>
  );
}
