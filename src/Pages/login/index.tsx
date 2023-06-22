import { Button, Container } from "react-bootstrap";
import { ContainerLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);

  return (
    <ContainerLogin className="containerLogin d-flex align-items-center justify-content-center  h-100 m-0">
      <Container className="d-md-flex">
        <Container className="container-iniciar d-flex justify-content-center flex-column w-auto">
          <p className="title-iniciar text-center fs-10vw"> Notepad </p>
          <p className="text-white ">Anote suas ideias </p>

          <p className="text-white"> Armazene informações temporárias </p>

          <p className="text-white "> Faça sua lista de afazeres </p>

          <p className="text-finish">
            {" "}
            Todas as suas tarefas em um só lugar ;){" "}
          </p>
        </Container>
        <Container className="d-flex justify-content-center flex-column col-6">
          <Button
            variant="primary"
            type="submit"
            className="button-iniciar"
            onClick={onSubmitLogin}
          >
            Iniciar
          </Button>
        </Container>
      </Container>
    </ContainerLogin>
  );
};

export default Login;
