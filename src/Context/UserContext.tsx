import { useNavigate } from "react-router-dom";
import api from "../Service/api";

import { ReactNode, createContext } from "react";

interface IUserContext {
  onSubmitLogin: (data: any) => Promise<void>;
  user: IUserObjects;
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserObjects {
  age: number;
  city: string;
  email: string;
  name: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const navigate = useNavigate();

  const user: IUserObjects = JSON.parse(localStorage.getItem("@users") || "{}");

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
    <UserContext.Provider value={{ onSubmitLogin, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
