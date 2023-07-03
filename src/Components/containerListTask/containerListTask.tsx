import { ContainerListTask } from "./style";
import CardTask from "../cardTask/cardTask";
const DashboardListTask = () => {
  return (
    <ContainerListTask className="d-flex justify-content-center h-100 m-1">
      <CardTask />
    </ContainerListTask>
  );
};

export default DashboardListTask;
