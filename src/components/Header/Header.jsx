import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./Header.scss";
import constants from "../../constants/";

const Header = ({ phoneNumber, text }) => {
  const [isOpen, toggleMenu] = useState(false);
  const body = document.querySelector("body");
  const {
    header: { menu }
  } = constants;
  if (isOpen) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }

  const resizeHandler = () => {
    if (window.innerWidth > 991) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <header className="header">
      <Navbar className="header__inner" expand="lg">
        <Navbar.Brand href="/sales">Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            toggleMenu(!isOpen);
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav" timeout={0}>
          <HeaderMenu items={menu.items} />
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
