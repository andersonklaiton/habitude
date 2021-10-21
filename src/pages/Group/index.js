import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { BiWalk } from 'react-icons/bi';
import ActivityCard from '../../components/ActivityCard';
import { Template } from '../../components/Template';
import api from '../../services/api';
import {
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

const Group = () => {
	const token = JSON.parse(localStorage.getItem('token'));
	const { id } = useParams();
	const [activities, setActivities] = useState([]);
	const [goals, setGoals] = useState([]);
	const getActivities = useCallback(() => {
		api.get(`/groups/${id}/`)
			.then(({ data }) => {
				setActivities(data.activities);
			})
			.catch((_) => toast.error(`Não foi possível buscar as atividades`));
	}, [activities]);

	const getGoals = useCallback(() => {
		api.get(`/groups/${id}/`)
			.then(({ data }) => setGoals(data.goals))
	}, [goals])

	useEffect(() => {
		getActivities();
		getGoals();
	}, [activities, goals]);

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
					</DataBox>
					<Drawer>
						<GoalCard goals={goals} />
					</Drawer>
				</SectionDiv>
				<SectionDiv>
					<DataBox>
						<BiWalk />
						<Name>Activities</Name>
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
