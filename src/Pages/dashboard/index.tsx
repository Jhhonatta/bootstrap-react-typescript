import { ContainerDashboard } from "./style";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import ModalAddTask from "../../Components/modalAddTask/modalAddTask";
import DashboardListTask from "../../Components/containerListTask/containerListTask";

const Dashboard = () => {
  const { exit } = useContext(UserContext);

  return (
    <ContainerDashboard className="vh-100">
      <Navbar expand="sm" className="p-3 m-0 navbar">
        <Navbar.Brand className="mr-0 col-6 navbar-brand">Notepad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            <ModalAddTask />
            <Button onClick={exit} className="custom-button">
              Sair
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <DashboardListTask />
    </ContainerDashboard>
  );
};

export default Dashboard;
