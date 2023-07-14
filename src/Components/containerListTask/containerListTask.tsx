import { ContainerListTask } from "./style";
import CardTask from "../cardTask/cardTask";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ListGroup } from "react-bootstrap";

const DashboardListTask = () => {
  const { listTask } = useContext(UserContext);

  return (
    <ContainerListTask className="d-flex justify-content-center pt-2 vh-100">
      {listTask.length > 0 ? (
        <ListGroup className="w-75 mb-2 list-task">
          <ListGroup.Item className="list-group">
            {listTask.map((item, index) => (
              <CardTask
                key={index}
                task={item.tasks}
                number={index + 1}
                indice={index}
              />
            ))}
          </ListGroup.Item>
        </ListGroup>
      ) : null}
    </ContainerListTask>
  );
};

export default DashboardListTask;
