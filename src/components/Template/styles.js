import styled from 'styled-components';

export const TemplateContainer = styled.div``;

export const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-top: 5em;

	@media (min-width: 590px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const Body = styled.div``;
