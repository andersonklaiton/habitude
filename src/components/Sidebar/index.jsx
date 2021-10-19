import {
	Box,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { useState } from 'react';
import { MdGroups } from 'react-icons/md';
import { UserField } from './style';

const Sidebar = ({ anchorDrawer }) => {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

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
			</UserField>
			<Divider />
			<List>
				{['Habitos', 'Grupos'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? (
								<AiOutlineFieldTime />
							) : (
								<MdGroups />
							)}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<div>
				<Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
				<Drawer
					anchor={'left'}
					open={state['left']}
					onClose={toggleDrawer('left', false)}
				>
					{list('left')}
				</Drawer>
			</div>
		</div>
	);
};

export default Sidebar;
