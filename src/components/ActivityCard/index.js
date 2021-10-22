import { BsCheckCircleFill, BsTrash } from 'react-icons/bs';
import { toast } from 'react-toastify';
import api from '../../services/api';
import {
	AchievedButton,
	Activities,
	Activity,
	Time,
	Title,
	TrashButton,
} from './styles';

const ActivityCard = ({ activities }) => {
	const token = JSON.parse(localStorage.getItem('token'));
	const deleteActivity = (id) => {
		api.delete(`/activities/${id}/`, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((_) => toast.success('Tarefa completa!'))
			.then((error) => console.error(error));
	};

	const completeActivity = (id) => {
		api.patch(
			`/activities/${id}/`,
			{ achieved: true },
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		).then((_) => toast.success('Tarefa completa!'));
		deleteActivity(id);
	};

	return (
		<Activities>
			{activities !== null || activities !== undefined
				? activities.map(({ id, title, realization_time }, index) => (
						<Activity key={index}>
							<Title>{title}</Title>
							<Time>{realization_time}</Time>
							<AchievedButton>
								<BsCheckCircleFill
									onClick={() => completeActivity(id)}
								/>
							</AchievedButton>
							<TrashButton>
								<BsTrash onClick={() => deleteActivity(id)} />
							</TrashButton>
						</Activity>
				  ))
				: console.error(activities)}
		</Activities>
	);
};

export default ActivityCard;
