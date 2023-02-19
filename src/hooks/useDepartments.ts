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

  async function fetchDepartments() {
    const data = await (await fetch(`${baseURL}/departments`)).json();

    setDepartments(data);
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  return {
    departments,
    fetchDepartments,
  };
};
