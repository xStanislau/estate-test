import React from "react";
import NavLink from "../NavLink/NavLink";
import constants from "../../constants/";
import NavMenu from "../NavMenu/NavMenu";
import Button from "../Button/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer__logo navbar-brand">Logo</a>
      <NavMenu className="footer__menu">
        <NavLink className="footer__link" link="/about" text="О компании" />
        <NavLink className="footer__link" link="contacts" text="Контакты" />
        <NavLink className="footer__link" link="/about" text="FAQ" />
      </NavMenu>
      <div className="footer__contacts">
        <a
          href={`tel:${constants.header.phoneNumber}`}
          className="footer__phone-number"
        >
          {constants.header.phoneNumber}
        </a>
        <Button className="footer__call-back btn btn-danger">
          {constants.header.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
