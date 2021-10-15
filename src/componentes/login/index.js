import { ContainerForm } from "../cardForm/style";
import * as yup from "yup"
import {yupResolver}from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";

const Login = () => {

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório")

  })

  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitFunction =(data)=>{
    console.log(data)
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>login</h1>
      <input placeholder="Username" {...register("username")}/>
      <input placeholder="Password" {...register("password")}/>
      <button>Entrar</button>
      <p>Não tem uma conta? Cadastre-se</p>
      </form>
    </ContainerForm>
  );
};
export default Login;
