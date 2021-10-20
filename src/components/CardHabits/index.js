import {
	ButtonContainer,
	Card,
	DataButtonDiv,
	DataContainer,
	NameContainer,
	TrashButton,
} from './styles';
import { BsTrash } from 'react-icons/bs';
import { useAuth } from '../../providers/auth';
import { Redirect, useHistory } from 'react-router-dom';
import { Template } from '../Template';

const CardHabits = ({ id, categoria, dificuldade, frequencia }) => {
	const { auth } = useAuth();
	const history = useHistory();
	if (!auth) {
		history.push('/');
		return <Redirect to="/" />;
	}
	return (
		<Template>
			<Card>
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
						<input type="checkbox"></input>
					</ButtonContainer>
				</DataButtonDiv>
			</Card>
			<Card>
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
						<input type="checkbox"></input>
					</ButtonContainer>
				</DataButtonDiv>
			</Card>
			<Card>
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
						<input type="checkbox"></input>
					</ButtonContainer>
				</DataButtonDiv>
			</Card>
			<Card>
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
						<input type="checkbox"></input>
					</ButtonContainer>
				</DataButtonDiv>
			</Card>
			<Card>
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
						<input type="checkbox"></input>
					</ButtonContainer>
				</DataButtonDiv>
			</Card>
		</Template>
	);
};

export default CardHabits;
