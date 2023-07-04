import { useNavigate } from "react-router-dom";

import { createContext, useState } from "react";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface ListTask {
  tasks: string;
  number: number;
}

interface IUserContext {
  onSubmitLogin: (data: any) => Promise<void>;
  logout: (data: any) => Promise<void>;
  task: string;
  setTask: (data: any) => void;
  listTask: ListTask[];
  setListTask: (data: any) => void;
}

function UserProvider({ children }: any) {
  const navigate = useNavigate();

  const [task, setTask] = useState<string>("");

  const [listTask, setListTask] = useState<[]>([]);

  const onSubmitLogin = async (data: any) => {
    return navigate("/dashboard", { replace: true });
  };

  const logout = async (data: any) => {
    return navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{ onSubmitLogin, logout, task, setTask, listTask, setListTask }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
