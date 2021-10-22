import { Divider, List, TextField } from '@material-ui/core';
import { useState } from 'react';
import { AiOutlineFieldTime, AiOutlinePoweroff } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdGroupAdd, MdGroups } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai'
import { useHistory } from 'react-router';
import api from '../../services/api';
import {
	Container,
	EditButton,
	IconBox,
	Logout,
	RouteBlock,
	RouteItem,
	Sidebar,
	SidebarItems,
	UserField,
	Username,
	NameField
} from './styles';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

const PermanentSidebar = () => {
	const [UserName, setUserName] = useState(localStorage.getItem('UserName') || '');
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
		{
			page: 'All Groups',
			icon: MdGroupAdd,
			redirectTo: () => history.push('/allgroups'),
		},
	];

	const logout = () => {
		localStorage.clear();
		window.location.reload();
	};

	const [isEdit, setIsEdit] = useState(false);

	const token = JSON.parse(localStorage.getItem("token"));

	const { user_id } = jwtDecode(token)

	const changeName = () => {
		setIsEdit(!isEdit);
		api.patch(`/users/${user_id}/`, { username: UserName }, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((_) => { toast.success("Username alterado!") })
			.catch((_) => { toast.error("Erro!") })
	}

	return (
		<Container>
			<Sidebar variant="permanent">
				<SidebarItems>
					<UserField>
						<FaUserCircle />
						{!isEdit ? (<NameField><Username>{UserName}</Username><AiFillEdit onClick={() => { setIsEdit(!isEdit) }} /></NameField>) : (<EditButton>
							<TextField onChange={(e) => { setUserName(e.target.value) }} />
							<AiFillEdit onClick={changeName} />
						</EditButton>)}
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
