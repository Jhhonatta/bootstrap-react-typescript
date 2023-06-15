import * as yup from "yup";

const FormSchemaCreateTask = yup.object().shape({
  userId: yup.number().required("Campo obrigatório"),
  task: yup.string().required("Campo obrigatório"),
});

export default FormSchemaCreateTask;
