import styled from 'styled-components';

export const TemplateContainer = styled.div``;

export const MainContent = styled.main`
	position: absolute;
	width: 277px;
	height: 156px;
	left: 20px;
	top: 101px;

	@media (min-width:600px){
		width: 600px;
	}

	@media (min-width: 767px) {
		left: 292px;
		width: 80%;
	}
`;

export const Body = styled.div``;
