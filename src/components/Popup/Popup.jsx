import React from "react";
import { togglePopup } from "../../redux/reducers/popup";
import { connect } from "react-redux";
import "./Popup.scss";
import { CSSTransition } from "react-transition-group";

const Popup = ({ isOpen, children, togglePopup }) => {
  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={250}
        classNames="popup-transition"
        unmountOnExit
      >
        <div className="popup">{children}</div>
      </CSSTransition>
      <CSSTransition in={isOpen} timeout={350} classNames="popup" unmountOnExit>
        <div className="popup-bg" onClick={togglePopup}></div>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: state.popup.isOpen
  };
};

export default connect(
  mapStateToProps,
  { togglePopup }
)(Popup);
