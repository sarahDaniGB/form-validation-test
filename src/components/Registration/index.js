import React from "react";
import GeneralService from "../../services/general-service";
import Form from "./form";

import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Insira um email válido")
    .required("Email é um campo obrigatório"),
  password: Yup.string()
    .required("Senha é um campo obrigatório")
    .min(8, "Insira uma senha com pelo menos 8 digitos."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Senhas precisam ser iguais"
  ),
});

function RegistrationForm(props) {
  const registrationFields = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmitClick = (e) => {
    console.log("Cadastrado com sucesso");
    e.preventDefault();
    if (registrationFields.password === registrationFields.confirmPassword) {
      sendDetailsToServer();
    } else {
      console.log("Senhas nao combinam");
    }
  };

  const sendDetailsToServer = () => {
    if (registrationFields.email.length && registrationFields.password.length) {
      console.log("passou");
      const payload = {
        email: registrationFields.email,
        password: registrationFields.password,
      };

      new GeneralService()
        .create("register", payload)
        .then(function (response) {
          if (response.status === 200) {
            console.log("sucessso");
          } else {
            console.log("Ocorreu um erro");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Por favor insira email e senha válidos");
    }
  };

  return (
    <>
      <Formik
        initialValues={registrationFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmitClick}
      >
        {(props) => <Form {...props} />}
      </Formik>
    </>
  );
}

export default RegistrationForm;
