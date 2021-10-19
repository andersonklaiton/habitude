import { Switch, Route } from "react-router-dom";
import CardHabits from "../components/CardHabits";
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
    </Switch>
  );
};
export default Routes;
