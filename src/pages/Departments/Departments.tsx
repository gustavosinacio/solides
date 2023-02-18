import { MagnifyingGlass } from "phosphor-react";
import { useState, ChangeEvent, useEffect, FocusEvent } from "react";
import { InputWithIcon } from "../../components/InputWithIcon";
import { DepartmentsList } from "./Components/DepartmentsList";
import styles from "./Departments.module.css";

import departments from "../../mocks/departments.json";
import { searchStringInObjectArray } from "../utils";

export type Department = {
  id: number;
  title: string;
  lastUpdatedAt: string;
  numberOfEmployees: number;
  numberOfWarnings: number;
  departmentHead: string;
};

export function Departments() {
  const [searchValue, setSearchValue] = useState<string>("department w");
  const [timeoutId, setTimeoutId] = useState<number>();
  const [filteredDepartments, setFilteredDepartments] =
    useState<Department[]>(departments);

  const handleSearchInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  const handleInputFocus = ({ target }: FocusEvent<HTMLInputElement>) => {
    target.select();
  };

  useEffect(() => {
    const found = searchStringInObjectArray<Department>(
      departments,
      searchValue
    );

    clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        setFilteredDepartments(found);
      }, 500)
    );
  }, [searchValue]);

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
          value={searchValue}
          onChange={handleSearchInputChange}
          onFocus={handleInputFocus}
        />

        <DepartmentsList data={filteredDepartments} />
      </section>
    </div>
  );
}
