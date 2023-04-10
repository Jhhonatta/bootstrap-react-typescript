import * as yup from "yup";

const FormSchemaLogin = yup.object().shape({
  email: yup.string().required("Campo vazio"),
  password: yup.string().required("Campo vazio"),
});

export default FormSchemaLogin;
