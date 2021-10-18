import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { ButtonContainer, Container, DataButtonDiv, DataContainer, NameContainer, TrashButton } from './styles'
// import trash from "../../img/trash.png";

const CardHabits = ({ id, categoria, dificuldade, frequencia }) => {
const {auth}=useAuth()
const history = useHistory();
if (!auth) {
    history.push("/");
    return <Redirect to="/" />;
  } 
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
                    {/* <TrashButton src={trash} alt="Lixo" /> */}
                    <input type="checkbox" ></input>
                </ButtonContainer>
            </DataButtonDiv>
        </Container>
    )
}

export default CardHabits;