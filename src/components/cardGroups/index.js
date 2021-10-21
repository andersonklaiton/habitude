import axios from "axios";
import { toast } from "react-toastify";
import {
  Container,
  NameContainer,
  DataButtonDiv,
  DataContainer,
  ButtonContainer,
} from "./styles";

function CardGroups({ group }) {
  const { name, description, creator, id } = group;

  const submitExit = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
	.delete(`https://kenzie-habits.herokuapp.com/groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Sucesso ao sair do grup!"))
      .catch((_) => toast.error("Erro ao sair do grupo!"));
  };

  return (
    <Container>
      <NameContainer>
        <p> {name}</p>
      </NameContainer>
      <DataButtonDiv>
        <DataContainer>
          <p>Descrição: {description}</p>
          <p>Criador: {creator.username}</p>
        </DataContainer>
        <ButtonContainer onClick={() => submitExit(id)}>
          <p>Sair</p>
        </ButtonContainer>
      </DataButtonDiv>
    </Container>
  );
}
export default CardGroups;
