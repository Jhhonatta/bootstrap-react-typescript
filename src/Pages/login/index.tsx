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
    <ContainerLogin
      className="container d-flex align-items-center justify-content-center h-100 max-width: 900px;"
      onSubmit={handleSubmit(onSubmitLogin)}
    >
      <Form className="row col-md-6">
        <Form.Group className="col-12 mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <FormText className="error row col-md-12 m-0">
            {errors?.email?.message as unknown as string}
          </FormText>
          <Form.Text className="text-warning">
            Não compartilhe seu e-mail com terceiros.
          </Form.Text>
        </Form.Group>

        <Form.Group className="col-12 mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <FormText className="error">
            {errors?.password?.message as unknown as string}
          </FormText>
        </Form.Group>
        <Form.Group className="d-flex flex-column">
          <Button
            variant="primary"
            type="submit"
            className="col-6 col-sm-4 col-md-6; btn-sm"
          >
            Login
          </Button>
          <Container className="mt-3 p-0">
            <Form.Text>Não possui cadastro?</Form.Text>
            <Button className="bt-record ">Clique aqui</Button>
          </Container>
        </Form.Group>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
