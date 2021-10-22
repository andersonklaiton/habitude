import Header from "../../components/Header";
import PermanentSidebar from "../../components/PermanentSidebar";
import { TextField } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { BsTrophy } from "react-icons/bs";

import {
  Container,
  NameContainer,
  ContentContainer,
  DataContainer,
  SubmitButton,
} from "./styles";

import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { useAuth } from "../../providers/auth";

const CreateGoal = () => {
  const { auth } = useAuth();
  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

  const token = JSON.parse(localStorage.getItem("token"));

  const { id } = useParams();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup.number().default(() => 100),
    group: yup.number().default(() => Number(id)),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const handleCreateGoal = (data) => {
    api
      .post("/goals/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => toast.success("Objetivo criado!"))
      .catch((_) => toast.error("Erro!"));
    history.push(`/group/${id}/`);
  };
  return (
    <>
      <Header />
      <PermanentSidebar />

      <Container onSubmit={handleSubmit(handleCreateGoal)}>
        <NameContainer>
          <ContentContainer>
            <BsTrophy style={{ fontSize: "25px" }} />
            <h1>Goal</h1>
          </ContentContainer>
        </NameContainer>
        <DataContainer>
          <TextField
            variant="standard"
            label="Titulo"
            style={{ width: "70%" }}
            {...register("title")}
          ></TextField>
          <TextField
            variant="standard"
            label="Dificuldade"
            style={{ width: "70%" }}
            {...register("difficulty")}
          ></TextField>
          <SubmitButton type="submit">Criar</SubmitButton>
        </DataContainer>
      </Container>
    </>
  );
};

export default CreateGoal;
