import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.scss";

const Header = ({ phoneNumber, text }) => {
  const navItems = [
    { text: "Продажа", link: "/" },
    { text: "Аренда", link: "/rent" },
    { text: "Посёлки", link: "/towns" },
    { text: "О компании", link: "/company-info" }
  ];

  return (
    <header className="header">
      <Navbar className="header__inner" expand="lg">
        <Navbar.Brand href="/sales">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navItems.map(item => {
              const { link, text } = item;
              return (
                <NavLink
                  className="header__nav-link"
                  to={link}
                  activeClassName="active"
                  key={text}
                >
                  {text}
                </NavLink>
              );
            })}
          </Nav>
          <div className="header__contacts contacts ">
            <a href={`tel: ${phoneNumber}`} className="header__phone-number">
              {phoneNumber}
            </a>
            <button className="header__call-back btn">{text}</button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
