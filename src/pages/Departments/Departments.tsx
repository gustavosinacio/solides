import { CircleNotch, MagnifyingGlass } from "phosphor-react";
import { useState, ChangeEvent, useEffect, FocusEvent } from "react";

import { InputWithIcon } from "../../components/InputWithIcon";
import { DepartmentsList } from "./Components/DepartmentsList";

import { useDepartments } from "../../hooks/useDepartments";

import styles from "./Departments.module.css";

export function Departments() {
  const { departments, isFetching, searchDepartments } = useDepartments();

  const [searchValue, setSearchValue] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<number>();

  const handleSearchInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  const handleInputFocus = ({ target }: FocusEvent<HTMLInputElement>) => {
    target.select();
  };

  useEffect(() => {
    clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        searchDepartments(searchValue);
      }, 1000)
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
