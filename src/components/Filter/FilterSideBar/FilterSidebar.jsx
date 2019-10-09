import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../Button/Button";
import {
  toggleFilter,
  getFilterFormValues
} from "../../../redux/reducers/filter";
import { connect } from "react-redux";
import PropertyTypes from "./PropertyTypes/PropertyTypes";
import "./FilterSidebar.scss";
import LandArea from "./LandArea/LandArea";
import HouseArea from "./HouseArea/HouseArea";

class FilterSidebar extends Component {
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
    if (values) {
      values = { ...values };
    }
    return (
      <div className={`filter-sidebar ${isOpen ? "isOpen" : ""}`}>
        <Form
          onSubmit={this.onSubmit}
          className="filter-sidebar__form"
          initialValues={values}
          render={({
            handleSubmit,
            form,
            submitting,
            className,
            submiting,
            pristine
          }) => {
            return (
              <form className={className} onSubmit={handleSubmit}>
                <Button
                  className="close-btn"
                  variant="main_pink"
                  onClick={this.closeFilter}
                >
                  <span>&times;</span>
                </Button>
                <div className="filter-sidebar__inner">
                  <PropertyTypes title="Тип Объекта" />
                  <LandArea title="Площадь участка" />
                  <HouseArea title="Полщадь дома" />
                  <div className="filter-sidebar__buttons">
                    <Button
                      type="submit"
                      variant="main_pink"
                      className="filter-sidebar__submit-btn"
                      disabled={submitting}
                    >
                      Показать
                    </Button>
                    <Button
                      type="button"
                      variant="main_pink"
                      className="filter-sidebar__submit-btn"
                      disabled={submiting || pristine}
                      onClick={form.reset}
                    >
                      Очистить
                    </Button>
                  </div>
                </div>
              </form>
            );
          }}
        />
        <div
          className={`filter-sidebar__background ${isOpen ? "isOpen" : ""}`}
          onClick={this.closeFilter}
        ></div>
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
  { toggleFilter, getFilterFormValues }
)(FilterSidebar);
