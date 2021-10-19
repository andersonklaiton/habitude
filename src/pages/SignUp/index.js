import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, RedirectMessage, Button, Container } from "./styles";
import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const history = useHistory();
  const { auth } = useAuth();

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
      .then((_) => toast.success("Conta criada com sucesso!"))

      .catch((_) => toast.error("Nome de usuário já existente!"));
  };
  if (auth) {
    history.push("/dashboard");
  }
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>SIGNUP</h1>
          <TextField
            id="outlined-basic"
            label="Username"
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
            label="Password"
            variant="outlined"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button style={{ width: "100px" }} type="submit">
            Cadastrar
          </Button>
          <RedirectMessage>
            Já possui uma conta? <Link to="/">Logar</Link>
          </RedirectMessage>
        </Form>
      </Container>
    </>
  );
};
export default SignUp;
