import { Button, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const ModalProfile = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Perfil
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="">
          <Modal.Title className="p-0">Dados pessoais</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Nome</h5>
          <p>{user.name}</p>
          <h5>Idade</h5>
          <p>{user.age}</p>
          <h5>Cidade</h5>
          <p>{user.city}</p>
          <h5>Email</h5>
          <p>{user.email}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProfile;
