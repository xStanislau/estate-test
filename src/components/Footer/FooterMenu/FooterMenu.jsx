import React from "react";
import { NavLink } from "react-router-dom";

const FooterMenu = () => {
  return (
    <nav className="menu">
      <NavLink className="link" to="/about">
        О компании
      </NavLink>

      <NavLink className="link" to="/contacts">
        Контакты
      </NavLink>
      <NavLink className="link" to="/about">
        FAQ
      </NavLink>
    </nav>
  );
};

export default FooterMenu;
