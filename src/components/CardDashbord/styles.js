import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	max-width: 100vw;
`;

export const Card = styled.div`
	box-sizing: border-box;
	height: 156px;
	width: 260px;
	margin: 10px 0;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	@media (min-width: 590px) {
		margin: 1em 2em;
	}
`;

export const NameContainer = styled.div`
	height: 45px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px 10px 0 0;
	background-color: #bbe3d1;
`;

export const DataButtonDiv = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	height: 100%;
	width: 100%;
`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	width: 50%;
	height: 65%;
	color: #a6a6a6;
	margin-left: 5px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	width: 50%;
	height: 65%;
	margin-right: 5px;

	input {
		width: 20px;
		height: 20px;
	}
`;

export const TrashButton = styled.div`
	color: red;
`;
