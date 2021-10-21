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

export const ButtonAdd = styled.button`
	position: fixed;
	width: 116px;
	height: 55px;
	left: 170px;
	top: 880px;

	background: var(--red);
	border-radius: 10px;

	color: var(--white);

	@media (min-width: 360px) {
		left: 235px;
	}

	@media (min-width: 430px) {
		left: 300px;
	}

	@media (min-width: 530px) {
		left: 390px;
	}

	@media (min-width: 650px) {
		left: 510px;
	}

	@media (min-width: 768px) {
		left: 384px;
	}

	@media (min-width: 830px) {
		left: 415px;
	}

	@media (min-width: 986px) {
		left: 493px;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;
