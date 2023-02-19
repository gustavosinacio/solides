import { DepartmentRow } from "../DepartmentRow/DepartmentRow";

import { Department } from "../../../../hooks/useDepartments";

import styles from "./DepartmentsList.module.css";

type DepartmentListProps = { data: Department[] };

export function DepartmentsList({ data }: DepartmentListProps) {
  return (
    <div className={styles["departments-list-wrapper"]}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Úlltima atualização</th>
            <th>Colaboradores</th>
            <th>Avisos</th>
            <th>Gestor</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              title,
              lastUpdatedAt,
              numberOfEmployees,
              numberOfWarnings,
              departmentHead,
            }) => (
              <DepartmentRow
                key={id}
                title={title}
                lastUpdatedAt={new Date(lastUpdatedAt)}
                numberOfEmployees={numberOfEmployees}
                numberOfWarnings={numberOfWarnings}
                departmentHead={departmentHead}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
