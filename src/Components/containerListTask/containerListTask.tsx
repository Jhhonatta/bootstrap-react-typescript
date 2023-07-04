import { ContainerListTask } from "./style";
import CardTask from "../cardTask/cardTask";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ListGroup } from "react-bootstrap";

const DashboardListTask = () => {
  const { listTask } = useContext(UserContext);
  return (
    <ContainerListTask className="d-flex justify-content-center h-100 m-1">
      <ListGroup>
        {listTask.map((item, index) => (
          <CardTask key={index} task={item.tasks} number={item.number} />
        ))}
      </ListGroup>
    </ContainerListTask>
  );
};

export default DashboardListTask;
