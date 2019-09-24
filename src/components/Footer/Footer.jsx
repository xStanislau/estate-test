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
        {/* NavLink вынести отдельным компонентом Logo */}

        <NavMenu className="menu">
          <NavLink className="link" link="/about" text="О компании" />
          <NavLink className="link" link="/contacts" text="Контакты" />
          <NavLink className="link" link="/about" text="FAQ" />
        </NavMenu>
        {/* NavMenu вынести отдельным компонентом FooterMenu */}

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

          {/* constants.header.phoneNumber и constants.header.buttonText я так и не понял, зачем ты это делаешь? */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
