import { useNavigate } from "react-router-dom";
import api from "../Service/api";

import { ReactNode, createContext, useState } from "react";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IUserContext {
  onSubmitLogin: (data: any) => Promise<void>;
}

function UserProvider({ children }: any) {
  const navigate = useNavigate();

  const [task, setTask] = useState<any>([]);

  const onSubmitLogin = async (data: any) => {
    return navigate("/dashboard", { replace: true });
  };

  return (
    <UserContext.Provider value={{ onSubmitLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
