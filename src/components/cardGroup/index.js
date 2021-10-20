import {
  ButtonContainer,
  Container,
  DataButtonDiv,
  DataContainer,
  NameContainer,
} from "./styles";

import Header from "../Header";
import PermanentSidebar from "../PermanentSidebar";
import axios from "axios";
import { toast } from "react-toastify";

const CardGroup = ({ name, category, description, groupId }) => {
  const submitEnter = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => toast.success("Inscrito com sucesso"))
      .catch(() => toast.error("Erro ao se inscrever"));
  };

  return (
    <>
      <Header />
      <PermanentSidebar />
      <Container>
        <NameContainer>
          <p>{name}</p>
        </NameContainer>
        <DataButtonDiv>
          <DataContainer>
            <p>Categoria: {category}</p>
            <p>Descrição: {description}</p>
          </DataContainer>

          <ButtonContainer onClick={() => submitEnter(groupId)}>
            <p>Entrar</p>
          </ButtonContainer>
        </DataButtonDiv>
      </Container>
    </>
  );
};

export default CardGroup;
