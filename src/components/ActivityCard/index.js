import { Activities, Time, Title } from './styles';

const ActivityCard = ({ activities }) => {
	return (
		<Activities>
			{activities.map(({ title, realization_time }, index) => (
				<ActivityCard key={index}>
					<Title>{title}</Title>
					<Time>{realization_time}</Time>
				</ActivityCard>
			))}
		</Activities>
	);
};

export default ActivityCard;
