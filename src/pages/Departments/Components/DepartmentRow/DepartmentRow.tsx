type DepartmentRowProps = {
  title: string;
  lastUpdatedAt: Date;
  numberOfEmployees: number;
  numberOfWarnings: number;
  departmentHead: string;
};

export const DepartmentRow: React.FC<DepartmentRowProps> = ({
  title,
  lastUpdatedAt,
  numberOfEmployees = 0,
  numberOfWarnings = 0,
  departmentHead,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>
        {Intl.DateTimeFormat("pt-BR", {
          dateStyle: "short",
        }).format(lastUpdatedAt)}
      </td>
      <td>{numberOfEmployees}</td>
      <td>{numberOfWarnings}</td>
      <td>{departmentHead}</td>
    </tr>
  );
};
