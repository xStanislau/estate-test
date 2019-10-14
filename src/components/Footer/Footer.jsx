import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import "./Footer.scss";
import FooterMenu from "./FooterMenu/FooterMenu";
import Logo from "../Logo/Logo";
import { toggleCallbackSidebar } from "../../redux/reducers/callbackform";
import { openCallBack } from "../Header/Header";

const Footer = ({ toggleCallbackSidebar }) => {
  return (
    <footer>
      <div className="inner px-35">
        <Logo>Logo</Logo>
        <FooterMenu />
        <div className="contacts">
          <a href={`tel:+7(495)432-45-45`} className="phone-number">
            +7(495)432-45-45
          </a>
          <Button
            onClick={openCallBack(toggleCallbackSidebar)}
            variant="main btn-main_pink"
          >
            Обратный звонок
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default connect(
  null,
  { toggleCallbackSidebar }
)(Footer);
