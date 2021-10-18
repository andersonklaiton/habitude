import styled from 'styled-components';

export const HeaderField = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	position: absolute;
	width: 100vw;
	height: 80px;
	left: 0px;
	top: 0px;

	background: var(--red);

	@media (min-width: 1024px) {
		justify-content: space-between;

		color: var(--white);
	}

	@media (min-width: 680px) {
		justify-content: space-between;
	}
`;

export const Title = styled.h3`
	margin: 0 15px;

	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 16px;

	@media (min-width: 680px) {
		font-size: 20px;
	}

	@media (min-width: 1024px) {
		margin: 0 3em;

		text-transform: uppercase;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 42px;
	}
`;

export const ExpandedButton = styled.button`
	margin: 0 15px;

	@media (min-width: 1024px) {
		display: none;
	}
`;

export const AddButton = styled.button`
	display: none;

	@media (min-width: 1024px) {
		display: block;

		margin: 0 3em;

		font-size: 36px;

		svg,
		path {
			color: white;
		}
	}
`;
