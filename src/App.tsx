import "./global.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Departments } from "./pages/Departments";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles["dashboard-wrapper"]}>
        <Sidebar />
        <Departments />
      </div>
    </>
  );
}
