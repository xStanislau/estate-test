import React from "react";
import { Navbar } from "react-bootstrap";

const Logo = ({ children }) => {
  return <Navbar.Brand href="/sales">{children}</Navbar.Brand>;
};

export default Logo;
