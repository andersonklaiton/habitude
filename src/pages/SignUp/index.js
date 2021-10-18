import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, RedirectMessage, Button, Container } from "./styles";
import api from "../../services/api";

// import { Link } from "react-router-dom";

const SignUp = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Mínimo de 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitFunction = (data) => {
    api
      .post("/users/", data)
      .then((response) => console.log(response))

      .catch((_) => console.log("Nome de usuário já existe!"));
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>SIGNUP</h1>
          <TextField
            id="outlined-basic"
            label="Usuário"
            variant="outlined"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button style={{ width: "100px" }} type="submit">
            Cadastrar
          </Button>
          <RedirectMessage>Não tem uma conta? Cadastre-se</RedirectMessage>
        </Form>
      </Container>
    </>
  );
};
export default SignUp;
