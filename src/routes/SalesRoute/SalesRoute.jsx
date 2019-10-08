import React from "react";
import { Route, Switch } from "react-router-dom";
import Sales from "../../pages/Sales/Sales";
import SalePage from "../../pages/SalePage/SalePage";

const SalesRoute = () => {
  return (
    <Switch>
      <Route exact path="/sales" component={Sales} />
      <Route path="/sales/:id" component={SalePage} />
    </Switch>
  );
};

export default SalesRoute;
