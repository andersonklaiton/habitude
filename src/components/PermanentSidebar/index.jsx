import { Box, CssBaseline, Divider, List, Toolbar } from '@material-ui/core';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';
import { MdGroups } from 'react-icons/md';
import {
	Container,
	Icon,
	Logout,
	RouteBlock,
	RouteItem,
	Sidebar,
	SidebarItems,
	UserField,
	Username,
} from './styles';

const drawerWidth = 260;

const PermanentSidebar = ({ name }, { children }) => {
	return (
		<Container>
			<CssBaseline />
			<Sidebar
				variant="permanent"
				sx={{
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth + 'px',
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<SidebarItems>
					<UserField>
						<FaUserCircle />
						<Username>{name}</Username>
					</UserField>
					<Divider />
					<List>
						{['Habitos', 'Grupos'].map((text, index) => (
							<RouteBlock button key={text}>
								<Icon>
									{index % 2 === 0 ? (
										<AiOutlineFieldTime />
									) : (
										<MdGroups />
									)}
								</Icon>
								<RouteItem primary={text} />
							</RouteBlock>
						))}
					</List>
					<Logout>
						<FiPower />
						<span>Logout</span>
					</Logout>
				</SidebarItems>
			</Sidebar>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{children}
			</Box>
		</Container>
	);
};

export default PermanentSidebar;
