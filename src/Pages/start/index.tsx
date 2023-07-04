import { Button, Container, Navbar } from "react-bootstrap";
import { ContainerLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { GiNotebook } from "react-icons/gi";

const Login = () => {
  const { start } = useContext(UserContext);

  return (
    <ContainerLogin className="containerLogin d-flex flex-column h-100 m-0">
      <Navbar className="navbar-inicial  justify-content-center">
        {" "}
        <p className="title-iniciar m-0"> Notepad </p>
      </Navbar>
      <Container className="d-flex align-items-center h-100">
        <Container className="d-md-flex ">
          <Container className="container-iniciar  d-flex justify-content-center flex-column h-100">
            <p className="text-white ">Anote suas ideias </p>

            <p className="text-white"> Armazene informações temporárias </p>

            <p className="text-white "> Faça sua lista de afazeres </p>

            <p className="text-finish">
              {" "}
              Todas as suas tarefas em um só lugar ;){" "}
            </p>
          </Container>
          <Container className="d-flex align-items-center justify-content-md-center h-md-100">
            <Container className="d-flex align-items-center justify-content-md-center flex-md-column h-100">
              <GiNotebook className="icon-iniciar d-none d-md-block" />
              <Button
                variant="primary"
                type="submit"
                className="button-iniciar"
                onClick={start}
              >
                Iniciar
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </ContainerLogin>
  );
};

export default Login;
