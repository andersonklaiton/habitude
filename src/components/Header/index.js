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
import { MdAddCircle, MdGroups } from 'react-icons/md';
import { useState } from 'react';
import { Box, Divider, Drawer, List } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import {
	AiOutlineArrowLeft,
	AiOutlineFieldTime,
	AiOutlinePoweroff,
} from 'react-icons/ai';
import { useHistory } from 'react-router';

const Header = ({ username }) => {
	const [state, setState] = useState({ left: false });
	const history = useHistory();
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
				<Username>{username}</Username>
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
			<Title>Groups</Title>
			<AddButton>
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
