import { useLocation } from "react-router-dom";
import api from "../Service/api";

function UserProvider() {
  const login = useLocation();

  const onSubmitLogin = async (data: any) => {
    await api.post("/login", data).then((response) => {
      localStorage.setItem("@token-login", `${response.data.token}`);
      localStorage.setItem("@user", JSON.stringify(response.data.user));
    });
  };

  return;
}

export default UserProvider;
