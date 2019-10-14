import React from "react";
import { togglePopup } from "../../redux/reducers/popup";
import { connect } from "react-redux";
import "./Popup.scss";

const Popup = ({ isOpen, children, togglePopup }) => {
  if (isOpen) {
    return (
      <div className="popup-bg" onClick={togglePopup}>
        <div className="popup">{children}</div>;
      </div>
    );
  } else {
    return null;
  }
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
