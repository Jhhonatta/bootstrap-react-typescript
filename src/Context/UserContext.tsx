import { useNavigate } from "react-router-dom";

import { createContext, useState } from "react";

import { ReactNode } from "react";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface ITasksProviderProps {
  children: ReactNode;
}

interface ITask {
  tasks: string;
  number: number;
}

interface IUserContext {
  start: (data: any) => void;
  exit: (data: any) => void;
  task: string;
  setTask: (data: string) => void;
  listTask: ITask[];
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
