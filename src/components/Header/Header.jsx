import React from "react";
import { Navbar } from "react-bootstrap";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import constants from "../../constants/";
import Button from "../Button/Button";
import withFixed from "../withFixed/withFixed";
import Burger from "../Burger/Burger";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { connect } from "react-redux";
import {
  toggleCallbackSidebar,
  getCallbackFormValues
} from "../../redux/reducers/callbackform";

const openCallBack = toggleCallbackSidebar => () => {
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  toggleCallbackSidebar();
};

const Header = props => {
  const { isOpen, toggleMenu, setRef, isFixed } = props;
  const { toggleCallbackSidebar } = props;
  const {
    header: { menu, phoneNumber, buttonText }
  } = constants;
  const fixed = isFixed ? "fixed" : "";
  return (
    <header className={`${fixed}`} ref={setRef}>
      <Navbar className="inner" expand="lg" expanded={isOpen}>
        <Logo>Logo</Logo>
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
            <Button
              onClick={openCallBack(toggleCallbackSidebar)}
              variant="main btn-main_green"
              className="call-back btn"
            >
              {buttonText}
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    values: state.callbackform.values
  };
};

export default withFixed(
  connect(
    mapStateToProps,
    { toggleCallbackSidebar, getCallbackFormValues }
  )(Header)
);
