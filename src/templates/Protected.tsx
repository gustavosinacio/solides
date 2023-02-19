import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { UserData } from "../contexts/userContext/userContext";

import styles from "./Protected.module.css";

type ProtectedProps = {
  isUserAuthenticated: boolean;
};

export function Protected({
  isUserAuthenticated,
}: ProtectedProps): React.ReactElement<React.ReactNode> {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated) navigate("login");
    else navigate("/");
  }, []);

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
