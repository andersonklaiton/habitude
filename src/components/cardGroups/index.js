import {
    Container,
    NameContainer,
    DataButtonDiv,
    DataContainer,
  } from "./styles";
  
  function CardGroups({ group }) {
    const { name, description, creator } = group;
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
        </DataButtonDiv>
      </Container>
    );
  }
  export default CardGroups;