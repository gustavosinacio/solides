import { useContext, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { Protected } from "../templates/Protected";
import { Login } from "../pages/Auth/Login/Login";
import { Departments } from "../pages/Departments";

import { UserContext } from "../contexts/userContext/userContext";

export function Router() {
  const {
    user: { email },
  } = useContext(UserContext);

  const isUserAuthenticated = useMemo(() => !!email, [email]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Protected isUserAuthenticated={isUserAuthenticated} />}
      >
        <Route path="/departments" element={<Departments />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
