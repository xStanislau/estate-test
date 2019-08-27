import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ phoneNumber, text }) => {
  const navItems = [
    { text: "Продажа", link: "/sale" },
    { text: "Аренда", link: "/rent" },
    { text: "Посёлки", link: "/towns" },
    { text: "О компании", link: "/company-info" }
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <nav className="nav header__nav">
          <ul className="nav__list">
            {navItems.map(item => {
              const { link, text } = item;
              return (
                <li className="nav__item">
                  <NavLink to={link}>{text}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header__contacts contacts">
          <a href="#" className="header__phone-number">
            {phoneNumber}
          </a>
          <button className="header__call-back">{text}</button>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {};

Header.PropTypes = {};

export default Header;
