import styled from 'styled-components';

export const CardsContainer = styled.div`
	display: flex;
	grid-gap: 15px;
	flex-direction: column;
	margin-top: 100px;
	align-items: center;
	margin: 140px 0;

	@media (min-width: 768px) {
		margin: 140px 265px;
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media (min-width: 1024px) {
		width: 75%;
	}
`;
