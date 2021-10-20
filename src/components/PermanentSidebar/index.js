import { Box, CssBaseline, Divider, List, Toolbar } from '@material-ui/core';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { useHistory } from 'react-router';
import {
	Container,
	IconBox,
	RouteBlock,
	RouteItem,
	Sidebar,
	SidebarItems,
	UserField,
	Username,
} from './styles';

const drawerWidth = 260;

const PermanentSidebar = ({ name }, { children }) => {
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
						{pages.map(
							({ page, icon: Icon, redirectTo }, index) => (
								<RouteBlock
									button
									onClick={redirectTo}
									key={page}
								>
									<IconBox>
										<Icon />
									</IconBox>
									<RouteItem primary={page} />
								</RouteBlock>
							)
						)}
					</List>
				</SidebarItems>
			</Sidebar>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{children}
			</Box>
		</Container>
	);
};

export default PermanentSidebar;
