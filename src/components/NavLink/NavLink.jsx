import React from "react";
import { NavLink as Link } from "react-router-dom";

const NavLink = ({ className, activeClassName, link, text }) => {
  return (
    <Link
      className={`${className}`}
      to={link}
      activeClassName={`${activeClassName}`}
    >
      {text}
    </Link>
  );
};

// зачем этот компонент ???

export default NavLink;
