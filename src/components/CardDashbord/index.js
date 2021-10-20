
import {
  ButtonContainer,
  Container,
  DataButtonDiv,
  DataContainer,
  NameContainer,
  TrashButton,
} from "./styles";
import { BsTrash } from "react-icons/bs";
import { useAuth } from "../../providers/auth";
import { Redirect, useHistory } from "react-router-dom";

const CardHabits = ({ habits }) => {
  const { auth } = useAuth();
  const history = useHistory();
  
  const { title, category, difficulty, frequency} = habits;
  return (
      <>
    <Container>
      <NameContainer>
        <p>{title}</p>
      </NameContainer>
      <DataButtonDiv>
        <DataContainer>
          <p>Categoria: {category}</p>
          <p>Dificuldade: {difficulty}</p>
          <p>Frequencia: {frequency}</p>
        </DataContainer>

        <ButtonContainer>
          <TrashButton>
            <BsTrash />
          </TrashButton>
          <input type="checkbox"></input>
        </ButtonContainer>
      </DataButtonDiv>
    </Container>
    </>
  );
};

export default CardHabits;
