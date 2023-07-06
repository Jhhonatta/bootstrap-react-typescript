import { Card, Row, Col } from "react-bootstrap";
import { StyleCard } from "./style";

import ButtonDelete from "../buttonDelete/buttonDelete";

interface ICardTask {
  task: string;
  number: number;
  indice: number;
}

const CardTask = ({ task, number, indice }: ICardTask) => {
  return (
    <StyleCard>
      <Card className="mt-1 card-complete">
        <Card.Body>
          <Row>
            <Col xs={8}>
              <Card.Title className="text-start">Tarefa - {number}</Card.Title>
            </Col>
            <Col xs={4} className="text-end">
              <ButtonDelete index={indice} />
            </Col>
          </Row>
          <Card.Text className="text-start">{task}</Card.Text>
        </Card.Body>
      </Card>
    </StyleCard>
  );
};

export default CardTask;
