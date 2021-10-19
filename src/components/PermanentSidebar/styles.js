import styled from 'styled-components';
import { Box, Drawer } from '@material-ui/core';

export const Container = styled(Box)`
	width: 260px !important;
`;

export const Sidebar = styled(Drawer)`
	@media (max-width: 1024px) {
		display: none;
	}
`;

export const UserField = styled.div`
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	svg,
	svg path {
		font-size: 70px;
	}
`;

export const Username = styled.h4``;
