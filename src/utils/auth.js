import { Route, Switch } from "react-router-dom";

function Auth() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/signup"></Route>
      <Route path="/signin"></Route>
    </Switch>
  );
}

export default Auth;
