import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  password: yup.string().required("Insira uma senha"),
  confirmation: yup.string().required("Insira a confirmação"),
  phone: yup.string().required("Insira um telefone"),
});

export const formSchemaLogin = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Insira uma senha"),
});
