import React from "react";
import { Navbar } from "react-bootstrap";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import constants from "../../constants/";
import Button from "../Button/Button";
import withFixed from "../withFixed/withFixed";
import Burger from "../Burger/Burger";
import "./Header.scss";

const Header = props => {
  const { isOpen, toggleMenu, setRef } = props;
  const {
    header: { menu, phoneNumber, buttonText }
  } = constants;

  return (
    <header className="fixed" ref={setRef}>
      <Navbar className="inner" expand="lg" expanded={isOpen}>
        <Navbar.Brand href="/sales">Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            toggleMenu();
          }}
        >
          <Burger isOpen={isOpen} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" timeout={0}>
          <HeaderMenu
            items={menu.items}
            onClick={() => {
              toggleMenu();
            }}
          />
          <div className="contacts">
            <a href={`tel:${phoneNumber}`} className="phone-number">
              {phoneNumber}
            </a>
            <Button variant="main btn-main_green" className="call-back btn">
              {buttonText}
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withFixed(Header);
