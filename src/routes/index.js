import { Switch, Route } from "react-router-dom";
import CardHabits from "../components/CardDashbord";

import AllGroups from "../pages/AllGroups";
import CreateGroup from "../pages/CreateGroup";
import Groups from "../pages/Groups";
import HabitsPage from "../pages/HabitsPage";
import Login from "../pages/Login";
import OptionGroup from "../pages/OptionGroup";

import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <CardHabits />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>
      <Route path="/allgroups">
        <AllGroups/>
      </Route>
      <Route path="/habits"> 
        <HabitsPage/>
      </Route>
      <Route path="/groups">
        <Groups/>
      </Route>
      <Route path="/optiongroup">
        <OptionGroup/>
      </Route>
      <Route path="/creategroup">
        <CreateGroup/>
      </Route>
    </Switch>
  );
};
export default Routes;
