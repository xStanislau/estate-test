import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header offsetTop={81} />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
