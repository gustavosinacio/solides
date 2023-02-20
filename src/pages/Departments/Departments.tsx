import { CircleNotch } from "phosphor-react";

import { DepartmentsSearchInput } from "../../components/DepartmentsSearchInput";
import { DepartmentsList } from "./Components/DepartmentsList";

import { useDepartments } from "../../hooks/useDepartments";

import styles from "./Departments.module.css";

export function Departments() {
  const { departments, searchDepartments, isFetching } = useDepartments();

  return (
    <div className={styles["departments-wrapper"]}>
      <header>
        <h1>Departamentos</h1>
      </header>

      <section>
        <DepartmentsSearchInput searchDepartments={searchDepartments} />

        {isFetching ? (
          <div className={styles.loading}>
            <CircleNotch className={styles.rotate} />
          </div>
        ) : (
          <DepartmentsList data={departments} />
        )}
      </section>
    </div>
  );
}
