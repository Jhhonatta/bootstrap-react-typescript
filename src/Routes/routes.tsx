import HomePage from "../Pages/homePage";
import Dashboard from "../Pages/dashboard";

import { Route, Routes } from "react-router-dom";

const Way = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
    </Routes>
  );
};

export default Way;
