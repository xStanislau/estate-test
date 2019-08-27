import React from "react";
import Header from "../../components/Header/Header";

const BaseLayout = ({ phoneNumber }) => {
  return <Header phoneNumber="+7(495)432-45-45" text="Обратный звонок" />;
};

BaseLayout.defaultProps = {};

BaseLayout.PropTypes = {};

export default BaseLayout;
