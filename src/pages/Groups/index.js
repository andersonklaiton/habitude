import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardGroups from '../../components/cardGroups';
import Header from '../../components/Header';
import PermanentSidebar from '../../components/PermanentSidebar';
import { useAuth } from '../../providers/auth';
import api from '../../services/api';
import { ButtonAdd, CardsContainer } from './styles';


function Groups() {
	const history = useHistory();
	const { auth } = useAuth();
	const [groups, setGroups] = useState([]);
	const [token] = useState(JSON.parse(localStorage.getItem('token')) || '');

	const getGroups = useCallback(() => {
		api.get('/groups/subscriptions/', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((response) => {
			setGroups(response.data);
		});
	}, [token]);

	useEffect(() => {
		getGroups();
	});

	if (!auth) {
		history.push('/');
	}

	return (
		<>
			<Header />
			<PermanentSidebar />
			{groups.length !== 0 ? (
				<CardsContainer>
					{groups.map((group) => (
						<CardGroups key={group.id} group={group} />
					))}
				</CardsContainer>
			) : (
				<div>Você não participa de nenhum grupo ainda</div>
			)}

			<ButtonAdd onClick={() => history.push('/creategroup')}>
				Adicionar
			</ButtonAdd>

		</>
	);
}
export default Groups;
