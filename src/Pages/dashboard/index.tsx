import { ContainerDashboard } from "./style";
import { Button, Form } from "react-bootstrap";

const Dashboard = () => {
  return (
    <ContainerDashboard className="containerDashboard d-flex align-items-center">
      <Form>
        <Form.Control
          placeholder="Digite aqui..."
          as="textarea"
          aria-label="With textarea"
        />
        <Button>Adicionar</Button>
      </Form>
    </ContainerDashboard>
  );
};

export default Dashboard;
