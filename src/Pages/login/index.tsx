import { Form, Button, Container } from "react-bootstrap";
import { ContainerLogin } from "./style";

const Login = () => {
  return (
    <ContainerLogin className="container d-flex align-items-center justify-content-center h-100 max-width: 900px;">
      <Form className="row col-md-6">
        <Form.Group className="col-12 mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" />
          <Form.Text className="text-warning">
            Não compartilhe seu e-mail com terceiros.
          </Form.Text>
        </Form.Group>

        <Form.Group className="col-12 mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>
        <Form.Group className="d-flex flex-column">
          <Button variant="primary" type="submit" className="col-md-6 btn-sm">
            Login
          </Button>
          <Container className="mt-3 p-0">
            <Form.Text>Não possui cadastro?</Form.Text>
            <Button className="bt-record">Clique aqui</Button>
          </Container>
        </Form.Group>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
