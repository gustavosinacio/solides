import styles from "./DepartmentRow.module.css";

type DepartmentRowProps = {
  title: string;
  lastUpdatedAt: Date;
  numberOfEmployees: number;
  numberOfWarnings: number;
};

export const DepartmentRow: React.FC<DepartmentRowProps> = ({
  title,
  lastUpdatedAt,
  numberOfEmployees = 0,
  numberOfWarnings = 0,
}) => {
  return (
    <tr className={styles.row}>
      <td>{title}</td>
      <td>
        {Intl.DateTimeFormat("pt-BR", {
          dateStyle: "short",
        }).format(lastUpdatedAt)}
      </td>
      <td>{numberOfEmployees}</td>
      <td>{numberOfWarnings}</td>
    </tr>
  );
};
