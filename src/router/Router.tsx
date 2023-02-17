import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Auth/Login/Login";
import { Departments } from "../pages/Departments";
import { DefaultTemplate } from "../templates/DefaultTemplate";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route path="/departments" element={<Departments />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
