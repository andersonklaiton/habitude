import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { Container, Form, Button, RedirectMessage } from "../Login/styles";
import { TextField } from "@material-ui/core";

const Login = () => {
  const history = useHistory();
  const { logIn, auth } = useAuth();

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitLogin = (data) => {
    logIn(data, history);
  };
  if (auth) {
    history.push("/habits");
    return <Redirect to="/habits" />;
  } 
  else {
    history.push("/");
    <Redirect to="/" />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitLogin)}>
        <h1>login</h1>
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
          label="Password"
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button style={{ width: "100px" }} type="submit">
          Entrar
        </Button>
        <RedirectMessage>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </RedirectMessage>
      </Form>
    </Container>
  );
};
export default Login;
