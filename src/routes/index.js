import { Switch, Route } from 'react-router-dom';

import AllGroups from '../pages/AllGroups';
import CreateGoal from '../pages/CreateGoal';
import CreateGroup from '../pages/CreateGroup';
import CreateHabit from '../pages/CreateHabit';
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
			<Route exact path="/group/:id/create-goal" >
				<CreateGoal />
			</Route>
		</Switch>
	);
};
export default Routes;
