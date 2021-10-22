import { Switch, Route } from 'react-router-dom';

import AllGroups from '../pages/AllGroups';
import CreateGoal from '../pages/CreateGoal';
import CreateGroup from '../pages/CreateGroup';
import CreateHabit from '../pages/CreateHabit';

import EachGroup from '../pages/EachGroup';

import Group from '../pages/Group';

import Groups from '../pages/Groups';
import HabitsPage from '../pages/HabitsPage';
import Login from '../pages/Login';
import OptionGroup from '../pages/OptionGroup';

import SignUp from '../pages/SignUp';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
			<Route path="/dashboard">
				<HabitsPage />
			</Route>
			<Route path="/register">
				<SignUp />
			</Route>
			<Route path="/allgroups">
				<AllGroups />
			</Route>
			<Route path="/groups">
				<Groups />
			</Route>
			<Route path="/optiongroup">
				<OptionGroup />
			</Route>
			<Route path="/creategroup">
				<CreateGroup />
			</Route>
			<Route path="/createhabit">
				<CreateHabit />
			</Route>
			<Route path="/eachgroup">
				<EachGroup />
			</Route>
			<Route path="/group/:id">
				<Group />
			</Route>
			<Route exact path="/group/:id/create-goal">
				<CreateGoal />
			</Route>
			<Route exact path="/:id/create-goal">
				<CreateGoal />
			</Route>
		</Switch>
	);
};
export default Routes;
