import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 156px;
	width: 277px;
	margin: 20px auto;
	box-sizing: border-box;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	border-radius: 10px;
`;

export const NameContainer = styled.div`
	height: 45px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px 10px 0 0;
	background-color: #4d98c7;
`;

export const DataButtonDiv = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: space-around;
	align-items: flex-start;
	height: 100%;
	width: 100%;
`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;

	width: 100%;
	height: 100%;
	margin-left: 5px;

	text-align: start;
	color: #a6a6a6;
`;