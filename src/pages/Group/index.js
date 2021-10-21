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

const Group = () => {
	const { id } = useParams();
	const [activities, setActivities] = useState([]);
	const getActivities = useCallback(() => {
		api.get(`/groups/${id}/`)
			.then(({ data }) => {
				setActivities(data.activities);
			})
			.catch((_) => toast.error(`Não foi possível buscar as atividades`));
	}, [activities]);

	useEffect(() => {
		getActivities();
	}, [activities]);

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
						<ActivityCard activities={activities} />
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
