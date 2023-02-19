import { useState } from "react";

import { delay } from "../mocks/delay";
import mockedDepartments from "../mocks/departments.json";
import { searchStringInObjectArray } from "../utils";

export type Department = {
  id: number;
  title: string;
  lastUpdatedAt: string;
  numberOfEmployees: number;
  numberOfWarnings: number;
  departmentHead: string;
};

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  async function searchDepartments(searchString: string) {
    setIsFetching(true);
    try {
      await delay();

      const data = searchStringInObjectArray<Department>(
        mockedDepartments,
        searchString
      );

      setDepartments(data);
    } catch {
    } finally {
      setIsFetching(false);
    }
  }

  return {
    departments,
    isFetching,
    searchDepartments,
  };
};
