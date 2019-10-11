import React, { Component } from "react";
import { Form } from "react-final-form";
import CallBackForm from "./CallBackForm/CallBackForm";
import {
  toggleCallbackSidebar,
  getCallbackFormValues,
  sendFormData
} from "../../redux/reducers/callbackform";
import "./CallBackSideBar.scss";
import { connect } from "react-redux";
import { showScrollOnBody } from "../../utils/scroll";

class CallBackSideBar extends Component {
  onSubmit = async values => {
    this.closeSidebar();
    this.props.sendFormData(values);
  };

  closeSidebar = () => {
    const { toggleCallbackSidebar } = this.props;
    toggleCallbackSidebar();
    showScrollOnBody();
  };

  componentWillUnmount() {
    const { isOpen } = this.props;
    if (isOpen) {
      this.closeSidebar();
    }
  }

  render() {
    let { isOpen } = this.props;
    const open = isOpen ? "isOpen" : "";
    return (
      <div className={`callback__sidebar py-5 ${open}`}>
        <Form
          close={this.closeSidebar}
          onSubmit={this.onSubmit}
          className={`callback-form ${open}`}
          component={CallBackForm}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.callbackform.values,
    isOpen: state.callbackform.isOpen
  };
};

export default connect(
  mapStateToProps,
  { toggleCallbackSidebar, getCallbackFormValues, sendFormData }
)(CallBackSideBar);
