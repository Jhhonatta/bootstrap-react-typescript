import Login from "../Pages/start";
import Dashboard from "../Pages/dashboard";

import { Route, Routes } from "react-router-dom";

const Way = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
    </Routes>
  );
};

export default Way;
