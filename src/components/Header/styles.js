import { Box, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderField = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: absolute;

	width: 100%;

	height: 80px;
	left: 0px;
	top: 0px;
	z-index: 1201;
	background: var(--red);
	@media (min-width: 1024px) {
		justify-content: space-between;
		color: var(--white);
	}
	@media (min-width: 680px) {
		justify-content: space-between;
	}
`;

export const Sidebar = styled(Box)`
	height: 100vh;
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

export const BackButton = styled.button`
	position: absolute;
	left: 212px;
	top: 38px;
	svg,
	svg path {
		width: 25px;
		height: 25px;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	border-bottom: 1px solid lightgray;
`;

export const RouteBlock = styled(ListItem)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 341px;
	height: 106px;
	padding: 0 !important;
`;

export const RouteItem = styled(ListItemText)`
	font-size: 14px;
`;

export const IconBox = styled(ListItemIcon)`
	font-size: 30px;
	margin: 0 1em;
	svg,
	svg path {
		color: var(--black);
	}
`;

export const UserField = styled.div`
	height: 180px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
	svg,
	svg path {
		font-size: 70px;
	}
	svg,
	svg path,
	p {
		margin-left: 15px;
	}
`;

export const Username = styled.p`
	margin-top: 2em;
`;

export const Logout = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 33em;
	font-size: 1rem;
	/* text-shadow: 1px 1px 2px red, 0 0 1em rgba(0, 0, 0, 0.25),
		0 0 0.2em rgba(0, 0, 0, 0.17); */
	color: red;

	svg,
	svg path {
		width: 20px;
		height: 20px;
		margin: 0 0.5em;
	}
`;
