import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import PermanentSidebar from "../../components/PermanentSidebar";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../providers/auth";
import {
  Container,
  NameContainer,
  DataContainer,
  SubmitButton,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const CreateGroup = () => {
  const history = useHistory();
  const { auth } = useAuth();
  if (!auth) {
    history.push("/");
  }
  const token = JSON.parse(localStorage.getItem("token"));

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const handleCreateGroup = (data) => {
    api
      .post("/groups/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => toast.success("Grupo criado!"))
      .catch((_) => toast.error("Erro ao criar o Grupo!"));
    history.push("/allgroups");
  };

  return (
    <>
      <Header />
      <PermanentSidebar />
      <Container onSubmit={handleSubmit(handleCreateGroup)}>
        <NameContainer>
          <TextField
            variant="outlined"
            label="Grupo"
            style={{ width: "68%" }}
            {...register("name")}
          ></TextField>
        </NameContainer>
        <DataContainer>
          <TextField
            variant="standard"
            label="Descrição"
            style={{ width: "70%" }}
            {...register("description")}
          ></TextField>
          <TextField
            variant="standard"
            label="Categoria"
            style={{ width: "70%" }}
            {...register("category")}
          ></TextField>
          <SubmitButton type="submit">Criar</SubmitButton>
        </DataContainer>
      </Container>
    </>
  );
};
export default CreateGroup;
