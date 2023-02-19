import "./global.css";

import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import styles from "./App.module.css";
import { UserContextProvider } from "./contexts/userContext/userContext";

export function App() {
  return (
    <BrowserRouter>
      <div className={styles["app-wrapper"]}>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}
