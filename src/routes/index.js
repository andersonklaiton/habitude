import { Switch, Route } from "react-router-dom";
import CardHabits from "../components/CardHabits";
import Groups from "../pages/Groups";
import Login from "../pages/Login";
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
      <Route path="/groups">
        <Groups />
      </Route>
    </Switch>
  );
};
export default Routes;
