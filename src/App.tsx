import "./global.css";

import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import styles from "./App.module.css";

export function App() {
  return (
    <BrowserRouter>
      <div className={styles["app-wrapper"]}>
        <Router />
      </div>
    </BrowserRouter>
  );
}
