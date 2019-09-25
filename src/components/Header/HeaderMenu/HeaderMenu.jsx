import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const HeaderMenu = ({ items }) => {
  return (
    <Nav className="mr-auto header-menu">
      {items.map(item => {
        const { link, text } = item;
        return (
          <NavLink
            className="nav-link"
            to={link}
            activeClassName="active"
            key={text}
          >
            {text}
          </NavLink>
        );
      })}
    </Nav>
  );
};

export default HeaderMenu;
