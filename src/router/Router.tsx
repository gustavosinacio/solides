import { useContext, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { Protected } from "../templates/Protected";
import { Login } from "../pages/Auth/Login/Login";
import { Departments } from "../pages/Departments";
import { FallbackPage } from "../pages/FallbackPage";

import { UserContext } from "../contexts/userContext";

export function Router() {
  const { user } = useContext(UserContext);

  const isUserAuthenticated = useMemo(() => !!user.email, [user.email]);

  console.log(98211, isUserAuthenticated);

  return isUserAuthenticated ? (
    <Routes>
      <Route element={<Protected isUserAuthenticated={isUserAuthenticated} />}>
        <Route index path="/" element={<Departments />} />
        <Route path="/departments" element={<Departments />} />
      </Route>
      <Route path="*" element={<FallbackPage />} />
    </Routes>
  ) : (
    <Login />
  );
}
