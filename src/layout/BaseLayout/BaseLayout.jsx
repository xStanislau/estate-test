import React from "react";
import Header from "../../components/Header/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
