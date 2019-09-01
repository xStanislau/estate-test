import React from "react";
import { Route, Switch } from "react-router-dom";
import Sales from "../pages/Sales/Sales";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Sales} />
      <Route component={() => <h1>Page not found</h1>} />
    </Switch>
  );
};
