import React from "react";
import "./Notification.scss";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { togglePopup } from "../../redux/reducers/popup";
import { connect } from "react-redux";

const Notification = ({ options: { message, type }, togglePopup: onClose }) => {
  return (
    <Popup>
      <div className={`notification notification_${type}`}>
        <p className="notification__message">{message}</p>
        <Button variant="outline-light" onClick={onClose}>
          x
        </Button>
      </div>
    </Popup>
  );
};

const mapStateToProps = state => {
  return {
    options: state.popup.options
  };
};

export default connect(
  mapStateToProps,
  { togglePopup }
)(Notification);
