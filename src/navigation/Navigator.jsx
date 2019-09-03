import React from "react";
import { Route, Switch } from "react-router-dom";
import Sales from "../pages/Sales/Sales";
import SalePage from "../pages/SalePage/SalePage";
import BaseLayout from "../layout/BaseLayout/BaseLayout";

export default () => {
  return (
    <BaseLayout>
      <Switch>
        <Route exact path="/sales" component={Sales} />
        <Route path="/sales/:id" component={SalePage} />
        <Route component={() => <h1>Page not found</h1>} />
      </Switch>
    </BaseLayout>
  );
};
