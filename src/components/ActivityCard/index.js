import { Activities, Activity, Time, Title } from './styles';

const ActivityCard = ({ activities }) => {
	return (
		<Activities>
			{activities !== null || activities !== undefined
				? activities.map(({ title, realization_time }, index) => (
						<Activity key={index}>
							<Title>{title}</Title>
							<Time>{realization_time}</Time>
						</Activity>
				  ))
				: console.error(activities)}
		</Activities>
	);
};

export default ActivityCard;
