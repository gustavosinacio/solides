import { useEffect, useState } from "react";

import { baseURL } from "../api";

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

  async function fetchDepartments() {
    setIsFetching(true);
    try {
      const data = await (await fetch(`${baseURL}/departments`)).json();
      setDepartments(data);
    } catch {
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  return {
    departments,
    isFetching,
    fetchDepartments,
  };
};
