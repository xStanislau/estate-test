import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Sales from "../pages/Sales/Sales";
import SalePage from "../pages/SalePage/SalePage";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import Rent from "./../pages/Rent/Rent";
import About from "./../pages/About/About";
import Towns from "./../pages/Towns/Towns";
import Map from "../components/Map/Map";
import Filter from "../components/Filter/Filter";

export default () => {
  return (
    <BaseLayout>
      <Switch>
        <Redirect exact from="/" to="/sales" />

        <Route exact path="/sales" component={Sales} />
        <Route path="/sales/:id" component={SalePage} />

        <Route exact path="/rent" component={Rent} />
        <Route path="/rent/:id" component={SalePage} />
        {/* 
          <Route exact path="/rent" component={Rent} />
          <Route path="/rent/:id" component={SalePage} /> 
          
          можно создать папку роуты и объеденить в один роут. 
          если exact 
            то path="/rent" 
          если нет 
            тогда path="/rent/:id"

          аналогично для towns и sales
        ??? */}

        <Route exact path="/towns" component={Towns} />
        <Route path="/towns/:id" component={SalePage} />

        <Route path="/about" component={About} />

        <Route
          path="/contacts"
          component={() => {
            return (
              <div className="main-container position-relative h-100 mb-0">
                <Map className="map" />;
              </div>
            );
          }}
        />
        {/* почему не <Route path="/contacts" component={Map} /> ??? */}

        <Route exact path="/filter" component={Filter} />
        {/* зачем заливать эту правку. или закомменти или вообще лучше не включай такое в коммит ??? */}

        <Route component={() => <h1>Page not found</h1>} />
        {/* добавь нормальный компонент NotFound, чтобы его можн было потом расширять ??? */}
      </Switch>
    </BaseLayout>
  );
};
