import styled from 'styled-components';
import {
	Box,
	Drawer,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';

export const Container = styled(Box)`
	display: flex;
	max-width: 260px;
`;

export const Sidebar = styled(Drawer)`
	flex-shrink: 0;

	@media (max-width: 1024px) {
		display: none;
	}
`;

export const SidebarItems = styled(Box)`
	width: 260px;
	height: 100vh;
`;

export const UserField = styled.div`
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	svg,
	svg path {
		font-size: 70px;
	}
`;

export const RouteBlock = styled(ListItem)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 341px;
	height: 106px;
	padding: 0 !important;
	border-bottom: 1px solid lightgray !important;
`;

export const IconBox = styled(ListItemIcon)`
	font-size: 30px;
	margin: 0 1em;
	svg,
	svg path {
		color: var(--black);
	}
`;

export const RouteItem = styled(ListItemText)`
	font-size: 14px;
`;

export const Username = styled.h4``;

export const Logout = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 28em;
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
