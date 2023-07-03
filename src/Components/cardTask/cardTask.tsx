import { Card, Button, Row, Col } from "react-bootstrap";
import { StyleCard } from "./style";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const CardTask = () => {
  const { listTask } = useContext(UserContext);

  return (
    <StyleCard>
      <Card className="mt-1">
        <Card.Body>
          <Row>
            <Col xs={8}>
              <Card.Title className="text-start">Tarefa 1</Card.Title>
            </Col>
            <Col xs={4} className="text-end">
              <Button className="m-0 p-0 button-delete">
                <BsTrash />
              </Button>
            </Col>
          </Row>
          <Card.Text className="text-start">
            Alguma descrição sobre o cardsdfsdfsdfsdfsdfs
            dfsdfsdffssdfdsfsdfsdfsdf.
          </Card.Text>
        </Card.Body>
      </Card>
    </StyleCard>
  );
};

export default CardTask;
