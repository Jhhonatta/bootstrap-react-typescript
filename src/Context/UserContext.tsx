import { useNavigate } from "react-router-dom";

import { createContext, useState } from "react";

import { ReactNode } from "react";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface ITasksProviderProps {
  children: ReactNode;
}

interface IListTask {
  tasks: string;
  number: number;
}

interface IUserContext {
  start: (data: any) => Promise<void>;
  exit: (data: any) => Promise<void>;
  task: string;
  setTask: (data: any) => void;
  listTask: IListTask[];
  setListTask: (data: any) => void;
}

function UserProvider({ children }: ITasksProviderProps) {
  const navigate = useNavigate();

  const [task, setTask] = useState<string>("");

  const [listTask, setListTask] = useState<[]>([]);

  const start = async () => {
    return navigate("/dashboard", { replace: true });
  };

  const exit = async () => {
    return navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{ start, exit, task, setTask, listTask, setListTask }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
