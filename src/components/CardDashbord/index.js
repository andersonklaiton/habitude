import { ButtonContainer, Container, DataButtonDiv, DataContainer, NameContainer, TrashButton } from './styles'
import { BsTrash } from 'react-icons/bs';

const CardHabits = ({ habits }) => {

    const { title, category, difficulty, frequency, achieved, how_much_achieved, user } = habits;

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
                        <BsTrash />
                    </TrashButton>
                    <input type="checkbox" ></input>
                </ButtonContainer>
            </DataButtonDiv>
        </Container>
    )
}

export default CardHabits;