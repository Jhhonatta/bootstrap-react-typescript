import { ContainerDashboard } from "./style";
import { Button, Modal, Navbar, Nav, Form } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import ModalAddTask from "../../Components/modalAddTask";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const { logout } = useContext(UserContext);

  return (
    <ContainerDashboard className="containerDashboard">
      <Navbar bg="light" expand="sm" className="p-3 m-0">
        <Navbar.Brand className="mr-0 col-6">Notepad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            <ModalAddTask />
            <Button onClick={logout}>Sair</Button>
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
