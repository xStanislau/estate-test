import React from "react";
import NavLink from "../NavLink/NavLink";
import constants from "../../constants/";
import NavMenu from "../NavMenu/NavMenu";
import Button from "../Button/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="inner px-35">
        <NavLink className="logo" link="/" text="Logo" />
        <NavMenu className="menu">
          <NavLink className="link" link="/about" text="О компании" />
          <NavLink className="link" link="/contacts" text="Контакты" />
          <NavLink className="link" link="/about" text="FAQ" />
        </NavMenu>
        <div className="contacts">
          <a
            href={`tel:${constants.header.phoneNumber}`}
            className="phone-number"
          >
            {constants.header.phoneNumber}
          </a>
          <Button className="call-back btn btn-danger">
            {constants.header.buttonText}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
