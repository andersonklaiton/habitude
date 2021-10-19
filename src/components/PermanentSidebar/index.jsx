import {
	Box,
	CssBaseline,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from '@material-ui/core';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { Container, Sidebar, UserField, Username } from './styles';

const drawerWidth = 260;

const PermanentSidebar = ({ name }, { children }) => {
	return (
		<Container sx={{ display: 'flex' }}>
			<CssBaseline />
			<Sidebar
				variant="permanent"
				sx={{
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth + 'px',
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<UserField>
						<FaUserCircle />
						<Username>{name}</Username>
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
			</Sidebar>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{children}
			</Box>
		</Container>
	);
};

export default PermanentSidebar;
