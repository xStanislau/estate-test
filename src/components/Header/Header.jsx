import React from "react";
import { Navbar } from "react-bootstrap";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./Header.scss";
import constants from "../../constants/";
import Button from "../Button/Button";
import withFixed from "../withFixed/withFixed";

const Header = props => {
  const { isFixed, isOpen, toggleMenu, setRef } = props;
  const {
    header: { menu, phoneNumber, buttonText }
  } = constants;

  const fixed = isFixed ? "fixed" : "";

  return (
    <header className={`${fixed}`} ref={setRef}>
      <Navbar className="inner" expand="lg">
        <Navbar.Brand href="/sales">Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            toggleMenu(!isOpen);
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav" timeout={0}>
          <HeaderMenu items={menu.items} />
          <div className="contacts">
            <a href={`tel:${phoneNumber}`} className="phone-number">
              {phoneNumber}
            </a>
            <Button className="call-back btn">{buttonText}</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withFixed(Header);
