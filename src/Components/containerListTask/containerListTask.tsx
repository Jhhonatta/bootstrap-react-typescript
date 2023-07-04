import { ContainerListTask } from "./style";
import CardTask from "../cardTask/cardTask";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ListGroup } from "react-bootstrap";

const DashboardListTask = () => {
  const { listTask } = useContext(UserContext);
  return (
    <ContainerListTask className="d-flex justify-content-center h-100 m-1">
      <ListGroup className="w-75">
        {listTask.map((item, index) => (
          <CardTask
            key={index}
            task={item.tasks}
            number={index + 1}
            indice={index}
          />
        ))}
      </ListGroup>
    </ContainerListTask>
  );
};

export default DashboardListTask;
