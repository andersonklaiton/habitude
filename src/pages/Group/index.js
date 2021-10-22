import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { BiWalk } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import ActivityCard from '../../components/ActivityCard';
import { Template } from '../../components/Template';
import api from '../../services/api';
import {
	AddButton,
	Data,
	DataBox,
	Drawer,
	GroupData,
	HeaderContainer,
	Name,
	SectionDiv,
} from './style';
import { AiOutlineTrophy } from 'react-icons/ai';
import GoalCard from '../../components/GoalCard';
import { useAuth } from '../../providers/auth';

const Group = () => {
	const { id } = useParams();
	const history = useHistory();
	const [activities, setActivities] = useState([]);
	const [goals, setGoals] = useState([]);
	const { auth } = useAuth();

	const getActivities = useCallback(() => {
		api.get(`/groups/${id}/`)
			.then(({ data }) => {
				setActivities(data.activities);
			})
			.catch((_) => toast.error(`Não foi possível buscar as atividades`));
	}, [id]);

	const getGoals = useCallback(() => {
		api.get(`/groups/${id}/`).then(({ data }) => setGoals(data.goals));
	}, [id]);

	useEffect(() => {
		getActivities();
		getGoals();
	}, [getActivities, getGoals]);
	if (!auth) {
		history.push('/');
	}

	return (
		<Template>
			<HeaderContainer></HeaderContainer>
			<GroupData>Desc</GroupData>
			<GroupData>Creator</GroupData>
			<Data>
				<SectionDiv>
					<DataBox>
						<AiOutlineTrophy />
						<Name>Goals</Name>
						<AddButton
							onClick={() => history.push(`/create-goal/${id}`)}
						>
							<GrAdd />
						</AddButton>
					</DataBox>
					<Drawer>
						<GoalCard goals={goals} />
					</Drawer>
				</SectionDiv>
				<SectionDiv>
					<DataBox>
						<BiWalk />
						<Name>Activities</Name>
						<AddButton
							onClick={() =>
								history.push(`/create-activity/${id}`)
							}
						>
							<GrAdd />
						</AddButton>
					</DataBox>
					<Drawer>
						<ActivityCard activities={activities} />
					</Drawer>
				</SectionDiv>
			</Data>
		</Template>
	);
};

export default Group;
