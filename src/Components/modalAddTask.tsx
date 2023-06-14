import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const ModalAddTask = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Adicionar tarefa
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddTask;
