
import api from "../../services/api";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import {
	Container,
	NameContainer,
	DataButtonDiv,
	DataContainer,
	ButtonContainer,
} from './styles';

function CardGroups({ group }) {
	const history = useHistory();
	const { name, description, creator, id } = group;

	const submitExit = (todeleteid) => {
		const token = JSON.parse(localStorage.getItem('token'));
		api
	.delete(`groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Sucesso ao sair do grup!"))
      .catch((_) => toast.error("Erro ao sair do grupo!"));
  };

	return (
		<Container>
			<NameContainer onClick={() => history.push(`/group/${id}`)}>
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
