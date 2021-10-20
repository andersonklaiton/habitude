import { Divider, List } from '@material-ui/core';
import { AiOutlineFieldTime, AiOutlinePoweroff } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { useHistory } from 'react-router';
import {
	Container,
	IconBox,
	Logout,
	RouteBlock,
	RouteItem,
	Sidebar,
	SidebarItems,
	UserField,
	Username,
} from './styles';

const PermanentSidebar = () => {
	const UserName = localStorage.getItem('UserName') || '';
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

	const logout = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<Container>
			<Sidebar variant="permanent">
				<SidebarItems>
					<UserField>
						<FaUserCircle />
						<Username>{UserName}</Username>
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
						<Logout onClick={() => logout()}>
							<AiOutlinePoweroff />
							<span>Logout</span>
						</Logout>
					</List>
				</SidebarItems>
			</Sidebar>
		</Container>
	);
};

export default PermanentSidebar;
