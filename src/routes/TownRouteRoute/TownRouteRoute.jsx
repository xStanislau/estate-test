import React from "react";
import { Route, Switch } from "react-router-dom";
import SalePage from "../../pages/SalePage/SalePage";
import Towns from "../../pages/Towns/Towns";

const TownRouteRoute = () => {
  return (
    <Switch>
      <Route exact path="/towns" component={Towns} />
      <Route path="/towns/:id" component={SalePage} />
    </Switch>
  );
};

export default TownRouteRoute;
