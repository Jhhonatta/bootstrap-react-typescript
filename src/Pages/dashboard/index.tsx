import { ContainerDashboard } from "./style";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import ModalAddTask from "../../Components/modalAddTask/modalAddTask";
import DashboardListTask from "../../Components/containerListTask/containerListTask";
const Dashboard = () => {
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
      <DashboardListTask />
    </ContainerDashboard>
  );
};

export default Dashboard;
