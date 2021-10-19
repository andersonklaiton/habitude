import { ButtonContainer, Container, DataButtonDiv, DataContainer, NameContainer, TrashButton } from './styles'
import { BsTrash } from 'react-icons/bs';

const CardHabits = ({ id, categoria, dificuldade, frequencia }) => {

    return (
        <Container>
            <NameContainer>
                <p>Habito {id}</p>
            </NameContainer>
            <DataButtonDiv>
                <DataContainer>
                    <p>Categoria: {categoria}</p>
                    <p>Dificuldade: {dificuldade}</p>
                    <p>Frequencia: {frequencia}</p>
                </DataContainer>

                <ButtonContainer>
                    <TrashButton>
                        <BsTrash />
                    </TrashButton>
                    <input type="checkbox" ></input>
                </ButtonContainer>
            </DataButtonDiv>
        </Container>
    )
}

export default CardHabits;