import { useNavigate } from "react-router-dom";
import api from "../Service/api";

import { ReactNode, createContext, useState } from "react";

interface IUserContext {
  onSubmitLogin: (data: any) => Promise<void>;
  user: IUserObjects;
  onSubmitCreateTask: (data: any) => Promise<void>;
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserObjects {
  age: number;
  city: string;
  email: string;
  name: string;
  id: number;
}

interface ITask {
  userId: number;
  task: string;
  id: number;
}

interface IDataCreateTask {
  userId: number;
  task: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken-login");

  const user: IUserObjects = JSON.parse(localStorage.getItem("@users") || "{}");

  const [task, setTask] = useState<ITask[]>([]);

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

  const onSubmitCreateTask = async (data: any) => {
    await api
      .post("/task", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        // const result = response.data;
        console.log(response);
        // setTask([...task, result]);
      });
  };

  return (
    <UserContext.Provider value={{ onSubmitLogin, user, onSubmitCreateTask }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
