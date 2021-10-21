import styled from 'styled-components';

export const HeaderContainer = styled.header`
	min-width: 80vw;
	height: 270.4px;

	background: #4d98c7;
	border-radius: 10px 10px 0px 0px;
`;

export const Data = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-evenly;
	}

	@media (min-width: 1024px) {
		display: block;
	}
`;

export const GroupData = styled.div`
	display: inline-block;

	width: 50%;
	padding: 15px;

	@media (min-width: 768px) {
		height: 218px;
	}
`;

export const SectionDiv = styled.div`
	margin: 2em 0;

	@media (min-width: 768px) {
		display: inline-block;

		width: 50%;
	}
`;

export const DataBox = styled.div`
	display: flex;
	align-items: center;

	svg,
	svg path {
		font-size: 30px;
	}
`;

export const Drawer = styled.section`
	display: flex;
`;

export const Name = styled.h2``;
