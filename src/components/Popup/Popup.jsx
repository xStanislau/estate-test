import React from "react";
import { Button } from "react-bootstrap";
import { togglePopup } from "../../redux/reducers/popup";
import { connect } from "react-redux";
import "./Popup.scss";

const Popup = ({ options: { message, type }, togglePopup: onClose }) => {
  if (message) {
    return (
      <div className={`popup ${type}`}>
        <p className="popup__message">{message}</p>
        <Button variant="outline-light" onClick={onClose}>
          x
        </Button>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    options: state.popup.options
  };
};

export default connect(
  mapStateToProps,
  { togglePopup }
)(Popup);
