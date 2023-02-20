import { useState, ChangeEvent, FocusEvent, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { InputWithIcon } from "../../components/InputWithIcon";

import { SearchDepartments } from "../../hooks/useDepartments";

import styles from "./DepartmentsSearchInput.module.css";

type DepartmentsSearchInputProps = {
  searchDepartments: SearchDepartments;
};

export function DepartmentsSearchInput({
  searchDepartments,
}: DepartmentsSearchInputProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

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
    <>
      <InputWithIcon
        aria-label="search-input"
        wrapperClassName={styles["search-department"]}
        placeholder="Pesquise um departamento"
        type="text"
        icon={MagnifyingGlass}
        value={searchValue}
        onChange={handleSearchInputChange}
        onFocus={handleInputFocus}
      />
    </>
  );
}
