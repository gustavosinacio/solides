import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../../components/InputWithIcon/InputWithIcon";
import { DepartmentsList } from "./Components/DepartmentsList/DepartmentsList";
import styles from "./Departments.module.css";

export function Departments() {
  return (
    <div className={styles["departments-wrapper"]}>
      <header>
        <h1>Departamentos</h1>
      </header>

      <section>
        <Input
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
