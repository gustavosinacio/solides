import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import styles from "./DefaultTemplate.module.css";

export function DefaultTemplate() {
  return (
    <>
      <Header />

      <div className={styles["dashboard-wrapper"]}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
