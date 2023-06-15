import { Form, Button, Container, FormText } from "react-bootstrap";
import { ContainerLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSchemaLogin from "../../Validations/validationLogin";

const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaLogin),
  });

  return (
    <ContainerLogin className="containerLogin d-flex align-items-center justify-content-center h-100 m-0">
      <Button
        variant="primary"
        type="submit"
        className="button-login col-6 col-sm-4 col-md-6; btn-sm"
        onClick={onSubmitLogin}
      >
        Login
      </Button>
      <Container className=" d-flex justify-content-center mt-3 p-0">
        <Form.Text>Não possui cadastro?</Form.Text>
        <Button className="bt-record ">Clique aqui</Button>
      </Container>
      {/* </Form.Group> */}
      {/* </Form> */}
    </ContainerLogin>
  );
};

export default Login;
