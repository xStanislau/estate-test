import React from "react";
import "./Notification.scss";

const Notification = ({ message, type, onClose }) => {
  return (
    <div className={`notification_${type}`}>
      <p className="notification__message">{message}</p>
      <Button variant="outline-light" onClick={onClose}>
        x
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    options: state.popup.options,
    isOpen: state.popup.isOpen
  };
};

export default connect(
  mapStateToProps,
  { togglePopup }
)(Notification);
