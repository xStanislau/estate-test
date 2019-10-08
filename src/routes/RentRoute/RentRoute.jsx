import React from "react";
import { Route, Switch } from "react-router-dom";
import SalePage from "../../pages/SalePage/SalePage";
import Rent from "../../pages/Rent/Rent";

const RentRoute = () => {
  return (
    <Switch>
      <Route exact path="/rent" component={Rent} />
      <Route path="/rent/:id" component={SalePage} />
    </Switch>
  );
};

export default RentRoute;
