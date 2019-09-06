import React from "react";
import NavLink from "../NavLink/NavLink";
import NavMenu from "../NavMenu/NavMenu";

const HeaderMenu = ({ items }) => {
  return (
    <NavMenu className="mr-auto header-menu">
      {items.map(item => {
        const { link, text } = item;
        return (
          <NavLink
            className="nav-link"
            link={link}
            activeClassName="active"
            key={text}
            text={text}
          >
            {text}
          </NavLink>
        );
      })}
    </NavMenu>
  );
};

export default HeaderMenu;
