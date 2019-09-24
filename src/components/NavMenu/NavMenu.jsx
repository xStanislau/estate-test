import React from "react";
import { Nav } from "react-bootstrap";

const NavMenu = ({ children, className }) => {
  return <Nav className={className}>{children}</Nav>;
};

// зачем этот компонент ??

export default NavMenu;
