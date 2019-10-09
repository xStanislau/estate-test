import React, { Component } from "react";
import { Form } from "react-final-form";
import CallBackForm from "./CallBackForm";
import {
  toggleFilter,
  getFilterFormValues,
  resetFilter
} from "../../../redux/reducers/filter";
import { connect } from "react-redux";

export default class CallBackSideBar extends Component {
  onSubmit = values => {
    this.closeFilter();
    this.props.getFilterFormValues(values);
  };

  closeFilter = () => {
    const { toggleFilter } = this.props;
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
    toggleFilter();
  };
   

  render() {
    let { values, isOpen } = this.props;
    
    return (
      <div>
        <Form
          close={this.close}
          onSubmit={this.onSubmit}
          className="filter-sidebar__form"
          render={CallBackForms}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.filter.values
  };
};

export default connect(
  mapStateToProps,
  { toggleFilter, getFilterFormValues, resetFilter }
)(FilterSidebar);

