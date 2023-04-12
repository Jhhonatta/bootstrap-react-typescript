import Login from "../Pages/login";
import { Route, Routes } from "react-router-dom";

const Way = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
    </Routes>
  );
};

export default Way;
