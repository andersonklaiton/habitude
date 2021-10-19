import {
	AddButton,
	BackButton,
	Content,
	ExpandedButton,
	HeaderField,
	Icon,
	Logout,
	RouteBlock,
	RouteItem,
	Sidebar,
	Title,
	UserField,
	Username,
} from './styles';
import { AiOutlineArrowLeft, AiOutlineFieldTime } from 'react-icons/ai';
import { FiPower } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdAddCircle, MdGroups } from 'react-icons/md';
import { useState } from 'react';
import { Divider, Drawer, List } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ username }) => {
	const [state, setState] = useState({ left: false });

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Sidebar
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
				{['Habitos', 'Grupos'].map((text, index) => (
					<RouteBlock button key={text}>
						<Content>
							<Icon>
								{index % 2 === 0 ? (
									<AiOutlineFieldTime />
								) : (
									<MdGroups />
								)}
							</Icon>
							<RouteItem primary={text} />
						</Content>
					</RouteBlock>
				))}
			</List>
			<Logout>
				<FiPower />
				<span>Logout</span>
			</Logout>
		</Sidebar>
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
