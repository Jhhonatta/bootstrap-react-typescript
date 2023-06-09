import { ContainerDashboard } from "./style";
import { Button, Form, Navbar, Nav } from "react-bootstrap";

const Dashboard = () => {
  return (
    <ContainerDashboard className="containerDashboard">
      <Navbar bg="light" expand="sm" className="p-3 m-0">
        <Navbar.Brand className="mr-0 col-6">Notepad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            <Button>Perfil</Button>
            <Button>Adicionar tarefa</Button>
            <Button>Sair</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Form>
        <Form.Control
          placeholder="Digite aqui..."
          as="textarea"
          aria-label="With textarea"
        />
        <Button>Adicionar</Button>
      </Form> */}
    </ContainerDashboard>
  );
};

export default Dashboard;
