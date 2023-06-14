import { ContainerDashboard } from "./style";
import { Button, Modal, Navbar, Nav, Form } from "react-bootstrap";
import { useState } from "react";
import ModalProfile from "../../Components/modalProfile";
import ModalAddTask from "../../Components/modalAddTask";

const Dashboard = () => {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <ContainerDashboard className="containerDashboard">
      <Navbar bg="light" expand="sm" className="p-3 m-0">
        <Navbar.Brand className="mr-0 col-6">Notepad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            <ModalProfile />
            <ModalAddTask />
            {/* <Button variant="primary" onClick={ModalProfile}>
              Perfil
            </Button> */}

            {/* <Modal show={showModal} onHide={closeModal} centered>
              <Modal.Header closeButton className="">
                <Modal.Title className="p-0">Dados pessoais</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={closeModal}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Modal> */}

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
