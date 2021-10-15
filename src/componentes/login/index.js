import { ContainerForm } from "../cardForm/style";

const Login = () => {
  return (
    <ContainerForm>
      <h1>login</h1>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Entrar</button>
      <p>Não tem uma conta? Cadastre-se</p>
    </ContainerForm>
  );
};
export default Login;
