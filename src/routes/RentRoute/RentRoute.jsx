import React from "react";

const RentRoute = props => {
  return (
    <div>
      <Route exact path="/rent" component={Rent} />
      <Route path="/rent/:id" component={SalePage} />
    </div>
  );
};

export default RentRoute;
