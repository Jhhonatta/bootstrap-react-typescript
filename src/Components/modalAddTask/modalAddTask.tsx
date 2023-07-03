import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const ModalAddTask = () => {
  const { setTask, task, listTask, setListTask } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const handlerControl = (event: React.FormEvent) => {
    event.preventDefault();
    setListTask([
      ...listTask,
      {
        tasks: task,
      },
    ]);
    setShowModal(false);
  };

  useEffect(() => {
    console.log(JSON.stringify(listTask));
    localStorage.setItem("@listTask", JSON.stringify(listTask));
  }, [listTask]);

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Adicionar tarefa
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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
              <Button variant="primary" type="submit">
                Adicionar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAddTask;
