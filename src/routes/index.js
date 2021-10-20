import { Switch, Route } from "react-router-dom";

import CreateHabit from "../pages/CreateHabit";

import Groups from "../pages/Groups";

import HabitsPage from "../pages/HabitsPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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

      <Route path="/create-habit">
        <CreateHabit />
      </Route>

      <Route path="/groups">
        <Groups />

      </Route>
    </Switch>
  );
};
export default Routes;
