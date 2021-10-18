import { ContainerForm } from "../../componentes/cardForm/style";
import * as yup from "yup"
import {yupResolver}from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom"
import { useAuth } from "../../providers/auth";

const Login = () => {

  const history = useHistory()
  const {signIn, auth}= useAuth();
  

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório")

  })

  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitLogin =(data)=>{
    signIn(data, history)
    console.log(`logado como ${data.username}`)
  }
  if(auth){
    return <Redirect to="/habits"/>
  }
  else{
    <Redirect to="/"/>
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
      <h1>login</h1>
      <input placeholder="Username" {...register("username")}/>
      <span>{errors.username?.message}</span>
      <input placeholder="Password" {...register("password")}/>
      <span>{errors.password?.message}</span>
      <button type="submit">Entrar</button>
      <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
      </form>
    </ContainerForm>
  );
};
export default Login;
