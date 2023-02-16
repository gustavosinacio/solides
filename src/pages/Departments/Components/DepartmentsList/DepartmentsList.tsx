import departments from "../../../../mocks/departments.json";

import { DepartmentRow } from "../DepartmentRow/DepartmentRow";
import styles from "./DepartmentsList.module.css";

export function DepartmentsList() {
  return (
    <div className={styles["departments-list-wrapper"]}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Úlltima atualização</th>
            <th>Nº de colaboradores</th>
            <th>Nº Avisos</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(
            ({ title, lastUpdatedAt, numberOfEmployees, numberOfWarnings }) => (
              <DepartmentRow
                title={title + (Math.random() * 10000).toFixed(0)}
                lastUpdatedAt={new Date(lastUpdatedAt)}
                numberOfEmployees={numberOfEmployees}
                numberOfWarnings={numberOfWarnings}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
