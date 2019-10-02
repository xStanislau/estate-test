import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <main className="main-container content-wrapper">
      <h1 className="my-3">
        <span className="error-404 text-center">404</span>
        We could'nt find this page.
      </h1>
    </main>
  );
};

export default NotFound;
