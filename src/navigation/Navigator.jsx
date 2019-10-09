import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import About from "./../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Contacts from "../pages/Contacts/Contacts";
import RentRoute from "../routes/RentRoute/RentRoute";
import SalesRoute from "../routes/SalesRoute/SalesRoute";
import TownRouteRoute from "../routes/TownRouteRoute/TownRouteRoute";

export default () => {
  return (
    <BaseLayout>
      <Switch>
        <Redirect exact from="/" to="/sales" />
        <Route path="/sales" component={SalesRoute} />
        <Route path="/rent" component={RentRoute} />
        <Route path="/towns" component={TownRouteRoute} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </BaseLayout>
  );
};
