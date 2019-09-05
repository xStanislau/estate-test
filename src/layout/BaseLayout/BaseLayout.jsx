import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
