import { MagnifyingGlass } from "phosphor-react";
import { useState, ChangeEvent, useEffect, FocusEvent } from "react";

import { InputWithIcon } from "../../components/InputWithIcon";
import { DepartmentsList } from "./Components/DepartmentsList";

import { Department, useDepartments } from "../../hooks/useDepartments";

import { searchStringInObjectArray } from "../utils";

import styles from "./Departments.module.css";

export function Departments() {
  const { departments } = useDepartments();

  const [searchValue, setSearchValue] = useState<string>("department w");
  const [timeoutId, setTimeoutId] = useState<number>();

  const [filteredDepartments, setFilteredDepartments] = useState<Department[]>(
    []
  );

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
  }, [departments, searchValue]);

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
