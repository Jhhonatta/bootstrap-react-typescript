import { Button, Container, Navbar } from "react-bootstrap";
import { ContainerLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { GiNotebook } from "react-icons/gi";
import { Check2Square, BagCheckFill } from "react-bootstrap-icons";

const HomePage = () => {
  const { start } = useContext(UserContext);

  return (
    <ContainerLogin className="d-flex flex-column h-100 m-0">
      <Navbar className="navbar-inicial  justify-content-center">
        {" "}
        <p className="title-iniciar m-0"> Notepad </p>
      </Navbar>
      <Container className="d-flex align-items-center h-100">
        <Container className="d-md-flex ">
          <Container className="container-iniciar  d-flex justify-content-center flex-column h-100">
            <p className="text-white ">
              Anote suas ideias <Check2Square className="check-icon" />{" "}
            </p>

            <p className="text-white">
              {" "}
              Armazene informações temporárias{" "}
              <Check2Square className="check-icon" />{" "}
            </p>

            <p className="text-white ">
              {" "}
              Monte sua lista de afazeres{" "}
              <Check2Square className="check-icon" />{" "}
            </p>

            <p className="text-finish">
              {" "}
              Todas as suas tarefas em um só lugar
              <BagCheckFill className="check-full" />{" "}
            </p>
          </Container>
          <Container className="d-flex align-items-center justify-content-md-center h-md-100">
            <Container className="d-flex align-items-center justify-content-md-center flex-md-column h-100 p-0">
              <GiNotebook className="icon-iniciar d-none d-md-block" />
              <Button
                variant="primary"
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

export default HomePage;
