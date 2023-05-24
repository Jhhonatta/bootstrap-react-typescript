import { ContainerDashboard } from "./style";
import { Form } from "react-bootstrap";

const Dashboard = () => {
  return (
    <ContainerDashboard className="containerDashboard d-flex align-items-center">
      <Form>
        <Form.Control
          placeholder="Digite aqui..."
          as="textarea"
          aria-label="With textarea"
        />
      </Form>
    </ContainerDashboard>
  );
};

export default Dashboard;
