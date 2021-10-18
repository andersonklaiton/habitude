import styled from 'styled-components';

export const HeaderField = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	position: absolute;
	width: 414px;
	height: 80px;
	left: 0px;
	top: 0px;

	background: var(--red);
`;

export const Title = styled.h3`
	margin: 0 15px;

	font-family: Roboto;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 16px;
`;

export const ExpandedButton = styled.button`
	margin: 0 15px;
`;

export const AddButton = styled.button`
	display: none;
`;
