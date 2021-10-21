import styled from 'styled-components';

export const Goals = styled.ul``;

export const Goal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border-bottom: 1px solid gray;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const Title = styled.p`
	padding: 5px;
`;

export const Difficulty = styled.p`
	padding: 5px;
`;

export const TrashButton = styled.button`
	color: red;
	font-size: 20px;
`;

export const AchievedButton = styled.button`
	color: green; 
	font-size: 20px;
`;