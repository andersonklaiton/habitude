import styled from 'styled-components';

export const HabitsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	/* margin-left: -300px;
    margin-top: -80px; */
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
