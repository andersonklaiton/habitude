import {
  ButtonContainer,
  Container,
  DataButtonDiv,
  DataContainer,
  NameContainer,
  TrashButton,
} from "./styles";
import { BsTrash } from "react-icons/bs";

import api from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const CardHabits = ({ habits, setChange }) => {
  const {
    title,
    category,
    difficulty,
    frequency,
    achieved,
    how_much_achieved,
    user,
    id,
  } = habits;

  const token = JSON.parse(localStorage.getItem("token"));

  const deleteHabit = () => {
    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Hábito deletado!"))
      .catch((_) => toast.error("Erro ao excluir!"));
    setChange(true);
  };

  const habitConclude = {
    how_much_achieved: 100,
    achieved: true,
  };

  const habitNotConclude = {
    how_much_achieved: 0,
    achieved: false,
  };

  const changeAchieved = () => {
    if (achieved === false) {
      api
        .patch(`/habits/${id}/`, habitConclude, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => toast.success("Hábito concluído!"))
        .catch((_) => toast.error("Erro ao alterar!"));
      setChange(true);
    }
    if (achieved === true) {
      api
        .patch(`/habits/${id}/`, habitNotConclude, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => toast.success("Hábito não concluído!"))
        .catch((_) => toast.error("Erro ao alterar!"));
      setChange(true);
    }
  };

  const [checked, setChecked] = useState(achieved);

  return (
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
            <BsTrash onClick={deleteHabit} />
          </TrashButton>
          <input
            type="checkbox"
            onChange={(e) => {
              setChecked(!achieved);
            }}
            checked={checked}
            onClick={() => {
              changeAchieved();
            }}
          ></input>
        </ButtonContainer>
      </DataButtonDiv>
    </Container>
  );
};

export default CardHabits;
