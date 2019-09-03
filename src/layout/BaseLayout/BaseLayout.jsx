import React from "react";
import Header from "../../components/Header/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header phoneNumber="+7(495)432-45-45" text="Обратный звонок" />
      {children}
    </div>
  );
};

export default BaseLayout;
