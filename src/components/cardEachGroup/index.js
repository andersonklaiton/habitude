import { toast } from "react-toastify";
import api from "../../services/api";

import { ButtonContainer, Container, DataButtonDiv, DataContainer, NameContainer } from "./styles";


const CardEachGroup =({ name, category, description, groupId })=>{
    const submitEnter = (id) => {
        const token = JSON.parse(localStorage.getItem("token"));
        api
          .post(
            `groups/${id}/subscribe/`,
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
export default CardEachGroup