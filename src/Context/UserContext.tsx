import { useLocation } from "react-router-dom";
import api from "../Service/api";

import { ReactNode, createContext } from "react";

interface IUserContext {
  login: any;
  onSubmitLogin: (data: any) => Promise<void>;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const login = useLocation();

  const onSubmitLogin = async (data: any) => {
    await api.post("/login", data).then((response) => {
      localStorage.setItem(
        "@accessToken-login",
        `${response.data.accessToken}`
      );
      localStorage.setItem("@users", JSON.stringify(response.data.user));
    });
  };

  return (
    <UserContext.Provider value={{ login, onSubmitLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
