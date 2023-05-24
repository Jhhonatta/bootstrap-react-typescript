import { useNavigate } from "react-router-dom";
import api from "../Service/api";

import { ReactNode, createContext } from "react";

interface IUserContext {
  onSubmitLogin: (data: any) => Promise<void>;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const navigate = useNavigate();

  const onSubmitLogin = async (data: any) => {
    await api.post("/login", data).then((response) => {
      localStorage.setItem(
        "@accessToken-login",
        `${response.data.accessToken}`
      );
      localStorage.setItem("@users", JSON.stringify(response.data.user));
      navigate("/dashboard", { replace: true });
    });
  };

  return (
    <UserContext.Provider value={{ onSubmitLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
