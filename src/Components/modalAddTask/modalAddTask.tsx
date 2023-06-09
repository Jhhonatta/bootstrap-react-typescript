import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ContainerModal } from "./style";

const ModalAddTask = () => {
  const { setTask, task, listTask, setListTask } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const [numberTask, setNumberTask] = useState(1);

  const handlerControl = (event: React.FormEvent) => {
    event.preventDefault();
    setNumberTask(numberTask + 1);
    setListTask([
      ...listTask,
      {
        id: numberTask,
        tasks: task,
      },
    ]);
    setShowModal(false);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
        style={{ backgroundColor: "rgb(255, 182, 193)", border: "none" }}
      >
        Adicionar tarefa
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <ContainerModal className="estouaqui">
          <Modal.Header closeButton className="">
            <Modal.Title className="p-0">Nova tarefa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handlerControl}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Digite sua nova tarefa"
                  onChange={(event) => setTask(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="p-0 d-flex justify-content-center mt-1">
                <Button
                  variant="primary"
                  type="submit"
                  className="adicionar-button"
                >
                  Adicionar
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </ContainerModal>
      </Modal>
    </>
  );
};

export default ModalAddTask;
