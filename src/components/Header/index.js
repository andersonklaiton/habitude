import {
	AddButton,
	BackButton,
	Content,
	ExpandedButton,
	HeaderField,
	IconBox,
	Logout,
	RouteBlock,
	RouteItem,
	Title,
	UserField,
	Username,
} from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdAddCircle, MdGroupAdd, MdGroups } from 'react-icons/md';
import { useState } from 'react';
import { Box, Divider, Drawer, List } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import {
	AiOutlineArrowLeft,
	AiOutlineFieldTime,
	AiOutlinePoweroff,
} from 'react-icons/ai';
import { useLocation, useHistory } from 'react-router';

const Header = () => {
	const UserName = localStorage.getItem('UserName') || '';
	const [state, setState] = useState({ left: false });
	const history = useHistory();
	const routeLocation = useLocation();
	const pages = [
		{
			page: 'Habits',
			icon: AiOutlineFieldTime,
			redirectTo: () => history.push('/dashboard'),
		},
		{
			page: 'Groups',
			icon: MdGroups,
			redirectTo: () => history.push('/groups'),
		},
		{
			page: 'All Groups',
			icon: MdGroupAdd,
			redirectTo: () => history.push('/allgroups'),
		},
	];

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const logout = () => {
		localStorage.clear();
		window.location.reload();
	};

	const toAddPage = () => {
		routeLocation.pathname === '/groups' ||
		routeLocation.pathname === '/allgroups'
			? history.push('/optiongroup')
			: history.push('/createhabit');
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<UserField>
				<FaUserCircle />
				<Username>{UserName}</Username>
			</UserField>
			<BackButton>
				<AiOutlineArrowLeft />
			</BackButton>
			<Divider />
			<List
				sx={{
					padding: 0,
				}}
			>
				{pages.map(({ page, icon: Icon, redirectTo }, index) => (
					<RouteBlock button onClick={redirectTo} key={page}>
						<Content>
							<IconBox>
								<Icon />
							</IconBox>
							<RouteItem primary={page} />
						</Content>
					</RouteBlock>
				))}
				<Logout Logout onClick={() => logout()}>
					<AiOutlinePoweroff />
					<span>Logout</span>
				</Logout>
			</List>
		</Box>
	);

	return (
		<HeaderField>
			<ExpandedButton onClick={toggleDrawer('left', true)}>
				<GiHamburgerMenu />
			</ExpandedButton>
			<Title>
				{routeLocation.pathname === '/groups' ||
				routeLocation.pathname === '/allgroups' ||
				routeLocation.pathname === '/optiongroup'
					? 'Grupos'
					: 'Hábitos'}
			</Title>
			<AddButton onClick={toAddPage}>
				<MdAddCircle />
			</AddButton>
			<Drawer
				anchor={'left'}
				open={state['left']}
				onClose={toggleDrawer('left', false)}
			>
				{list('left')}
			</Drawer>
		</HeaderField>
	);
};

export default Header;
