import styled from 'styled-components';

export const Activities = styled.ul``;

export const Activity = styled.div`
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

export const Time = styled.p`
	padding: 5px;
`;
